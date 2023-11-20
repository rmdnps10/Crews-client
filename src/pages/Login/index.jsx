//imported components
import { Flex, Space } from 'components/atoms';
import { LoginInput } from './LoginInput';
import { LoginHeader } from './LoginHeader';

export const Login = () => {
  return (
    <div>
      <Space height="150px" />
      <Flex direction="column">
        <LoginHeader />
        <Space height="34px" />
        <LoginInput />
      </Flex>
    </div>
  );
};
