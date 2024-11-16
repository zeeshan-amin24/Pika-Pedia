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
let i = 722;
function fetchPokemon() {
  if (i > 809) {
    return;
  }
  
//   if(i<765){
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
        if (i === 741) {
          fetchOricorioBaile();
          fetchOricorioPomPom();
          fetchOricorioPau();
          fetchOricorioSensu();
          i++;
        }
        if (i === 744) {
          fetchRockruff();
          i++;
        }
        if (i === 745) {
          fetchMidDayLycanroc();
          fetchMidNightLycanroc();
          fetchDuskLycanroc();
          i++;
        }
        if (i === 746) {
          fetchWishiwashiSolo();
          fetchWishiwashiSchool();
          i++;
        }
        if (i === 774) {
          fetchMiniorMeteor();
          i++;
        }
        if (i === 778) {
          fetchMimikyu();
        } else {
          fetchPokemon();
        }
      });
  });
}

function fetchOricorioBaile() {
  fetch(`https://pokeapi.co/api/v2/pokemon/oricorio-baile`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>		3.4 Kg (7.5 Lbs)`.trim();
      let types = `<b>Type:</b> fire, flying`.trim();
      let weakness = `<b>Weakness:</b>water, electric, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> dancer`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>	Dancing Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#741 Oricorio(Baile Style)</h5>
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
function fetchOricorioPomPom() {
  fetch(`https://pokeapi.co/api/v2/pokemon/oricorio-pom-pom`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>		3.4 Kg (7.5 Lbs)`.trim();
      let types = `<b>Type:</b> elctric, flying`.trim();
      let weakness = `<b>Weakness:</b>ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> dancer`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>	Dancing Pokémon`.trim();
      let cardHTML = `
        <div class="card" style="width: 20rem">
          <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
          <div class="card-body">
            <h5 class="card-title">#741 Oricorio(Pom-Pom Style)</h5>
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
function fetchOricorioPau() {
  fetch(`https://pokeapi.co/api/v2/pokemon/oricorio-pau`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>		3.4 Kg (7.5 Lbs)`.trim();
      let types = `<b>Type:</b> psychic, flying`.trim();
      let weakness = `<b>Weakness:</b>ice, rock, electric, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> dancer`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>	Dancing Pokémon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#741 Oricorio(Pa'u Style)</h5>
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

function fetchOricorioSensu() {
  fetch(`https://pokeapi.co/api/v2/pokemon/oricorio-sensu`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>		3.4 Kg (7.5 Lbs)`.trim();
      let types = `<b>Type:</b> ghost, flying`.trim();
      let weakness = `<b>Weakness:</b>ice, rock, electric, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> dancer`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>	Dancing Pokémon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#741 Oricorio(Sensu Style)</h5>
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
function fetchMiniorMeteor() {
  fetch(`https://pokeapi.co/api/v2/pokemon/minior-red-meteor`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>		40.0 Kg (88.2 Lbs)`.trim();
      let types = `<b>Type:</b> rock, flying`.trim();
      let weakness = `<b>Weakness:</b>ice, rock, electric, water, steel`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> shields down`.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>		Meteor Pokémon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#774 Minior(Meteor Form)</h5>
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
function fetchMiniorCore() {
  fetch(`https://pokeapi.co/api/v2/pokemon/minior-core`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>		0.3 Kg (0.7 Lbs)`.trim();
      let types = `<b>Type:</b> rock, flying`.trim();
      let weakness = `<b>Weakness:</b>ice, rock, electric, water, steel`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> shields down`.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>		Meteor Pokémon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#774 Minior(Core Form)</h5>
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

function fetchRockruff() {
  fetch(`https://pokeapi.co/api/v2/pokemon/rockruff`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 08`.trim();
      let weight = `<b>Weight:</b>	9.2 Kg (20.3 Lbs)`.trim();
      let types = `<b>Type:</b> rock`.trim();
      let weakness =
        `<b>Weakness:</b>grass, fighting,ground, water, steel`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities =
        `<b>Abilities:</b>  keen eye, vital spirit, steadfast `.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Puppy Pokemon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#744 Rockruff</h5>
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
function fetchMidDayLycanroc() {
  fetch(`https://pokeapi.co/api/v2/pokemon/lycanroc-midday`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 07`.trim();
      let weight = `<b>Weight:</b>	25.0 Kg (55.1 Lbs)`.trim();
      let types = `<b>Type:</b> rock`.trim();
      let weakness =
        `<b>Weakness:</b>grass, fighting,ground, water, steel`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities =
        `<b>Abilities:</b>  keen eye, sand rush, steadfast`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Wolf Pokemon`.trim();
      let cardHTML = `
              <div class="card" style="width: 20rem">
                <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                <div class="card-body">
                  <h5 class="card-title">#745 Lycanroc(Mid-Day Form)</h5>
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
function fetchMidNightLycanroc() {
  fetch(`https://pokeapi.co/api/v2/pokemon/lycanroc-midnight`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 3' 07`.trim();
      let weight = `<b>Weight:</b>	25.0 Kg (55.1 Lbs)`.trim();
      let types = `<b>Type:</b> rock`.trim();
      let weakness =
        `<b>Weakness:</b>grass, fighting,ground, water, steel`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>  keen eye, no guard, steadfast`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Wolf Pokemon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#745 Lycanroc(Mid-Night Form)</h5>
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

function fetchDuskLycanroc() {
  fetch(`https://pokeapi.co/api/v2/pokemon/lycanroc-dusk`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 07`.trim();
      let weight = `<b>Weight:</b>	25.0 Kg (55.1 Lbs)`.trim();
      let types = `<b>Type:</b> rock`.trim();
      let weakness =
        `<b>Weakness:</b>grass, fighting,ground, water, steel`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> tough claws`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Wolf Pokemon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#745 Lycanroc(Dusk Form)</h5>
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
function fetchWishiwashiSolo() {
  fetch(`https://pokeapi.co/api/v2/pokemon/wishiwashi-solo`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 0' 08`.trim();
      let weight = `<b>Weight:</b>	0.3 Kg (0.7 Lbs)`.trim();
      let types = `<b>Type:</b> water`.trim();
      let weakness = `<b>Weakness:</b>grass, electric`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> schooling`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>	Small Fry Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#746 Wishiwashi(Solo Form)</h5>
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

function fetchWishiwashiSchool() {
  fetch(`https://pokeapi.co/api/v2/pokemon/wishiwashi-school`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 26' 11`.trim();
      let weight = `<b>Weight:</b>	78.6 Kg (173.3 Lbs)`.trim();
      let types = `<b>Type:</b> water`.trim();
      let weakness = `<b>Weakness:</b>grass, electric`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> schooling`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>	Small Fry Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#746 Wishiwashi(School Form)</h5>
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

function fetchMimikyu() {
  fetch(`https://pokeapi.co/api/v2/pokemon/mimikyu-disguised`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 0' 08`.trim();
      let weight = `<b>Weight:</b>		0.7 Kg (1.5 Lbs)`.trim();
      let types = `<b>Type:</b> ghost, fairy`.trim();
      let weakness = `<b>Weakness:</b>ghost, steel`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>disguise`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>	Disguise Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#778 Mimikyu</h5>
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
