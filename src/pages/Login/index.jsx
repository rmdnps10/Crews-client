//imported components
import { Flex, Space } from 'components/atoms';
import { LoginInput } from './LoginInput';
import { LoginHeader } from './LoginHeader';
// import { CollaboCrews } from './CollaboCrews';

export const Login = () => {
  return (
    <div>
      <Space height="130px" />
      <Flex direction="column">
        <LoginHeader />
        <Space height="52px" />
        <LoginInput />
        {/* <CollaboCrews /> */}
      </Flex>
    </div>
  );
};
