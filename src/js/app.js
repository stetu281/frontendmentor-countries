import css from "../scss/main.scss";
import { Darkmode } from "./components/Darkmode";
import { CountryCards } from "./components/CountryCards";
import { getData } from "./tools/tools";
import { Details } from "./components/Details";
import { BorderButtons } from "./components/BorderButtons";
import { RegionFilter } from "./components/RegionFilter";

getDetails();
Darkmode();

async function getDetails() {
  const data = await getData();
  CountryCards(data);
  RegionFilter(data);

  document.querySelector(".cardContainer").addEventListener("click", (e) => {
    if (e.target && e.target.matches(".card")) {
      document.querySelector(".details").classList.add("details--open");
      Details(e.target.id, data);
      BorderButtons(data);
    }
  });
}
