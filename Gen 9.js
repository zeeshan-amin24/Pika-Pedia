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
let loaderContainer = document.querySelector(".loader-container");
let loader = document.querySelector(".loader");
import { pokedex } from "https://cdn.jsdelivr.net/npm/real-pokedex@1.0.0/+esm";
let cardContainer = document.querySelector(".cardcontainer");
let i = 906;
function fetchPokemon() {
  if (i > 1025) {
    return;
  }

  //   if(i<960){
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
        if (i === 915) {
          fetchLechonk();
          i++;
        }
        if (i === 916) {
          fetchMaleOinkologne();
          fetchFemaleOinkologne();
          i++;
        }
        if (i === 924) {
          fetchTandemaus();
          i++;
        }
        if (i === 925) {
          fetchMausholdFour();
          fetchMausholdThree();
          i++;
        }
        if (i === 931) {
          fetchSquawkabillyGreenPlumage();
          fetchSquawkabillyBluePlumage();
          fetchSquawkabillyYellowPlumage();
          fetchSquawkabillyWhitePlumage();
          i++;
        }
        if (i === 963) {
          fetchFinizen();
          i++;
        }
        if (i === 964) {
          fetchPalafinZero();
          fetchPalafinHero();
          i++;
        }
        if (i === 978) {
          fetchTatsugiriCurly();
          fetchTatsugiriDroopy();
          fetchTatsugiriStretchy();
          i++;
        }
        if (i === 982) {
          fetchDuDunsparceTwoSegment();
          fetchDuDunsparceThreeSegment();
          i++;
          fetchPokemon();
        } else {
          fetchPokemon();
        }
      });
  });
}

function fetchLechonk() {
  fetch(`https://pokeapi.co/api/v2/pokemon/lechonk`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 08`.trim();
      let weight = `<b>Weight:</b>	10.2 Kg (22.5 Lbs)`.trim();
      let types = `<b>Type:</b> normal`.trim();
      let weakness = `<b>Weakness:</b>fighting`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b aroma veil, gluttony, thick fat`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Hog Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#915 Lechonk</h5>
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

function fetchMaleOinkologne() {
  fetch(`https://pokeapi.co/api/v2/pokemon/oinkologne-male`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 3' 03`.trim();
      let weight = `<b>Weight:</b>	120.0 Kg (264.6 Lbs)`.trim();
      let types = `<b>Type:</b> normal`.trim();
      let weakness = `<b>Weakness:</b>fighting`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities =
        `<b>Abilities:</b lingering aroma, gluttony, thick fat`.trim();
      let genders = `<b>Gender:</b> Male`.trim();
      let category = `<b>Category:</b>Hog Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#916 Male Oinkologne</h5>
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

function fetchFemaleOinkologne() {
  fetch(`https://pokeapi.co/api/v2/pokemon/oinkologne-female`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 3' 03`.trim();
      let weight = `<b>Weight:</b>	120.0 Kg (264.6 Lbs)`.trim();
      let types = `<b>Type:</b> normal`.trim();
      let weakness = `<b>Weakness:</b>fighting`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b aroma veil, gluttony, thick fat`.trim();
      let genders = `<b>Gender:</b> Female`.trim();
      let category = `<b>Category:</b>Hog Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#916 Female Oinkologne</h5>
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

function fetchTandemaus() {
  fetch(`https://pokeapi.co/api/v2/pokemon/tandemaus `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>1.8 Kg (4.0 Lbs)`.trim();
      let types = `<b>Type:</b> normal`.trim();
      let weakness = `<b>Weakness:</b>fighting`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>run away, pickup, own Tempo`.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>	Couple Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#924 Tandemaus </h5>
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

function fetchMausholdFour() {
  fetch(`https://pokeapi.co/api/v2/pokemon/maushold-family-of-four `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>2.8 Kg (6.2 Lbs)`.trim();
      let types = `<b>Type:</b> normal`.trim();
      let weakness = `<b>Weakness:</b>fighting`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>friend guard, cheek pouch`.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>Family Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#925 Maushold(Family Of Four) </h5>
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

function fetchMausholdThree() {
  fetch(`https://pokeapi.co/api/v2/pokemon/maushold-family-of-three `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>2.3 Kg (5.1 Lbs)`.trim();
      let types = `<b>Type:</b> normal`.trim();
      let weakness = `<b>Weakness:</b>fighting`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>friend guard, cheek pouch`.trim();
      let genders = `<b>Gender:</b> Unknown`.trim();
      let category = `<b>Category:</b>Family Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#925 Maushold(Family Of Three) </h5>
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

function fetchSquawkabillyGreenPlumage() {
  fetch(`https://pokeapi.co/api/v2/pokemon/squawkabilly-green-plumage `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>2.4 Kg (5.3 Lbs)`.trim();
      let types = `<b>Type:</b> normal, flying`.trim();
      let weakness = `<b>Weakness:</b>electric, ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>intimidate, hustle`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Parrot Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#931 Squawkabilly(Green Plumage)</h5>
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

function fetchSquawkabillyBluePlumage() {
  fetch(`https://pokeapi.co/api/v2/pokemon/squawkabilly-blue-plumage `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>2.4 Kg (5.3 Lbs)`.trim();
      let types = `<b>Type:</b> normal, flying`.trim();
      let weakness = `<b>Weakness:</b>electric, ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>intimidate, hustle`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Parrot Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#931 Squawkabilly(Blue Plumage)</h5>
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

function fetchSquawkabillyYellowPlumage() {
  fetch(`https://pokeapi.co/api/v2/pokemon/squawkabilly-yellow-plumage `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>2.4 Kg (5.3 Lbs)`.trim();
      let types = `<b>Type:</b> normal, flying`.trim();
      let weakness = `<b>Weakness:</b>electric, ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>intimidate, hustle`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Parrot Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#931 Squawkabilly(Yellow Plumage)</h5>
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

function fetchSquawkabillyWhitePlumage() {
  fetch(`https://pokeapi.co/api/v2/pokemon/squawkabilly-white-plumage `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 2' 00`.trim();
      let weight = `<b>Weight:</b>2.4 Kg (5.3 Lbs)`.trim();
      let types = `<b>Type:</b> normal, flying`.trim();
      let weakness = `<b>Weakness:</b>electric, ice, rock`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>intimidate, hustle`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Parrot Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#931 Squawkabilly(White Plumage)</h5>
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

function fetchFinizen() {
  fetch(`https://pokeapi.co/api/v2/pokemon/finizen`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 03`.trim();
      let weight = `<b>Weight:</b>60.2 Kg (132.7 Lbs)`.trim();
      let types = `<b>Type:</b>water`.trim();
      let weakness = `<b>Weakness:</b>electric, grass`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>water veil`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b	Dolphin Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#963 Finizen</h5>
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

function fetchPalafinZero() {
  fetch(`https://pokeapi.co/api/v2/pokemon/palafin-zero`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 03`.trim();
      let weight = `<b>Weight:</b>60.2 Kg (132.7 Lbs)`.trim();
      let types = `<b>Type:</b>water`.trim();
      let weakness = `<b>Weakness:</b>electric, grass`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> zero to hero`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b	Dolphin Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#964 Palafin(Zero Form)</h5>
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

function fetchPalafinHero() {
  fetch(`https://pokeapi.co/api/v2/pokemon/palafin-hero`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 5' 11`.trim();
      let weight = `<b>Weight:</b>97.4 Kg (214.7 Lbs)`.trim();
      let types = `<b>Type:</b>water`.trim();
      let weakness = `<b>Weakness:</b>electric, grass`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> zero to hero`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b	Hero Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#964 Palafin(Hero Form)</h5>
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

function fetchTatsugiriCurly() {
  fetch(`https://pokeapi.co/api/v2/pokemon/tatsugiri-curly `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>8.0 Kg (17.6 Lbs)`.trim();
      let types = `<b>Type:</b>water, dragon`.trim();
      let weakness = `<b>Weakness:</b>dragon, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> commander`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b	Mimicry Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#978 Tatsugiri(Curly Form)</h5>
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
function fetchTatsugiriDroopy() {
  fetch(`https://pokeapi.co/api/v2/pokemon/tatsugiri-droopy `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>8.0 Kg (17.6 Lbs)`.trim();
      let types = `<b>Type:</b>water, dragon`.trim();
      let weakness = `<b>Weakness:</b>dragon, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> commander`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b	Mimicry Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#978 Tatsugiri(Droopy Form)</h5>
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

function fetchTatsugiriStretchy() {
  fetch(`https://pokeapi.co/api/v2/pokemon/tatsugiri-stretchy `)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 00`.trim();
      let weight = `<b>Weight:</b>8.0 Kg (17.6 Lbs)`.trim();
      let types = `<b>Type:</b>water, dragon`.trim();
      let weakness = `<b>Weakness:</b>dragon, fairy`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b> commander`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b	Mimicry Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#978 Tatsugiri(Stretchy Form)</h5>
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

function fetchDuDunsparceTwoSegment() {
  fetch(`https://pokeapi.co/api/v2/pokemon/dudunsparce-two-segment`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 11' 10`.trim();
      let weight = `<b>Weight:</b>	39.2 Kg (86.4 Lbs)`.trim();
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
          ${pokemon.sprites.other["official-artwork"].front_default}
     " } class="card-img-top pokemon-image" alt="${pokemon.name}" />
        <div class="card-body">
          <h5 class="card-title">#982 Dudunsparce(Two Segment Form)</h5>
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

function fetchDuDunsparceThreeSegment() {
  fetch(`https://pokeapi.co/api/v2/pokemon/dudunsparce-three-segment`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 14' 09`.trim();
      let weight = `<b>Weight:</b>	47.4 Kg (104.5 Lbs)`.trim();
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
            ${pokemon.sprites.other["official-artwork"].front_default}
       " } class="card-img-top pokemon-image" alt="${pokemon.name}" />
          <div class="card-body">
            <h5 class="card-title">#982 Dudunsparce(Three Segment Form)</h5>
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

fetchPokemon();
