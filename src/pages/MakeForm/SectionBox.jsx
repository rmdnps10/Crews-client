import styled from 'styled-components';
import { useRecoilState } from 'recoil';

// Imported Functions & Datas
import { addCheckboxQues } from './formFunctions';
import { questionDataAtom } from './FormAtom';

// Imported Components
import { Space } from 'components/atoms';
import CheckBoxQues from './CheckBoxQues';
import SectionName from './SectionName';

const SectionBox = ({ section }) => {
  const { section_name, section_description } = { ...section };
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  return (
    <SectionContainer>
      <SectionName section_name={section_name} />
      <Space height="50px" />
      <SectionDescriptionContainer children={section_description} />

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
      <MyButton
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

const MyButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: green;
  color: white;
`;

export default SectionBox;
