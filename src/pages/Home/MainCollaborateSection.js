import { Space } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';

function MainCollaborateSection() {
  return (
    <>
      <Space height={'50px'} />
      <H1>
        <span>Crews</span>와 함께하는 동아리
      </H1>
    </>
  );
}

const H1 = styled.h1`
  color: var(--black-bk-02, #101010);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 140% */
  letter-spacing: -0.6px;
  span {
    color: var(--blue-b-05-m, #3172ea);
    font-family: Poppin;
    text-indent: 10px;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.72px;
    padding-right: 10px;
  }
`;
export default MainCollaborateSection;
