import Data from "../../data/countries.json";
const getCountryISO2 = require("country-iso-3-to-2");

export const getData = async () => {
  try {
    /*     const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json(); */
    return Data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const convertCountryCode = (code) => {
  let convert = new Intl.DisplayNames(["en"], { type: "region" });
  if (code === "XXK") {
    return "Kosovo";
  } else {
    let newCode = getCountryISO2(code);
    return convert.of(newCode);
  }
};
