//imported components
import { Flex, Text } from 'components/atoms';
import {} from './LoginInput';
//imported styles
import { B05, BK02 } from '../../style/palette';
// import { CollaboCrews } from './CollaboCrews';

export const LoginHeader = () => {
  return (
    <Flex direction="column" gap="12" align="start">
      <Text
        children="동아리 모집과 지원을 한번에"
        color={BK02}
        size="2rem"
        weight={700}
        spacing="-0.04rem"
      />
      <Text
        children="CREWS🚢"
        color={B05}
        size="3rem"
        weight={700}
        spacing="-0.06rem"
      />
    </Flex>
  );
};
