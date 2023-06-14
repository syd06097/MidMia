import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../NavBar';//상단 메뉴바
import MenuBackimage from '../MenuBackimage';//배경
import styles from "../css/Summoner.module.css";
import Pagination from 'react-bootstrap/Pagination';// 홈페이지 글 넘기는 버튼
import Badge from 'react-bootstrap/Badge';// 뱃지 생성 <Badge bg="danger">↑↓</Badge>

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

function Summoner() {
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
            <tr style={{ textAlign: 'left' }}>{/* 첫번쨰 tbody를 제외하고 나머지에 스타일 적용해야함 */}
              <th style={{ textAlign: 'center' }}>1</th> {/* 챔피언명만 오른쪽 정렬 */}
              <th><Badge bg="success">↑ 1</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>씨맥은틀렸다</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>2</th>
              <th><Badge bg="danger">↓ 1</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>3</th>
              <th><Badge bg="danger">↓ 1</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>4</th>
              <th><Badge bg="danger">↓ 1</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>5</th>
              <th><Badge bg="danger">↓ 1</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>6</th>
              <th><Badge bg="danger">↓ 1</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>7</th>
              <th><Badge bg="danger">↓ 1</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>8</th>
              <th><Badge bg="danger">↓ 1</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>9</th>
              <th><Badge bg="dark">-&nbsp;&nbsp;0</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ textAlign: 'center' }}>10</th>
              <th><Badge bg="dark">-&nbsp;&nbsp;0</Badge></th>
              <th><img src="user_img.jpg" alt='프로필' width={"35px"} className={styles.uimg} />
                <img src="MID.jpg" alt="포지션" width={"20px"} style={{ marginLeft: '10px' }} /></th>
              <th>4.79</th>
              <th><img src="Tier_img.jpg" width={"40px"} />1742LP</th>
              <th>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  56.25%&nbsp;<ProgressBar now={60} style={{ height: '10px', width: '200px' }} />
                </span>
                <small>384게임</small>
                <span style={{ marginRight: '30px' }}><small style={{ marginLeft: '7px' }}>236승</small><small style={{ marginLeft: '138px' }}>236승</small></span>
              </th>
            </tr>
          </tbody>
        </Table>
        <div className={styles.page}>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
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