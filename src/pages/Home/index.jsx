import React from 'react';
import styled from 'styled-components';
import IntroSection from './IntroSection';
export const Home = () => {
  return (
    <HomeContainer>
      <IntroSection />
      <MainInfoContainer></MainInfoContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

const MainInfoContainer = styled.div`
  margin: 0 auto;
`;
