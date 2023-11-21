import React from 'react';
import styled from 'styled-components';
import { Flex, Space } from 'components/atoms';
import basicProfile from './basic-profile.svg';
import dummyImage from './dummyImage.png';
import saveImage from './save.svg';
import saveBlueImage from './save-blue.svg';
function MainCrewCard({ isSmall }) {
  return (
    <MainCrewCardItem $isSmall={isSmall}>
      <DdayLabel>모집 마감 D-1</DdayLabel>
      <CrewPostImage src={dummyImage} />
      <Space height={'10px'} />
      <PostDataContainer>
        <Flex justify="flex-start" gap={'7'}>
          <CrewImage src={basicProfile} />
          <CrewName>멋쟁이사자처럼</CrewName>
        </Flex>
        <PostTitle>멋쟁이 사자처럼 11기 신입기수 모집</PostTitle>
        <PostCategory>IT / 코딩</PostCategory>
        <PostSaveView>
          <SaveImage src={saveImage} />
          <SaveCount>25</SaveCount>
        </PostSaveView>
      </PostDataContainer>
    </MainCrewCardItem>
  );
}

const MainCrewCardItem = styled.div`
  width: 236px;
  height: 448px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: #fff;
  position: relative;
  transform: ${(props) => (props.$isSmall ? 'scale(0.8)' : 'scale(1)')};
`;

const DdayLabel = styled.div`
  border-radius: 30px;
  background: var(--red-r-02, #f15454);
  display: flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  left: 16px;
  color: #ffffff;
`;

const CrewPostImage = styled.img`
  width: 100%;
  height: 234px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;

const PostDataContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  flex-direction: column;
  gap: 16px;
`;

const CrewImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const CrewName = styled.div`
  color: var(--gray-g-05, #999);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const PostTitle = styled.p`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 130% */
  letter-spacing: -0.4px;
  // 단어 단위 줄바꿈 적용함
  word-break: keep-all;
`;

const PostCategory = styled.div`
  display: flex;
  align-self: flex-start;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--blue-b-05-m, #3172ea);
  color: #fff;
`;
const PostSaveView = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 4px;
`;

const SaveImage = styled.img`
  width: 20px;
  height: 20px;
`;
const SaveCount = styled.div`
  color: var(--blue-b-05-m, #3172ea);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
`;
export default MainCrewCard;
