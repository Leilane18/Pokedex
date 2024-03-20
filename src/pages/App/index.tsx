import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";

export function App() {
  return (
    <Container>
      <Header />

      {/* outlet is main */}
      <Outlet />

      <Footer />
    </Container>
  );
}
