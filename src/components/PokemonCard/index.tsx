import { Pokemon } from "../../@types/pokemon";

type Props = {
  pokemon: Pokemon;
};

export function PokemonCard({ pokemon }: Props) {
  return (
    <>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <strong>
        #{pokemon.id} {pokemon.name}
      </strong>
    </>
  );
}
