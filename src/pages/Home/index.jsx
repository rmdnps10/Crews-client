import React, { useState } from 'react';
import styled from 'styled-components';
import IntroSection from './IntroSection';
import { Space } from 'components/atoms';
import MainCrewList from './MainCrewListSection';
import MainCrewListSection from './MainCrewListSection';
export const Home = () => {
  const [isActive, setIsActive] = useState({
    list: true,
    popular: false,
    how: false,
    crews: false,
  });

  return (
    <HomeContainer>
      <IntroSection />
      <Space height={'30px'} />
      <MainInfoContainer>
        <MainNav>
          <Li $isActive={isActive.list}>동아리 목록</Li>
          <Li $isActive={isActive.popular}>인기 동아리</Li>
          <Li $isActive={isActive.how}>사용 방법</Li>
          <Li $isActive={isActive.crews}>함께하는 동아리</Li>
        </MainNav>
        <MainCrewListSection />
      </MainInfoContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

const MainInfoContainer = styled.div`
  width: 760px;
  margin: 0 auto;
`;

const MainNav = styled.div`
  display: flex;
  gap: 32px;
  color: var(--gray-g-04, #b3b3b3);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  list-style: none;
`;

const Li = styled.li`
  color: ${(props) => (props.$isActive ? '#1557D0' : '')};
  border-bottom: ${(props) => (props.$isActive ? '4px solid #1557D0' : '')};
`;
