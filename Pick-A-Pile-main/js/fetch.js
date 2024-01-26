export const processData = async () => {
  try {
    const response = await fetch("PickAPile.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for handling elsewhere, if needed
  }
};

export function getIdFromClick() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const questionId = urlParams.get("id");
    return +questionId;
  } catch (error) {
    console.log(error);
  }
}
