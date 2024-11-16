let pokemonImg = document.querySelector(".pokemon-img");
let search = document.querySelector("#search");
let searchBtn = document.querySelector(".btn");
let error = document.querySelector(".error");
let searching = document.querySelector(".searching");
let name = document.querySelector(".card-title");
let card = document.querySelector(".card");
let abilities = document.querySelector(".abilities");
let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let weakness = document.querySelector(".weakness");
let types = document.querySelector(".types");
let genders = document.querySelector(".genders");
let stats = document.querySelector(".stats");
let category = document.querySelector(".category");
let evolutionsText = document.querySelector(".evolutions");
let detailsContainer = document.querySelector(".details-container");
import { pokedex } from "https://cdn.jsdelivr.net/npm/real-pokedex@1.0.0/+esm";

searchBtn.addEventListener("click", () => {
  let pokemonSearch = search.value.toLowerCase();
  searching.classList.remove("hide");
  card.classList.add("hide");
  evolutionsText.classList.add("hide");
  detailsContainer.classList.add("hide");
  let evolutions = document.getElementById("evolutions");
  evolutions.innerHTML = "";
  error.classList.add("hide");
  if (!pokemonSearch) {
    error.innerHTML = "Please Enter A Pokémon Name Or Id!";
    error.classList.remove("hide");
    searching.classList.add("hide");
  }
  let searchTimeout = setTimeout(() => {
    error.classList.remove("hide");
    searching.classList.add("hide");
  }, 10000);
  setTimeout(() => {
    pokedex(pokemonSearch, (pokemon) => {
      searching.classList.add("hide");
      if (pokemon && pokemon.ID) {
        clearTimeout(searchTimeout);
        card.classList.remove("hide");
        detailsContainer.classList.remove("hide");
        search.value = "";
        error.classList.add("hide");
        pokemonImg.src = pokemon.pokemonPic;
        name.innerHTML =
          "#" +
          pokemon.ID +
          " " +
          pokemon.name.slice(0, 1).toUpperCase() +
          pokemon.name.slice(1);

        if (pokemon.ID < 10) {
          name.innerHTML =
            "#00" +
            pokemon.ID +
            " " +
            pokemon.name.slice(0, 1).toUpperCase() +
            pokemon.name.slice(1);
        } else if (pokemon.ID < 100 && pokemon.ID > 9) {
          name.innerHTML =
            "#0" +
            pokemon.ID +
            " " +
            pokemon.name.slice(0, 1).toUpperCase() +
            pokemon.name.slice(1);
        }

        height.innerHTML = `Height: ${pokemon.height}`.trim();
        weight.innerHTML = `Weight: ${pokemon.weight}`.trim();
        types.innerHTML = `Type: ${pokemon.types}`.trim();
        weakness.innerHTML = `Weakness: ${pokemon.weakness.flat().join(", ")}`;
        stats.innerHTML = `Stats: HP: ${pokemon.stats[0].base_stat} ,
                Attack: ${pokemon.stats[1].base_stat} ,
                Defence: ${pokemon.stats[2].base_stat} ,
                Sp.Attack: ${pokemon.stats[3].base_stat} ,
                Sp.Defence: ${pokemon.stats[4].base_stat} ,
                Speed: ${pokemon.stats[5].base_stat} , `;
        abilities.innerHTML = `Abilities: ${pokemon.abilities.join(
          ", "
        )}`.trim();
        genders.innerHTML = `Gender: ${pokemon.genders}`.trim();
        category.innerHTML = `Category: ${pokemon.category}`.trim();

        for (let pic of pokemon.evolutionPics) {
          const img = document.createElement("img");
          img.src = pic;
          img.className = "evolution-image";
          evolutions.appendChild(img);
        }
      }
    });
  }, 2000);
});
