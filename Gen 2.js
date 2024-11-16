let search = document.getElementById("search");
let pokemons = document.getElementsByClassName("card");

search.addEventListener("input", function (e) {
  let searchtext = e.target.value.toLowerCase();

  for (let pokemon of pokemons) {
    let name = pokemon.getElementsByClassName("card-title")[0];
    if (name.textContent.toLowerCase().includes(searchtext)) {
      pokemon.classList.remove("hide");
    } else {
      pokemon.classList.add("hide");
    }
  }
});
let loaderContainer=document.querySelector(".loader-container")
let loader=document.querySelector(".loader")
import { pokedex } from "https://cdn.jsdelivr.net/npm/real-pokedex@1.0.0/+esm";
let cardContainer = document.querySelector(".cardcontainer");
let i = 152;

function fetchPokemon() {
  if (i > 251) {
    return;
  }

//   if(i<200){
//     loader.classList.remove("hide")
//     cardContainer.classList.add("hide")
//   }
// else{
//     loaderContainer.style.display="none"
// loader.classList.add("hide")
// cardContainer.classList.remove("hide")
// }
  pokedex(i.toString(), (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())
      .then((pokemons) => {
        let height = `<b>Height:</b> ${pokemon.height}`.trim();
        let weight = `<b>Weight:</b> ${parseFloat(
          pokemons.weight * 0.1
        ).toFixed(2)} Kg (${parseFloat(pokemons.weight * 0.22046).toFixed(
          1
        )} Lbs)`.trim();
        let types = `<b>Type:</b> ${pokemon.types.join(", ")}`.trim();
        let weakness = `<b>Weakness:</b> ${pokemon.weakness
          .flat()
          .join(", ")}`.trim();
        let stats =
          `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
        let abilities = `<b>Abilities:</b> ${pokemon.abilities.join(
          ", "
        )}`.trim();
        let genders = `<b>Gender:</b> ${pokemon.genders}`.trim();
        let category = `<b>Category:</b> ${pokemon.category} Pokemon`.trim();

        pokemon.ID =
          pokemon.ID < 10
            ? `#00${pokemon.ID}`
            : pokemon.ID < 100
            ? `#0${pokemon.ID}`
            : `#${pokemon.ID}`;

        let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="${
              pokemon.pokemonPic
            }" class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">${pokemon.ID} ${
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        }</h5>
              <p class="card-text">
                ${height}<br>
                ${weight}<br>
                ${types}<br>
                ${weakness}<br>
                ${stats}<br>
                ${genders}<br>
                ${abilities}<br>
                ${category}
              </p>
            </div>
          </div>`;
        cardContainer.innerHTML += cardHTML;
        i++;
        if (i == 206) {
          fetchDunsparce(); 
        } 
        else{
          fetchPokemon();
        }

        
  function fetchDunsparce(){
      fetch(`https://pokeapi.co/api/v2/pokemon/dunsparce`)
      .then((response) => response.json())
      .then((pokemon) => {

        let height = `<b>Height:</b> 4' 11`.trim(); 
        let weight = `<b>Weight:</b>14.01 Kg(30.9 lbs)`.trim();
        let types = `<b>Type:</b> normal`.trim();
        let weakness = `<b>Weakness:</b> fighting`.trim();
        let stats =
          `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
        let abilities = `<b>Abilities:</b> serene grace,run away,rattled `.trim();
        let genders = `<b>Gender:</b>Male,Female`.trim();
        let category = `<b>Category:</b> Land Snake Pokemon`.trim();
        let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="
              ${pokemon.sprites.other['official-artwork'].front_default}
         " } class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#206 ${
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        }</h5>
              <p class="card-text">
                ${height}<br>
                ${weight}<br>
                ${types}<br>
                ${weakness}<br>
                ${stats}<br>
                ${genders}<br>
                ${abilities}<br>
                ${category}
              </p>
            </div>
          </div>`;
        cardContainer.innerHTML += cardHTML;
  
  
        i++;
        fetchPokemon();
      })}
    })}
    )}






fetchPokemon();
