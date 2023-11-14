import React, { useState } from 'react';
import styled from 'styled-components';
import beforeArrowIcon from './beforeArrow.svg';
import nextArrowIcon from './nextArrow.svg';
function AssessSection() {
  const [text, setText] = useState({ score: '', oneLiner: '' });
  const { score, oneLiner } = text;
  const onTextFieldChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AssessTotalSection>
        <EvaluatePagenation>
          <BeforeButton src={beforeArrowIcon} />
          <IndexState>01 / 48</IndexState>
          <AfterButton src={nextArrowIcon} />
        </EvaluatePagenation>
        <AssessSectionWrapper>
          <AssessWidthContainer>
            <AverageScore>
              <div className="average-label">평균 점수</div>
              <div className="average-score">4.4 (상위 10%)</div>
            </AverageScore>
            <CommentList>
              <CommentItem>
                <div className="author">정고은</div>
                <div className="score-comment">4 / 인영이 좀 치네</div>
              </CommentItem>{' '}
              <CommentItem>
                <div className="author">한우석</div>
                <div className="score-comment">4 / 인영이 좀 치네</div>
              </CommentItem>{' '}
              <CommentItem>
                <div className="author">한우석</div>
                <div className="score-comment">4 / 인영이 좀 치네</div>
              </CommentItem>{' '}
              <CommentItem>
                <div className="author">한우석</div>
                <div className="score-comment">4 / 인영이 좀 치네</div>
              </CommentItem>
              <CommentItem>
                <div className="author">한우석</div>
                <div className="score-comment">4 / 인영이 좀 치네</div>
              </CommentItem>
            </CommentList>
            <MyScore>
              <div className="label">내 점수</div>
              <div className="description">최대 5점</div>
            </MyScore>
            <ScoreInput onChange={onTextFieldChange} value={score} />
            <MyAssess>
              <div className="label">나의 한 줄 평가</div>
              <div className="description">글자 수 (0/200)</div>
            </MyAssess>
            <OneLinerInput onChange={onTextFieldChange} value={oneLiner} />
            <ButtonContainer>
              <ReviseAssessButton>내 평가 수정하기</ReviseAssessButton>
              <FirstPassButton>1차 합격 시키기</FirstPassButton>
            </ButtonContainer>
          </AssessWidthContainer>
        </AssessSectionWrapper>
      </AssessTotalSection>
    </>
  );
}

const AssessTotalSection = styled.section`
  position: fixed;
  top: 113px;
  right: 130px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const AssessSectionWrapper = styled.div`
  width: 360px;
  height: 762px;
  border-radius: 10px;
  background: #f7f7f7;
`;

const EvaluatePagenation = styled.div`
  align-self: flex-end;
  display: flex;
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

const AssessWidthContainer = styled.div`
  width: 80%;
  margin 0 auto;
`;

const AverageScore = styled.div`
  display: flex;
  height: 68px;
  align-items: center;
  .average-label {
    color: #101010;
    font-size: 22px;
    font-weight: 700;
    line-height: normal;
  }
  .average-score {
    margin-left: auto;
    color: var(--blue-b-05-m, #3172ea);
    font-size: 22px;
    font-weight: 700;
    line-height: normal;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 20px 0px;
`;
const CommentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .author {
    color: var(--gray-g-05, #999);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  .score-comment {
    color: var(--black-bk-01, #303030);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.36px;
  }
`;

const MyScore = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 16px;
  align-items: center;
  .label {
    color: #101010;
    font-size: 18px;
    font-weight: 700;
  }
  .description {
    color: var(--gray-g-05, #999);
    font-size: 14px;
    font-weight: 400;
  }
`;

const ScoreInput = styled.input.attrs(() => ({ name: 'score' }))`
  border-radius: 10px;
  border: 1px solid var(--gray-g-04, #b3b3b3);
  background: #fff;
  width: 100%;
  height: 61px;
`;

const OneLinerInput = styled(ScoreInput).attrs(() => ({ name: 'oneLiner' }))`
  height: 130px;
`;
const MyAssess = styled(MyScore)``;

const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FirstPassButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
`;

const ReviseAssessButton = styled(FirstPassButton)`
  border-radius: 10px;
  background: var(--black-bk-01, #303030);
`;
export default AssessSection;
