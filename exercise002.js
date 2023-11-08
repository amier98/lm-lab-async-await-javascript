import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  const result = await fetch(apiEndPoint);
  try {
    console.log(result.json);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
