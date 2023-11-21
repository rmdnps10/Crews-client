import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BK02 } from 'style/palette';
import { Flex, Text } from 'components/atoms';
//imported styles

export const LoginOptions = (props) => {
  const navigate = useNavigate();
  return (
    <Flex justify="space-between">
      <StyledLabel>
        <StoreCheckInput
          type="checkbox"
          checked={props.isStore}
          onChange={props.toggleIsStore}
        />
        <Text
          children="아이디 저장"
          color={BK02}
          size={'18px'}
          weight={500}
          spacing="-0.36px"
        />
      </StyledLabel>
      <Flex gap="11">
        <Text
          children="아이디 찾기"
          color={BK02}
          size="18px"
          weight={500}
          spacing="-0.4px"
          cursor="pointer"
          onClick={() => {
            alert('아이디 찾기 창');
          }}
        />
        <Pipe />
        <Text
          children="비밀번호 찾기"
          color={BK02}
          size="18px"
          weight={500}
          spacing="-0.4px"
          cursor="pointer"
          onClick={() => {
            alert('비밀번호 찾기 창');
          }}
        />
        <Pipe />
        <Text
          children="회원가입"
          color={BK02}
          size="18px"
          weight={500}
          spacing="-0.4px"
          cursor="pointer"
          onClick={() => {
            navigate('/signin');
          }}
        />
      </Flex>
    </Flex>
  );
};
const Pipe = styled.div`
  width: 1.8px;
  height: 15.5px;
  background-color: #cccccc;
  border-radius: 1px;
`;
const StoreCheckInput = styled.input`
  appearance: none;
  border: 2.5px solid #cccccc;
  border-radius: 50px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition : opacity 0.1s;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #3172ea;
  }
  &:hover {
    opacity 0.9;
  }
`;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;
