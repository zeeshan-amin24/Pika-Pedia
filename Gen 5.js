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
let i = 494;
function fetchPokemon() {
  if (i > 649) {
    return;
  }
  
//   if(i<560){
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
        if (i === 550) {
          fetchBasculin();
          i++;
        }
        if (i === 554) {
          fetchDarumaka();
          i++;
        }
        if (i === 555) {
          fetchDarmanitanStandard();
          fetchDarmanitanZen();
          i++;
        }
        if (i === 641) {
          fetchTornadusIncarnate();
          fetchTornadusTherian();
          i++;
        }
        if (i === 642) {
          fetchThundurusIncarnate();
          fetchThundurusTherian();
          i++;
        }
        if (i === 645) {
          fetchLandorusIncarnate();
          fetchLandorusTherian();
          i++;
        }
        if (i === 647) {
          fetchKeldeoOrdinary();
          fetchKeldeoResolute();
          i++;
        }
        if (i === 648) {
          fetchMeloettaAria();
          fetchMeloettaPirouette();
        } else {
          fetchPokemon();
        }
      });
  });
}
function fetchBasculin() {
  fetch(`https://pokeapi.co/api/v2/pokemon/basculin-white-striped`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 3' 03`.trim();
      let weight = `<b>Weight:</b>18.0 Kg (39.7 Lbs)`.trim();
      let types = `<b>Type:</b> Water`.trim();
      let weakness = `<b>Weakness:</b> grass,electric`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities =
        `<b>Abilities:</b> 	reckless, adaptability, mold breaker`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Hostile Pokemon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#550 Basculin</h5>
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

function fetchDarmanitanStandard() {
  fetch(`https://pokeapi.co/api/v2/pokemon/darmanitan-standard`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 03`.trim();
      let weight = `<b>Weight:</b>92.9 Kg (204.8 Lbs)`.trim();
      let types = `<b>Type:</b> fire`.trim();
      let weakness = `<b>Weakness:</b> water, ground, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> sheer force, zen mode`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Blazing Pokemon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#555 Darmanitan(Standard Mode)</h5>
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
function fetchDarmanitanZen() {
  fetch(`https://pokeapi.co/api/v2/pokemon/darmanitan-zen`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 03`.trim();
      let weight = `<b>Weight:</b>92.9 Kg (204.8 Lbs)`.trim();
      let types = `<b>Type:</b> fire, psychic`.trim();
      let weakness = `<b>Weakness:</b> water, ground, rock, fighting`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> sheer force, zen mode`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Blazing Pokemon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#555 Darmanitan(Zen Mode)</h5>
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
function fetchDarumaka() {
  fetch(`https://pokeapi.co/api/v2/pokemon/darumaka`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>37.5 Kg (82.7 Lbs)`.trim();
      let types = `<b>Type:</b> fire`.trim();
      let weakness = `<b>Weakness:</b> water, ground, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>hustle, inner focus`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Zen Charm Pokemon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#554 Darumaka</h5>
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

function fetchTornadusIncarnate() {
  fetch(`https://pokeapi.co/api/v2/pokemon/tornadus-incarnate`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 11`.trim();
      let weight = `<b>Weight:</b>	63.0 Kg (138.9 Lbs)`.trim();
      let types = `<b>Type:</b> flying`.trim();
      let weakness = `<b>Weakness:</b> electric, ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>prankster, defiant`.trim();
      let genders = `<b>Gender:</b> Male`.trim();
      let category = `<b>Category:</b>Cyclone Pokemon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#641 Tornadus(Incarnate Form)</h5>
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

function fetchTornadusTherian() {
  fetch(`https://pokeapi.co/api/v2/pokemon/tornadus-therian`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 07`.trim();
      let weight = `<b>Weight:</b>	63.0 Kg (138.9 Lbs)`.trim();
      let types = `<b>Type:</b> flying`.trim();
      let weakness = `<b>Weakness:</b> electric, ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>regenerator`.trim();
      let genders = `<b>Gender:</b> Male`.trim();
      let category = `<b>Category:</b>Cyclone Pokemon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#641 Tornadus(Therian Form)</h5>
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

function fetchThundurusIncarnate() {
  fetch(`https://pokeapi.co/api/v2/pokemon/thundurus-incarnate`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 11`.trim();
      let weight = `<b>Weight:</b>61.0 Kg (134.5 Lbs)`.trim();
      let types = `<b>Type:</b> electric, flying`.trim();
      let weakness = `<b>Weakness:</b> ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> prankster, defiant `.trim();
      let genders = `<b>Gender:</b> Male`.trim();
      let category = `<b>Category:</b>Bolt Strike Pokemon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#642 Thundurus(Incarnate Pokemon)</h5>
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

function fetchThundurusTherian() {
  fetch(`https://pokeapi.co/api/v2/pokemon/thundurus-therian`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 9' 10`.trim();
      let weight = `<b>Weight:</b>61.0 Kg (134.5 Lbs)`.trim();
      let types = `<b>Type:</b> electric, flying`.trim();
      let weakness = `<b>Weakness:</b> ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>volt absorb`.trim();
      let genders = `<b>Gender:</b> Male`.trim();
      let category = `<b>Category:</b>Bolt Strike Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#642 Thundurus(Therian Form)</h5>
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

function fetchLandorusIncarnate() {
  fetch(`https://pokeapi.co/api/v2/pokemon/landorus-incarnate`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 11`.trim();
      let weight = `<b>Weight:</b>68.0 Kg (149.9 Lbs)`.trim();
      let types = `<b>Type:</b> ground, flying`.trim();
      let weakness = `<b>Weakness:</b> ice, water`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>sand force, sheer force `.trim();
      let genders = `<b>Gender:</b> Male`.trim();
      let category = `<b>Category:</b>Abundance Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#645 Landorus(Incarnate Form)</h5>
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

function fetchLandorusTherian() {
  fetch(`https://pokeapi.co/api/v2/pokemon/landorus-therian`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 03`.trim();
      let weight = `<b>Weight:</b>68.0 Kg (149.9 Lbs)`.trim();
      let types = `<b>Type:</b> ground, flying`.trim();
      let weakness = `<b>Weakness:</b> ice, water`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>intimidate `.trim();
      let genders = `<b>Gender:</b> Male`.trim();
      let category = `<b>Category:</b>Abundance Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#645 Landorus(Therian Form)</h5>
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

function fetchKeldeoOrdinary() {
  fetch(`https://pokeapi.co/api/v2/pokemon/keldeo-ordinary`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 07`.trim();
      let weight = `<b>Weight:</b>48.5 Kg (106.9 Lbs)`.trim();
      let types = `<b>Type:</b> water, fighting`.trim();
      let weakness =
        `<b>Weakness:</b> grass, electric, flying, psychic, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> justified `.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>Colt Pokémon`.trim();
      let cardHTML = `
        <div class="card" style="width: 20rem">
          <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
          <div class="card-body">
            <h5 class="card-title">#647 Keldeo (Ordinary Form)</h5>
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

function fetchKeldeoResolute() {
  fetch(`https://pokeapi.co/api/v2/pokemon/keldeo-resolute`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 07`.trim();
      let weight = `<b>Weight:</b>48.5 Kg (106.9 Lbs)`.trim();
      let types = `<b>Type:</b> water, fighting`.trim();
      let weakness =
        `<b>Weakness:</b> grass, electric, flying, psychic, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> justified `.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>Colt Pokémon`.trim();
      let cardHTML = `
        <div class="card" style="width: 20rem">
          <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
          <div class="card-body">
            <h5 class="card-title">#647 Keldeo (Resolute Form)</h5>
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
function fetchMeloettaAria() {
  fetch(`https://pokeapi.co/api/v2/pokemon/meloetta-aria`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>	6.5 Kg (14.3 Lbs)`.trim();
      let types = `<b>Type:</b> normal, psychic`.trim();
      let weakness = `<b>Weakness:</b> bug, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> serene grace`.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>Melody Pokémon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#648 Meloetta (Aria Form)</h5>
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

function fetchMeloettaPirouette() {
  fetch(`https://pokeapi.co/api/v2/pokemon/meloetta-pirouette`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>	6.5 Kg (14.3 Lbs)`.trim();
      let types = `<b>Type:</b> normal, fighting`.trim();
      let weakness = `<b>Weakness:</b>fighting, flying, psychic, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> serene grace`.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>Melody Pokémon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#648 Meloetta (Pirouette Form)</h5>
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
