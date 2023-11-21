import { Flex, Space } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import background from './background.svg';
function IntroSection() {
  return (
    <IntroContainer>
      <Space height={'120px'} />
      <StyledH1>
        Crews 🛳️ <span>를 통해 </span>
        <br />
        <span>손쉽게 모집하고 손쉽게 지원하세요!</span>
      </StyledH1>
      <Flex>
        <Background>
          <BackgroundCircle>
            <BackgroundImg src={background} />
          </BackgroundCircle>
        </Background>
      </Flex>
    </IntroContainer>
  );
}

const IntroContainer = styled.section`
  height: 300px;
  position: relative;
`;

const StyledH1 = styled.h1`
  width: 40%;
  margin: 0px auto 0px;
  color: var(--blue-b-05-m, #3172ea);
  font-family: Poppin;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  span {
    color: var(--black-bk-02, #101010);
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 700;
  }
`;

const Background = styled.div`
  position: absolute;
  top: -1800px;
  z-index: -1;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const BackgroundImg = styled.img`
  position: absolute;
  left: 1700px;
  bottom: 0px;
`;

const BackgroundCircle = styled.div`
  background: #e8effd;
  position: relative;
  width: 3655px;
  height: 2132px;
  overflow: hidden;
  border-radius: 50%;
`;

export default IntroSection;
