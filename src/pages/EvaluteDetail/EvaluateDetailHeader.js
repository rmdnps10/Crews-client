import React from 'react';
import styled from 'styled-components';
import backArrowIcon from './backArrow.svg';

import {
  BackArrowIcon,
  EvaluateH1,
} from 'pages/Evaluate/EvaluateSummarySection';
function EvaluateDetailHeader() {
  return (
    <EvaluateDetailHeaderWrapper>
      <EvaluateH1>20201148 정인영 님의 지원서</EvaluateH1>
      <BackArrowIcon src={backArrowIcon} />
    </EvaluateDetailHeaderWrapper>
  );
}

const EvaluateDetailHeaderWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  position: relative;
`;



export default EvaluateDetailHeader;
