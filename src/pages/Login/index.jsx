import { Flex, Space, Text } from 'components/atoms';
import { CollaboCrews } from './CollaboCrews';
import { LoginInput } from './LoginInput';
export const Login = () => {
  return (
    <div>
      <Flex direction="column">
        <Text>
          동아리 리크루팅과 지원을 한번에,
          <br />
        </Text>
        <Text color="#3172EA"> Crews🚢</Text>
        <LoginInput /*더 나은 방법 없나...*/ />
        <Flex>
          <Text>아직 회원이 아니신가요?</Text>
          <Text
            color="#3172EA"
            cursor="pointer"
            onClick={() => {
              alert('아직 미구현, 회원가입으로 navigate');
            }}
          >
            회원가입
          </Text>
        </Flex>
        <Space height={'2rem'} />
        <Text>Crews와 함께하는 동아리</Text>
        <CollaboCrews />
      </Flex>
    </div>
  );
};
