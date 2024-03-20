import { useQuery } from "@tanstack/react-query";

export function useQueryPokemonPage() {
  function getPokemonPage() {
    return "Get Pokemon Page";
  }

  const query = useQuery({
    queryKey: [`getPokemonPage`],
    queryFn: () => getPokemonPage(),
  });

  return {
    ...query,
  };
}
