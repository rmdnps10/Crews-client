import React from 'react';
import styled from 'styled-components';

function IntroSection() {
  return (
    <IntroContainer>
      <StyledH1>
        Crews 🛳️ <span>를 통해 </span>
        <br />
        <span>손쉽게 모집하고 손쉽게 지원하세요!</span>
      </StyledH1>
      <BackgroundCircle />
    </IntroContainer>
  );
}

const IntroContainer = styled.section`
  height: 300px;
`;

const StyledH1 = styled.h1`
  width: 40%;
  margin: 0 auto;
  color: var(--blue-b-05-m, #3172ea);
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  span {
    color: var(--black-bk-02, #101010);
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 700;
  }
`;

const BackgroundCircle = styled.div``;

export default IntroSection;
