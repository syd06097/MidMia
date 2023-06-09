import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../NavBar';//상단 메뉴바
import MenuBackimage from '../MenuBackimage';//배경
import styles from "../css/Login.module.css";
import axios from 'axios';
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

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
    axios.post("http://127.0.0.1:8000/community/login/", {
      username: username,
      password: password
    })
      .then((response) => {
        if (response.status === 200) {
          // 로그인이 성공적으로 완료된 경우에 대한 처리
          console.log("로그인 성공");
          // 필요한 리다이렉션 또는 다음 동작을 수행
        } else {
          // 로그인이 실패한 경우에 대한 처리
          console.error("로그인 실패");
          throw new Error("로그인 실패");
        }
      })
      .catch((error) => {
        console.error("네트워크 오류:", error);
      });
    console.log('Username:', username);
    console.log('Password:', password);
    // 여기에서 실제 로그인 처리를 구현할 수 있습니다.
  };

  return (
    <div>
      <div style={mainStyle}>
        <NavBar />{/* 상단 메뉴바 */}
        <MenuBackimage name="로그인" />{/* 상단의 이미지 배경 */}
        <div style={{textAlign:'center' ,marginTop:'50px'}}>
          <b style={{ color: 'white', fontSize: '20px', textAlign:'center' }}>MidMia에 로그인</b>
        </div>
        <div className={styles.Flogin}>
          <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
            <div style={{textAlign:'center',color:'rgb(100,100,100)',marginBottom:'10px'}}>
              아이디 로그인
            </div>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="text"
                placeholder="아이디을 입력하세요"
                value={username}
                onChange={handleUsernameChange}
                className={styles.Fcontents}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={handlePasswordChange}
                className={styles.Fcontents}
              />
            </Form.Group>
            <Button style={{ width: '300px', marginTop:'15px' }} variant="primary" type="submit">
              로그인
            </Button>
            <div style={{textAlign:'center', marginTop:'10px'}}>
              <span style={{borderRight:'1px solid rgb(100,100,100)'}}><Link to="/Password" className={styles.link}>비밀번호 찾기</Link></span>
              <Link to="/Join" className={styles.link}>이메일 회원가입</Link>
            </div>
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

export default Login;