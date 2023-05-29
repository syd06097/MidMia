import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Card, Button } from 'react-bootstrap';

const cardData = [
  { id: 1, title: 'Card 1', text: 'Text 1', image: './dog.jpg' },
  { id: 2, title: 'Card 2', text: 'Text 2', image: './dog.jpg' },
  { id: 3, title: 'Card 3', text: 'Text 3', image: './dog.jpg' },
  { id: 4, title: 'Card 4', text: 'Text 3', image: './dog.jpg' },
  { id: 5, title: 'Card 5', text: 'Text 3', image: './dog.jpg' },
  { id: 6, title: 'Card 6', text: 'Text 3', image: './dog.jpg' },
  { id: 7, title: 'Card 7', text: 'Text 3', image: './dog.jpg' },
  // 추가적인 카드 데이터
];

function ImageSlider() {
  const swiperParams = {
    spaceBetween: '0', // 카드 간의 간격
    slidesPerView: '6', // 한 번에 보여줄 슬라이드 수
  };

  return (
    <Swiper {...swiperParams}>
      {cardData.map((card) => (
        <SwiperSlide key={card.id}>
          <Card style={{ width: '13rem', color:'white' , textAlign:'center'}}>
            <Card.Img variant="top" src="dog.jpg" style={{objectFit: 'cover', height: '100%' }}/>
            <Card.Body style={{backgroundColor: 'rgb(033, 033, 033)'}}>
              <Card.Title style={{ height: '1rem' }}>{<h4>{card.title}</h4>}</Card.Title> 
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
