import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// Imported Functions
import { changeSection } from '../formFunctions';

// Imported Components
import { sectionDataAtom, questionDataAtom } from '../FormAtom';

const SectionContent = ({ section }) => {
  const { section_name, section_description } = { ...section };

  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);
  const [changingSecName, setChangingSecName] = useState(false);
  const [inputSecName, setInputSecName] = useState(section_name);
  const [inputDescription, setInputDescription] = useState(section_description);

  if (changingSecName)
    return (
      <SectionNameContainer>
        {section_name === '공통' ? (
          section_name
        ) : (
          <input
            value={inputSecName}
            onChange={(e) => setInputSecName(e.target.value)}
          />
        )}
        <SectionDescriptionContainer
          onChange={(e) => setInputDescription(e.target.value)}
          value={inputDescription}
        />
        <MyButton
          onClick={() =>
            changeSection(
              inputSecName,
              inputDescription,
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
        <div children={section_description} />
        <MyButton
          onClick={() => setChangingSecName(true)}
          children="섹션 수정"
        />
      </SectionNameContainer>
    );
};

const SectionNameContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const SectionDescriptionContainer = styled.textarea`
  border: 1px solid black;
  height: 100px;
`;

export default SectionContent;
