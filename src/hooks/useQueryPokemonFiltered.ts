import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";

async function getPokemonFiltered(name: string) {
  const { data } = await API.get(`/pokemon?limit=10000&offset=0`);
  const allPokemon = [...data.results];

  const filteredPokemon = allPokemon.filter((pokemon) => {
    if (name) return pokemon.name.includes(name.toLowerCase());
  });

  const pokemonPromise = filteredPokemon.map(async (pokemon: { url: string }) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data;
  });

  const pokemonData = await Promise.all(pokemonPromise);

  return pokemonData as Pokemon[];
}

export function useQueryPokemonFiltered(name: string) {
  const query = useQuery({
    queryKey: [`getPokemonFiltered`, name],
    queryFn: () => getPokemonFiltered(name),
  });

  return query;
}
