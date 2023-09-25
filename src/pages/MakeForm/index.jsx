import { useState } from 'react';
import styled from 'styled-components';

// Imported Functions & Datas
import { DefaultSectionData, DummyQuestionDatas } from './formData';
import { addNewSection } from './formFunctions';

// Imported Components
import SectionBox from './SectionBox';

export const MakeForm = () => {
  const [sectionDatas, setSectionDatas] = useState(DefaultSectionData);
  const [questionDatas, setQuestionDatas] = useState(DummyQuestionDatas);

  return (
    <div>
      <h1>지원서 양식 작성</h1>
      {sectionDatas.map((it, idx) => {
        return (
          <SectionBox
            sectionData={it}
            questionData={questionDatas[it.section_name]}
          />
        );
      })}
      <AddSectionButton
        onClick={() => addNewSection(sectionDatas, setSectionDatas)}
        children="섹션 추가하기"
      />
    </div>
  );
};

const AddSectionButton = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  cursor: pointer;
  background-color: blue;
`;

// 커밋 메세지
// 섹션 추가하기 기능 추가
// 질문 데이터 구조 변경 그에 따른 props 부여 로직도 변경
