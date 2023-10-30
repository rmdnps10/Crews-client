import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// Imported Functions & Datas
import { B04 } from 'style/palette';
import { changeSection } from '../formFunctions';

// Imported Components
import { sectionDataAtom, questionDataAtom } from '../FormAtom';
import { Text } from 'components/atoms';

const SectionContent = ({ section }) => {
  const { section_name, section_description } = { ...section };

  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);
  const [changingSecName, setChangingSecName] = useState(false);
  const [inputSecName, setInputSecName] = useState(section_name);
  const [inputDescription, setInputDescription] = useState(section_description);

  if (changingSecName)
    return (
      <SectionContentContainer>
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
      </SectionContentContainer>
    );
  else
    return (
      <SectionContentContainer>
        <Text
          size="22px"
          weight={700}
          children={`${section_name} 섹션`}
          align="left"
        />
        <SectinoDescriptionInput
          placeholder="섹션 설명 쓰기"
          // value={section_description}
        />
        {/* <MyButton
          onClick={() => setChangingSecName(true)}
          children="섹션 수정"
        /> */}
      </SectionContentContainer>
    );
};

const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  padding: 20px;
  color: #fff;
  background-color: ${B04};
`;

const SectinoDescriptionInput = styled.input`
  color: white;

  &::placeholder {
    color: white;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Pretendard-Regular';
  }
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
