import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// Imported Functions & Datas
import { B04, W01 } from 'style/palette';
import { changeSection } from '../formFunctions';

// Imported Components
import { sectionDataAtom, questionDataAtom } from '../FormAtom';
import { Text } from 'components/atoms';

const SectionHeader = ({ sectionData }) => {
  const { sectionName, sectionDescription } = { ...sectionData };

  // const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  // const [questionData, setQuestionData] = useRecoilState(questionDataAtom);
  const [changingSecName, setChangingSecName] = useState(false);
  // const [inputSecName, setInputSecName] = useState(section_name);
  // const [inputDescription, setInputDescription] = useState(section_description);

  if (changingSecName)
    return (
      <></>
      // <SectionContentContainer>
      //   {section_name === '공통' ? (
      //     section_name
      //   ) : (
      //     <input
      //       value={inputSecName}
      //       onChange={(e) => setInputSecName(e.target.value)}
      //     />
      //   )}
      //   <SectionDescriptionContainer
      //     onChange={(e) => setInputDescription(e.target.value)}
      //     value={inputDescription}
      //   />
      //   <MyButton
      //     onClick={() =>
      //       changeSection(
      //         inputSecName,
      //         inputDescription,
      //         section_name,
      //         sectionData,
      //         setSectionData,
      //         questionData,
      //         setQuestionData,
      //         setChangingSecName
      //       )
      //     }
      //     children="확인"
      //   />
      // </SectionContentContainer>
    );
  else
    return (
      <SectionHeaderContainer>
        <Text
          size="22px"
          weight={700}
          children={`${sectionName} 섹션`}
          align="left"
        />
        <SectinoDescriptionInput
          placeholder="섹션 설명 쓰기"
          // value={sectionDescription}
        />
        {/* <MyButton
          onClick={() => setChangingSecName(true)}
          children="섹션 수정"
        /> */}
      </SectionHeaderContainer>
    );
};

const SectionHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  padding: 20px;
  color: #fff;
  background-color: ${B04};
`;

const SectinoDescriptionInput = styled.input`
  color: ${W01};

  &::placeholder {
    color: ${W01};
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Pretendard-Regular';
  }
`;

export default SectionHeader;
