import React from 'react';
import styled from 'styled-components';

// 모집공고에서 텍스트 입력 받는 컴포넌트
function FormTextArea({ placeholder, height, onTextFieldChange, value, name }) {
  return (
    <StyledFormTextArea
      name={name}
      height={height}
      value={value}
      onChange={(e) => {
        onTextFieldChange(name, e.target.value);
      }}
      placeholder={placeholder}
    ></StyledFormTextArea>
  );
}

const StyledFormTextArea = styled.textarea.attrs(() => ({ type: 'text' }))`
  width: 100%;
  height: ${(props) => props.height};
  padding: 20px;
  resize: none;
  border-radius: 10px;
  border: 1.4px solid #ccc;
  background: #fff;
  font-size: 22px;
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.44px;

  ::placeholder {
    color: var(--gray-g-04, #b3b3b3);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`;

export default FormTextArea;
