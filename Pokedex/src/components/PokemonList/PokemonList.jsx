import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
import { useEffect } from "react";
import {Oval} from 'react-loader-spinner'
function PokemonList() {
    const [pokemonListState, setPokemonListState] = usePokemonList(false);
    useEffect(() => {
        console.log("render");
    });
    return (
        <div className="pokemon-list-wrapper mx-[2rem] my-auto flex flex-col items-center "  >
            <div className="border-solid border-1 hover:drop-shadow-2xl flex flex-row flex-wrap  justify-evenly ">
                {pokemonListState.isLoading ?  (<Oval
                    height={40}
                    width={40}
                    color="#3498db"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#f3f3f3"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                     />) : pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)}
            </div>
            <div className="inline-flex mt-10 mb-10  hover:drop-shadow-2xl">
                <button className="bg-gray-200 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-l"
                    disabled={pokemonListState.prevUrl == null}
                    onClick={() => {
                        const urlToSet = pokemonListState.prevUrl;
                        setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
                    }}
                >
                    Prev
                </button>
                <button
                className="bg-gray-200 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-r"
                    disabled={pokemonListState.nextUrl == null}
                    onClick={() => {
                        console.log(pokemonListState);
                        const urlToSet = pokemonListState.nextUrl;
                        setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default PokemonList;
