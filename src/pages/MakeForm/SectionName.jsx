import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// Imported Functions
import { isRedundantName } from './formFunctions';

// Imported Components
import { sectionDataAtom } from './FormAtom';

const SectionName = ({ section_name }) => {
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  const [changingSecName, setChangingSecName] = useState(false);
  const [inputSecName, setInputSecName] = useState(section_name);

  const checkChangedSecName = () => {
    if (inputSecName !== section_name) {
      if (isRedundantName(sectionData, inputSecName)) {
        alert('섹션명은 중복되면 안된당!');
        return;
      }

      const newSectionData = sectionData.map((sec) => {
        if (sec.section_name === section_name)
          return { ...sec, section_name: inputSecName };
        return sec;
      });
      setSectionData(newSectionData);
    }
    setChangingSecName(false);
  };

  if (changingSecName)
    return (
      <SectionNameContainer>
        <input
          value={inputSecName}
          onChange={(e) => setInputSecName(e.target.value)}
        />
        <MyButton onClick={checkChangedSecName} children="확인" />
      </SectionNameContainer>
    );
  else
    return (
      <SectionNameContainer>
        {section_name}
        {section_name !== '공통' && (
          <MyButton
            onClick={() => setChangingSecName(true)}
            children="제목 수정"
          />
        )}
      </SectionNameContainer>
    );
};

const SectionNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;
`;

const MyButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: green;
  color: white;
`;

export default SectionName;
