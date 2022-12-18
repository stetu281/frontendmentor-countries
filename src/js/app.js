import css from "../scss/main.scss";
import { Darkmode } from "./components/Darkmode";
import { CountryCards } from "./components/CountryCards";
import { getData } from "./tools/tools";
import { Details } from "./components/Details";

Darkmode();
CountryCards();
getDetails();

async function getDetails() {
  const data = await getData();
  Details(data);
}
