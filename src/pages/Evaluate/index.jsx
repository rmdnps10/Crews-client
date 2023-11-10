import React from 'react';
import styled from 'styled-components';
import EvaluateSummarySection from './EvaluateSummarySection';
import BottomBar from './BottomBar';
export const Evaluate = () => {
  return (
    <>
      <EvaluateContainer>
        <EvaluateSummarySection />
      </EvaluateContainer>
      <BottomBar />
    </>
  );
};
const EvaluateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
`;
const EvaluateHeader = styled.div`
  align-self: flex-start;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;
const EvaluateH1 = styled.div`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
`;
const BackArrowIcon = styled.img`
  position: absolute;
  top: 3px;
  left: -46px;
  width: 34px;
`;
const EvaluateGuide = styled.div`
  margin-top: 10px;
  color: var(--gray-g-05, #999);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const InformationBoard = styled.div`
  width: 760px;
  height: 140px;
  margin: 40px 0px;
  border-radius: 10px;
  background: #f6f8fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const MainInform = styled.div``;

const MainText = styled.span`
  color: var(--black-bk-02, #101010);
  font-size: 30px;
  font-weight: 600;
  line-height: 160%; /* 48px */
  letter-spacing: -0.6px;
`;
const MainBlueText = styled(MainText)`
  color: var(--blue-b-05-m, #3172ea);
`;

const TotalApplyCount = styled.span`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 64px */
  letter-spacing: -0.8px;
`;

const TotalPassCount = styled(TotalApplyCount)`
  color: var(--blue-b-05-m, #3172ea);
`;

const SubInform = styled.div`
  color: var(--gray-g-05, #999);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
  letter-spacing: -0.4px;
`;
