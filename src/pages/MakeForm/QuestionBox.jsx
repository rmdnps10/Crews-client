import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';

// Imported Functions & Datas
import { questionDataAtom } from './FormAtom';
import { deleteQuestion } from './formFunctions';

// Imported Components
import { Space } from 'components/atoms';
import CheckBoxQues from './CheckBoxQues';

const QuestionCard = ({ question }) => {
  const { id, is_mandatory, question_type } = { ...question };
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);
  const [changingQues, setChangingQues] = useState(false);
  const [inputQuesData, setInputQuesData] = useState({ ...question });

  const changeQuesType = (newQuesType) => {
    setInputQuesData({ ...inputQuesData, question_type: newQuesType });
  };

  const changeIsMandatory = () => {
    setInputQuesData((prev) => {
      return { ...prev, is_mandatory: !prev.is_mandatory };
    });
  };

  if (changingQues)
    return (
      <QuestionCardContainer>
        <CategoryButton
          onClick={() => changeQuesType('checkbox')}
          className={
            inputQuesData.question_type === 'checkbox' ? 'isActive' : ''
          }
          children="객관식"
        />
        <CategoryButton
          onClick={() => changeQuesType('descriptive')}
          className={
            inputQuesData.question_type === 'descriptive' ? 'isActive' : ''
          }
          children="장문형"
        />
        <CategoryButton
          onClick={() => changeQuesType('file')}
          className={inputQuesData.question_type === 'file' ? 'isActive' : ''}
          children="파일"
        />
        <label>
          <input
            type="checkbox"
            onClick={changeIsMandatory}
            checked={inputQuesData.is_mandatory}
          />
          필수 여부
        </label>
        {question_type === 'checkbox' ? (
          <CheckBoxQues
            changingQues={changingQues}
            question={inputQuesData}
            setInputQuesData={setInputQuesData}
          />
        ) : null}
        {/* {question_type === 'descriptive' ? (
          <CheckBoxQues question={question} />
        ) : null}
        {question_type === 'file' ? (
          <CheckBoxQues question={question} />
        ) : null} */}
        <ChangeButton onClick={() => setChangingQues(false)} children="확인" />
        <DeleteButton
          onClick={() => deleteQuestion(id, questionData, setQuestionData)}
          children="X"
        />
      </QuestionCardContainer>
    );
  else
    return (
      <QuestionCardContainer>
        {question_type === 'checkbox' ? (
          <CategoryButton children="객관식" />
        ) : null}
        {question_type === 'descriptive' ? (
          <CategoryButton children="장문형" />
        ) : null}
        {question_type === 'file' ? <CategoryButton children="파일" /> : null}
        <label>
          <input type="checkbox" checked={is_mandatory} />
          필수 여부
        </label>
        {question_type === 'checkbox' ? (
          <CheckBoxQues
            changingQues={changingQues}
            question={question}
            setInputQuesData={setInputQuesData}
          />
        ) : null}
        {/* {question_type === 'descriptive' ? (
          <CheckBoxQues question={question} />
        ) : null}
        {question_type === 'file' ? (
          <CheckBoxQues question={question} />
        ) : null} */}
        <ChangeButton
          onClick={() => setChangingQues(true)}
          children="수정하기"
        />
      </QuestionCardContainer>
    );
};

const QuestionBox = ({ sectionName }) => {
  const questionData = useRecoilValue(questionDataAtom);

  return (
    <div>
      {questionData &&
        questionData.map((ques) => {
          if (ques.section_name === sectionName)
            return (
              <>
                <QuestionCard question={ques} />
                <Space height="50px" />
              </>
            );
        })}
    </div>
  );
};

const CategoryButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: orangered;
  color: white;
  cursor: pointer;

  &.isActive {
    background-color: white;
    color: orangered;
  }
`;

const QuestionCardContainer = styled.div`
  position: relative;
  border: 2px solid red;
`;

const ChangeButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 30px;
  cursor: pointer;
  background-color: greenyellow;
  color: black;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  cursor: pointer;
  background-color: red;
  color: white;
`;

export default QuestionBox;
