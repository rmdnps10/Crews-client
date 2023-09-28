import styled from 'styled-components';
import { useRecoilState } from 'recoil';

// Imported Functions
import { deleteQuestion } from './formFunctions';
import { questionDataAtom } from './FormAtom';

const CheckBoxQues = ({ question }) => {
  const {
    id,
    is_mandatory,
    question_description,
    minimum_answer,
    maximum_answer,
    options,
  } = { ...question };

  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  return (
    <CheckBoxQuesContainer>
      <div>{question_description}</div>
      <div>{`min : ${minimum_answer}`}</div>
      <div>{`max : ${maximum_answer}`}</div>
      {options.map((it, idx) => (
        <label>
          <input key={idx} type="checkbox" checked={false} />
          {it}
        </label>
      ))}
    </CheckBoxQuesContainer>
  );
};

const CheckBoxQuesContainer = styled.div`
  position: relative;
  border: 2px solid black;
  padding: 10px;
`;

export default CheckBoxQues;
