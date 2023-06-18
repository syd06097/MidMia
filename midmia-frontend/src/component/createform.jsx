import React, { useState, useEffect} from "react";
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

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="position">포지션 게시판</option>
            <option value="free">자유 게시판</option>
          </select>
        </label>
        <br />
        {category === "position" && (
          <label>
            Subcategory:
            <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)}>
              <option value="">Select Subcategory</option>
              <option value="top">탑</option>
              <option value="jungle">정글</option>
              <option value="mid">미드</option>
              <option value="bottom">바텀</option>
              <option value="support">서폿</option>
            </select>
          </label>
        )}
        {category === "free" && (
          <label>
            Subcategory:
            <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)}>
              <option value="">Select Subcategory</option>
              <option value="humor">유머</option>
              <option value="freef">자유</option>
            </select>
          </label>
        )}
        <br />
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePostForm;