import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Curriculo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Badge pill bg="dark">
                Imformações Pessoais
              </Badge>{" "}
            </Nav.Link>
            <Nav.Link href="#Formação">
              <Badge pill bg="dark">
                Formação acadêmica
              </Badge>{" "}
            </Nav.Link>
            <Nav.Link href="#Profissionais">
              <Badge pill bg="dark">
                Dados Profissionais
              </Badge>{" "}
            </Nav.Link>
            <Nav.Link href="#Repositorio">
              <Badge pill bg="dark">
                Repositórios
              </Badge>{" "}
            </Nav.Link>
            <Nav.Link href="Cursos">
              <Badge pill bg="dark">
                Cursos Complementares
              </Badge>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
