const $pokemonFilterAll = document.getElementById("pokemon-filter-all");
const $pokemonFilterCaught = document.getElementById("pokemon-filter-caught");
const $pokemonFilterFree = document.getElementById("pokemon-filter-free");
const $pokemonGallery = document.getElementById("pokemon-gallery");
const $loadMoreButton = document.getElementById("load-more");
const $pokemonDetails = document.getElementById("pokemon-details");
const $pokemonName = document.getElementById("pokemon-name");
const $pokemonImage = document.getElementById("pokemon-image");
const $pokemonInfo = document.getElementById("pokemon-info");
const $closeDetailsButton = document.getElementById("close-details");

const pokemonCaughtClass = "pokemon-caught";

let displayCaught = true;
let displayFree = true;

let offset = 0;
const limit = 20;
const caughtPokemon = JSON.parse(localStorage.getItem("caughtPokemon")) || [];
const loadedPokemons = [];

//get all pokemons fron html, it will be replaced by pokemons from the API later on
// const pokemonCards = document.querySelectorAll(".pokemon-card");

//Update navigation color and pokemon list based on selection
$pokemonFilterAll.addEventListener("click", function () {
  displayCaught = true;
  displayFree = true;
  updatePokemonList();
  $pokemonFilterAll.classList.add("active");
  $pokemonFilterCaught.classList.remove("active");
  $pokemonFilterFree.classList.remove("active");
  $loadMoreButton.classList.remove("hidden");
});

$pokemonFilterCaught.addEventListener("click", function () {
  displayCaught = true;
  displayFree = false;
  updatePokemonList();
  $pokemonFilterAll.classList.remove("active");
  $pokemonFilterCaught.classList.add("active");
  $pokemonFilterFree.classList.remove("active");
  $loadMoreButton.classList.add("hidden");
});

$pokemonFilterFree.addEventListener("click", function () {
  displayCaught = false;
  displayFree = true;
  updatePokemonList();
  $pokemonFilterAll.classList.remove("active");
  $pokemonFilterCaught.classList.remove("active");
  $pokemonFilterFree.classList.add("active");
  $loadMoreButton.classList.remove("hidden");
});

//Update the pokemon list based on filter and pokemon status
function updatePokemonList() {
  if (displayCaught && displayFree) {
    displayPokemonList(loadedPokemons);
  } else if (displayCaught && !displayFree) {
    displayPokemonList(caughtPokemon);
  } else {
    const freePokemons = [];
    for (const pokemon of loadedPokemons) {
      if (getCaughtPokemonIndex(pokemon) == -1) {
        freePokemons.push(pokemon);
      }
    }
    displayPokemonList(freePokemons);
  }
}

function fetchPokemonList() {
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
      loadedPokemons.push(...data.results);
      updatePokemonList();
    });
}

function displayPokemonList(pokemonList) {
  $pokemonGallery.innerHTML = "";
  for (const pokemon of pokemonList) {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    pokemonCard.innerText = pokemon.name;

    const pokemonId = parseUrl(pokemon.url);
    const pokemonThumbnail = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    const img = document.createElement("img");
    img.src = pokemonThumbnail;
    pokemonCard.appendChild(img);

    pokemonCard.addEventListener("click", () => fetchPokemonDetails(pokemon));

    //display with the proper color depending if free or not
    if (getCaughtPokemonIndex(pokemon) > -1) {
      pokemonCard.classList.add(pokemonCaughtClass);
    } else {
      pokemonCard.classList.remove(pokemonCaughtClass);
    }

    $pokemonGallery.appendChild(pokemonCard);
  }
}

function fetchPokemonDetails(pokemon) {
  fetch(pokemon.url)
    .then((response) => response.json())
    .then((data) => displayPokemonDetails(data, pokemon));
}

function displayPokemonDetails(data, pokemon) {
  // remove the button if already exists to create a new one for this pokemon
  const $catchReleaseButton = document.getElementById("catch-release-button");
  if ($catchReleaseButton) {
    $pokemonDetails.removeChild($catchReleaseButton);
  }

  //Create the catch/release button
  const catchReleaseButton = document.createElement("button");
  catchReleaseButton.id = "catch-release-button";
  if (getCaughtPokemonIndex(pokemon) > -1) {
    catchReleaseButton.innerText = "Release";
  } else {
    catchReleaseButton.innerText = "Catch";
  }

  catchReleaseButton.addEventListener("click", function () {
    toggleCatchPokemon(pokemon);
  });

  $pokemonDetails.insertBefore(catchReleaseButton, $closeDetailsButton);

  // Update pokemon card details
  $pokemonName.innerText = pokemon.name;
  $pokemonImage.src = data.sprites.other["official-artwork"].front_default;
  $pokemonInfo.innerHTML = `
      <p>Types: ${data.types.map((type) => type.type.name).join(", ")}</p>
      <p>Abilities: ${data.abilities
        .map((ability) => ability.ability.name)
        .join(", ")}</p>
  `;

  $pokemonDetails.classList.remove("hidden");
}

function toggleCatchPokemon(pokemon) {
  console.log(caughtPokemon);
  const index = caughtPokemon.indexOf(pokemon);
  console.log("index: " + index + ", name= " + pokemon.name);
  if (index > -1) {
    caughtPokemon.splice(index, 1); // remove the pokemon name from the list of caught pokemons
  } else {
    caughtPokemon.push(pokemon);
  }
  localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon));

  console.log(caughtPokemon);
  // Update the card in the gallery for the current Pokémon
  updatePokemonList();

  $pokemonDetails.classList.add("hidden");
}

$loadMoreButton.addEventListener("click", () => {
  offset += limit;
  fetchPokemonList();
});

$closeDetailsButton.addEventListener("click", function () {
  $pokemonDetails.classList.add("hidden");
});

function parseUrl(url) {
  return url.substring(
    url.substring(0, url.length - 2).lastIndexOf("/") + 1,
    url.length - 1
  );
}

function getCaughtPokemonIndex(pokemon) {
  for (const index in caughtPokemon) {
    if (caughtPokemon[index].name === pokemon.name) {
      return index;
    }
  }
  return -1;
}

// Initial Loading of pokemons
fetchPokemonList();
