import { Space } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import selectRadio from './selectRadio.svg';
import calendarIcon from './calendar.svg';
import clockIcon from './clock.svg';
import { GuideText } from '.';
function RecruitPlanSection() {
  return (
    <>
      <RecruitWrapper>
        <div className="상시모집여부">
          <FormSubTitle>상시 모집 여부</FormSubTitle>
          <RadioWrapper>
            <StyledLabel htmlFor="isAlways">
              <StyledRadio name="isAlways" /> <span>예</span>
            </StyledLabel>
            <StyledLabel htmlFor="isAlways">
              <StyledRadio name="isAlways" /> <span>아니오</span>
            </StyledLabel>
          </RadioWrapper>
        </div>
        <Space height={'48px'} />
        <div className="1차서류일정">
          <FormSubTitle>1차 서류전형 일정</FormSubTitle>
          <Space height={'20px'} />
          <GuideText>전형 일자를 정확하게 기입해 주세요.</GuideText>
          <Space height={'24px'} />
          <DateRangeSection>
            <DataRangeItem>
              <Icon src={calendarIcon} />
              <Space width={'8px'} />
              <RangeType>시작일</RangeType>
              <Space width={'32px'} />

              <DateInputWrapper>
                <DateInput width={'44px'} />
                <DateType>년</DateType>
                <DateInput width={'23px'} />
                <DateType>월</DateType>
                <DateInput width={'23px'} />
                <DateType>일</DateType>
              </DateInputWrapper>
              <Space width={'69px'} />

              <Icon src={clockIcon} />
              <Space width={'8px'} />
              <ClockInputWrapper>
                <DateInput width={'23px'} />
                <DateType>시</DateType>
                <DateInput width={'28px'} />
                <DateType>분</DateType>
              </ClockInputWrapper>
            </DataRangeItem>
            <DataRangeItem>
              <Icon src={calendarIcon} />
              <Space width={'8px'} />
              <RangeType>마감일</RangeType>
              <Space width={'32px'} />

              <DateInputWrapper>
                <DateInput width={'44px'} />
                <DateType>년</DateType>
                <DateInput width={'23px'} />
                <DateType>월</DateType>
                <DateInput width={'23px'} />
                <DateType>일</DateType>
              </DateInputWrapper>
              <Space width={'69px'} />

              <Icon src={clockIcon} />
              <Space width={'8px'} />
              <ClockInputWrapper>
                <DateInput width={'23px'} />
                <DateType>시</DateType>
                <DateInput width={'28px'} />
                <DateType>분</DateType>
              </ClockInputWrapper>
            </DataRangeItem>
            <DataRangeItem>
              <Icon src={calendarIcon} />
              <Space width={'8px'} />
              <RangeType>발표일</RangeType>
              <Space width={'32px'} />

              <DateInputWrapper>
                <DateInput width={'44px'} />
                <DateType>년</DateType>
                <DateInput width={'23px'} />
                <DateType>월</DateType>
                <DateInput width={'23px'} />
                <DateType>일</DateType>
              </DateInputWrapper>
              <Space width={'69px'} />

              <Icon src={clockIcon} />
              <Space width={'8px'} />
              <ClockInputWrapper>
                <DateInput width={'23px'} />
                <DateType>시</DateType>
                <DateInput width={'28px'} />
                <DateType>분</DateType>
              </ClockInputWrapper>
            </DataRangeItem>
          </DateRangeSection>
        </div>
        <Space height={'80px'} />
        <div className="2차면접여부">
          <FormSubTitle>2차 면접 실시 여부</FormSubTitle>
          <Space height={'20px'} />
          <GuideText>
            서류 전형 합격자에 한해서 2차 면접을 계획 중이라면 ‘예’, 그렇지 않을
            경우 ‘아니오’를 선택해주세요.
          </GuideText>
          <RadioWrapper>
            <StyledLabel htmlFor="isAlways">
              <StyledRadio name="isAlways" /> <span>예</span>
            </StyledLabel>
            <StyledLabel htmlFor="isAlways">
              <StyledRadio name="isAlways" /> <span>아니오</span>
            </StyledLabel>
          </RadioWrapper>
        </div>
        <Space height={'48px'} />
        <div className="2차면접일정">
          <FormSubTitle>2차 서류전형 일정</FormSubTitle>
          <Space height={'20px'} />
          <GuideText>면접 일자를 정확하게 기입해 주세요.</GuideText>
          <Space height={'24px'} />
          <DateRangeSection>
            <DataRangeItem>
              <Icon src={calendarIcon} />
              <Space width={'8px'} />
              <RangeType>시작일</RangeType>
              <Space width={'32px'} />

              <DateInputWrapper>
                <DateInput width={'44px'} />
                <DateType>년</DateType>
                <DateInput width={'23px'} />
                <DateType>월</DateType>
                <DateInput width={'23px'} />
                <DateType>일</DateType>
              </DateInputWrapper>
              <Space width={'69px'} />

              <Icon src={clockIcon} />
              <Space width={'8px'} />
              <ClockInputWrapper>
                <DateInput width={'23px'} />
                <DateType>시</DateType>
                <DateInput width={'28px'} />
                <DateType>분</DateType>
              </ClockInputWrapper>
            </DataRangeItem>
            <DataRangeItem>
              <Icon src={calendarIcon} />
              <Space width={'8px'} />
              <RangeType>마감일</RangeType>
              <Space width={'32px'} />

              <DateInputWrapper>
                <DateInput width={'44px'} />
                <DateType>년</DateType>
                <DateInput width={'23px'} />
                <DateType>월</DateType>
                <DateInput width={'23px'} />
                <DateType>일</DateType>
              </DateInputWrapper>
              <Space width={'69px'} />

              <Icon src={clockIcon} />
              <Space width={'8px'} />
              <ClockInputWrapper>
                <DateInput width={'23px'} />
                <DateType>시</DateType>
                <DateInput width={'28px'} />
                <DateType>분</DateType>
              </ClockInputWrapper>
            </DataRangeItem>
            <DataRangeItem>
              <Icon src={calendarIcon} />
              <Space width={'8px'} />
              <RangeType>발표일</RangeType>
              <Space width={'32px'} />

              <DateInputWrapper>
                <DateInput width={'44px'} />
                <DateType>년</DateType>
                <DateInput width={'23px'} />
                <DateType>월</DateType>
                <DateInput width={'23px'} />
                <DateType>일</DateType>
              </DateInputWrapper>
              <Space width={'69px'} />

              <Icon src={clockIcon} />
              <Space width={'8px'} />
              <ClockInputWrapper>
                <DateInput width={'23px'} />
                <DateType>시</DateType>
                <DateInput width={'28px'} />
                <DateType>분</DateType>
              </ClockInputWrapper>
            </DataRangeItem>
          </DateRangeSection>
        </div>
      </RecruitWrapper>
    </>
  );
}

const DateRangeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const DataRangeItem = styled.div`
  display: flex;
  align-items: center;
`;

const DateInputWrapper = styled.div`
  height: 24px;
  display: flex;
`;

const ClockInputWrapper = styled(DateInputWrapper)``;
const DateInput = styled.input`
  border: none;
  outline: none;
  height: 24px;
  padding: 0px;
  box-sizing: content-box;
  width: ${(props) => props.width};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -0.4px;
  text-align: center;
  border-bottom: 2px solid;
`;

const DateType = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.4px;
  padding-right: 3px;
`;
const RangeType = styled.span`
  color: var(--blue-b-05-m, #3172ea);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const RecruitWrapper = styled.div`
  padding-top: 12px;
  padding-left: 35px;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const FormSubTitle = styled.div`
  color: var(--black-bk-02, #101010);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.44px;
`;
const RadioWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 80px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  > span {
    min-width: fit-content;
    padding-left: 8px;
    font-size: 20px;
    line-height: normal;
    font-weight: 400;
  }
`;
const StyledRadio = styled.input.attrs(() => ({ type: 'radio' }))`
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid rgb(204, 204, 204);
  margin: 0; // 스타일 초기화가 안되있는거같음
  :hover {
    cursor: pointer;
  }
  :checked {
    background: center url('${selectRadio}') no-repeat;
    border: none;
  }
`;

export default RecruitPlanSection;
