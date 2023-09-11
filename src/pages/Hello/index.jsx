import React from 'react';

import { Flex, Space, Text } from 'components/atoms';

export const Hello = () => {
  return (
    <Flex>
      <Text size="50px">Hello World!</Text>
      <Space width="60px" />
      <Text size="25px">Nice To Meet YOU!</Text>
    </Flex>
  );
};
