import { renderCard } from "../tools/tools";

export const CountryCards = async (data) => {
  for (let item of data) {
    let card = renderCard(item);
    document.querySelector(".cardContainer").append(card);
  }
};
