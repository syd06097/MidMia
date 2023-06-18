import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Post.css';
import { useNavigate } from "react-router-dom";

const PostView = ({ no }) => {
  const [ data, setData ] = useState({}); 

  const navigate = useNavigate();
 
  const navigateToCreate = () => {
    navigate("/Community/");
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  console.log(no)

  useEffect(() => {
    // API 요청을 통해 게시글 상세정보를 가져옵니다.
    axios.get(`http://127.0.0.1:8000/community/${no}/`)
      .then(response => {
        // API 요청이 성공하면 가져온 데이터를 처리합니다.
        const post = response.data;
        // 처리된 데이터를 사용하여 작업을 수행합니다.
        // 예를 들어, 게시글 상세정보를 표시하는 컴포넌트에 가져온 데이터를 전달할 수 있습니다.
        setData(post);
      })
      .catch(error => {
        // API 요청이 실패한 경우 에러 처리를 수행합니다.
        console.error(error);
      });
  }, []);

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          data ? (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ data.id }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>작성자</label>
                <label>{ data.author }</label>
              </div>
              <div className="post-view-row">
                <label>날짜</label>
                <label>{ formatDate(data.created_at) }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {
                    data.content
                  }
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={navigateToCreate}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default PostView;