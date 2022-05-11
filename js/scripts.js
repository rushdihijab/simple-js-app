const pokemonList = [{
	name: 'Bulbasaur',
	height: 7,
	types: ['grass', 'poison'],
}, {
	name: 'Ivysaur',
	height: 10,
	types: ['monster', 'grass'],
}, {
	name: 'Charmander',
	height: 6,
	types: ['monster', 'dragon'],
}];
for (let i = 0; i < pokemonList.length; i++) {
	if (pokemonList[i].height < 10 && pokemonList[i].height > 6) {
		document.write(pokemonList[i].name + " ( Height: ", pokemonList[i].height + ")" + "<br/>");
	} else if (pokemonList[i].height <= 6) {
		document.write(pokemonList[i].name + " ( Height: ", pokemonList[i].height + ")" + "<br/>");
	} else {
		document.write(pokemonList[i].name + " (Height: ", pokemonList[i].height + ")" + " -Wow, that’s big!<br/>");
	}
}
