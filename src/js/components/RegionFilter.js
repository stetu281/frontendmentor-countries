import { renderCard } from "../tools/tools";

export const RegionFilter = (data) => {
  document.querySelector(".options__select").addEventListener("change", (e) => {
    let arr = [];

    for (let country of data) {
      if (country.region.toLowerCase() == e.target.value) {
        arr.push(country);
      }
    }

    document.querySelector(".cardContainer").innerHTML = "";

    arr.map((item) => {
      renderCard(item);
    });
  });
};
