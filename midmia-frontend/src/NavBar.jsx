import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function NavBar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand"><h3><b>MidMia</b></h3></Link>
          <Nav className="me-auto">
            <Link to="/ChampionState" className="nav-link" style={{ marginRight: 25, marginLeft: 25 }}>챔피언 통계</Link>
            <Nav.Link href="#pricing" style={{ marginRight: 25, marginLeft: 25 }}>소환사 랭킹</Nav.Link>
            <Nav.Link href="/Champion" style={{ marginRight: 25, marginLeft: 25 }}>챔피언</Nav.Link>
            <Nav.Link href="#a" style={{ marginRight: 25, marginLeft: 25 }}>커뮤니티</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#b" style={{ marginRight: 25, marginLeft: 25 }}>로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
