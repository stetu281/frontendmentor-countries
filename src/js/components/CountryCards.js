import { getData } from "../tools/tools";

export const CountryCards = async () => {
  const cardContainer = document.querySelector(".cardContainer");
  const data = await getData();
  for (let item of data) {
    let card = document.createElement("div");
    card.className = "card";
    card.id = `${item.alpha3Code}`;
    card.innerHTML = `
            <img src="${item.flag}" alt="Country Flag" />
            <div class="card__text">
                <h2>${item.name}</h2>
                <p><span>Population:</span> ${item.population}</p>
                <p><span>Region:</span> ${item.region}</p>
                <p><span>Capital:</span> ${item.capital}</p>
            </div>
    `;
    cardContainer.append(card);
  }
};
