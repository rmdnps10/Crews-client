import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backArrow from './backArrow.svg';
import profile from './profile.png';
import { Flex, Text, Space } from 'components/atoms';
import { instance } from 'api/axios';
import { postDetailRequest } from 'api/request';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

export const PostDetail = () => {
  const [recruitmentData, setRecruitmentData] = useState(null);
  const [crewData, setCrewData] = useState(null);
  const params = useParams();
  const convertData = (str) => {
    // dayjs 사용해서
    if (!str) {
      return ''; // 날짜가 없을 경우 빈 문자열 반환
    }

    const formattedDate = dayjs(str).format('M월 D일 H시 m분');
    return formattedDate;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postResponse, crewResponse] = await Promise.all([
          instance.get(`${postDetailRequest.getPostInfo}`, {
            params: {
              post_id: params.postid,
            },
          }),
          instance.get(`${postDetailRequest.getCrewInfo}`, {
            params: {
              post_id: params.postid,
            },
          }),
        ]);

        setRecruitmentData({
          ...postResponse.data,
          apply_start_date: convertData(postResponse.data.apply_start_date),
          apply_end_date: convertData(postResponse.data.apply_end_date),
          document_result_date: convertData(
            postResponse.data.document_result_date
          ),
          interview_start_date: convertData(
            postResponse.data.interview_start_date
          ),
          interview_end_date: convertData(postResponse.data.interview_end_date),
          final_result_date: convertData(postResponse.data.final_result_date),
        });

        setCrewData(crewResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.postid]);

  return (
    <DetailWrapper>
      <BackArrow src={backArrow} />
      <Space height="40px" />
      <CrewInfo>
        <Flex justify="start" height="100%">
          <Profile src={profile} />
          <Flex direction="column" gap={'12'} align="flex-start">
            <Flex>
              <CrewName> {crewData?.crew_name}</CrewName>
              <CrewCategory>{crewData?.category}</CrewCategory>
            </Flex>
            <CrewDetail>{crewData?.crew_description}</CrewDetail>
          </Flex>
        </Flex>
      </CrewInfo>
      <Space height="40px" />

      <ContentDiv>
        <Title>
          <Text weight={700} size="30px">
            {recruitmentData?.title}
          </Text>
        </Title>
        <Space height="40px" />
        <Image></Image>
        <Space height="40px" />
        <Content>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              모집내용
            </Text>
            <Space height="16px" />
            <Text
              color="#101010"
              weight={400}
              size="18px"
              align="start"
              style={{ whiteSpace: 'pre-line' }}
            >
              {recruitmentData?.content}
            </Text>
          </Flex>
        </Content>
        <Space height="40px" />

        <Target>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              지원자격{' '}
            </Text>{' '}
            <Space height="16px" />
            <Text
              color="#101010"
              weight={400}
              size="18px"
              align="start"
              style={{ whiteSpace: 'pre-line' }}
            >
              {recruitmentData?.requirement_target}
            </Text>
          </Flex>
        </Target>
        <Space height="40px" />

        <Process>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              모집 절차
            </Text>{' '}
            <Space height="16px" />
            <Text
              color="#101010"
              weight={400}
              size="18px"
              align="start"
              style={{ whiteSpace: 'pre-line' }}
            >
              {recruitmentData?.progress}
            </Text>
          </Flex>
        </Process>
        <Space height="40px" />

        <Schedule>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              모집 일정
            </Text>{' '}
            <Space height="16px" />
            <Document>
              <Flex direction="column" align="start">
                <Text color="#101010" weight={700} size="18px">
                  1차 서류심사
                </Text>{' '}
                <Space height="12px" />
                <Text color="#101010" weight={400} size="18px" align="start">
                  접수일 : {recruitmentData?.apply_start_date}~
                  {recruitmentData?.apply_end_date}
                </Text>{' '}
                <Space height="12px" />
                <Text color="#101010" weight={400} size="18px" align="start">
                  발표일 : {recruitmentData?.document_result_date}
                </Text>
                <Space height="16px" />
              </Flex>
            </Document>
            {recruitmentData?.has_interview && (
              <Interview>
                <Flex direction="column" align="start">
                  <Text color="#101010" weight={700} size="18px">
                    2차 면접
                  </Text>{' '}
                  <Space height="12px" />
                  <Text color="#101010" weight={400} size="18px" align="start">
                    접수일 : {recruitmentData?.interview_start_date}~
                    {recruitmentData?.interview_end_date}
                  </Text>{' '}
                  <Space height="12px" />
                  <Text color="#101010" weight={400} size="18px" align="start">
                    발표일 : {recruitmentData?.final_result_date}
                  </Text>
                </Flex>
              </Interview>
            )}
          </Flex>
        </Schedule>
        <Space height="40px" />

        <Fee>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              회비
            </Text>{' '}
            <Space height="12px" />
            <Text
              color="#101010"
              weight={400}
              size="18px"
              align="start"
              style={{ whiteSpace: 'pre-line' }}
            >
              {recruitmentData?.membership_fee}
            </Text>
          </Flex>
        </Fee>
      </ContentDiv>
      <Space height="200px" />
    </DetailWrapper>
  );
};

const Textarea = styled.textarea`
  resize: none;
  border: none;
  color: '#101010';
  width: 760px;
  height: auto;
  font-weight: 400px;
  font-size: 18px;
  align-items: start;
  overflow-y: hidden;
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const BackArrow = styled.img`
  position: absolute;
  top: -2px;
  left: -43px;
  cursor: pointer;
`;

const CrewInfo = styled.div`
  width: 760px;
  height: 128px;
  border-radius: 20px;
  background: #f6f8fe;
`;
const Profile = styled.img`
  margin-left: 25.65px;
`;
const CrewName = styled.div`
  margin-left: 25.76px;
  color: #101010;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
`;
const CrewCategory = styled.div`
  margin-left: 12px;
  background-color: #3172ea;
  border-radius: 15.5px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
const CrewDetail = styled.div`
  margin-left: 25.76px;

  color: #666;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

const ContentDiv = styled.div`
  width: 760px;
`;
const Content = styled.div`
  width: 760px;
`;
const Title = styled.div`
  width: 760px;
`;
const Image = styled.div`
  margin: 0px 165px;
  height: 430px;
  width: 430px;
  background: #d9d9d9;
`;

const Target = styled.div``;
const Interview = styled.div``;
const Schedule = styled.div``;
const Document = styled.div``;
const Process = styled.div``;
const Fee = styled.div``;
