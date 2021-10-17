async function fetchData(e) {
  let inputValue = document.getElementById("input__search__text").value;
  const pokemonText = document.getElementById("pokemon__text");
  const pokemonImg = document.getElementById("pokemon__img");

  console.log(inputValue);
  if (inputValue == "") {
    pokemonText.innerHTML = "No ingresaste ningun nombre";
    pokemonImg.src = "./img/ash.png";
    pokemonText.classList.remove("container__pokemon-search__text__encontrado");
    pokemonText.classList.add("container__pokemon-search__text__no-encontrado");
  } else {
    inputValue = inputValue.toLowerCase();
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);

    if (data.status == 200) {
      const json = await data.json();
      pokemonText.innerHTML = json.name;
      pokemonImg.src = json.sprites.front_default;
      pokemonText.classList.remove(
        "container__pokemon-search__text__no-encontrado"
      );
      pokemonText.classList.add("container__pokemon-search__text__encontrado");
    } else if (data.status == 404) {
      pokemonText.innerHTML = "No encuentro ese pokemon en mi lista.";
      pokemonImg.src = "./img/ash.png";
      pokemonText.classList.remove(
        "container__pokemon-search__text__encontrado"
      );
      pokemonText.classList.add(
        "container__pokemon-search__text__no-encontrado"
      );
    } else {
      pokemonText.innerHTML = "ERROR";
      pokemonImg.src = "./img/ash.png";
      pokemonText.classList.remove(
        "container__pokemon-search__text__encontrado"
      );
      pokemonText.classList.add(
        "container__pokemon-search__text__no-encontrado"
      );
    }
  }

  cleanInputText();
}

function cleanInputText() {
  document.getElementById("input__search__text").value = "";
}
