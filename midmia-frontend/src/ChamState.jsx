import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from "./css/ChamState.module.css";
//챔피언 통계 표를 만들어야 한다.


function ChamState() {
  return (
    <div>
      <div>
        <Table bordered className={styles.div1} >{/* 테이블 위치 */}
          <thead>
            <tr style={{backgroundColor: 'rgb(18,42,67)'}}>
              <td style={{textAlign:'left'}}>챔피언</td>{/* 챔피언명만 오른쪽 정렬 */}
              <td>평점</td>
              <td>승률</td>
              <td>게임 당 픽률</td>
              <td>게임 당 배율</td>
              <td>cs</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{textAlign:'center'}}>{/* 첫번쨰 tbody를 제외하고 나머지에 스타일 적용해야함 */}
              <th style={{textAlign:'left'}}>가렌</th> {/* 챔피언명만 오른쪽 정렬 */}
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
            <tr style={{textAlign:'center'}}>
              <th style={{textAlign:'left'}}>가렌</th>
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
            <tr style={{textAlign:'center'}}>
              <th style={{textAlign:'left'}}>가렌</th>
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
            <tr style={{textAlign:'center'}}>{/* 첫번쨰 tbody를 제외하고 나머지에 스타일 적용해야함 */}
              <th style={{textAlign:'left'}}>가렌</th> {/* 챔피언명만 오른쪽 정렬 */}
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
            <tr style={{textAlign:'center'}}>
              <th style={{textAlign:'left'}}>가렌</th>
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
            <tr style={{textAlign:'center'}}>
              <th style={{textAlign:'left'}}>가렌</th>
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
            <tr style={{textAlign:'center'}}>{/* 첫번쨰 tbody를 제외하고 나머지에 스타일 적용해야함 */}
              <th style={{textAlign:'left'}}>가렌</th> {/* 챔피언명만 오른쪽 정렬 */}
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
            <tr style={{textAlign:'center'}}>
              <th style={{textAlign:'left'}}>가렌</th>
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
            <tr style={{textAlign:'center'}}>
              <th style={{textAlign:'left'}}>가렌</th>
              <th>2.09</th>
              <th>49.87</th>
              <th>4.79</th>
              <th>1.5%</th>
              <th>183.98</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>

  );
}

export default ChamState;