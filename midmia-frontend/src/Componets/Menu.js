import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Navbar style={{ backgroundColor: 'rgb(18,42,67)' }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Button}
              variant={activeTab === '탑' ? 'primary' : 'link'}
              onClick={() => handleTabClick('탑')}
              style={{ marginRight: '10px' }}
            >
              탑
            </Nav.Link>
            <Nav.Link
              as={Button}
              variant={activeTab === '정글' ? 'primary' : 'link'}
              onClick={() => handleTabClick('정글')}
              style={{ marginRight: '10px' }}
            >
              정글
            </Nav.Link>
            <Nav.Link
              as={Button}
              variant={activeTab === '미드' ? 'primary' : 'link'}
              onClick={() => handleTabClick('미드')}
              style={{ marginRight: '10px' }}
            >
              미드
            </Nav.Link>
            <Nav.Link
              as={Button}
              variant={activeTab === '바텀' ? 'primary' : 'link'}
              onClick={() => handleTabClick('바텀')}
              style={{ marginRight: '10px' }}
            >
              바텀
            </Nav.Link>
            <Nav.Link
              as={Button}
              variant={activeTab === '서폿' ? 'primary' : 'link'}
              onClick={() => handleTabClick('서폿')}
              style={{ marginRight: '10px' }}
            >
              서폿
            </Nav.Link>
            <Nav.Link
              as={Button}
              variant={activeTab === '전체' ? 'primary' : 'link'}
              onClick={() => handleTabClick('전체')}
              style={{ marginRight: '10px' }}
            >
              전체
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
