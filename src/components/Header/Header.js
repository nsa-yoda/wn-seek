import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/icon_256.png";
import { logout } from "../../utils/logout";
import { useSignOut } from "react-auth-kit";

export const Header = () => {
  const signOut = useSignOut();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {window.config.appName}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Left side */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/checkout">
              Checkout
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/messages">
              Messages
            </Nav.Link>
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/blog/f0e16c3a-adae-4881-9920-93b5a591e3d2">
              Blog 1
            </Nav.Link>
            <Nav.Link as={Link} to="/error">
              Error
            </Nav.Link>
          </Nav>

          {/* Right side */}
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => signOut()}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
