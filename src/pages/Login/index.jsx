import { Flex, Space, Text } from 'components/atoms';
// import { CollaboCrews } from './CollaboCrews';
import { LoginInput } from './LoginInput';
import { BK01 } from '../../style/palette';
export const Login = () => {
  return (
    <div>
      <Flex direction="column">
        <Text children="동아리 리크루팅과 지원을 한번에," />
        <Text children="Crews🚢" color="#3172EA" />
        <LoginInput />
        <Flex>
          <Text
            children="회원가입"
            color={BK01}
            cursor="pointer"
            onClick={() => {
              alert('아직 미구현, 회원가입으로 navigate');
            }}
          />
        </Flex>
        <Space height={'2rem'} />

        {/* <CollaboCrews /> */}
      </Flex>
    </div>
  );
};
