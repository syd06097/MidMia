import React from 'react';
import headerBgImage from './image/headerbg-2b1e421b.jpg';// 상단 메뉴 밑 이미지 배경
import styles from "./css/MenuBackimage.module.css";//이거 왜 모듈 붙이면 안되지
const mainStyle = {
  backgroundImage: `url(${headerBgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '300px',
  justifyContent: 'center',
  alignItems: 'center',
};//배경이미지이며 챔피언 통계와 소환사 랭킹에 사용됨


function MenuBackimage({name}) {
  return (
    <div>
      <div style={mainStyle}>
        <div className={styles.back}>
          <h3>{name}</h3>{/* 홈페이지화면에 따라 이름 넣어줌 */}
        </div>
      </div>
    </div>
  );
}
export default MenuBackimage;
