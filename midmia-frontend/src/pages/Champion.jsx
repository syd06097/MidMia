import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar'; //상단 메뉴바
import MenuBackimage from '../MenuBackimage'; //배경
import styles from '../css/champion.module.css';
import { images } from '../image/images.ts';
import { useLocation, useNavigate } from 'react-router-dom';

const lineType = [
  { id: 'top', label: '탑' },
  { id: 'jungle', label: '정글' },
  { id: 'mid', label: '미드' },
  { id: 'bottom', label: '바텀' },
  { id: 'support', label: '서폿' },
  { id: 'all', label: '전체' },
];

const pagebottom = {
  borderTop: '1px solid rgb(100,100,100)',
  width: '70%',
  display: 'inline-block',
  transform: 'translate(15%,0%)',
  margin: '100px 50px',
  padding: '20px',
}; //아래 추가용 스타일

const mainStyle = {
  backgroundColor: 'rgb(033, 033, 033)', // 배경이미지가 없는 공간의 배경색
  minHeight: '100vh', // 화면 전체 높이로 설정
};

const Champion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [Champions, setChampions] = useState([]);
  const [activeLineTier, setActiveLineTier] = useState(0);
  const [activeLineChampion, setActiveLineChampion] = useState(0);

  const [patchFilter, setPatchFilter] = useState([
    { value: '13.7', label: '13.7 패치' },
    { value: '13.6', label: '13.6 패치' },
    { value: '13.5', label: '13.5 패치' },
  ]);

  const [tierFilter, setTierFilter] = useState([
    { value: 'platinum', label: '플래티넘 +' },
    { value: 'gold', label: '골드' },
    { value: 'silver', label: '실버' },
  ]);

  const [nationFilter, setNationilter] = useState([
    { value: 'korea', label: '한국' },
    { value: 'us', label: '미국' },
    { value: 'uk', label: '영국' },
  ]);

  const [activeFilters, setActiveFilters] = useState({
    patch: patchFilter[0].value,
    tier: tierFilter[0].value,
    nation: nationFilter[0].value,
  });

  const [sortOrder, setSortOrder] = useState({
    kda: 'asc',
    winsRate: 'asc',
    pickRate: 'asc',
    banRate: 'asc',
    cs: 'asc',
    gold: 'asc',
  });

  const handleFilters = (key, value) => {
    setActiveFilters((prev) => {
      const clone = { ...prev };
      clone[key] = value;
      return clone;
    });
  };

  const getChampion = async () => {
    try {
      const result = await axios.get(
        'http://localhost:8000/champions/api/champion-stats/',
      );
      setChampions(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSort = (key) => {
    setSortOrder((prevOrder) => {
      return {
        ...prevOrder,
        [key]: prevOrder[key] === 'asc' ? 'desc' : 'asc',
      };
    });
    setChampions((prevChampions) => {
      const sortedChampions = [...prevChampions].sort((a, b) => {
        if (sortOrder[key] === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        } else {
          return a[key] < b[key] ? 1 : -1;
        }
      });
      return sortedChampions;
    });
  };

  useEffect(() => {
    getChampion();
  }, []);

  useEffect(() => {
    navigate('/Champion#champion-tier');
  }, []);

  return (
    <div style={mainStyle}>
      {/* 상단 메뉴바 */}
      <NavBar />
      <section className={styles['page-banner']}>
        {/* 상단의 이미지 배경 */}
        <MenuBackimage name='챔피언' />
        <div className={styles['tab-container']}>
          <div className={`${styles['content-root']} container`}>
            <a
              className={
                styles[location.hash === '#champion-tier' ? 'active' : '']
              }
              href='#champion-tier'>
              {'라인별 챔피언 티어'}
            </a>
            <a
              className={
                styles[location.hash === '#champion-list' ? 'active' : '']
              }
              href='#champion-list'>
              {'챔피언 리스트'}
            </a>
          </div>
        </div>

      </section>
      {/* 라인별 챔피언 티어 섹션 */}
      <section
        id='champion-tier'
        className={`${styles['tier-section']} container`}>
        <div className={styles['content-root']}>
          <div className={styles['title']}>{'라인별 챔피언 티어'}</div>
          {/* 리스트 헤더 */}
          <div className={styles['list-header-container']}>
            {/* 라인 선택 */}
            <div className={styles['left']}>
              {lineType.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLineTier(idx)}
                  className={`${styles['line']} ${
                    idx === activeLineTier ? styles['active'] : ''
                  }`}>
                  {item.label}
                </div>
              ))}
            </div>
            {/* 필터링 셀렉트 박스 */}
            <div className={styles['right']}>
              <div className={styles['select-container']}>
                <select
                  name='patch-select'
                  onChange={(e) => handleFilters('patch', e.target.value)}
                  id='patch-select'>
                  {patchFilter.map((item) => (
                    <option
                      selected={activeFilters['patch'] === item.value}
                      value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles['select-container']}>
                <select
                  name='tier-select'
                  id='tier-select'
                  onChange={(e) => handleFilters('tier', e.target.value)}>
                  {tierFilter.map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div className={styles['select-container']}>
                <select
                  name='nation-select'
                  id='nation-select'
                  onChange={(e) => handleFilters('nation', e.target.value)}>
                  {nationFilter.map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {/* 정렬 row */}
          <div className={styles['list-sort-container']}>
            {/* 정렬값에 따라서 클래스 네임을 지정하면 됩니다. 오름차순 asc, 내림차순 asc */}
            <div className={styles['sort']}>
              <div>{'KDA'}</div>
              <img src={images.sort} alt='sort' />
            </div>
            <div className={`${styles['sort']} ${styles['asc']}`}>
              <div>{'꿀챔 점수'}</div>
              <img src={images.asc} alt='sort' />
            </div>
            <div className={styles['sort']}>
              <div>{'승률'}</div>
              <img src={images.sort} alt='sort' />
            </div>
            <div className={styles['sort']}>
              <div>{'픽률'}</div>
              <img src={images.sort} alt='sort' />
            </div>
            <div className={styles['sort']}>
              <div>{'벤률'}</div>
              <img src={images.sort} alt='sort' />
            </div>
            <div className={styles['sort']}>
              <div>{'골드'}</div>
              <img src={images.sort} alt='sort' />
            </div>
          </div>
          {/* 리스트 바디 */}
          <div className={styles['list-body-container']}>
          
              {Champions.map((Champion, idx) =>(
              <div
                className={`${styles['row-item']} ${
                  idx % 2 === 0 ? styles['red'] : styles['yellow']
                }`}>
                <div className={`${styles['col']} ${styles['num']}`}>
                  {idx + 1}
                </div>

                <div className={`${styles['col']} ${styles['grade']}`}>
                  {/*  */}
                  <div
                    className={`${
                      styles[
                        idx % 3 === 0 ? 'same' : idx % 3 === 1 ? 'up' : 'down'
                      ]
                    } ${styles['chip']}`}>
                    <img
                      src={
                        idx % 3 === 0
                          ? images.dash
                          : idx % 3 === 1
                          ? images.arrowUp
                          : images.arrowDown
                      }
                      alt='arrow-img'
                    />
                    <div>{idx}</div>
                  </div>
                </div>
                <div className={`${styles['col']} ${styles['champion']}`}>
                  <div className={styles['img-container']}>
                    <img
                      className={styles['grade-img']}
                      src={images.grade}
                      alt=''
                    />
                    <img
                      className={styles['cham-img']}
                      src={Champion.champion.champi_image_link}
                      alt=''
                    />
                  </div>
                  <div>{Champion.champion.name}</div>
                </div>
                <div className={styles['col']}>
                  {lineType[activeLineTier].label}
                </div>
                <div className={`${styles['col']} ${styles['sort']}`}>
                  {Champion.KDA}
                </div>
                <div className={`${styles['col']} ${styles['sort']}`}>
                  {'28.81'}
                </div>
                <div className={`${styles['col']} ${styles['sort']}`}>
                  {Champion.wins_rate}
                </div>
                <div className={`${styles['col']} ${styles['sort']}`}>
                  {Champion.pick_rate}
                </div>
                <div className={`${styles['col']} ${styles['sort']}`}>
                  {Champion.ban_rate}
                </div>
                <div className={`${styles['col']} ${styles['sort']}`}>
                  {Champion.gold}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 챔피언 리스트 */}
      <section
        id='champion-list'
        className={`${styles['champion-section']} container`}>
        <div className={styles['content-root']}>
          <div className={styles['title']}>{'챔피언 리스트'}</div>
          {/* 리스트 헤더 */}
          <div className={styles['list-header-container']}>
            {/* 라인 선택 */}
            <div className={styles['left']}>
              {lineType.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLineChampion(idx)}
                  className={`${styles['line']} ${
                    idx === activeLineChampion ? styles['active'] : ''
                  }`}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          {/* 리스트 바디 */}
          <div className={styles['list-body-container']}>
            {Champions.map((Champion, idx) => (
              <div className={styles['item']}>
                <img src={Champion.champion.champi_image_link} alt='champion-image' />
                <div className={styles['name']}>{Champion.champion.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Champion;

