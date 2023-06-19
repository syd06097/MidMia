import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Card, Button } from 'react-bootstrap';

const cardData = [
  { id: 1, title: 'Card 1', text: 'Text 1', image: 'https://media.discordapp.net/attachments/1037323910087180321/1120326462608777226/1.png?width=266&height=446' },
  { id: 2, title: 'Card 2', text: 'Text 2', image: 'https://media.discordapp.net/attachments/1037323910087180321/1120326462847864882/1.png?width=267&height=446' },
  { id: 3, title: 'Card 3', text: 'Text 3', image: 'https://media.discordapp.net/attachments/1037323910087180321/1120326463057563679/1.png?width=267&height=446' },
  { id: 4, title: 'Card 4', text: 'Text 3', image: 'https://media.discordapp.net/attachments/1037323910087180321/1120326463279865956/1.png?width=267&height=446' },
  { id: 5, title: 'Card 5', text: 'Text 3', image: 'https://media.discordapp.net/attachments/1037323910087180321/1120326463556702218/1.png?width=267&height=446' },
  { id: 6, title: 'Card 6', text: 'Text 3', image: 'https://media.discordapp.net/attachments/1037323910087180321/1120326463883841536/1.png?width=267&height=446' },
  { id: 7, title: 'Card 7', text: 'Text 3', image: 'https://media.discordapp.net/attachments/1037323910087180321/1120326464420728972/1.png?width=267&height=446' },
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
          <Card style={{ width: '15rem', color: 'white', textAlign: 'center', borderRadius: 0 }}>
            <Card.Img variant="top" src={card.image} style={{objectFit: 'cover', height: '100%', width: '100%' }}/>
            {/* <Card.Body style={{backgroundColor: 'rgb(033, 033, 033)'}}>
            </Card.Body> */}
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
