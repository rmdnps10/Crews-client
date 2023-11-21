import { Space } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import selectRadio from './selectRadio.svg';
import calendarIcon from './calendar.svg';
import clockIcon from './clock.svg';
import textData from './textData';
import { GuideText } from '.';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { intPlanAtom } from './atom';
// 모집 일정 입력받는 폼 섹션은 복잡성 때문에 따로 컴포넌트로 선언해줬음
// 중간에 선언해준 클래스는 단순한 폼 영역간의 구분을 위해 선언됨
function RecruitPlanSection() {
  // 날짜 입력받는 폼에 대한 상태관리
  // ipas: int plan atom state
  const [ipas, setIntPlanAtomState] = useRecoilState(intPlanAtom);
  const onChangeIntData = (e) => {
    setIntPlanAtomState({ ...ipas, [e.target.name]: e.target.value });
  };

  // 상시모집 여부, 2차면접여부에 대한 상태 관리
  // Default: 상시모집 x, 2차 인터뷰 여부 x
  const [radioState, setRadioState] = useState({
    isAlways: false,
    hasSecond: false,
  });
  const { isAlways, hasSecond } = radioState;

  const handleCheckRadioChange = (e) => {
    let { name, value } = e.currentTarget;
    setRadioState((prev) => {
      return { ...prev, [name]: value === 'true' ? true : false };
    });
  };
  console.log(ipas);
  return (
    <>
      <RecruitWrapper>
        <div className="상시모집여부">
          <FormSubTitle>상시 모집 여부</FormSubTitle>
          <RadioWrapper>
            <StyledLabel htmlFor="isAlways">
              <StyledRadio
                name="isAlways"
                value="true"
                onChange={handleCheckRadioChange}
              />{' '}
              <span>예</span>
            </StyledLabel>
            <StyledLabel htmlFor="isAlways">
              <StyledRadio
                name="isAlways"
                value="false"
                onChange={handleCheckRadioChange}
                defaultChecked
              />{' '}
              <span>아니오</span>
            </StyledLabel>
          </RadioWrapper>
        </div>
        <Space height={'48px'} />
        <div className="1차서류일정">
          <FormSubTitle>1차 서류전형 일정</FormSubTitle>
          <Space height={'20px'} />
          <GuideText>{textData.서류전형일정}</GuideText>
          <Space height={'24px'} />
          <DateRangeSection>
            {/* 시작일 */}
            <DataRangeItem>
              <Icon src={calendarIcon} />
              <Space width={'8px'} />
              <RangeType>시작일</RangeType>
              <Space width={'32px'} />
              <DateInputWrapper>
                <DateYearInput
                  width={'44px'}
                  name="firstsy"
                  value={ipas.firstsy}
                  onChange={onChangeIntData}
                />
                <DateType>년</DateType>
                <DateInput
                  width={'23px'}
                  name="firstsm"
                  value={ipas.firstsm}
                  onChange={onChangeIntData}
                />
                <DateType>월</DateType>
                <DateInput
                  width={'23px'}
                  name="firstsd"
                  value={ipas.firstsd}
                  onChange={onChangeIntData}
                />
                <DateType>일</DateType>
              </DateInputWrapper>
              <Space width={'69px'} />
              <Icon src={clockIcon} />
              <Space width={'8px'} />
              <ClockInputWrapper>
                <DateInput
                  width={'20px'}
                  name="firstsh"
                  value={ipas.firstsh}
                  onChange={onChangeIntData}
                />
                <DateType>시</DateType>
                <DateInput
                  width={'23px'}
                  name="firstsmn"
                  value={ipas.firstsmn}
                  onChange={onChangeIntData}
                />
                <DateType>분</DateType>
              </ClockInputWrapper>
            </DataRangeItem>
            {/* 마감일 */}
            {isAlways ? (
              ''
            ) : (
              <>
                {' '}
                <DataRangeItem>
                  <Icon src={calendarIcon} />
                  <Space width={'8px'} />
                  <RangeType>마감일</RangeType>
                  <Space width={'32px'} />
                  <DateInputWrapper>
                    <DateYearInput
                      width={'44px'}
                      name="firstey"
                      value={ipas.firstey}
                      onChange={onChangeIntData}
                    />
                    <DateType>년</DateType>
                    <DateInput
                      width={'23px'}
                      name="firstem"
                      value={ipas.firstem}
                      onChange={onChangeIntData}
                    />
                    <DateType>월</DateType>
                    <DateInput
                      width={'23px'}
                      name="firsted"
                      value={ipas.firsted}
                      onChange={onChangeIntData}
                    />
                    <DateType>일</DateType>
                  </DateInputWrapper>
                  <Space width={'69px'} />
                  <Icon src={clockIcon} />
                  <Space width={'8px'} />
                  <ClockInputWrapper>
                    <DateInput
                      width={'20px'}
                      name="firsteh"
                      value={ipas.firsteh}
                      onChange={onChangeIntData}
                    />
                    <DateType>시</DateType>
                    <DateInput
                      width={'23px'}
                      name="firstemn"
                      value={ipas.firstemn}
                      onChange={onChangeIntData}
                    />
                    <DateType>분</DateType>
                  </ClockInputWrapper>
                </DataRangeItem>
                <DataRangeItem>
                  <Icon src={calendarIcon} />
                  <Space width={'8px'} />
                  <RangeType>발표일</RangeType>
                  <Space width={'32px'} />
                  <DateInputWrapper>
                    <DateYearInput
                      width={'44px'}
                      name="firstay"
                      value={ipas.firstay}
                      onChange={onChangeIntData}
                    />
                    <DateType>년</DateType>
                    <DateInput
                      width={'23px'}
                      name="firstam"
                      value={ipas.firstam}
                      onChange={onChangeIntData}
                    />
                    <DateType>월</DateType>
                    <DateInput
                      width={'23px'}
                      name="firstad"
                      value={ipas.firstad}
                      onChange={onChangeIntData}
                    />
                    <DateType>일</DateType>
                  </DateInputWrapper>
                  <Space width={'69px'} />
                  <Icon src={clockIcon} />
                  <Space width={'8px'} />
                  <ClockInputWrapper>
                    <DateInput
                      width={'20px'}
                      name="firstah"
                      value={ipas.firstah}
                      onChange={onChangeIntData}
                    />
                    <DateType>시</DateType>
                    <DateInput
                      width={'23px'}
                      name="firstamn"
                      value={ipas.firstamn}
                      onChange={onChangeIntData}
                    />
                    <DateType>분</DateType>
                  </ClockInputWrapper>
                </DataRangeItem>{' '}
              </>
            )}
          </DateRangeSection>
        </div>
        <Space height={'42px'} />

        <div className="2차면접여부">
          <FormSubTitle>2차 면접 실시 여부</FormSubTitle>
          <Space height={'20px'} />
          <GuideText>{textData.면접실시여부}</GuideText>
          <RadioWrapper>
            <StyledLabel htmlFor="hasSecond">
              <StyledRadio
                name="hasSecond"
                value="true"
                onChange={handleCheckRadioChange}
              />{' '}
              <span>예</span>
            </StyledLabel>
            <StyledLabel htmlFor="hasSecond">
              <StyledRadio
                name="hasSecond"
                value="false"
                onChange={handleCheckRadioChange}
                defaultChecked
              />{' '}
              <span>아니오</span>
            </StyledLabel>
          </RadioWrapper>
        </div>

        {hasSecond ? (
          <div className="2차면접일정">
            <Space height={'42px'} />
            <FormSubTitle>2차 면접 일정</FormSubTitle>
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
                  <DateYearInput
                    width={'44px'}
                    name="secondsy"
                    value={ipas.secondsy}
                    onChange={onChangeIntData}
                  />
                  <DateType>년</DateType>
                  <DateInput
                    width={'23px'}
                    name="secondsm"
                    value={ipas.secondsm}
                    onChange={onChangeIntData}
                  />
                  <DateType>월</DateType>
                  <DateInput
                    width={'23px'}
                    name="secondsd"
                    value={ipas.secondsd}
                    onChange={onChangeIntData}
                  />
                  <DateType>일</DateType>
                </DateInputWrapper>
                <Space width={'69px'} />

                <Icon src={clockIcon} />
                <Space width={'8px'} />
                <ClockInputWrapper>
                  <DateInput
                    width={'20px'}
                    name="secondsh"
                    value={ipas.secondsh}
                    onChange={onChangeIntData}
                  />
                  <DateType>시</DateType>
                  <DateInput
                    width={'23px'}
                    name="secondsmn"
                    value={ipas.secondsmn}
                    onChange={onChangeIntData}
                  />
                  <DateType>분</DateType>
                </ClockInputWrapper>
              </DataRangeItem>
              <DataRangeItem>
                <Icon src={calendarIcon} />
                <Space width={'8px'} />
                <RangeType>마감일</RangeType>
                <Space width={'32px'} />

                <DateInputWrapper>
                  <DateYearInput
                    width={'44px'}
                    name="secondey"
                    value={ipas.secondey}
                    onChange={onChangeIntData}
                  />
                  <DateType>년</DateType>
                  <DateInput
                    width={'23px'}
                    name="secondem"
                    value={ipas.secondem}
                    onChange={onChangeIntData}
                  />
                  <DateType>월</DateType>
                  <DateInput
                    width={'23px'}
                    name="seconded"
                    value={ipas.seconded}
                    onChange={onChangeIntData}
                  />
                  <DateType>일</DateType>
                </DateInputWrapper>
                <Space width={'69px'} />

                <Icon src={clockIcon} />
                <Space width={'8px'} />
                <ClockInputWrapper>
                  <DateInput
                    width={'20px'}
                    name="secondeh"
                    value={ipas.secondeh}
                    onChange={onChangeIntData}
                  />
                  <DateType>시</DateType>
                  <DateInput
                    width={'23px'}
                    name="secondemn"
                    value={ipas.secondemn}
                    onChange={onChangeIntData}
                  />
                  <DateType>분</DateType>
                </ClockInputWrapper>
              </DataRangeItem>
              <DataRangeItem>
                <Icon src={calendarIcon} />
                <Space width={'8px'} />
                <RangeType>발표일</RangeType>
                <Space width={'32px'} />

                <DateInputWrapper>
                  <DateYearInput
                    width={'44px'}
                    name="seconday"
                    value={ipas.seconday}
                    onChange={onChangeIntData}
                  />
                  <DateType>년</DateType>
                  <DateInput
                    width={'23px'}
                    name="secondam"
                    value={ipas.secondam}
                    onChange={onChangeIntData}
                  />
                  <DateType>월</DateType>
                  <DateInput
                    width={'23px'}
                    name="secondad"
                    value={ipas.secondad}
                    onChange={onChangeIntData}
                  />
                  <DateType>일</DateType>
                </DateInputWrapper>
                <Space width={'69px'} />

                <Icon src={clockIcon} />
                <Space width={'8px'} />
                <ClockInputWrapper>
                  <DateInput
                    width={'20px'}
                    name="secondah"
                    value={ipas.secondah}
                    onChange={onChangeIntData}
                  />
                  <DateType>시</DateType>
                  <DateInput
                    width={'23px'}
                    name="secondamn"
                    value={ipas.secondamn}
                    onChange={onChangeIntData}
                  />
                  <DateType>분</DateType>
                </ClockInputWrapper>
              </DataRangeItem>
            </DateRangeSection>
          </div>
        ) : (
          ''
        )}
      </RecruitWrapper>
    </>
  );
}

const DateRangeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
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

const DateInput = styled.input.attrs({ type: 'text', maxLength: '2' })`
  border: none;
  outline: none;
  height: 18px;
  align-self: center;
  padding: 0px;
  box-sizing: content-box;
  width: ${(props) => props.width};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: center;
  border-bottom: 2px solid;
`;

const DateYearInput = styled.input.attrs({ type: 'text', maxLength: '4' })`
  border: none;
  outline: none;
  height: 18px;
  align-self: center;
  padding: 0px;
  box-sizing: content-box;
  width: ${(props) => props.width};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: center;
  border-bottom: 2px solid;
`;

const DateType = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.4px;
  padding-right: 3px;
`;
const RangeType = styled.span`
  color: var(--blue-b-05-m, #3172ea);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const RecruitWrapper = styled.div`
  padding-top: 12px;
  padding-left: 35px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const FormSubTitle = styled.div`
  color: var(--black-bk-02, #101010);
  font-size: 18px;
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
    font-size: 18px;
    line-height: normal;
    font-weight: 400;
  }
`;
const StyledRadio = styled.input.attrs(() => ({ type: 'radio' }))`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgb(204, 204, 204);
  margin: 0; // 스타일 초기화가 안되있는거같음
  :hover {
    cursor: pointer;
  }
  :checked {
    background: no-repeat center/100% url('${selectRadio}');
    border: none;
  }
`;

export default RecruitPlanSection;
