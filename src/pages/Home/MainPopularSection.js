import { Space } from 'components/atoms';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainCrewCard from './MainCrewCard';
import { homePageRequest } from 'api/request';
import { useState } from 'react';
import { instance } from 'api/axios';
function MainPopularSection() {
  // 저장 수 많은 상위 3개 게시물 데이터
  const [hotPostData, setHotPostData] = useState([]);
  useEffect(() => {
    const fetchPopularData = async () => {
      // 로그인했을 경우
      if (localStorage.getItem('access')) {
        const res = await instance.get(`${homePageRequest.normalPostInfo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        });
        const postList = res.data;
        postList.sort((a, b) => b.is_liked - a.is_liked);
        setHotPostData(postList.slice(0, 3));
      }
      // 로그인하지 않을 경우
      else {
        const res = await instance.get(`${homePageRequest.normalPostInfo}`);
        const postList = res.data;
        postList.sort((a, b) => b.is_liked - a.is_liked);
        setHotPostData(postList.slice(0, 3));
      }
    };
    fetchPopularData();
  }, []);
  console.log(hotPostData);
  return (
    <>
      <Space height={'50px'} />
      <HotCaption>
        <H1>HOT CREW 🔥</H1>
        <H2>현재 가장 인기 있는 동아리 공고를 둘러보세요!</H2>
      </HotCaption>
      <Space height={'30px'} />
      <HotPostList>
        {/* 오류방지 */}
        {hotPostData.length > 0 ? (
          <>
            <MainCrewCard
              isSmall={true}
              category={hotPostData[1].category}
              likeCount={hotPostData[1].current_like_count}
              isLiked={hotPostData[1].is_liked}
              crewName={hotPostData[1].crew_name}
              title={hotPostData[1].title}
              dayLeft={hotPostData[1].d_minus_info}
            />
            <MainCrewCard
              isSmall={false}
              category={hotPostData[0].category}
              likeCount={hotPostData[0].current_like_count}
              isLiked={hotPostData[0].is_liked}
              crewName={hotPostData[0].crew_name}
              title={hotPostData[0].title}
              dayLeft={hotPostData[0].d_minus_info}
            />
            {/* // 백엔드 연동할 때 2로바꾸자 */}
            <MainCrewCard
              isSmall={true}
              category={hotPostData[1].category}
              likeCount={hotPostData[1].current_like_count}
              isLiked={hotPostData[1].is_liked}
              crewName={hotPostData[1].crew_name}
              title={hotPostData[1].title}
              dayLeft={hotPostData[1].d_minus_info}
            />{' '}
          </>
        ) : (
          ''
        )}
      </HotPostList>
    </>
  );
}

const HotCaption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const H1 = styled.h1`
  color: var(--blue-b-06, #1557d0);
  font-family: Poppin;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const H2 = styled.h2`
  color: var(--gray-g-05, #999);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const HotPostList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export default MainPopularSection;
