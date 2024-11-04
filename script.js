const $pokemonFilterAll = document.getElementById("pokemon-filter-all");
const $pokemonFilterCaught = document.getElementById("pokemon-filter-caught");
const $pokemonFilterFree = document.getElementById("pokemon-filter-free");
const $loadMoreButton = document.getElementById("load-more");
const $pokemonDetails = document.getElementById("pokemon-details");
const $closeDetailsButton = document.getElementById("close-details");

const pokemonCaughtClass = "pokemon-caught";

//get all pokemons fron html, it will be replaced by pokemons from the API later on
const pokemonCards = document.querySelectorAll(".pokemon-card");

// set a list of catched pokemons that can be updated
const caughtPokemon = [
  "caterpie",
  "raticate",
  "bulbasaur",
  "squirtle",
  "beedrill",
  "charmander",
  "charmeleon",
];

let displayCaught = true;
let displayFree = true;

//Update navigation color and pokemon list based on selection
$pokemonFilterAll.addEventListener("click", function () {
  displayCaught = true;
  displayFree = true;
  updatePokemonList();
  $pokemonFilterAll.classList.add("active");
  $pokemonFilterCaught.classList.remove("active");
  $pokemonFilterFree.classList.remove("active");
});

$pokemonFilterCaught.addEventListener("click", function () {
  displayCaught = true;
  displayFree = false;
  updatePokemonList();
  $pokemonFilterAll.classList.remove("active");
  $pokemonFilterCaught.classList.add("active");
  $pokemonFilterFree.classList.remove("active");
});

$pokemonFilterFree.addEventListener("click", function () {
  displayCaught = false;
  displayFree = true;
  updatePokemonList();
  $pokemonFilterAll.classList.remove("active");
  $pokemonFilterCaught.classList.remove("active");
  $pokemonFilterFree.classList.add("active");
});

//Update the pokemon list based on filter and pokemon status
function updatePokemonList() {
  for (let i = 0; i < pokemonCards.length; i++) {
    let pokemonCard = pokemonCards[i];
    let name = pokemonCard.textContent.trim();

    // display the pokemon card only when filter conditions are met
    if (
      (displayCaught && caughtPokemon.includes(name)) ||
      (displayFree && !caughtPokemon.includes(name))
    ) {
      //display with the proper color depending if free or not
      if (caughtPokemon.includes(name)) {
        pokemonCard.classList.add(pokemonCaughtClass);
      } else {
        pokemonCard.classList.remove(pokemonCaughtClass);
      }
      pokemonCard.classList.remove("hidden");
    } else {
      pokemonCard.classList.add("hidden");
    }
  }
}

function fetchPokemonList() {
  //I will add API call logic to get pokemons
  displayPokemonList(null); // param will be the porkemon list
}

function displayPokemonList(pokemonList) {
  for (let i = 0; i < pokemonCards.length; i++) {
    let pokemonCard = pokemonCards[i];
    let name = pokemonCard.textContent.trim();
    pokemonCard.addEventListener("click", function () {
      fetchPokemonDetails("pokemon_detail_url", name);
    });
  }
}

function fetchPokemonDetails(url, name) {
  //API logic to get details of the pokemon
  displayPokemonDetails(null, name); // params will contain fetched details and pokemon name
}

function displayPokemonDetails(data, name) {
  // remove the button if already exists to create a new one for this pokemon
  const $catchReleaseButton = document.getElementById("catch-release-button");
  if ($catchReleaseButton) {
    $pokemonDetails.removeChild($catchReleaseButton);
  }

  const catchReleaseButton = document.createElement("button");
  catchReleaseButton.id = "catch-release-button";
  if (caughtPokemon.includes(name)) {
    catchReleaseButton.innerText = "Release";
  } else {
    catchReleaseButton.innerText = "Catch";
  }

  catchReleaseButton.addEventListener("click", function () {
    toggleCatchPokemon(name);
  });

  $pokemonDetails.insertBefore(catchReleaseButton, $closeDetailsButton);

  //to display details
  $pokemonDetails.classList.remove("hidden");
}

function toggleCatchPokemon(name) {
  const index = caughtPokemon.indexOf(name);
  if (index > -1) {
    caughtPokemon.splice(index, 1); // remove the pokemon name from the list of caught pokemons
  } else {
    caughtPokemon.push(name);
  }

  // Update the card in the gallery for the current Pokémon
  updatePokemonList();

  $pokemonDetails.classList.add("hidden");
}

$loadMoreButton.addEventListener("click", function () {
  alert("Loading more will be possible after API implementation");
  //fetchPokemonList();
});

$closeDetailsButton.addEventListener("click", function () {
  $pokemonDetails.classList.add("hidden");
});

// Initial Loading of pokemons
fetchPokemonList();
