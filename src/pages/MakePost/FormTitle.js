import React from 'react';
import styled from 'styled-components';

function FormTitle({ index, content }) {
  return (
    <StyledFormTitle>
      0{index} {content}
    </StyledFormTitle>
  );
}

const StyledFormTitle = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export default FormTitle;
