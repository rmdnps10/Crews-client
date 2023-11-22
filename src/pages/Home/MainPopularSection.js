import { Space } from 'components/atoms';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainCrewCard from './MainCrewCard';
import { homePageRequest } from 'api/request';
import { useState } from 'react';
import { instance } from 'api/axios';
function MainPopularSection() {
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
        console.log(res.data);
        setHotPostData(res.data);
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
        <MainCrewCard isSmall={true} />
        <MainCrewCard isSmall={false} />
        <MainCrewCard isSmall={true} />
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
