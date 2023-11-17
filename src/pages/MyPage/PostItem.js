import React from 'react';
import styled from 'styled-components';
function PostItem() {
  return <PostItemWrapper></PostItemWrapper>;
}

const PostItemWrapper = styled.div`
  width: 760px;
  height: 230px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f6f8fe;
  padding: 20px;
  posiiton: relative;
`;

export default PostItem;
