import { renderCard } from "../tools/tools";

export const Search = (data) => {
  const searchBar = document.querySelector(".options__search");

  searchBar.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && searchBar.value !== "") {
      for (let country of data) {
        if (country.name.toLowerCase() == searchBar.value.toLowerCase()) {
          document.querySelector(".cardContainer").innerHTML = "";
          renderCard(country);
        }
      }
      searchBar.value = "";
    }
  });
};
