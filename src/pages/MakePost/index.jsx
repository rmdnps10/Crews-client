import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Flex } from 'components/atoms';
import ImageSection from './ImageSection';
import H1 from './H1';
import FormTitle from './FormTitle';
import FormTextArea from './FormTextArea';
import { Space } from 'components/atoms';
import textData from './textData';
import RecruitPlanSection from './RecruitPlanSection';

export const MakePost = () => {
  const [form, setForm] = useState({
    title: '',
    isContinuousRecruitment: 'false',
    firstStartDate: '',
    firstEndDate: '',
    firstAnnounceDate: '',
    hasSecondInterview: '',
    secondStartDate: '',
    secondEndDate: '',
    secondAnnounceDate: '',
    recruitWho: '',
    applyQualify: '',
    recruitProcedure: '',
    membershipFee: '',
    uploadImage: {},
    mainContent: '',
  });

  return (
    <MakePostWrapper>
      <H1 />
      <Space />
      <FormList>
        <FormItem>
          <FormTitle index={1} content={'모집 제목'} />
          <FormTextArea height={'68px'} placeholder={textData.모집제목} />
        </FormItem>
        <FormItem>
          <FormTitle index={2} content={'공고할 내용'} />
          <FormTextArea height={'220px'} placeholder={textData.공고내용} />
        </FormItem>
        <FormItem>
          <FormTitle index={3} content={'지원 자격'} />
          <FormTextArea height={'130px'} placeholder={textData.지원자격} />
        </FormItem>
        <FormItem>
          <FormTitle index={4} content={'모집 일정'} />
          <RecruitPlanSection/>
        </FormItem>
        <FormItem>
          <FormTitle index={5} content={'모집 절차'} />
          <FormTextArea placeholder={textData.모집절차} />
        </FormItem>
        <FormItem>
          <FormTitle index={6} content={'회비'} />
          <FormTextArea height={'68px'} placeholder={textData.회비} />
        </FormItem>
        <FormItem>
          <FormTitle index={7} content={'이미지 첨부'} />
          <GuideText>{textData.이미지첨부}</GuideText>
          <ImageSection />
        </FormItem>
      </FormList>
      <Space height={'52px'}></Space>
      <GuideText>{textData.유의사항}</GuideText>
      <MoveButton>'STEP 02 지원서 양식 작성’ 으로 이동하기</MoveButton>
    </MakePostWrapper>
  );
};

const MakePostWrapper = styled.div`
  margin: 0 auto;
  width: 920px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

export const GuideText = styled.div`
  color: var(--gray-g-04, #b3b3b3);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const MoveButton = styled.button`
  all: unset; // 버튼 css 초기화. 나중에 전역스타일링에서 바꿔줘야할듯
  margin: 80px auto 80px;
  width: 522px;
  height: 68px;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  font-weight: 700;
`;
