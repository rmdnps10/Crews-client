import { Space } from 'components/atoms';
import styled from 'styled-components';

function H1() {
  return (
    <>
      <Space height="72px" />
      <H1Wrapper>
        <StepIndicate>STEP 01</StepIndicate>
        <Line />
        <SectionTitle>모집공고 작성하기</SectionTitle>
        
      </H1Wrapper>
      <Space height="40px"></Space>
    </>
  );
}

const H1Wrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 33px;
`;

const StepIndicate = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
`;

const Line = styled.span`
  width: 3px;
  height: 26px;
  border-radius: 50px;
  background-color: rgba(153, 153, 153, 1);
  margin-top: 2px;
`;

const SectionTitle = styled.span`
  font-size: 28px;
  line-height: normal;
  font-weight: 700;
`;

export default H1;
