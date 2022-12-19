import { renderDetails } from "../tools/tools";

export const BorderButtons = (data) => {
  document
    .querySelector(".details__borderButtons")
    .addEventListener("click", (e) => {
      if (e.target && e.target.matches("button")) {
        console.log(e.target.id);
        for (let country of data) {
          if (country.alpha3Code === e.target.id) {
            renderDetails(country);
            BorderButtons(data);
          }
        }
      }
    });
};
