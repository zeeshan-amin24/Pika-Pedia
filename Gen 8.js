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
let i = 810;
function fetchPokemon() {
  if (i > 905) {
    return;
  }
  
//   if(i<855){
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
        if(i===848){
          fetchToxel()
          i++
        }
        if(i===849){
          fetchToxtricityLowKey()
          fetchToxtricityAmped()
          i++
        }if(i===875){
          fetchEiscue()
          i++
        }
        if(i===876){
          fetchIndeedeeMale()
          fetchIndeedeeFemale()
          i++
        }
        if(i===891){
          fetchKubfu()
          i++
        }
        if(i===892){
          fetchUrshifuSingleStrike()
          fetchUrshifuRapidStrike()
          i++
        }
        if(i===877){
          fetchMorpekoFullBelly()
          fetchMorpekoHangry()
          i++
        }
        if(i===902){
          fetchBasculegionMale()
          fetchBasculegionFemale()
          i++
        }
        if(i===905){
          fetchEnamorusIncarnate()
          fetchEnamorusTherian()
        }
        else{
        fetchPokemon();
        }
      });
  });
}

function fetchToxel() {
  fetch(`https://pokeapi.co/api/v2/pokemon/toxel`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 1' 04`.trim();
      let weight = `<b>Weight:</b>	11.0 Kg (24.3 Lbs)`.trim();
      let types = `<b>Type:</b> poison, electric`.trim();
      let weakness = `<b>Weakness:</b>ground, psychic`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>rattled, static, klutz `.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Baby Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#848 Toxel</h5>
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
function fetchToxtricityAmped() {
  fetch(`https://pokeapi.co/api/v2/pokemon/toxtricity-amped`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 5' 03`.trim();
      let weight = `<b>Weight:</b>	40.0 Kg (88.2 Lbs)`.trim();
      let types = `<b>Type:</b> poison, electric`.trim();
      let weakness = `<b>Weakness:</b>ground, psychic`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>punk rock, plus, technician`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Punk Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#849 Toxtricity(Amped Form)</h5>
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

function fetchToxtricityLowKey() {
  fetch(`https://pokeapi.co/api/v2/pokemon/toxtricity-low-key`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 5' 03`.trim();
      let weight = `<b>Weight:</b>	40.0 Kg (88.2 Lbs)`.trim();
      let types = `<b>Type:</b> poison, electric`.trim();
      let weakness = `<b>Weakness:</b>ground, psychic`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>punk rock, minus, technician`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Punk Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#849 Toxtricity(Low Key Form)</h5>
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

function fetchEiscue() {
  fetch(`https://pokeapi.co/api/v2/pokemon/eiscue-ice`)
    .then((response) => response.json())
    .then((pokemon) => {
      let height = `<b>Height:</b> 4' 07`.trim();
      let weight = `<b>Weight:</b>	89.0 Kg (196.2 Lbs)`.trim();
      let types = `<b>Type:</b> ice`.trim();
      let weakness = `<b>Weakness:</b>fire, fighting, rock, steel`.trim();
      let stats =
        `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
      let abilities = `<b>Abilities:</b>ice face`.trim();
      let genders = `<b>Gender:</b> Male, Female`.trim();
      let category = `<b>Category:</b>Penguin Pokémon`.trim();
      let cardHTML = `
                <div class="card" style="width: 20rem">
                  <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                  <div class="card-body">
                    <h5 class="card-title">#875 Eiscue</h5>
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
     
    })}
    
    function fetchIndeedeeMale() {
      fetch(`https://pokeapi.co/api/v2/pokemon/indeedee-male`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 2' 11`.trim();
          let weight = `<b>Weight:</b>	28.0 Kg (61.7 Lbs)`.trim();
          let types = `<b>Type:</b> psychic, normal`.trim();
          let weakness = `<b>Weakness:</b>bug, dark`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b> inner focus, synchronize, psychic surge`.trim();
          let genders = `<b>Gender:</b> Male`.trim();
          let category = `<b>Category:</b>Emotion Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#876 Male Indeedee</h5>
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
         
        })}
        
        
    function fetchIndeedeeFemale() {
      fetch(`https://pokeapi.co/api/v2/pokemon/indeedee-female`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 2' 11`.trim();
          let weight = `<b>Weight:</b>	28.0 Kg (61.7 Lbs)`.trim();
          let types = `<b>Type:</b> psychic, normal`.trim();
          let weakness = `<b>Weakness:</b>bug, dark`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b> own tempo, synchronize, psychic surge`.trim();
          let genders = `<b>Gender:</b> Female`.trim();
          let category = `<b>Category:</b>Emotion Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#876 Female Indeedee</h5>
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
        
        })}
        
    function fetchUrshifuSingleStrike() {
      fetch(`https://pokeapi.co/api/v2/pokemon/urshifu-single-strike`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 6' 03`.trim();
          let weight = `<b>Weight:</b>105.0 Kg (231.5 Lbs)`.trim();
          let types = `<b>Type:</b>fighting, dark`.trim();
          let weakness = `<b>Weakness:</b>fighting, flying, fairy`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>unseen fist`.trim();
          let genders = `<b>Gender:</b>Male, Female`.trim();
          let category = `<b>Category:</b>Wushu Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#892 Urshifu(Single Strike)</h5>
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
       
        })}
          
    function fetchUrshifuRapidStrike() {
      fetch(`https://pokeapi.co/api/v2/pokemon/urshifu-rapid-strike`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 6' 03`.trim();
          let weight = `<b>Weight:</b>105.0 Kg (231.5 Lbs)`.trim();
          let types = `<b>Type:</b>fighting, water`.trim();
          let weakness = `<b>Weakness:</b>grass, electric, psychic, flying, fairy`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>unseen fist`.trim();
          let genders = `<b>Gender:</b>Male, Female`.trim();
          let category = `<b>Category:</b>Wushu Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#892 Urshifu(Rapid Strike)</h5>
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
      
        })}
          
    function fetchMorpekoFullBelly() {
      fetch(`https://pokeapi.co/api/v2/pokemon/morpeko-full-belly`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 1' 00`.trim();
          let weight = `<b>Weight:</b>3.0 Kg (6.6 Lbs)`.trim();
          let types = `<b>Type:</b>electric, dark`.trim();
          let weakness = `<b>Weakness:</b>fighting, ground, bug, fairy`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>hunger switch`.trim();
          let genders = `<b>Gender:</b>Male, Female`.trim();
          let category = `<b>Category:</b>Two-Sided Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#877 Morpeko(Full Belly Mode)</h5>
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
          
        })}
             
    function fetchMorpekoHangry() {
      fetch(`https://pokeapi.co/api/v2/pokemon/morpeko-hangry`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 1' 00`.trim();
          let weight = `<b>Weight:</b>3.0 Kg (6.6 Lbs)`.trim();
          let types = `<b>Type:</b>electric, dark`.trim();
          let weakness = `<b>Weakness:</b>fighting, ground, bug, fairy`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>hunger switch`.trim();
          let genders = `<b>Gender:</b>Male, Female`.trim();
          let category = `<b>Category:</b>Two-Sided Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#877 Morpeko(Hangry Mode)</h5>
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
        
        })}
        
    function fetchKubfu() {
      fetch(`https://pokeapi.co/api/v2/pokemon/kubfu`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 2' 00`.trim();
          let weight = `<b>Weight:</b>12.0 Kg (26.5 Lbs)`.trim();
          let types = `<b>Type:</b>fighting`.trim();
          let weakness = `<b>Weakness:</b>psychic, flying, fairy`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>inner focus`.trim();
          let genders = `<b>Gender:</b>Male, Female`.trim();
          let category = `<b>Category:</b>Wushu Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#891 Kubfu</h5>
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
       
        })}
        
    function fetchBasculegionMale() {
      fetch(`https://pokeapi.co/api/v2/pokemon/basculegion-male`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 9' 10`.trim();
          let weight = `<b>Weight:</b>110.0 Kg (242.5 Lbs)`.trim();
          let types = `<b>Type:</b>water, ghost`.trim();
          let weakness = `<b>Weakness:</b>grass, electric, ghost, dark`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>swift swim, adaptability, mold breaker `.trim();
          let genders = `<b>Gender:</b>Male`.trim();
          let category = `<b>Category:</b>Big Fish Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#902 Male Basculegion</h5>
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
         
        })}
        
        
    function fetchBasculegionFemale() {
      fetch(`https://pokeapi.co/api/v2/pokemon/basculegion-female`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 9' 10`.trim();
          let weight = `<b>Weight:</b>110.0 Kg (242.5 Lbs)`.trim();
          let types = `<b>Type:</b>water, ghost`.trim();
          let weakness = `<b>Weakness:</b>grass, electric, ghost, dark`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>swift swim, adaptability, mold breaker `.trim();
          let genders = `<b>Gender:</b>Female`.trim();
          let category = `<b>Category:</b>Big Fish Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#902 Female Basculegion</h5>
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
          
        })}
        
    function fetchEnamorusIncarnate() {
      fetch(`https://pokeapi.co/api/v2/pokemon/enamorus-incarnate`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 5' 03`.trim();
          let weight = `<b>Weight:</b>48.0 Kg (105.8 Lbs)`.trim();
          let types = `<b>Type:</b>fairy, flying`.trim();
          let weakness = `<b>Weakness:</b>ice, electric, rock, poison, steel`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>cute charm, contrary `.trim();
          let genders = `<b>Gender:</b>Male`.trim();
          let category = `<b>Category:</b>Love-Hate Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#905 Enamorous(Incarnate Forme)</h5>
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
          i++
          fetchPokemon()
        })}
        
    function fetchEnamorusTherian() {
      fetch(`https://pokeapi.co/api/v2/pokemon/enamorus-therian`)
        .then((response) => response.json())
        .then((pokemon) => {
          let height = `<b>Height:</b> 5' 03`.trim();
          let weight = `<b>Weight:</b>48.0 Kg (105.8 Lbs)`.trim();
          let types = `<b>Type:</b>fairy, flying`.trim();
          let weakness = `<b>Weakness:</b>ice, electric, rock, poison, steel`.trim();
          let stats =
            `<b>Stats:</b> <b>HP:</b> ${pokemon.stats[0].base_stat}, <b>Attack:</b> ${pokemon.stats[1].base_stat}, <b>Defence:</b> ${pokemon.stats[2].base_stat}, <b>Sp.Attack:</b> ${pokemon.stats[3].base_stat}, <b>Sp.Defence:</b> ${pokemon.stats[4].base_stat}, <b>Speed:</b> ${pokemon.stats[5].base_stat}`.trim();
          let abilities = `<b>Abilities:</b>overcoat `.trim();
          let genders = `<b>Gender:</b>Male`.trim();
          let category = `<b>Category:</b>Love-Hate Pokémon`.trim();
          let cardHTML = `
                    <div class="card" style="width: 20rem">
                      <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top pokemon-image" alt="${pokemon.name}" />
                      <div class="card-body">
                        <h5 class="card-title">#905 Enamorous(Therian Forme)</h5>
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
          i++
          fetchPokemon()
        })}
fetchPokemon();
