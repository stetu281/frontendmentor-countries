import { renderCard } from "../tools/tools";

export const CountryCards = async (data) => {
  for (let item of data) {
    renderCard(item);
  }
};
