import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../NavBar';//상단 메뉴바
import MenuBackimage from '../MenuBackimage';//배경
import styles from "../css/Login.module.css";

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const mainStyle = {
  backgroundColor: 'rgb(016,019,028)', // 배경이미지가 없는 공간의 배경색(000,000,102)
  minHeight: '100vh', // 화면 전체 높이로 설정
  overflow: 'hidden', // 스크롤바 숨기기(오른쪽 하얀공간이 생성됨)
};//회색배경

const pagebottom = {
  borderTop: '1px solid rgb(100,100,100)',
  width: '70%',
  display: 'inline-block',
  transform: 'translate(15%,0%)',
  margin: '100px 50px',
  padding: '20px'
}//아래 추가용 스타일

function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
    console.log('Email:', email);
    console.log('Password:', password);
    // 여기에서 실제 로그인 처리를 구현할 수 있습니다.
  };

  return (
    <div>
      <div style={mainStyle}>
        <NavBar />{/* 상단 메뉴바 */}
        <MenuBackimage name="이메일 회원가입" />{/* 상단의 이미지 배경 */}
        <div style={{textAlign:'center' ,marginTop:'50px', marginBottom:'30px'}}>
          <b style={{ color: 'white', fontSize: '20px', textAlign:'center' }}>MidMia에 이메일 계정으로 회원가입</b>
        </div>
        <div className={styles.Flogin}>
          <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
            <Form.Group controlId="formEmail">
            <Form.Label className={styles.Flabel}>이메일</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={styles.Fcontents}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
            <Form.Label className={styles.Flabel}>비밀번호</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className={styles.Fcontents}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
            <Form.Label className={styles.Flabel}>비밀번호 확인</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className={styles.Fcontents}
              />
            </Form.Group>
            <Button style={{ width: '300px', marginTop:'30px' }} variant="primary" type="submit">
              회원가입
            </Button>
          </Form>
        </div>
        <ListGroup style={pagebottom}>
          <small style={{ color: 'white' }}>© 2023-2023 MidMia  isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.<br />
            League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</small>
        </ListGroup>
      </div>
    </div>
  );
}

export default Join;