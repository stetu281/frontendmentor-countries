import { convertCountryCode } from "../tools/tools";

export const Details = async (data) => {
  document.querySelector(".cardContainer").addEventListener("click", (e) => {
    if (e.target && e.target.matches(".card")) {
      document.querySelector(".details").classList.add("details--open");

      for (let country of data) {
        if (country.alpha3Code === e.target.id) {
          let container = document.querySelector(".details__dynamic");
          container.innerHTML = "";
          let details = document.createElement("div");
          details.className = "details__dynamicContent";
          details.innerHTML = `
                <img src=${country.flag} alt="Country Flag" />
                <h2>${country.name}</h2>
                <div class="details__infosContainer">
                    <div class="details__infos--primary">
                        <p><span>Native Name:</span> ${country.nativeName}</p>
                        <p><span>Population:</span> ${country.population}</p>
                        <p><span>Region:</span> ${country.region}</p>
                        <p><span>Sub Region:</span> ${country.subregion}</p>
                        <p><span>Capital:</span> ${country.capital}</p>
                    </div>
                    <div class="details__infos--secondary">
                        <p><span>Top Level Domain:</span> ${
                          country.topLevelDomain
                        }</p>
                        <p><span>Currencies:</span> ${country.currencies.map(
                          (currency) => currency.name
                        )}</p>
                        <p><span>Languages:</span> ${country.languages.map(
                          (language) => language.name
                        )}</p>
                    </div>
                </div>
                <div class="details__bordersContainer">
                    <h3>Border Countries:</h3>
                    <div class="details__borders">
                    
                          ${
                            country.borders
                              ? country.borders
                                  .map((border) => {
                                    return `<button class="details__button">${convertCountryCode(
                                      border
                                    )}</button>`;
                                  })
                                  .join(" ")
                              : "No Bordering country"
                          }
                    </div>            
                </div>
              `;

          container.append(details);
        }
      }
    }
  });

  document.querySelector(".details__button").addEventListener("click", () => {
    document.querySelector(".details").classList.remove("details--open");
  });
};
