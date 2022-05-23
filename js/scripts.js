let pokemonRepository = (function() {
	let pokemonList = [{
		name: 'Bulbasaur',
		height: 7,
		types: ['grass', 'poison']
	}, {
		name: 'Ivysaur',
		height: 10,
		types: ['monster', 'grass']
	}, {
		name: 'Charmander',
		height: 6,
		types: ['monster', 'dragon']
	}];

	Object.keys(pokemonList).forEach(function(i) {
		console.log(pokemonList[i]);
	});

	return {
		add: function(pokemon) {
			pokemonList.push(pokemon);
		},
		getAll: function() {
			return pokemonList;
		}
	};
})();
console.log(pokemonRepository.getAll());
pokemonRepository.add({
	name: 'Butterfly',
	height: 3,
	types: ['bug', 'flying']
});
console.log();
(pokemonRepository.getAll());
