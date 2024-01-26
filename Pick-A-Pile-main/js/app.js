import { processData, getIdFromClick } from "./fetch.js";

const id = getIdFromClick();
const container = document.querySelector(".container");

// get data from json
processData().then((data) => {
  const fetchData = data;
  const qusetionData = fetchData.Questions;
  const questionDesp = qusetionData.filter((item) => item.QuestionId === id);
  const answerData = fetchData.Answers;
  const pickData = answerData.filter((item) => item.QuestionId === id);
  const para = document.createElement("p");
  para.textContent = questionDesp[0].QuestionDesp; //skip map

  pickData.map((item, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = `${item.AnswerImageUrl}`;
    imgElement.id = `q-${item.AnswerId}`;

    imgElement.classList.add(`q-${index}`);
    //for carousel
    document.querySelector(".pile-container").append(imgElement);
    container.append(para);

    // page location
    document
      .querySelector(`#${imgElement.id}`)
      .addEventListener("click", () => {
        const clickData = item.AnswerId;
        window.location.href = `item.html?id=${clickData}`;
      });
  });
  // carousel effect
  let box = 0;
  document.querySelector(`.q-${box}`).classList.add("show");

  document.querySelector("#left").addEventListener("click", () => {
    box = clickCarousel("left", box);
  });
  document.querySelector("#right").addEventListener("click", () => {
    box = clickCarousel("right", box);
  });
});

function clickCarousel(direction, item) {
  document.querySelector(`.q-${item}`).classList.remove("show");
  if (direction === "right") {
    if (item >= 3) {
      item = -1;
    }
    item++;
  } else {
    if (item <= 0) {
      item = 4;
    }
    item--;
  }
  document.querySelector(`.q-${item}`).classList.add("show");
  return item;
}
