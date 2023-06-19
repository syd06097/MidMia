import React,{useState} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { IoMdSearch } from 'react-icons/io';//아이콘 사용
import headerBgImage from './image/headerbg-2b1e421b.jpg';// 상단 메뉴 밑 이미지 배경
import ImageSlider from './ImageSlider';// 카드 슬라이드
import SearchForm from './component/searchForm';

const mainStyle = {
  backgroundImage: `url(${headerBgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function Backimage({ children }) {


  return (
    <div>
      <div style={mainStyle}>
        { children }
      </div>
      <h2 style={{ color: 'white', marginTop: '20px', marginBottom: '20px' }}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주목할 만한 챔피언</b><small style={{ fontSize: 16 }}> (13.7패치 기준)</small></h2>{/* 카드쪽에 추가할 내용 */}
      <div>
        <ImageSlider />{/*이미지 배경 안에 넣으면 배경 크기 상관없이 계속 밀려남 */}
      </div>

    </div>
  );
}

export default Backimage;
