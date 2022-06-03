let pokemonRepository = (function() {
	let repository = [{
		name: 'Bulbasaur',
		height: 7,
		types: ['grass', 'poison']
	}, {
		name: 'Ivysaur',
		height: 10,
		types: ['monster', 'grass']
	}, {
		name: "Charizard",
		height: 1.7,
		types: ['fire', 'flying'],
	}, {
		name: "Squirtle",
		height: 1,
		types: ["water"],
	}, {
		name: 'Charmander',
		height: 6,
		types: ['monster', 'dragon']
	}];

	function add(pokemon) {
		repository.push(pokemon);
	}

	function getAll() {
		return repository;
	}

	function addListItem(pokemon) {
		let pokemonList = document.querySelector(".pokemon-list");
		let listpokemon = document.createElement("li");
		let button = document.createElement("button");
		button.innerText = pokemon.name;
		button.classList.add("button1");
		listpokemon.appendChild(button);
		pokemonList.appendChild(listpokemon);
		addEvent(button, pokemon);
  }
  function addEvent(button,pokemon) {
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }
    function showDetails(pokemon) {
        console.log(pokemon);
	}
	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};
})();

pokemonRepository.add({
	name: "Pikachu",
	height: 0.3,
	types: ["electric"]
});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
	pokemonRepository.addListItem(pokemon);
});
