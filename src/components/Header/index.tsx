import { Link } from "react-router-dom";
import { Container } from "./style";
import pokemonLogo from "../../assets/pokemon-logo.png";

export function Header() {
  return (
    <Container>
      <Link to={"/"}>
        <img
          src={pokemonLogo}
          alt="logo amerela com borda azul escrita o texto pokémon"
        />
      </Link>

      <form>
        <section>
          <label htmlFor="inputSearch" hidden>
            Pesquisar Pokémon
          </label>

          <input type="text" id="inputSearch" placeholder="Pesquisar Pokémon" />
        </section>

        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}
