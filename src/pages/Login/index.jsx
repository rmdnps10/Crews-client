//imported components
import { Flex, Space, Text } from 'components/atoms';
import { LoginInput } from './LoginInput';
import { LoginHeader } from './LoginHeader';
//imported styles
import { BK01 } from '../../style/palette';
// import { CollaboCrews } from './CollaboCrews';

export const Login = () => {
  return (
    <div>
      <Flex direction="column">
        <LoginHeader />
        <Space height="3.25rem" />
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
