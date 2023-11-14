import React from 'react';
import styled from 'styled-components';
import backArrowIcon from './backArrow.svg';
import beforeArrowIcon from './beforeArrow.svg';
import nextArrowIcon from './nextArrow.svg';
import {
  BackArrowIcon,
  EvaluateH1,
} from 'pages/Evaluate/EvaluateSummarySection';
function EvaluateDetailHeader() {
  return (
    <EvaluateDetailHeaderWrapper>
      <EvaluateH1>20201148 정인영 님의 지원서</EvaluateH1>
      <EvaluatePagenation>
        <BeforeButton src={beforeArrowIcon} />
        <IndexState>01 / 48</IndexState>
        <AfterButton src={nextArrowIcon} />
      </EvaluatePagenation>
      <BackArrowIcon src={backArrowIcon} />
    </EvaluateDetailHeaderWrapper>
  );
}

const EvaluateDetailHeaderWrapper = styled.div`
  margin-top: 40px;
  width: 1200px;
  display: flex;
  position: relative;
`;

const EvaluatePagenation = styled.div`
  display: flex;
  margin-left: auto;
  gap: 8px;
  align-items: center;
`;

const BeforeButton = styled.img`
  cursor: pointer;
`;
const AfterButton = styled.img`
  cursor: pointer;
`;
const IndexState = styled.div`
  margin-top: 4px;
  color: var(--black-bk-02, #101010);
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
`;

export default EvaluateDetailHeader;
