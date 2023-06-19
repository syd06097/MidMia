import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../NavBar';//상단 메뉴바
import Backimage from '../Backimage';//배경
import MainCommunity from '../MainCommunity';//하단 게시판
import headerBgImage from '../image/headerbg-2b1e421b.jpg';//image폴더에 있는 이미지 임폴트
//import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import SearchForm from '../component/searchForm';

const mainStyle = {
  backgroundColor: 'rgb(033, 033, 033)', // 배경이미지가 없는 공간의 배경색
  minHeight: '100vh', // 화면 전체 높이로 설정
};//회색배경

const pagebottom = {
  borderTop: '1px solid rgb(100,100,100)',
  width: '70%',
  display: 'inline-block',
  transform: 'translate(15%,0%)',
  margin:'100px 50px',
  padding:'20px'
}//아래 추가용 스타일

function Main() {
  return (
    <div>
      <div style={mainStyle}>
        <NavBar />{/* 상단 메뉴바 */}
        <Backimage>{/* 상단의 이미지 배경 */}
        <SearchForm/>
        </Backimage>
        <MainCommunity/>{/* 메인화면 커뮤니티 */}
        <ListGroup style={pagebottom}>
          <small style={{color:'white'}}>© 2023-2023 MidMia  isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.<br/>
            League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</small>
        </ListGroup>
      </div>
    </div>
  );
}

export default Main;
