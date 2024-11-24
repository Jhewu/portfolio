import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface Props {
  pages: {name: string; path: string}[];  
  // List containing name and path
}

function NavBar({ pages }: Props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Jun Yi He Wu</Navbar.Brand>
          <Nav className="me-auto">
            {pages.map((pages, index) => (
              <Nav.Link key={index} href={pages.path}> {[pages.name]}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;