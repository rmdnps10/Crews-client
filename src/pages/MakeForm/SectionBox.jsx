import styled from 'styled-components';

// Imported Functions & Datas
import { addCheckboxQues } from './formFunctions';
import { questionDataAtom } from './FormAtom';

// Imported Components
import { Space } from 'components/atoms';
import CheckBoxQues from './CheckBoxQues';
import { useRecoilState } from 'recoil';

const SectionBox = ({ section }) => {
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);
  const { section_name, section_description } = { ...section };

  return (
    <SectionContainer>
      <h3>{section_name}</h3>
      <Space height="50px" />
      <SectionDescriptionContainer>
        {section_description}
      </SectionDescriptionContainer>

      <Space height="50px" />
      {questionData &&
        questionData.map((ques) => {
          if (ques.section_name === section_name)
            return (
              <>
                <CheckBoxQues questionData={ques} />
                <Space height="50px" />
              </>
            );
        })}
      <AddQuestionButton
        onClick={() =>
          addCheckboxQues(questionData, section_name, setQuestionData)
        }
        children="질문 추가"
      />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  border: 2px solid black;

  width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const SectionDescriptionContainer = styled.div`
  border: 1px solid black;
  height: 100px;
`;

const AddQuestionButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: green;
`;

export default SectionBox;
