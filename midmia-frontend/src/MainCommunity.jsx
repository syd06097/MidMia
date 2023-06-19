import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from "./css/MainCommunity.module.css";//모듈 붙으면 styles 붙여서 사용
import axios from 'axios';
import PostList from './component/postlist';
//import './css/MainCommunity.css'; 

function MainCommunity() {
  const [data, setData] = useState([]); // 서버에서 받아온 데이터를 저장할 상태

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const day = String(date.getDate()).padStart(2, '0');
    
  //   return `${year}-${month}-${day}`;
  // };

  
  // useEffect(() => {
   
    // API 요청을 통해 게시글 목록을 가져옵니다.
    // axios.get('http://127.0.0.1:8000/community/')
    //   .then(response => {
    //     // API 요청이 성공하면 가져온 데이터를 처리합니다.
    //     const posts = response.data;
    //     let filteredPosts = [];
        
    //     if (category === 'position_all') {
    //       filteredPosts = posts.filter(item =>
    //         ["top", "jungle", "mid", "bottom", "support"].includes(item.subcategory)
    //       );
    //     } else if (category === 'free_all') {
    //       filteredPosts = posts.filter(item =>
    //         ["free", "humor"].includes(item.subcategory)
    //       );
    //     } else {
    //       filteredPosts = posts.filter(item => item.subcategory === category)
    //     }
    //     setDataList(filteredPosts);
    //   })
    //   .catch(error => {
    //     // API 요청이 실패한 경우 에러 처리를 수행합니다.
    //     console.error(error);
    //   });
  // }, []);


  useEffect(() => {
    // 서버에서 데이터를 가져오는 비동기 함수 호출
    fetchData();
    // getCommunity()
  }, []);

  const fetchData = async () => {
    try {
      // 데이터를 가져오는 로직 구현
      // 예시: const response = await fetch('서버 API URL');
      //       const data = await response.json();
      //       setData(data); // 가져온 데이터를 상태에 저장
      const result = await axios.get('http://127.0.0.1:8000/community/')
      setData(result.data)

    } catch (error) {
      console.log(error);
    }
  };
  return (

    <div>
      <div className={styles.div0} >{/* 나중에 위치조정필요 */}
      <h3 className={styles.title}>포지션게시판</h3>

      {data.map(d => (
        <ListGroup key={d.id}>
          <ListGroup.Item className={styles.write}>{d.title}</ListGroup.Item>
        </ListGroup>
      ))}
     
        {/* {data && data.map(d => {
           <ListGroup key={d.id}>
            <ListGroup.Item className={styles.write} style={{ marginTop: '20px' }}><h3 className={styles.title}>포지션 게시판</h3></ListGroup.Item>
            <ListGroup.Item className={styles.write}>{d.title}</ListGroup.Item>
          </ListGroup>


        })} */}
      
     
      
    
      </div>
      <div className={styles.div0}>{/* 나중에 위치조정필요 */}
      <h3 className={styles.title}>자유게시판</h3>
      {data.map(d => (
        <ListGroup key={d.id}>
          <ListGroup.Item className={styles.write}>{d.title}</ListGroup.Item>
        </ListGroup>
      ))}
      {/* {data && data.map(d => {
        <ListGroup key={d.id}>
         <ListGroup.Item className={styles.write} style={{ marginTop: '20px' }}><h3 className={styles.title}>포지션 게시판</h3></ListGroup.Item>
         <ListGroup.Item className={styles.write}>ssss</ListGroup.Item>
       </ListGroup>

      })} */}
      </div>
    </div>
  );
}

export default MainCommunity