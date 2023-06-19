import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../NavBar';//상단 메뉴바
import MenuBackimage from '../MenuBackimage';//배경
import styles from "../css/Summoner.module.css";
import Pagination from 'react-bootstrap/Pagination';// 홈페이지 글 넘기는 버튼
import Badge from 'react-bootstrap/Badge';// 뱃지 생성 <Badge bg="danger">↑↓</Badge>
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';//승률

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


function getRandomUpDown() {
  const randomNum = Math.floor(Math.random() * 11);
  if (randomNum === 0) {
    return { x: 'dark', arrow: '', number: 0 };
  } else if (randomNum <= 5) {
    return { x: 'success', arrow: '↑', number: randomNum };
  } else {
    return { x: 'danger', arrow: '↓', number: randomNum };
  }
}


function Summoner() {
  const [rankingData, setRankingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(50);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/summoners/api/ranking/')
      .then(response => {
        setRankingData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const getDataPerPage = () => {
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    return rankingData.slice(indexOfFirstData, indexOfLastData);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <div style={mainStyle}>
        <NavBar />{/* 상단 메뉴바 */}
        <MenuBackimage name="소환사 랭킹" />{/* 상단의 이미지 배경 */}
        <div style={{ marginTop: '50px', fontSize: 16, color: 'white', marginBottom: '10px', marginLeft: '300px' }}>
          <b><small>소환사 랭킹</small></b>
        </div>
        <Table style={{ borderTop: 'none' }} className={styles.rankstyle} >{/* 테이블 위치 */}
          <thead>
            <tr style={{ backgroundColor: 'rgb(24,28,42)' }}>
              <th style={{ width: '50px' }}>순위</th>{/* 챔피언명만 오른쪽 정렬 */}
              <th style={{ width: '100px' }}>{/* 순위변동*/}</th>
              <th style={{ width: '200px' }}>{/*유저 프로필과 포지션 이미지 위치*/}</th>
              <th style={{ width: '400px' }}>소환사</th>
              <th>티어</th>
              <th style={{ width: '350px' }}>승률</th>
            </tr>
          </thead>
          <tbody>
            {getDataPerPage().map((player, index) => {
              const { x, arrow, number } = getRandomUpDown();
              return (
                <tr key={player.id} style={{ textAlign: 'left' }}>
                  <th style={{ textAlign: 'center' }}>{player.ranking}</th>
                  <th><Badge bg={x}>{arrow} {number}</Badge></th>
                  <th><img src={`${player.icon_url}`} alt='프로필' width={"35px"} className={styles.uimg} />
                  </th>
                  <th>{player.name}</th>
                  <th><img src="Tier_img.jpg" width={"40px"} />{player.lp}LP</th>
                  <th>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      {player.win_rate}&nbsp;<ProgressBar now={parseInt(parseFloat(player.win_rate))} style={{ height: '10px', width: '200px' }} />
                    </span>
                    <small>{parseInt(player.wins) + parseInt(player.losses)}게임</small>
                    <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>{player.wins}승</small><small style={{ marginLeft: '138px' }}>{player.losses}패</small></span>
                  </th>
                </tr>)
            })}
          </tbody>
        </Table>
        <div className={styles.page}>
          <Pagination>
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
            {Array.from({ length: Math.ceil(rankingData.length / dataPerPage) }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
          </Pagination>
        </div>
        <ListGroup style={pagebottom}>
          <small style={{ color: 'white' }}>© 2023-2023 MidMia  isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.<br />
            League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</small>
        </ListGroup>
      </div>
    </div>
  );
}

export default Summoner;