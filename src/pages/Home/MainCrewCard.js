import React from 'react';
import styled from 'styled-components';
function MainCrewCard() {
  return <MainCrewCardItem></MainCrewCardItem>;
}

const MainCrewCardItem = styled.div`
  width: 236px;
  height: 448px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: #fff;
`;
export default MainCrewCard;
