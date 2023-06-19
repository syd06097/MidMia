import React from 'react';

const SearchResult = ({ summonerInfo }) => {
  console.log(summonerInfo)
  if (summonerInfo === undefined) {
    // 로딩 상태를 표시하거나 아무 내용도 보여주지 않음
    return null;
  }

  let { summoner_exist, summoner_info, solo_tier, team_tier } = summonerInfo;

  return (
    <div>
      {summoner_exist ? (
        <div>
          <div className="row" style={{ margin: '40px', float: 'none' }}>
            <img
              style={{ display: 'block', margin: '0px' }}
              className="img-thumbnail"
              src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/${summoner_info.profileIconId}.png`}
              alt="Profile Icon"
            />
            <span style={{ margin: '20px 0 0 20px', fontSize: '32px' }}>
              {summoner_info.name}
              <br />
              <span style={{ fontSize: '20px' }}>LV: {summoner_info.level}</span>
            </span>
          </div>
          <div className="row">
            <div style={{ float: 'none', margin: '0 auto' }} className="col-5 border border-secondary">
              {Object.keys(solo_tier).length > 0 ? (
                <div className="row">
                  <div className="col-4">
                    <img
                      src={`./${solo_tier.tier}.png`}
                      width="100%"
                      alt="Solo Tier Emblem"
                    />
                  </div>
                  <div>
                    리그: {solo_tier.rank_type}<br />
                    티어: {solo_tier.tier} {solo_tier.rank}<br />
                    포인트: {solo_tier.points}<br />
                    전적: {solo_tier.wins + solo_tier.losses}전
                    승리: {solo_tier.wins}승, 패배: {solo_tier.losses}패
                  </div>
                </div>
              ) : (
                <div>솔로 랭크 정보가 없습니다.</div>
              )}
            </div>
            <div style={{ float: 'none', margin: '0 auto' }} className="col-5 border border-secondary">
              {Object.keys(team_tier).length > 0 ? (
                <div className="row">
                  <div className="col-4">
                    <img
                      src={`./${team_tier.tier}.png`}
                      width="100%"
                      alt="Team Tier Emblem"
                    />
                  </div>
                  <div>
                    리그: {team_tier.rank_type}<br />
                    티어: {team_tier.tier} {team_tier.rank}<br />
                    포인트: {team_tier.points}<br />
                    전적: {team_tier.wins + team_tier.losses}전
                    승리: {team_tier.wins}승, 패배: {team_tier.losses}패
                  </div>
                </div>
              ) : (
                <div>자유 랭크 정보가 없습니다.</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>소환사 정보를 찾을 수 없습니다.</div>
      )}
    </div>
  );
};

export default SearchResult;