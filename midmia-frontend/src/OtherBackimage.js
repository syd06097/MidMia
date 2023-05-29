import React from 'react';
import headerBgImage from './image/headerbg-2b1e421b.jpg';

const mainStyle = {
    backgroundImage: `url(${headerBgImage})`,
    backgroundSize: 'cover', // 세로 크기를 늘리기 위해 "auto 100%"로 설정
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '300px', // 최소 세로 크기를 지정 (원하는 크기로 조정)
    // 다른 스타일 속성들을 필요에 따라 추가할 수 있습니다.
};

function OtherBackimage(props) {
    return (
        <div style={mainStyle}>
            
        </div>

    );
}

export default OtherBackimage;