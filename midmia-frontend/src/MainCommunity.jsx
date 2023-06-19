import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from "./css/MainCommunity.module.css";//모듈 붙으면 styles 붙여서 사용
import axios from 'axios';
import PostList from './component/postlist';
//import './css/MainCommunity.css'; 

function MainCommunity() {
  const [data, setData] = useState([]);
  const [positionData, setPositionData] = useState([]);
  const [freeData, setFreeData] = useState([]);
  const [category, setCategory] = useState('position_all');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/community/')
      .then(response => {
        const posts = response.data;

        const positionFilteredPosts = posts.filter(item =>
          ["top", "jungle", "mid", "bottom", "support"].includes(item.subcategory)
        );
        setPositionData(positionFilteredPosts);

        const freeFilteredPosts = posts.filter(item =>
          ["free", "humor"].includes(item.subcategory)
        );
        setFreeData(freeFilteredPosts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <div className={styles.div0}>
        <h3 className={styles.title}>포지션게시판</h3>
        {positionData.map(d => (
          <ListGroup key={d.id}>
            <ListGroup.Item className={styles.write}>{d.title}</ListGroup.Item>
          </ListGroup>
        ))}
      </div>

      <div className={styles.div0}>
        <h3 className={styles.title}>자유게시판</h3>
        {freeData.map(d => (
          <ListGroup key={d.id}>
            <ListGroup.Item className={styles.write}>{d.title}</ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </div>
  );
}

export default MainCommunity;