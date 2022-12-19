import { renderDetails } from "../tools/tools";

export const Details = async (target, data) => {
  for (let country of data) {
    if (country.alpha3Code === target) {
      let container = document.querySelector(".details__dynamic");
      container.innerHTML = "";
      let details = renderDetails(country);
      container.append(details);
    }
  }

  document.querySelector(".details__button").addEventListener("click", () => {
    document.querySelector(".details").classList.remove("details--open");
  });
};
