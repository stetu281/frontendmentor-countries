import Data from "../../data/countries.json";

export const getData = async () => {
  try {
    /*     const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json(); */
    return Data;
  } catch (error) {
    console.error("Error:", error);
  }
};
