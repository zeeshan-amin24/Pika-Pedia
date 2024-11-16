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
})
let loaderContainer=document.querySelector(".loader-container")
let loader=document.querySelector(".loader")
import { pokedex } from "https://cdn.jsdelivr.net/npm/real-pokedex@1.0.0/+esm";
let cardContainer = document.querySelector(".cardcontainer");
let i = 387;
function fetchPokemon() {
  if (i > 493) {
    return;
  }
  
//   if(i<430){
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
        if (i === 412) {
          fetchBurmy();
          i++;
        }
        if (i === 413) {
          fetchWormadam();
          i++;
        }
        if (i === 414) {
          fetchMothim();
          i++;
        }
        if (i === 487) {
          fetchGiratinaAltered();
          fetchGiratinaOrigin();
          i++;
        }
        if (i === 492) {
          fetchShayminLand();
          fetchShayminAir();
        } else {
          fetchPokemon();
        }
      });
  });
}

function fetchBurmy() {
  fetch(`https://pokeapi.co/api/v2/pokemon/burmy`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 0' 08`.trim();
      let weight = `<b>Weight:</b>3.4 Kg (7.5 Lbs)`.trim();
      let types = `<b>Type:</b> bug`.trim();
      let weakness = `<b>Weakness:</b> fire, flying, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> shed skin, overcoat `.trim();
      let genders = `<b>Gender:</b>Male,Female`.trim();
      let category = `<b>Category:</b> Bagworm Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="
          ${pokemon.sprites.other["official-artwork"].front_default}
     " } class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#412 ${
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
    });
}
function fetchWormadam() {
  fetch(`https://pokeapi.co/api/v2/pokemon/wormadam-plant`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 08`.trim();
      let weight = `<b>Weight:</b>6.5 Kg (14.3 Lbs)`.trim();
      let types = `<b>Type:</b> bug, grass`.trim();
      let weakness = `<b>Weakness:</b> fire, flying, rock, bug, poison`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> anticipation, overcoat  `.trim();
      let genders = `<b>Gender:</b>Female`.trim();
      let category = `<b>Category:</b> Bagworm Pokémon`.trim();
      let cardHTML = `
        <div class="card" style="width: 20rem">
          <img src="
            ${pokemon.sprites.other["official-artwork"].front_default}
       " } class="card-img-top pokemon-image" alt="${pokemon.name}" />
          <div class="card-body">
            <h5 class="card-title">#413 ${"Wormadam"}</h5>
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
    });
}
function fetchMothim() {
  fetch(`https://pokeapi.co/api/v2/pokemon/mothim`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 11`.trim();
      let weight = `<b>Weight:</b>23.3 Kg (51.4 Lbs)`.trim();
      let types = `<b>Type:</b> bug, flying`.trim();
      let weakness =
        `<b>Weakness:</b> fire, flying, rock, electric, ice`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>  swarm, tinted lens  `.trim();
      let genders = `<b>Gender:</b>Male`.trim();
      let category = `<b>Category:</b> Moth Pokémon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="
              ${pokemon.sprites.other["official-artwork"].front_default}
         " } class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#414 ${
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
    });
}

function fetchGiratinaAltered() {
  fetch(`https://pokeapi.co/api/v2/pokemon/giratina-altered`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 14' 09`.trim();
      let weight = `<b>Weight:</b>750.0 Kg (1653.5 Lbs)`.trim();
      let types = `<b>Type:</b> ghost, dragon`.trim();
      let weakness = `<b>Weakness:</b> ghost, dragon, dark, fairy, ice`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>  pressure, telepathy  `.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b> 	Renegade Pokémon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="
              ${pokemon.sprites.other["official-artwork"].front_default}
         " } class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#487 ${"Giratina(Altered Form)"}</h5>
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
    });
}
function fetchGiratinaOrigin() {
  fetch(`https://pokeapi.co/api/v2/pokemon/giratina-origin`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 22' 08`.trim();
      let weight = `<b>Weight:</b>650 Kg (1433 Lbs)`.trim();
      let types = `<b>Type:</b> ghost, dragon`.trim();
      let weakness = `<b>Weakness:</b> ghost, dragon, dark, fairy, ice`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>  levitate `.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b> 	Renegade Pokémon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="
                ${pokemon.sprites.other["official-artwork"].front_default}
           " } class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#487 ${"Giratina(Origin Form)"}</h5>
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
    });
}

function fetchShayminLand() {
  fetch(`https://pokeapi.co/api/v2/pokemon/shaymin-land`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 0' 08`.trim();
      let weight = `<b>Weight:</b>2.1 Kg (4.6 Lbs)`.trim();
      let types = `<b>Type:</b> grass`.trim();
      let weakness = `<b>Weakness:</b> fire, poison, flying, bug, ice`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>  natural cure `.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b> Gratitude Pokemon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="
              ${pokemon.sprites.other["official-artwork"].front_default}
         "  class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#492 
         Shaymin(Land Form)
        </h5>
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
    });
}
function fetchShayminAir() {
  fetch(`https://pokeapi.co/api/v2/pokemon/shaymin-sky`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 04`.trim();
      let weight = `<b>Weight:</b>	5.2 Kg (11.5 Lbs)`.trim();
      let types = `<b>Type:</b> grass, flying`.trim();
      let weakness = `<b>Weakness:</b> fire, poison, flying, rock, ice`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>  serene grace `.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b> Gratitude Pokemon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="
                ${pokemon.sprites.other["official-artwork"].front_default}
           "  class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#492 
           Shaymin(Sky Form)
          </h5>
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
    });
}
fetchPokemon();
