import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";

function Sidebar({ onCategoryChange }) {


  const handleCategorySelection = (category) => {
    onCategoryChange(category);
  };

  const navigate = useNavigate();
 
  const navigateToCreate = () => {
    navigate("/Community/create/");
  };
  

  return (
    <ButtonGroup vertical>
      <Button onClick={navigateToCreate}>게시글 작성</Button>
      <DropdownButton
        as={ButtonGroup}
        title="포지션 게시판"
        id="bg-vertical-dropdown-1"
      >
        <Dropdown.Item eventKey="탑" onClick={() => handleCategorySelection("top")}>탑</Dropdown.Item>
        <Dropdown.Item eventKey="정글" onClick={() => handleCategorySelection("jungle")}>정글</Dropdown.Item>
        <Dropdown.Item eventKey="미드" onClick={() => handleCategorySelection("mid")}>미드</Dropdown.Item>
        <Dropdown.Item eventKey="바텀" onClick={() => handleCategorySelection("bottom")}>바텀</Dropdown.Item>
        <Dropdown.Item eventKey="서폿" onClick={() => handleCategorySelection("support")}>서폿</Dropdown.Item>
        <Dropdown.Item eventKey="포지션전체" onClick={() => handleCategorySelection("position_all")}>전체</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        title="자유게시판"
        id="bg-vertical-dropdown-2"
      >
        <Dropdown.Item eventKey="자유" onClick={() => handleCategorySelection("freef")}>자유</Dropdown.Item>
        <Dropdown.Item eventKey="유머" onClick={() => handleCategorySelection("humor")}>유머</Dropdown.Item>
        <Dropdown.Item eventKey="자유전체" onClick={() => handleCategorySelection("free_all")}>전체</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default Sidebar;
