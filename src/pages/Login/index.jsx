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
        <Space height="52px" />
        <LoginInput />
        {/* <CollaboCrews /> */}
      </Flex>
    </div>
  );
};
