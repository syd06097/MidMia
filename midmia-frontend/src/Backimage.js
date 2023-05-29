import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { IoMdSearch } from 'react-icons/io';//아이콘 사용
import headerBgImage from './image/headerbg-2b1e421b.jpg';// 상단 메뉴 밑 이미지 배경
import ImageSlider from './ImageSlider';// 카드 슬라이드

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

function Backimage() {
  const handleSearch = (e) => {
    e.preventDefault();
    // 검색 로직 구현
    // 검색어는 e.target.elements.search.value를 사용하여 가져올 수 있음
    // 예시: console.log(e.target.elements.search.value);
  };

  return (
    <div>
      <div style={mainStyle}>
        <Form inline onSubmit={handleSearch}>
          <div style={{ display: 'flex' }}>
            <FormControl type="text" placeholder="소환자명" name="search" style={{marginRight: '0px', width: '600px' }} />
            <Button variant="outline-success" type="submit">
              <IoMdSearch />
            </Button>
          </div>
        </Form>          
      </div>
      <h2 style={{color:'white' ,marginTop:'20px',marginBottom:'20px'}}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주목할 만한 챔피언</b><small style={{ fontSize: 16 }}> (13.7패치 기준)</small></h2>{/* 카드쪽에 추가할 내용 */}
      <div>
        <ImageSlider/>{/*이미지 배경 안에 넣으면 배경 크기 상관없이 계속 밀려남 */}
      </div>
      
    </div>
  );
}

export default Backimage;
