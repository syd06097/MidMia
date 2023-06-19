import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../NavBar';//상단 메뉴바
import MenuBackimage from '../MenuBackimage';//배경
import Sidebar from "../component/sidebar"; //사이드바
import PostList from "../component/postlist"; //게시물 리스트
import Pagination from 'react-bootstrap/Pagination';// 홈페이지 글 넘기는 버튼


const mainStyle = {
  backgroundColor: 'rgb(016,019,028)', // 배경이미지가 없는 공간의 배경색
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

const page = {
  width: '80%',
  margin: '80px auto',
  position: 'center',
  transform: 'translate(42%,0%)'/*옆에 메뉴 박고 다시 수정*/
}


function Community() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div style={mainStyle}>
        <NavBar />{/* 상단 메뉴바 */}
        <MenuBackimage name="커뮤니티" />{/* 상단의 이미지 배경 */}
        <Sidebar onCategoryChange={handleCategoryChange}/>
        <PostList category={selectedCategory} />
        <ListGroup style={pagebottom}>
          <small style={{ color: 'white' }}>© 2023-2023 MidMia  isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.<br />
            League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</small>
        </ListGroup>
      </div>
    </div>
  );
}

export default Community;