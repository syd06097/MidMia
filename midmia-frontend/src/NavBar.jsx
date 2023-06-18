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
          <Link to="/" className="nav-link" style={{ marginRight: 25, marginLeft: 25 }}>챔피언</Link>
            <Link to="/ChampionState" className="nav-link" style={{ marginRight: 25, marginLeft: 25 }}>챔피언 통계</Link>
            <Link to="/Summoner" className="nav-link" style={{ marginRight: 25, marginLeft: 25 }}>소환사 랭킹</Link>{/*Summoner이건 왜 안되는거야 */}
            <Link to="/" className="nav-link" style={{ marginRight: 25, marginLeft: 25 }}>커뮤니티</Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="" className="nav-link" style={{ marginRight: 25, marginLeft: 25 }}>로그인</Link>
            {/* <Nav.Link href="#b" style={{ marginRight: 25, marginLeft: 25 }}>로그인</Nav.Link>*/}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
