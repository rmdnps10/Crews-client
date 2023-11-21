import React from 'react';
import styled from 'styled-components';

function IntroSection() {
  return (
    <IntroContainer>
      <StyledH1>
        Crews 🛳️ <span>를 통해 </span>
        <br />
        손쉽게 모집하고 손쉽게 지원하세요!
      </StyledH1>
    </IntroContainer>
  );
}

const IntroContainer = styled.section``;

const StyledH1 = styled.h1`
  height: 200px;
`;

export default IntroSection;
