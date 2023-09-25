import { useState } from 'react';
import styled from 'styled-components';

// Imported Components
import SectionBox from './SectionBox';

// Imported Datas
import { DummyQuestionDatas } from './Dummy';

export const MakeForm = () => {
  const [sectionDatas, setSectionDatas] = useState([
    {
      section_name: '공통',
      section_description: '어쩌구 저쩌구',
    },
  ]);

  const [questionDatas, setQuestionDatas] = useState(DummyQuestionDatas);

  return (
    <div>
      <h1>지원서 양식 작성</h1>
      {sectionDatas.map((it, idx) => {
        const filteredQuestions = questionDatas.filter(
          (ques) => ques.section_name === it.section_name
        );
        return <SectionBox sectionData={it} questionData={filteredQuestions} />;
      })}
      <AddSectionButton children="섹션 추가하기" />
    </div>
  );
};

const AddSectionButton = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  background-color: blue;
`;
