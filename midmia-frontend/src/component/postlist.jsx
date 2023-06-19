import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CommonTable from './table/table';
import CommonTableColumn from './table/tablecolumn';
import CommonTableRow from './table/tablerow';
import Pagination from 'react-bootstrap/Pagination';

const page = {
  width: '80%',
  margin: '80px auto',
  position: 'center',
  transform: 'translate(42%,0%)'/*옆에 메뉴 박고 다시 수정*/
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

const PostList = ({ category }) => {
  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage] = useState(20); // 페이지 당 게시글 수


  

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
            ["freef", "humor"].includes(item.subcategory)
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataList.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const totalPages = Math.ceil(dataList.length / postsPerPage);

  return (
    <>
      <CommonTable headersName={['번호', '제목', '작성자', '날짜']}>
      {currentPosts ? (
          currentPosts.map((item, index) => {
            const formattedDate = formatDate(item.created_at);
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>
                  {item.subcategory}
                  {item.id}
                </CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/Community/${item.id}`}>{item.title}</Link>
                </CommonTableColumn>
                <CommonTableColumn>{item.author}</CommonTableColumn>
                <CommonTableColumn>{formattedDate}</CommonTableColumn>
              </CommonTableRow>
            );
          })
        ) : ''
        }
      </CommonTable>
      <div style={page}>
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      </div>
    </>
  )
}

export default PostList