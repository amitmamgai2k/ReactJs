import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import {Oval} from 'react-loader-spinner'

function PokemonDetails({ pokemonName }) {
  const { id } = useParams();
  const [pokemon] = usePokemonDetails(id, pokemonName);

  if (!pokemon.name) {
    return <div className="mt-20">
      <Oval
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
                     />
    </div>; // Show loading state while data is being fetched
  }

  return (
    <div className="mt-5 flex flex-col items-center">
      <img
        className="bg-gray-300 m-2 p-2 hover:bg-red-100 hover:drop-shadow-2xl border-solid border-1 border-black h-[200px] mb-4 rounded-[50%]"
        src={pokemon.image}
        alt={`${pokemon.name} image`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MXyMqcEJ6Se0SCWcYCKZTQ.jpeg"; // Fallback image
        }}
      />

      <table className="table-auto w-full border-solid border-2 m-5 p-10 border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Pokemon Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Height</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Weight</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Types</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 capitalize">{pokemon.name}</td>
            <td className="border border-gray-300 px-4 py-2">{pokemon.height}</td>
            <td className="border border-gray-300 px-4 py-2">{pokemon.weight}</td>
            <td className="border border-gray-300 px-4 py-2 capitalize">
              {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mb-10">
        {pokemon.types && pokemon.similarPokemons && (
          <div className="capitalize">
            <span className="font-semibold text-xl font-mono">
              more {pokemon.types[0]} type pokemons
            </span>
            <ul  className="grid grid-cols-5 gap-10 gap-x-20 gap-y-10 border-solid font-semibold hover:drop-shadow-2xl mt-5 border-2 p-3 list- pl-5">
              {pokemon.similarPokemons.map((p) => (
                <li key={p.pokemon.name}>
                  <div className="">
                    <span>{p.pokemon.name}</span>
                    <img
                      className="bg-yellow-200 h-16 rounded-full mt-4"
                      src={p.pokemon.image}
                      alt={`${p.pokemon.name} image`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MXyMqcEJ6Se0SCWcYCKZTQ.jpeg"; // Fallback image for similar Pokémon
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonDetails;
