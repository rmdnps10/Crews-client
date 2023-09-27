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
      <label>
        <input type="checkbox" checked={is_mandatory} />
        필수 여부
      </label>
      <div>{question_description}</div>
      <div>{`min : ${minimum_answer}`}</div>
      <div>{`max : ${maximum_answer}`}</div>
      {options.map((it, idx) => (
        <label>
          <input key={idx} type="checkbox" checked={false} />
          {it}
        </label>
      ))}
      <MyButton
        onClick={() => deleteQuestion(id, questionData, setQuestionData)}
        children="X"
      />
    </CheckBoxQuesContainer>
  );
};

const CheckBoxQuesContainer = styled.div`
  position: relative;
  border: 2px solid black;
  padding: 10px;
`;

const MyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: red;
  color: white;
`;

export default CheckBoxQues;
