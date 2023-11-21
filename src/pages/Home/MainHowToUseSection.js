import { Space } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import firstImage from './1.jpg';
import secondImage from './2.png';
import thirdImage from './3.png';
import fouthImage from './4.png';
import fifthImage from './5.png';
function MainHowToUseSection() {
  return (
    <MainHowtoUseSectionWrapper>
      <Space height={'100px'} />
      <BlueCircleContainer>
        <BlueCircle />
      </BlueCircleContainer>
      <Figure>
        <FigCaption>
          동아리 지원자 관리, <br />
          홍보부터 모집까지 간단하게
        </FigCaption>
        <FirstImage src={firstImage} alt="예시 이미지1" />
        <BlurBox />
      </Figure>

      <Figure2>
        <FigCaption2>
          우리 동아리만의 지원서를 <br />
          직접 만들어 <span>체계적인 리쿠르팅</span>
        </FigCaption2>
        <Space height={'50px'} />
        <SecondImage src={secondImage} alt="에시 이미지2" />
        <ThirdImage src={thirdImage} alt="예시 이미지3" />
      </Figure2>
      <Space height={'1000px'} />
      <Figure3>
        <FigCaption3>
          지원서 평가와 면접시간 조율도 <br />
          <span>간편</span>하고 <span>효율</span>적이게
        </FigCaption3>
        <Space height={'50px'} />
        <ImageContainer>
          <FourthImage src={fouthImage} />;
          <FifthImage src={fifthImage} />
        </ImageContainer>
      </Figure3>
    </MainHowtoUseSectionWrapper>
  );
}
const MainHowtoUseSectionWrapper = styled.section`
  position: relative;
`;
const Figure3 = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FigCaption3 = styled.div`
  color: var(--black-bk-02, #101010);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 140% */
  letter-spacing: -0.6px;
  span {
    color: var(--blue-b-06, #1557d0);
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -0.6px;
  }
`;

const FourthImage = styled.img`
  width: 760px;
  height: 140px;
  flex-shrink: 0;
`;
const FifthImage = styled.img`
  width: 544px;
  height: 427px;
  flex-shrink: 0;
`;
const BlueCircleContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: -10;
`;
const BlueCircle = styled.div`
  width: 608px;
  height: 608px;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--blue-b-04, #5d90ee);
  filter: blur(5px);
`;

const BlurBox = styled.div`
  position: absolute;
  top: 750px;
  width: 760px;
  height: 354px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -2.78%,
    #fff 19.91%
  );
`;

const Figure = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  margin: 70px auto 0px;
`;

const FigCaption = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 140% */
  letter-spacing: -0.6px;
  margin-bottom: 50px;
`;

const FirstImage = styled.img`
  border-radius: 10px;
`;

const Figure2 = styled.div`
  position: relative;
`;

const FigCaption2 = styled.div`
  color: var(--black-bk-02, #101010);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 140% */
  letter-spacing: -0.6px;
  span {
    color: var(--blue-b-06, #1557d0);
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -0.6px;
  }
`;

const SecondImage = styled.img`
  width: 350px;
  height: 733px;
  flex-shrink: 0;
  border-radius: 14.741px;
  background: #fff;
  position: absolute;
  top: 150px;
  left: 50px;
`;
const ThirdImage = styled.img`
  position: absolute;
  top: 250px;
  left: 300px;
  border-radius: 8px;
  background: #fff;
  width: 307.729px;
  height: 585px;
  flex-shrink: 0;
`;

export default MainHowToUseSection;
