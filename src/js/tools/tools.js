import Data from "../../data/countries.json";
import { BorderButtons } from "../components/BorderButtons";
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

export const renderCard = (item) => {
  let card = document.createElement("div");
  card.className = "card";
  card.id = `${item.alpha3Code}`;
  card.innerHTML = `
          <img src="${item.flag}" alt="Country Flag" />
          <div class="card__text">
              <h2>${item.name}</h2>
              <p><span>Population:</span> ${item.population}</p>
              <p><span>Region:</span> ${item.region}</p>
              <p><span>Capital:</span> ${item.capital}</p>
          </div>
  `;
  return card;
};

export const renderDetails = (country) => {
  let container = document.querySelector(".details__dynamic");
  container.innerHTML = "";
  let details = document.createElement("div");
  details.className = "details__wrapper";
  details.innerHTML = `
        <img src=${country.flag} class="details__img" alt="Country Flag" />
        <div class="details__text">
          <h2>${country.name}</h2>
          <div class="details__infos">
            <div class="details__infos--primary">
              <p><span>Native Name:</span> ${country.nativeName}</p>
              <p><span>Population:</span> ${country.population}</p>
              <p><span>Region:</span> ${country.region}</p>
              <p><span>Sub Region:</span> ${country.subregion}</p>
              <p><span>Capital:</span> ${country.capital}</p>
            </div>
            <div class="details__infos--secondary">
              <p><span>Top Level Domain:</span> ${country.topLevelDomain}</p>
              <p><span>Currencies:</span> ${country.currencies.map(
                (currency) => currency.name
              )}</p>
              <p><span>Languages:</span> ${country.languages.map(
                (language) => language.name
              )}</p>
            </div>
          </div>
          <div class="details__borders">
            <h3>Border Countries:</h3>
            <div class="details__borderButtons">
            ${
              country.borders
                ? country.borders
                    .map((border) => {
                      return `<button class="details__button" id=${border}>${convertCountryCode(
                        border
                      )}</button>`;
                    })
                    .join(" ")
                : "No Bordering country"
            }
            </div>
          </div>
        </div>
        `;
  container.append(details);
};
