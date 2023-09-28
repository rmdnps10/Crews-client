import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/atoms';
export const MakePost = () => {
  const [form, setForm] = useState({
    title: '',
    isContinuousRecruitment: false,
    firstStartDate: '',
    firstEndDate: '',
    firstAnnounceDate: '',
    hasSecondInterview: false,
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

  const onTextFieldChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onRadioChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value === 'true' });
  };

  return (
    <>
      <MakePostWrapper>
        <H1>Step1. 모집 공고 작성하기</H1>
        <Title direction="column" align="flex-start" gap="10">
          <H2>모집 제목</H2>
          <TextField
            type="text"
            name="title"
            value={form.title}
            onChange={onTextFieldChange}
          ></TextField>
          <GuideText>
            모집 제목은 짧고 간결하게 써주세요! 예) IT 창업 동아리 멋쟁이
            사자처럼에서 19기 아기사자를 모집합니다!
          </GuideText>
        </Title>
        <RecruitPlan direction="column" align="flex-start" gap="10">
          <H2>리크루팅 일정</H2>
          <H3>상시 모집 여부</H3>
          <RadioWrap>
            예
            <Radio
              type="radio"
              name="isContinuousRecruitment"
              value={true}
              onChange={onRadioChange}
              checked={form.isContinuousRecruitment === true}
            />
            아니오
            <Radio
              type="radio"
              name="isContinuousRecruitment"
              value={false}
              onChange={onRadioChange}
              checked={form.isContinuousRecruitment === false}
            />
          </RadioWrap>

          <H3>1차 서류전형 일정 설정</H3>
          <PlanWrap>
            시작일
            <Date
              type="date"
              name="firstStartDate"
              value={form.firstStartDate}
              onChange={onTextFieldChange}
            />
            마감일
            <Date
              type="date"
              name="firstEndDate"
              value={form.firstEndDate}
              onChange={onTextFieldChange}
            />
            발표일
            <Date
              type="date"
              name="firstAnnounceDate"
              value={form.firstAnnounceDate}
              onChange={onTextFieldChange}
            />
          </PlanWrap>
          <GuideText>
            서류 시작, 마감, 발표일을 정확하게 기입해 주세요.
          </GuideText>
          <H3>2차 면접 일정 설정</H3>
          <PlanWrap>
            시작일
            <Date
              type="date"
              name="secondStartDate"
              value={form.secondStartDate}
              onChange={onTextFieldChange}
            />
            마감일
            <Date
              type="date"
              name="secondEndDate"
              value={form.secondEndDate}
              onChange={onTextFieldChange}
            />
            발표일
            <Date
              type="date"
              name="secondAnnounceDate"
              value={form.secondAnnounceDate}
              onChange={onTextFieldChange}
            />
          </PlanWrap>
          <GuideText>
            시작, 마감, 발표일을 단위로 정확하게 기입해 주세요. 시작일, 마감일,
            발표일을 최대한 엄수해주세요.
          </GuideText>
        </RecruitPlan>

        <RecruitWho direction="column" align="flex-start" gap="10">
          <H2>모집 대상</H2>
          <TextField
            type="text"
            name="recruitWho"
            value={form.recruitWho}
            onChange={onTextFieldChange}
          />
          <GuideText>예) 현재 휴학/재학중인 대학생</GuideText>
        </RecruitWho>
        <ApplyQualify direction="column" align="flex-start" gap="10">
          <H2>지원 자격</H2>
          <TextField
            type="text"
            name="applyQualify"
            value={form.applyQualify}
            onChange={onTextFieldChange}
          />
          <GuideText>
            예) 에 관심있으신 분, ~를 하고싶으신 분, ~ 할 수 있으신 분
          </GuideText>
        </ApplyQualify>
        <RecruitProcedure direction="column" align="flex-start" gap="10">
          <H2>모집 절차</H2>
          <TextField
            type="text"
            name="recruitProcedure"
            value={form.recruitProcedure}
            onChange={onTextFieldChange}
          />
          <GuideText>
            동아리 가입 후 발생하는 가입비, 입회비, 활동비 등에 대해 자세히
            적어주세요.
          </GuideText>
        </RecruitProcedure>
        <MembershipFee direction="column" align="flex-start" gap="10">
          <H2>회비</H2>
          <TextField
            type="text"
            name="membershipFee"
            value={form.membershipFee}
            onChange={onTextFieldChange}
          />
          <GuideText>
            동아리 가입 후 발생하는 가입비, 입회비, 활동비 등에 대해 자세히
            적어주세요.
          </GuideText>
        </MembershipFee>

        <UploadImage direction="column" align="flex-start" gap="10">
          <H2>이미지</H2>
          <ImagePreview src="asdfd" alt="선택된 이미지 없음" />
          <ImageUploadButton type="file" />
          <GuideText>
            이미지는 최대 8장까지 첨부 가능합니다. 이미지를 여러 장 선택했을 때,
            선택한 첫 번째 이미지가 메인 화면에 표시됩니다.
          </GuideText>
        </UploadImage>

        <MainContent direction="column" align="flex-start" gap="10">
          <H2>공고 내용</H2>
          <TextField
            type="text"
            name="mainContent"
            value={form.mainContent}
            onChange={onTextFieldChange}
          />
          <GuideText>
            공고할 내용 파트는 구체적인 활동 내용을 명시하고, 추가적인
            공고사항들을 적는 곳입니다. 동아리 SNS 링크, 웹사이트 링크를 첨부할
            수 있습니다.
          </GuideText>
        </MainContent>
        <Notice>
          <H2>유의사항</H2>
          <p>
            이런 유의사항이 있습니다 동의하십니까?이런 유의사항이 있습니다
            동의하십니까?이런 유의사항이 있습니다 동의하십니까?이런 유의사항이
            있습니다 동의하십니까?이런 유의사항이 있습니다 동의하십니까?ㅍ이런
            유의사항이 있습니다 동의하십니까?이런 유의사항이 있습니다
            동의하십니까?이런 유의사항이 있습니다 동의하십니까?이런 유의사항이
            있습니다 동의하십니까?이런 유의사항이 있습니다 동의하십니까?이런
            유의사항이 있습니다 동의하십니까?이런 유의사항이 있습니다
            동의하십니까?이런 유의사항이 있습니다 동의하십니까?이런 유의사항이
            있습니다 동의하십니까?이런 유의사항이 있습니다 동의하십니까?이런
            유의사항이 있습니다 동의하십니까?이런 유의사항이 있습니다
            동의하십니까?이런 유의사항이 있습니다 동의하십니까?이런 유ㄱ의사항이
            있습니다 동의하십니까?ㅁㅅ
          </p>
        </Notice>
        <NavigateButton>Step2. 지원서 양식 작성</NavigateButton>
      </MakePostWrapper>
    </>
  );
};

const H1 = styled.div`
  font-size: 30px;
`;

const H2 = styled.div`
  font-size: 24px;
`;
const H3 = styled.div`
  font-size: 18px;
`;
const GuideText = styled.div`
  color: gray;
`;
const TextField = styled.textarea``;

const Date = styled.input``;

const Radio = styled.input``;

const NavigateButton = styled.button``;

const ImageUploadButton = styled.input``;

const ImagePreview = styled.img``;

const RadioWrap = styled(Flex)``;

const PlanWrap = styled(Flex)``;

const RecruitPlan = styled(Flex)``;

const Title = styled(Flex)``;

const RecruitWho = styled(Flex)``;

const ApplyQualify = styled(Flex)``;

const RecruitProcedure = styled(Flex)``;

const MembershipFee = styled(Flex)``;

const MainContent = styled(Flex)``;

const UploadImage = styled(Flex)``;

const Notice = styled.div``;

const MakePostWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
`;
