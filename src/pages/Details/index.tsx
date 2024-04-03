import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./style";
import { useQueryPokemonDetails } from "../../hooks/useQueryPekemonDetails";
import pokeball from "../../assets/pokeball.png";
import { CardType } from "../../components/CardType";

export function Details() {
  const { name } = useParams();
  const { data, isLoading, error } = useQueryPokemonDetails(name!);

  const navigate = useNavigate();

  if (error) console.error(error);

  return (
    <Container>
      {isLoading && <span className="loading">Loading...</span>}

      {!isLoading && error && <span className="loading">Error...</span>}

      {data && (
        <div className="boxDetails">
          <button className="buttonBackPage" onClick={() => navigate(-1)}>
            &lt; voltar
          </button>

          <div className="pokemonImage">
            <img
              src={data.sprites.other["official-artwork"].front_default || pokeball}
              alt={data.name}
            />
          </div>

          <div className="boxStatus">
            <strong>
              #{data.id} {data.name[0].toUpperCase() + data.name.substring(1)}
            </strong>

            <div className="sizePokemon">
              <span>Height: {data.height}0cm</span>
              <span>Weight: {data.weight / 10}kg</span>
            </div>

            <div className="boxTypes">
              {data.types.map((type) => {
                return <CardType key={type.type.name} type={type.type.name} size={16} />;
              })}
            </div>
          </div>

          <div className="boxStats">
            {data.stats.map((stat) => {
              return (
                <div className="stats">
                  <span className="statsName">
                    {stat.stat.name}
                  </span>

                  <progress max={200} value={stat.base_stat} />

                  <span className="statsValue">
                    {stat.base_stat}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
}
