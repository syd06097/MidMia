import React, { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // 선택된 카테고리에 따라 하위 카테고리(subcategory) 업데이트 로직 구현
    if (e.target.value === "position") {
      setSubcategory("top"); // 예시: 기본 하위 카테고리 값을 "top"으로 설정
    } else if (e.target.value === "free") {
      setSubcategory("humor"); // 예시: 기본 하위 카테고리 값을 "humor"으로 설정
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("subcategory", subcategory);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    axios.post("http://127.0.0.1:8000/community/create/", formData, {
      'Content-Type': 'multipart/form-data',
    })
      .then((response) => {
        if (response.status === 201) {
          // 글 작성이 성공적으로 완료된 경우에 대한 처리
          console.log("글 작성이 성공적으로 완료되었습니다.");
          // 필요한 리다이렉션 또는 다음 동작을 수행
        } else {
          // 글 작성이 실패한 경우에 대한 처리
          console.error("글 작성 중 오류가 발생했습니다.");
        }
      })
      .catch((error) => {
        console.error("네트워크 오류:", error);
      });
  };
  const bottom = {
    borderBottom: '1px solid rgb(100,100,100)',
    width: '50%',
    display: 'inline-block',
    transform: 'translate(42%,0%)',
    margin: '30px 50px',
    padding: '20px'
  };//아래 추가용 스타일

  const write = {
    display: 'flex',
    margin: '10px',
    transform:'translate(23%,-100%)'
  };

  return (
    <div>
      <ListGroup style={bottom}>
        <small style={{ color: 'white' }}>게시물 작성</small>
      </ListGroup>
      <form onSubmit={handleSubmit}>
        <br />
        <div style={write}>
          <label style={{ color: "white" }}>
            <select value={category} style={{ backgroundColor: 'rgb(016,019,028)', color: 'rgb(130,135,153)', height: '40px' }} onChange={handleCategoryChange}>
              <option value="">게시판 선택</option>
              <option value="position">포지션 게시판</option>
              <option value="free">자유 게시판</option>
            </select>
          </label>
          <br />
          {category === "position" && (
            <label style={{ color: "white" }}>
              {/* 세부 게시판 선택 */}
              <select style={{ backgroundColor: 'rgb(016,019,028)', color: 'rgb(130,135,153)', height: '40px' }} value={subcategory} onChange={(e) => setSubcategory(e.target.value)}>
                <option value="">카테고리 선택</option>
                <option value="top">탑</option>
                <option value="jungle">정글</option>
                <option value="mid">미드</option>
                <option value="bottom">바텀</option>
                <option value="support">서폿</option>
              </select>
            </label>
          )}
          {category === "free" && (
            <label style={{ color: "white" }}>
              <select style={{ backgroundColor: 'rgb(016,019,028)', color: 'rgb(130,135,153)', height: '40px' }} value={subcategory} onChange={(e) => setSubcategory(e.target.value)}>
                <option value="">Select Subcategory</option>
                <option value="humor">유머</option>
                <option value="freef">자유</option>
              </select>
            </label>
          )}
        </div>
        <br />
        <label style={{ color: "white",transform:'translate(180%,-285%)' }}>
          {/* 제목*/}
          <input type="text" style={{ backgroundColor: 'rgb(016,019,028)', color: 'rgb(130,135,153)', width: '500px', height: '40px' }} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력해 주세요" />
        </label>
        <br />
        <label style={{ color: "white",transform:'translate(45%,-30%)'}}>
          {/* 내용 */}
          <textarea cols="136" rows="10" style={{ backgroundColor: 'rgb(34,47,62)', color: 'white', border: 'none'}} value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit" style={{transform:'translate(340%,-50%)',backgroundColor: 'rgb(50,84,206)', color: 'rgb(218,223,231)', width: '100px', height: '40px', borderRadius: '10px', border: 'none', fontSize: '16px' }}>작성 완료</button>
      </form>
    </div>
  );
}

export default CreatePostForm;