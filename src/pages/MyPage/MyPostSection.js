import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import PostItem from './PostItem';
function MyPostSection() {
  const [isApplyPost, setIsApplyPost] = useState(true);
  const showApplyPost = () => {
    setIsApplyPost(true);
  };
  const showSavePost = () => {
    setIsApplyPost(false);
  };
  return (
    <MyPostSectionWrapper>
      <SelectPostType>
        <ApplyPost $isBlue={isApplyPost} onClick={showApplyPost}>
          지원한 공고
        </ApplyPost>
        <SavePost $isBlue={!isApplyPost} onClick={showSavePost}>
          찜한 공고
        </SavePost>
      </SelectPostType>
      <PostList>
        <PostItem />
      </PostList>
    </MyPostSectionWrapper>
  );
}

const MyPostSectionWrapper = styled.section`
  margin-top: 81px;
`;

const SelectPostType = styled.div`
  display: flex;
  gap: 32px;
`;
const ApplyPost = styled.div`
  color: ${(props) => (props.$isBlue ? '#1557d0' : '#B3B3B3')};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  letter-spacing: -0.4px;
  border-bottom: ${(props) => (props.$isBlue ? '4px solid #1557d0' : 'none')};
`;
const SavePost = styled(ApplyPost)``;

const PostList = styled.div`
  margin-top: 28px;
`;

export default MyPostSection;
