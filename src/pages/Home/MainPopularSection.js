import { Space } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import MainCrewCard from './MainCrewCard';

function MainPopularSection() {
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
