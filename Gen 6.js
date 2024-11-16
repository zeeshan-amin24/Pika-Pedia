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
let i = 650;
function fetchPokemon() {
  if (i > 721) {
    return;
  }
  
//   if(i<685){
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
        if (i === 677) {
          fetchEspurr();
          i++;
        }
        if (i === 678) {
          fetchMeowsticMale();
          fetchMeowsticFemale();
          i++;
          if (i === 679) {
            fetchHonedge();
            i++;
          }
          if (i === 680) {
            fetchDoublade();
            i++;
          }
        }
        if (i === 681) {
          fetchAegislashShield();
          fetchAegislashBlade();
          i++;
        }
        if (i === 710) {
          fetchPumpkaboo();
          i++;
        }
        if (i === 711) {
          fetchGourgeist();
          i++;
        }
        if (i === 718) {
          fetchZygarde10();
          fetchZygarde50();
          fetchZygardeComplete();
          i++;
        }
        if (i === 720) {
          fetchHoopaConfined();
          fetchHoopaUnbound();
        } else {
          fetchPokemon();
        }
      });
  });
}

function fetchEspurr() {
  fetch(`https://pokeapi.co/api/v2/pokemon/espurr`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>	3.5 Kg (7.7 Lbs)`.trim();
      let types = `<b>Type:</b> psychic`.trim();
      let weakness = `<b>Weakness:</b>bug, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities =
        `<b>Abilities:</b>  keen eye, infiltrator, own tempo`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Restraint Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#677 Espurr</h5>
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
function fetchMeowsticMale() {
  fetch(`https://pokeapi.co/api/v2/pokemon/meowstic-male`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>	8.5 Kg (18.7 Lbs)`.trim();
      let types = `<b>Type:</b> psychic`.trim();
      let weakness = `<b>Weakness:</b>bug, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities =
        `<b>Abilities:</b>  keen eye, infiltrator, prankster`.trim();
      let genders = `<b>Gender:</b> Male`.trim();
      let category = `<b>Category:</b>Constraint Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#678 Meowstic(Male)</h5>
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

function fetchMeowsticFemale() {
  fetch(`https://pokeapi.co/api/v2/pokemon/meowstic-female`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>	8.5 Kg (18.7 Lbs)`.trim();
      let types = `<b>Type:</b> psychic`.trim();
      let weakness = `<b>Weakness:</b>bug, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities =
        `<b>Abilities:</b>  keen eye, infiltrator, prankster`.trim();
      let genders = `<b>Gender:</b> Female`.trim();
      let category = `<b>Category:</b>Constraint Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#678 Meowstic(Female)</h5>
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

function fetchAegislashShield() {
  fetch(`https://pokeapi.co/api/v2/pokemon/aegislash-shield`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 5' 07`.trim();
      let weight = `<b>Weight:</b>	53.0 Kg (116.8 Lbs)`.trim();
      let types = `<b>Type:</b> steel, ghost`.trim();
      let weakness = `<b>Weakness:</b>fire, ground, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> stance change`.trim();
      let genders = `<b>Gender:</b>Male, Female`.trim();
      let category = `<b>Category:</b>Royal Sword Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#681 Aegislash(Shield Form)</h5>
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

function fetchAegislashBlade() {
  fetch(`https://pokeapi.co/api/v2/pokemon/aegislash-blade`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 5' 07`.trim();
      let weight = `<b>Weight:</b>	53.0 Kg (116.8 Lbs)`.trim();
      let types = `<b>Type:</b> steel, ghost`.trim();
      let weakness = `<b>Weakness:</b>fire, ground, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> stance change`.trim();
      let genders = `<b>Gender:</b>Male, Female`.trim();
      let category = `<b>Category:</b>Royal Sword Pokémon`.trim();
      let cardHTML = `
      <div class="card" style="width: 20rem">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#681 Aegislash(Blade Form)</h5>
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
function fetchHonedge() {
  fetch(`https://pokeapi.co/api/v2/pokemon/honedge`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 07`.trim();
      let weight = `<b>Weight:</b>	2.0 Kg (4.4 Lbs)`.trim();
      let types = `<b>Type:</b> steel, ghost`.trim();
      let weakness = `<b>Weakness:</b>fire, ground, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> no guard`.trim();
      let genders = `<b>Gender:</b>Male, Female`.trim();
      let category = `<b>Category:</b> Sword Pokémon`.trim();
      let cardHTML = `
        <div class="card" style="width: 20rem">
          <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
          <div class="card-body">
            <h5 class="card-title">#679 Honedge</h5>
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

function fetchDoublade() {
  fetch(`https://pokeapi.co/api/v2/pokemon/doublade`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 07`.trim();
      let weight = `<b>Weight:</b>	4.5 Kg (9.9 Lbs)`.trim();
      let types = `<b>Type:</b> steel, ghost`.trim();
      let weakness = `<b>Weakness:</b>fire, ground, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> no guard`.trim();
      let genders = `<b>Gender:</b>Male, Female`.trim();
      let category = `<b>Category:</b>Sword Pokémon`.trim();
      let cardHTML = `
        <div class="card" style="width: 20rem">
          <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
          <div class="card-body">
            <h5 class="card-title">#680 Doublade</h5>
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
function fetchPumpkaboo() {
  fetch(`https://pokeapi.co/api/v2/pokemon/pumpkaboo-average`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 04`.trim();
      let weight = `<b>Weight:</b>	5.0 Kg (11.0 lbs)`.trim();
      let types = `<b>Type:</b> grass, ghost`.trim();
      let weakness = `<b>Weakness:</b>fire, ice, flying, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> pickup, frisk, insomnia `.trim();
      let genders = `<b>Gender:</b>Male, Female`.trim();
      let category = `<b>Category:</b>Pumpkin Pokémon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#710 Pumpkaboo</h5>
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

function fetchGourgeist() {
  fetch(`https://pokeapi.co/api/v2/pokemon/gourgeist-average`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 11`.trim();
      let weight = `<b>Weight:</b>	12.5 Kg (27.6 Lbs)`.trim();
      let types = `<b>Type:</b> grass, ghost`.trim();
      let weakness = `<b>Weakness:</b>fire, ice, flying, ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> pickup, frisk, insomnia `.trim();
      let genders = `<b>Gender:</b>Male, Female`.trim();
      let category = `<b>Category:</b>Pumpkin Pokémon`.trim();
      let cardHTML = `
          <div class="card" style="width: 20rem">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
            <div class="card-body">
              <h5 class="card-title">#711 Gourgeist</h5>
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
function fetchZygarde10() {
  fetch(`https://pokeapi.co/api/v2/pokemon/zygarde-10`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 3' 11`.trim();
      let weight = `<b>Weight:</b>33.5 Kg (73.9 Lbs)`.trim();
      let types = `<b>Type:</b> dragon, ground`.trim();
      let weakness = `<b>Weakness:</b> ice, dragon, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> aura break`.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b>Order Pokémon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#718 Zygarde(10% Form)</h5>
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

function fetchZygarde50() {
  fetch(`https://pokeapi.co/api/v2/pokemon/zygarde-50`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 16' 05`.trim();
      let weight = `<b>Weight:</b>305.0 Kg (672.4 Lbs)`.trim();
      let types = `<b>Type:</b> dragon, ground`.trim();
      let weakness = `<b>Weakness:</b> ice, dragon, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> aura break`.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b>Order Pokémon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#718 Zygarde(50% Form)</h5>
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

function fetchZygardeComplete() {
  fetch(`https://pokeapi.co/api/v2/pokemon/zygarde-complete`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 14' 09`.trim();
      let weight = `<b>Weight:</b>610.0 Kg (1344.8 Lbs)`.trim();
      let types = `<b>Type:</b> dragon, ground`.trim();
      let weakness = `<b>Weakness:</b> ice, dragon, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>power construct`.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b>Order Pokémon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#718 Zygarde(Complete Form)</h5>
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
function fetchHoopaUnbound() {
  fetch(`https://pokeapi.co/api/v2/pokemon/hoopa-unbound`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 21' 04`.trim();
      let weight = `<b>Weight:</b>490.0 Kg (1080.3 Lbs)`.trim();
      let types = `<b>Type:</b>psychic, dark`.trim();
      let weakness = `<b>Weakness:</b> bug, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>magician`.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b>	Djinn Pokémon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#720 Hoopa Unbound</h5>
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

function fetchHoopaConfined() {
  fetch(`https://pokeapi.co/api/v2/pokemon/hoopa`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 08`.trim();
      let weight = `<b>Weight:</b>9.0 Kg (19.8 Lbs)`.trim();
      let types = `<b>Type:</b>psychic, ghost`.trim();
      let weakness = `<b>Weakness:</b> ghost, dark`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>magician`.trim();
      let genders = `<b>Gender:</b>Unknown`.trim();
      let category = `<b>Category:</b>	Mischief Pokémon`.trim();
      let cardHTML = `
            <div class="card" style="width: 20rem">
              <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
              <div class="card-body">
                <h5 class="card-title">#720 Hoopa Confined</h5>
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
