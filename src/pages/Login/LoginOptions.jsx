import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BK01 } from 'style/palette';
import { Flex, Text } from 'components/atoms';
//imported styles

export const LoginOptions = () => {
  const navigate = useNavigate();
  return (
    <Flex gap="11">
      <Text
        children="아이디 찾기"
        color={BK01}
        size="20px"
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
        color={BK01}
        size="20px"
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
        color={BK01}
        size="20px"
        weight={500}
        spacing="-0.4px"
        cursor="pointer"
        onClick={() => {
          navigate('/signin');
        }}
      />
    </Flex>
  );
};
const Pipe = styled.div`
  width: 1.8px;
  height: 15.5px;
  background-color: #cccccc;
  border-radius: 1px;
`;
