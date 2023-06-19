import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { IoMdSearch } from 'react-icons/io';//아이콘 사용
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import SearchResult from './searchResult';


const SearchForm = () => {
  const [summonerName, setSummonerName] = useState('');
  const [searchResult, setSearchResult] = useState(null); // 추가: searchResult 상태 변수 추가
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSummonerName(event.target.value);
  };

  const navigateToCreate = (summonerInfo) => {
    navigate("/Summonerinfo/", { state: { summonerInfo } });
  };

  //submit 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const summonerInfo = await getSummonerInfo(summonerName);
    setSearchResult(summonerInfo);
    navigateToCreate(summonerInfo);
  };
  
  // api로 가져오기
  const getSummonerInfo = async (summonerName) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/score/api/score_view/', {
        params: {
          search_text: summonerName,
        },
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching summoner info:', error);
      return null;
    }
  };

  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <FormControl type="text" placeholder="소환자명" name="search" style={{ marginRight: '0px', width: '600px' }} onChange={handleInputChange} value={summonerName} />
          <Button variant="outline-success" type="submit" >
            <IoMdSearch />
          </Button>
        </div>
      </Form>
    {searchResult && <SearchResult summonerInfo={searchResult} />}
    </div>
  );
};

export default SearchForm;