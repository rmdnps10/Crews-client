import styled from 'styled-components';

import { G06 } from 'style/palette';

import { Text } from 'components/atoms';

const ToggleButton = ({ status, setStatus, label }) => {
  const handleOnClick = () => {
    setStatus(!status);
  };

  return (
    <ToggleButtonContainer>
      <Text size="14px" children={label} color={G06} weight={400} />
      <input type="checkbox" onChange={handleOnClick} />
    </ToggleButtonContainer>
  );
};

const ToggleButtonContainer = styled.label`
  display: flex;
  gap: 5px;
`;

export default ToggleButton;
