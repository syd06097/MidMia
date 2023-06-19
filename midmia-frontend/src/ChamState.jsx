import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from "./css/ChamState.module.css";
import axios from 'axios';
//챔피언 통계 표를 만들어야 한다.


function ChamState() {
  const [championStats, setChampionStats] = useState([]);
  const [sortConfig, setSortConfig] = useState({ field: null, order: null });
  
  const sanitizeNumber = (value) => {
    const sanitizedValue = value.replace(/[^0-9.]/g, '');
    return parseFloat(sanitizedValue);
  };
  
  const compareValues = (valueA, valueB) => {
      const sanitizedValueA = sanitizeNumber(valueA);
      const sanitizedValueB = sanitizeNumber(valueB);

      if (sanitizedValueA > sanitizedValueB) {
        return 1;
      }
      if (sanitizedValueA < sanitizedValueB) {
        return -1;
      }
      return 0;
    };




  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/champions/api/champion-stats/');
        setChampionStats(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const requestSort = (field) => {
    let order = 'asc';
    if (sortConfig && sortConfig.field === field && sortConfig.order === 'asc') {
      order = 'desc';
    }
    setSortConfig({ field, order });
  };

  const sortedData = championStats.sort((a, b) => {
    if (sortConfig.order === 'asc') {
      return compareValues(a[sortConfig.field], b[sortConfig.field]);
    }
    if (sortConfig.order === 'desc') {
      return compareValues(b[sortConfig.field], a[sortConfig.field]);
    }
    return 0;
  });

  

  // 값 비교 함수
  


  return (
    <div>
      <div>
        <Table bordered className={styles.div1} >{/* 테이블 위치 */}
          <thead>
            <tr style={{ backgroundColor: 'rgb(18,42,67)' }}>
              <td style={{ textAlign: 'left' }} onClick={() => requestSort('champion.name')}>챔피언</td>
              <td onClick={() => requestSort('KDA')}>평점</td>
              <td onClick={() => requestSort('wins_rate')}>승률</td>
              <td onClick={() => requestSort('pick_rate')}>게임 당 픽률</td>
              <td onClick={() => requestSort('ban_rate')}>게임 당 배율</td>
              <td onClick={() => requestSort('cs')}>cs</td>
            </tr>
          </thead>
          <tbody>
            {championStats.map((stats) => (
              <tr key={stats.champion.id} style={{ textAlign: 'center' }}>
                <th style={{ textAlign: 'left' }}><img src={`${stats.champion.champi_image_link}`} alt='프로필' width={"35px"} className={styles.uimg} />
                  {stats.champion.name}</th>
                <th>{stats.KDA}</th>
                <th>{stats.wins_rate}</th>
                <th>{stats.pick_rate}</th>
                <th>{stats.ban_rate}</th>
                <th>{stats.cs}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>

  );
}

export default ChamState;