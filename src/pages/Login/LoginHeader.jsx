//imported components
import { Flex, Text } from 'components/atoms';
import {} from './LoginInput';
//imported styles
import { BK02 } from '../../style/palette';
// import { CollaboCrews } from './CollaboCrews';

export const LoginHeader = () => {
  return (
    <Flex direction="column">
      <Text
        color={BK02}
        children="동아리 모집과 지원을 한번에"
        size="2rem"
        weight={700}
      />
      <Text children="Crews🚢" color="#3172EA" />
    </Flex>
  );
};
