import React from 'react';
import styled from 'styled-components';
function BottomBar() {
  return (
    <StyledBottomBar>
      <EvaluateEndButton>지원서 평가 완료하기</EvaluateEndButton>
    </StyledBottomBar>
  );
}

const StyledBottomBar = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  background: var(--blue-b-02, #e8effd);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const EvaluateEndButton = styled.button`
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  margin-right: 30px;
`;

export default BottomBar;
