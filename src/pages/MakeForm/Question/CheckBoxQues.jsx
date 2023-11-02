import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BK01, G03, G05 } from 'style/palette';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Text } from 'components/atoms';
import ToggleButton from './ToggleButton';

const CheckBoxQues = ({ questionData }) => {
  const {
    id,
    sectionName,
    questionDescription,
    questionType,
    isMandatory,
    canMultipleCheck,
    options,
  } = { ...questionData };
  const [checkMandatory, setCheckMandatory] = useState(isMandatory);
  const [checkMultiple, setCheckMultiple] = useState(canMultipleCheck);

  return (
    <>
      <ToggleButtonContainer>
        <ToggleButton
          status={checkMandatory}
          setStatus={setCheckMandatory}
          label="응답 필수"
        />
        <ToggleButton
          status={checkMultiple}
          setStatus={setCheckMultiple}
          label="중복 선택 가능"
        />
      </ToggleButtonContainer>
      {options.map((it) => (
        <>
          <OptionBox key={it.id}>
            <input type="radio" />
            <CombineText children={it.option} />
            <DeleteOptionButton
              children={<FontAwesomeIcon icon={faXmark} className="fa-xl" />}
            />
          </OptionBox>
        </>
      ))}
      <AddOptionButton>
        <FontAwesomeIcon icon={faPlus} />
        <CombineText children="옵션 추가" />
      </AddOptionButton>
    </>
  );
};

const CombineText = ({ children }) => {
  return <Text size="16px" weight={400} children={children} />;
};

const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 16px;
  margin: 16px 0;
`;

const OptionBox = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  width: 100%;
  color: ${BK01};
`;

const DeleteOptionButton = styled.button`
  position: absolute;
  color: ${G03};
  right: 0px;
`;

const AddOptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${G05};
`;

export default CheckBoxQues;
