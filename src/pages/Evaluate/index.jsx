import React from 'react';
import styled from 'styled-components';
import EvaluateSummarySection from './EvaluateSummarySection';
import BottomBar from './BottomBar';
import ApplyListSection from './ApplyListSection';
export const Evaluate = () => {
  return (
    <>
      <EvaluateContainer>
        <EvaluateSummarySection />
        <ApplyListSection />
      </EvaluateContainer>
      <BottomBar />
    </>
  );
};
const EvaluateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
