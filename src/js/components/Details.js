import { renderDetails } from "../tools/tools";

export const Details = async (target, data) => {
  for (let country of data) {
    if (country.alpha3Code === target) {
      renderDetails(country);
    }
  }

  document.querySelector(".details__button").addEventListener("click", () => {
    document.querySelector(".details").classList.remove("details--open");
  });
};
