import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Text, Space } from 'components/atoms';

export const PostDetail = () => {
  const [recruitmentData, setRecruitmentData] = useState(null);

  useEffect(() => {
    const data = {
      id: 3,
      apply_start_date: '2023-11-17T02:20:09',
      apply_end_date: '2023-11-17T02:20:10',
      document_result_date: '2023-11-17T02:20:11',
      has_interview: true,
      interview_start_date: '2023-11-17T02:20:12',
      interview_end_date: '2023-11-17T02:20:13',
      final_result_date: '2023-11-17T02:20:14',
      requirement_target:
        '웹 개발에 관심이 있고 배우려고 하시는 분\n2학기 활동이 가능하신 분\n네트워킹을 통해 팀 프로젝트를 즐기고 싶으신 분',
      title: '멋쟁이사자처럼 서강대에서 아기사자들을 모집합니다!!',
      content: '',
      membership_fee: '0',
      created_at: '',
      progress: '면접',
      total_likes: 0,
      total_applies: 0,
    };

    setRecruitmentData(data);
  }, []);

  return (
    <DetailWrapper>
      <Space height="40px" />
      <CrewInfo></CrewInfo>
      <Space height="40px" />

      <ContentDiv>
        <Title>
          <Text weight={700} size="30px">
            {recruitmentData ? recruitmentData.title : 'Loading...'}
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

            <Text color="#101010" weight={400} size="18px" align="start">
              {recruitmentData ? recruitmentData.content : 'Loading...'}
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
            <Text color="#101010" weight={400} size="18px" align="start">
              {recruitmentData
                ? recruitmentData.requirement_target
                : 'Loading...'}
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
            <Text weight={400} size="18px" align="start">
              {recruitmentData ? recruitmentData.progress : 'Loading...'}
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
                  접수일 :{' '}
                  {recruitmentData
                    ? recruitmentData.apply_start_date
                    : 'Loading...'}
                  ~{' '}
                  {recruitmentData
                    ? recruitmentData.apply_end_date
                    : 'Loading...'}
                </Text>{' '}
                <Space height="12px" />
                <Text color="#101010" weight={400} size="18px" align="start">
                  발표일 :{' '}
                  {recruitmentData
                    ? recruitmentData.document_result_date
                    : 'Loading...'}
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
                    접수일 :{' '}
                    {recruitmentData
                      ? recruitmentData.interview_start_date
                      : 'Loading...'}{' '}
                    ~
                    {recruitmentData
                      ? recruitmentData.interview_end_date
                      : 'Loading...'}
                  </Text>{' '}
                  <Space height="12px" />
                  <Text color="#101010" weight={400} size="18px" align="start">
                    발표일 :{' '}
                    {recruitmentData
                      ? recruitmentData.final_result_date
                      : 'Loading...'}
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
            <Text color="#101010" weight={400} size="18px" align="start">
              {recruitmentData ? recruitmentData.membership_fee : 'Loading...'}
            </Text>
          </Flex>
        </Fee>
      </ContentDiv>
      <Space height="200px" />
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CrewInfo = styled.div`
  width: 760px;
  height: 128px;
  border-radius: 20px;
  background: #f6f8fe;
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
