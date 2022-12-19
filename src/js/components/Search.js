import { renderCard } from "../tools/tools";

export const Search = (data) => {
  const searchBar = document.querySelector(".options__search");
  const errorMessage = document.querySelector(".options__error");

  searchBar.addEventListener("keydown", (e) => {
    errorMessage.classList.add("options__error--hide");
    if (e.key == "Enter" && searchBar.value !== "") {
      for (let country of data) {
        if (country.name.toLowerCase() == searchBar.value.toLowerCase()) {
          document.querySelector(".cardContainer").innerHTML = "";
          renderCard(country);
        }
      }
    } else {
      errorMessage.classList.remove("options__error--hide");
    }
  });
};
