import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from "./css/MainCommunity.module.css";//모듈 붙으면 styles 붙여서 사용

//import './css/MainCommunity.css'; 

function MainCommunity() {
  const [data, setData] = useState([]); // 서버에서 받아온 데이터를 저장할 상태

  useEffect(() => {
    // 서버에서 데이터를 가져오는 비동기 함수 호출
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // 데이터를 가져오는 로직 구현
      // 예시: const response = await fetch('서버 API URL');
      //       const data = await response.json();
      //       setData(data); // 가져온 데이터를 상태에 저장
    } catch (error) {
      console.log(error);
    }
  };
  return (
    /* 
    <div>
      <div className={styles.div0}>
        <ListGroup> 방법1
         <ListGroup.Item className={styles.write} style={{ marginTop: '20px' }}><h3 className={styles.title}>포지션 게시판</h3></ListGroup.Item>
       {data.map((item, index) => (
         <ListGroup.Item key={index} style={{backgroundColor: 'rgb(033, 033, 033)',borderBottom:'1px, solid', borderBottomColor:'rgb(100, 100, 100)'}}>
            {item}
          </ListGroup.Item>
        ))}
        </ListGroup>
      </div>
        <div className={styles.div0}>
          <ListGroup> 방법1
          <ListGroup.Item className={styles.write} style={{ marginTop: '20px' }}><h3 className={styles.title}>자유 게시판</h3></ListGroup.Item>
       {data.map((item, index) => (
         <ListGroup.Item key={index} style={{backgroundColor: 'rgb(033, 033, 033)',borderBottom:'1px, solid', borderBottomColor:'rgb(100, 100, 100)'}}>
            {item}
          </ListGroup.Item>
        ))}
        </ListGroup>
      </div>
    </div>
    
    */

    /*
    <div>
      <div className={styles.div0}>
        <ListGroup> a태그 사용할때 사용
          <ListGroup.Item className={styles.write} style={{ marginTop: '20px' }}><h3 className={styles.title}>포지션 게시판</h3></ListGroup.Item>
        {data.map((item, index) => (
          <ListGroup.Item key={index} style={{backgroundColor: 'rgb(033, 033, 033)',borderBottom:'1px, solid', borderBottomColor:'rgb(100, 100, 100)'}}>
            <a href={item.link}>{item.title}</a>
        </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className={styles.div0}>
        <ListGroup> a태그 사용할때 사용
          <ListGroup.Item className={styles.write} style={{ marginTop: '20px' }}><h3 className={styles.title}>자유 게시판</h3></ListGroup.Item>
        {data.map((item, index) => (
          <ListGroup.Item key={index} style={{backgroundColor: 'rgb(033, 033, 033)',borderBottom:'1px, solid', borderBottomColor:'rgb(100, 100, 100)'}}>
            <a href={item.link}>{item.title}</a>
        </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>*/
    <div>
      <div className={styles.div0} >{/* 나중에 위치조정필요 */}
        <ListGroup>
          <ListGroup.Item className={styles.write} style={{ marginTop: '20px' }}><h3 className={styles.title}>포지션 게시판</h3></ListGroup.Item>
          <ListGroup.Item className={styles.write}>요즘 밸런스 이상함</ListGroup.Item>
          <ListGroup.Item className={styles.write}>원딜 죽어간다</ListGroup.Item>
          <ListGroup.Item className={styles.write}>서폿들 요즘 기어오르면 개추</ListGroup.Item>
          <ListGroup.Item className={styles.write}>정글 뭐하냐고</ListGroup.Item>
          <ListGroup.Item className={styles.write}>정글 뭐하냐고</ListGroup.Item>
          <ListGroup.Item className={styles.write}>정글 뭐하냐고</ListGroup.Item>
          <ListGroup.Item className={styles.write}>정글 뭐하냐고</ListGroup.Item>
          <ListGroup.Item className={styles.write}>서폿들 요즘 기어오르면 개추</ListGroup.Item>
        </ListGroup>
      </div>
      <div className={styles.div0}>{/* 나중에 위치조정필요 */}
        <ListGroup>
          <ListGroup.Item className={styles.write} style={{ marginTop: '20px' }}><h3 className={styles.title}>자유 게시판</h3></ListGroup.Item>
          <ListGroup.Item className={styles.write}>요즘 밸런스 이상함</ListGroup.Item>
          <ListGroup.Item className={styles.write}>원딜 죽어간다</ListGroup.Item>
          <ListGroup.Item className={styles.write}>서폿들 요즘 기어오르면 개추</ListGroup.Item>
          <ListGroup.Item className={styles.write}>정글 뭐하냐고</ListGroup.Item>
          <ListGroup.Item className={styles.write}>정글 뭐하냐고</ListGroup.Item>
          <ListGroup.Item className={styles.write}>정글 뭐하냐고</ListGroup.Item>
          <ListGroup.Item className={styles.write}>정글 뭐하냐고</ListGroup.Item>
          <ListGroup.Item className={styles.write}>서폿들 요즘 기어오르면 개추</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default MainCommunity;