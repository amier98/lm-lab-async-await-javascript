import fetch from "node-fetch";

const jsonTypicode =
  "https://www.thesportsdb.com/api/v1/json/3/searchfilename.php?e=English_Premier_League_2015-04-26_Arsenal_vs_Chelsea";

const fetchData = async (apiEndPoint) => {
  try {
    const result = await fetch(apiEndPoint);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
