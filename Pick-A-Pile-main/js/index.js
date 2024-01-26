import { processData } from "./fetch.js";

processData().then((data) => {
  const fetchData = data;
  const questionArrays = fetchData.Questions;

  questionArrays.forEach((question, index) => {
    const pileContainer = document.createElement("div");
    pileContainer.className = "pile-container";
    pileContainer.id = `q-${question.QuestionId}`;
    pileContainer.href = "page.html";
    const qDiv = document.createElement("p");
    const imgElement = document.createElement("img");
    imgElement.src = `articles/${index + 1}/1.jpg`;
    qDiv.textContent = question.QuestionName;
    // put in pile-container

    pileContainer.append(imgElement, qDiv);
    document.querySelector(".container").appendChild(pileContainer);
    document
      .querySelector(`#q-${question.QuestionId}`)
      .addEventListener("click", () => {
        const clickData = question.QuestionId;
        window.location.href = `app.html?id=${clickData}`;
      });
  });
});
