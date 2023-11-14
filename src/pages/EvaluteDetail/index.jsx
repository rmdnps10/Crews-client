import { Flex } from 'components/atoms';
import ApplicationSection from './ApplicationSection';
import AssessSection from './AssessSection';
import EvaluateDetailHeader from './EvaluateDetailHeader';
import BottomBar from 'pages/Evaluate/BottomBar';
import React from 'react';
import styled from 'styled-components';
export const EvaluateDetail = () => {
  return (
    <>
      <EvaluateDetailHeader />
      <EvaluateDetailContainer>
        <ApplicationSection />
        <AssessSection />
      </EvaluateDetailContainer>
      <BottomBar />
    </>
  );
};

const EvaluateDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
