import { useState } from 'react';
import styled from 'styled-components';

import ToggleButton from './ToggleButton';

const DescriptiveQues = ({ questionData }) => {
  const {
    id,
    sectionName,
    questionDescription,
    questionType,
    isMandatory,
    characterLimit,
  } = { ...questionData };
  const [checkMandatory, setCheckMandatory] = useState(isMandatory);

  return (
    <>
      <ToggleButtonContainer>
        <ToggleButton
          status={checkMandatory}
          setStatus={setCheckMandatory}
          label="응답 필수"
        />

        <label>
          <input type="number" value={characterLimit} />
          글자수 제한
        </label>
      </ToggleButtonContainer>
    </>
  );
};

const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 16px;
  margin: 16px 0;
`;

export default DescriptiveQues;
