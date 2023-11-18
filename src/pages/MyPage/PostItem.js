import React from 'react';
import styled from 'styled-components';
import github from './github.svg';
import scarp from './scrap.svg';
import { Flex } from 'components/atoms';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

// isEnd: 모집종료여부
// isSave: 찜여부
// isOperator: 동아리관리자여부
function PostItem({ name, category, title, enddate, isSave, isOperator }) {
  const now = dayjs();
  const endDate = dayjs(enddate, 'YYYY-MM-DD HH:mm:ss.SSS');
  now.format();
  endDate.format();
  const isEnd = now.isAfter(enddate);
  const showTimeLeft = () => {
    const diffDuration = dayjs.duration(endDate.diff(now));
    const days = diffDuration.days();
    const hours = diffDuration.hours();
    const minutes = diffDuration.minutes();
    const formattedDiff = `${days}일 ${hours}시간 ${minutes}분`;
    return formattedDiff;
  };
  return (
    <PostItemWrapper>
      <ClubImage src={github} />
      <Flex gap="12" direction="column" align="flex-start" justify="flex-start">
        <Flex gap="12">
          <ClubType>{category}</ClubType>
          {!isEnd ? <TimeLeft>{showTimeLeft()}</TimeLeft> : ''}
        </Flex>
        <PostTitle>{title}</PostTitle>
        <ClubName>{name}</ClubName>
      </Flex>

      {isSave ? (
        ''
      ) : (
        <ButotnWrapper>
          {isOperator ? (
            (!isEnd && (
              <OperatorEditButton>모집 공고 수정하기</OperatorEditButton>
            ),
            isEnd && (
              <OperatorAssessButton>지원서 평가하기</OperatorAssessButton>
            ))
          ) : isEnd ? (
            <>
              {' '}
              <EditButton>수정하기</EditButton>{' '}
              <DeleteButton>삭제하기</DeleteButton>
            </>
          ) : (
            <CheckResultButton>1차 결과 확인하기</CheckResultButton>
          )}
        </ButotnWrapper>
      )}
      {isSave ? <SaveImage src={scarp} /> : ''}
    </PostItemWrapper>
  );
}

const PostItemWrapper = styled.div`
  width: 760px;
  height: 230px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f6f8fe;
  padding: 28px;
  position: relative;
  display: flex;
  gap: 30px;
`;
const ClubImage = styled.img`
  width: 88.438px;
  margin-top: 8px;
  margin-left: 8px;
  height: 87.701px;
  border-radius: 50%;
`;

export const ClubType = styled.div`
  border-radius: 15.5px;
  background: var(--blue-b-05-m, #3172ea);
  display: flex;
  font-size: 16px;
  color: #fff;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
`;
const TimeLeft = styled.div`
  color: var(--red-r-02, #f15454);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
`;
const ClubName = styled.div`
  color: #666
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
`;
const PostTitle = styled.div`
  color: var(--black-bk-02, #101010);
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
`;
const ButotnWrapper = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  bottom: 28px;
  right: 28px;
`;

const EditButton = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  align-items: center;
  border-radius: 10px;
  background: #3172ea;
`;

const DeleteButton = styled(EditButton)`
  background: #f15454;
`;

const OperatorEditButton = styled(EditButton)`
  background: #303030;
  width: 179px;
  height: 50px;
`;

const OperatorAssessButton = styled(OperatorEditButton)`
  background: var(--blue-b-05-m, #3172ea);
  width: 179px;
  height: 50px;
`;

const SaveImage = styled.img`
  margin-left: auto;
`;
const CheckResultButton = styled(EditButton)`
  width: 179px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
`;
export default PostItem;
