import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// Imported Functions
import { changeSection } from './formFunctions';

// Imported Components
import { sectionDataAtom, questionDataAtom } from './FormAtom';

const SectionName = ({ section_name }) => {
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);
  const [changingSecName, setChangingSecName] = useState(false);
  const [inputSecName, setInputSecName] = useState(section_name);

  if (changingSecName)
    return (
      <SectionNameContainer>
        <input
          value={inputSecName}
          onChange={(e) => setInputSecName(e.target.value)}
        />
        <MyButton
          onClick={() =>
            changeSection(
              inputSecName,
              section_name,
              sectionData,
              setSectionData,
              questionData,
              setQuestionData,
              setChangingSecName
            )
          }
          children="확인"
        />
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
