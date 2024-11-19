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
let detailsContainer = document.querySelector(".details-container");
let cardContainer = document.querySelector(".cardcontainer");
let pokemonCardContainer = document.querySelector(".pokemon-card-container");
import { pokedex } from "https://cdn.jsdelivr.net/npm/real-pokedex@1.0.0/+esm";
let pokemonsId= [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
  93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
  109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 
  124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 
  139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 
  154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 
  169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 
  184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 
  199, 200, 201, 202, 203, 204, 205, 207, 208, 209, 210, 211, 212, 213, 
  214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 
  229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 
  244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 
  259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 
  274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 
  289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 
  304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 
  319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 
  334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 
  349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 
  364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 
  379, 380, 381, 382, 383, 384, 385, 387, 388, 389, 390, 391, 392, 393, 
  394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 
  409, 410, 411, 415, 416, 417, 418, 419, 420, 421, 422, 423, 
  424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 
  439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 
  454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 
  469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 
  484, 485, 486,  488, 489, 490, 491, 493, 494, 495, 496, 497, 498, 
  499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 
  514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 
  529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 
  544, 545, 546, 547, 548, 549, 551, 552, 553, 556, 557, 558, 
  559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 
  574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 
  589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 
  604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 
  619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 
  634, 635, 636, 637, 638, 639, 640,  643, 644, 646,
  649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 
  664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676,
  682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 
  694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 
  709, 712, 713, 714, 715, 716, 717, 719, 721, 722, 723, 
  724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 
  739, 740,  742, 743, 747, 748, 749, 750, 751, 752, 753, 
  754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 
  769, 770, 771, 772, 773, 775, 776, 777, 779, 780, 781, 782, 783, 
  784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 
  799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 
  814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 
  829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 
  844, 845, 846, 847,  850, 851, 852, 853, 854, 855, 856, 857, 858, 
  859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 
  874,  878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 
  889, 890, 893, 894, 895, 896, 897, 898, 899, 900, 901,  903, 
  904, 906, 907, 908, 909, 910, 911, 912, 913, 914, 917, 918, 
  919, 920, 921, 922, 923,  926, 927, 928, 929, 930,  932, 933, 
  934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 
  949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 
   965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 
  979, 980, 981, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 
  994, 995, 996, 997, 998, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 
  1008, 1009, 1010, 1011, 1014, 1015, 1016, 1018, 1019, 1020, 
  1021, 1022, 1023, 1025
]

let surpriseBtn=document.querySelector(".surprise-me-btn")
surpriseBtn.addEventListener('click',()=>{
  let fetchCount=0
  searching.classList.add("hide");
  cardContainer.innerHTML = "";
searchBtn.disabled=true;
surpriseBtn.disabled=true
  pokemonCardContainer.classList.add("hide")
  let randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(pokemonsId[Math.floor(Math.random() * pokemonsId.length)]);
}
randomNumbers.forEach((id)=>{
  
  pokedex(id.toString(), (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((pokemons) => {
      fetchCount++
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
    
      if (fetchCount == 9 ) {
        searchBtn.disabled = false;
        surpriseBtn.disabled = false;
      }
    })
    
    })
  
  })}) 


searchBtn.addEventListener("click", () => {
  surpriseBtn.disabled=true
  let pokemonSearch = search.value.toLowerCase();
  pokemonCardContainer.classList.remove("hide")
  cardContainer.innerHTML=""
  searching.classList.remove("hide");
  card.classList.add("hide");
  detailsContainer.classList.add("hide");
  let evolutions = document.getElementById("evolutions");
  let evolutionsTextDiv = document.querySelector(".evolutions-text-div");
  evolutions.innerHTML = "";
  evolutionsTextDiv.innerHTML=""
  error.classList.add("hide");
  if (!pokemonSearch) {
    clearTimeout(searchTimeout)
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
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
      .then((response) => response.json())
      .then((pokemons) => {
      searching.classList.add("hide");
      if (pokemon && pokemon.ID) {
        clearTimeout(searchTimeout);
        card.classList.remove("hide");
        surpriseBtn.disabled=false
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

        height.innerHTML = ` <b>Height:</b>  ${pokemon.height}`.trim();
        weight.innerHTML = `<b>Weight:</b> ${parseFloat(
          pokemons.weight * 0.1
        ).toFixed(2)} Kg (${parseFloat(pokemons.weight * 0.22046).toFixed(
          1
        )} Lbs)`.trim();
        types.innerHTML = ` <b>Type: </b> ${pokemon.types}`.trim();
        weakness.innerHTML = ` <b>Weakness:</b>  ${pokemon.weakness.flat().join(", ")}`;
        stats.innerHTML = ` <b>Stats: HP:</b>  ${pokemon.stats[0].base_stat} ,
                 <b>Attack:</b>  ${pokemon.stats[1].base_stat} ,
                 <b>Defence:</b>  ${pokemon.stats[2].base_stat} ,
                 <b>Sp.Attack:</b>  ${pokemon.stats[3].base_stat} ,
                 <b>Sp.Defence:</b>  ${pokemon.stats[4].base_stat} ,
                <b> Speed:</b> ${pokemon.stats[5].base_stat} , `;
        abilities.innerHTML = ` <b>Abilities:</b> ${pokemon.abilities.join(
          ", "
        )}`.trim();
        genders.innerHTML = ` <b>Gender:</b> ${pokemon.genders}`.trim();
        category.innerHTML = ` <b>Category:</b> ${pokemon.category} Pokemon`.trim();
        const evolutionsText=document.createElement("p")
        evolutionsText.textContent="Evolution Chain: "
        evolutionsText.className="evolution-chain-text"
        evolutionsTextDiv.appendChild(evolutionsText)
        for (let pic of pokemon.evolutionPics) {
          
          const img = document.createElement("img");
          img.src = pic;
          img.className = "evolution-image";
          evolutions.appendChild(img);
        }
      }
    });
  }, 2000);
})})
