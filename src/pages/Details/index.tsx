import { useParams } from "react-router-dom";
import { Container } from "./style";

export function Details() {
  const { name } = useParams();
  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
}
