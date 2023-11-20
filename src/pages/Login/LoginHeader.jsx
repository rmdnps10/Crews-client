//imported components
import { Flex, Text } from 'components/atoms';
//imported styles
import { B05, BK02 } from '../../style/palette';

export const LoginHeader = () => {
  return (
    <Flex direction="column" width="522px" gap="12" align="start">
      <Text
        children="동아리 모집과 지원을 한번에"
        color={BK02}
        size="32px"
        weight={700}
        spacing="-0.64px"
      />
      <Text
        children="CREWS🚢"
        color={B05}
        size="48px"
        weight={700}
        spacing="-0.64px"
      />
    </Flex>
  );
};
