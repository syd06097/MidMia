import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CommonTable from './table/table';
import CommonTableColumn from './table/tablecolumn';
import CommonTableRow from './table/tablerow';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

const PostList = ({ category }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // API 요청을 통해 게시글 목록을 가져옵니다.
    axios.get('http://127.0.0.1:8000/community/')
      .then(response => {
        // API 요청이 성공하면 가져온 데이터를 처리합니다.
        const posts = response.data;
        let filteredPosts = [];
        
        if (category === 'position_all') {
          filteredPosts = posts.filter(item =>
            ["top", "jungle", "mid", "bottom", "support"].includes(item.subcategory)
          );
        } else if (category === 'free_all') {
          filteredPosts = posts.filter(item =>
            ["free", "humor"].includes(item.subcategory)
          );
        } else {
          filteredPosts = posts.filter(item => item.subcategory === category)
        }
        setDataList(filteredPosts);
      })
      .catch(error => {
        // API 요청이 실패한 경우 에러 처리를 수행합니다.
        console.error(error);
      });
  }, [category]);

  return (
    <>
      <CommonTable headersName={['번호', '제목', '작성자', '날짜']}>
        {
          dataList ? dataList.map((item, index) => {
            const formattedDate = formatDate(item.created_at);
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{item.subcategory}{item.id}</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/Community/${item.id}`}>{item.title}</Link>
                </CommonTableColumn>
                <CommonTableColumn>{item.author}</CommonTableColumn>
                <CommonTableColumn>{formattedDate}</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}

export default PostList