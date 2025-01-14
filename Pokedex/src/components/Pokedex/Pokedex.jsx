import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";


import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
    const [searchTerm, setSearchterm] = useState("");

    return (
        <div className=" flex flex-col">
            <Search updateSearchTerm={setSearchterm} />
            {!searchTerm ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    );
}

export default Pokedex;
