import axios from "axios";

import { useEffect, useState } from "react";

function usePokemonDetails(id, pokemonName) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonListState, setPokemonListState] = useState({});

  async function downloadPokemon() {
    try {
      let response;
      if (pokemonName) {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      } else {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }

      const data = response.data;

      // Debug: Log fetched data
      console.log("Fetched Pokémon data:", data);

      // Get the first type's name
      const typeName = data.types ? data.types[0].type.name : "";

      // Fetch similar Pokémon of the same type
      const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
      
      // Construct the list of similar Pokémon with images
      const similarPokemons = pokemonOfSameTypes.data.pokemon.slice(0, 20).map((poke) => {
        const id = poke.pokemon.url.split("/")[6]; // Extract Pokémon ID from URL
        return {
          pokemon: {
            name: poke.pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`, // Official artwork URL
          },
        };
      });

      // Debug: Log similar Pokémons
      console.log("Similar Pokémons:", similarPokemons);

      // Set the Pokémon details
      setPokemon({
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default || data.sprites.front_default, // Use official artwork first, fallback to default
        weight: data.weight,
        height: data.height,
        types: data.types.map((t) => t.type.name),
        similarPokemons: similarPokemons,
      });

      setPokemonListState({ ...pokemonListState, type: typeName });
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  }

  useEffect(() => {
    downloadPokemon();
  }, []);

  return [pokemon];
}

export default usePokemonDetails;
