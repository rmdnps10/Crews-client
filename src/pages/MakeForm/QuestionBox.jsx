import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';

// Imported Functions & Datas
import { questionDataAtom } from './FormAtom';
import {
  Default_CheckboxQues_Data,
  Default_DescriptiveQues_Data,
} from './formData';
import { deleteQuestion, changeQuestion } from './formFunctions';

// Imported Components
import { Space } from 'components/atoms';
import CheckBoxQues from './CheckBoxQues';
import DescriptiveQues from './DescriptiveQues';

const QuestionCard = ({ question }) => {
  const { id, is_mandatory, question_type } = { ...question };
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);
  const [changingQues, setChangingQues] = useState(false);
  const [inputQuesData, setInputQuesData] = useState({ ...question });

  const changeQuesType = (newQuesType) => {
    if (newQuesType === inputQuesData.question_type) return;
    if (newQuesType === 'checkbox')
      setInputQuesData({
        id: inputQuesData.id,
        section_name: inputQuesData.section_name,
        is_mandatory: inputQuesData.is_mandatory,
        question_description: inputQuesData.question_description,
        ...Default_CheckboxQues_Data,
      });
    else if (newQuesType === 'descriptive')
      setInputQuesData({
        id: inputQuesData.id,
        section_name: inputQuesData.section_name,
        is_mandatory: inputQuesData.is_mandatory,
        question_description: inputQuesData.question_description,
        ...Default_DescriptiveQues_Data,
      });
    else alert('구현안함');
  };

  const changeIsMandatory = () => {
    setInputQuesData((prev) => {
      return { ...prev, is_mandatory: !prev.is_mandatory };
    });
  };

  const switchChangingQues = () => {
    if (!changingQues) setInputQuesData({ ...question });
    setChangingQues((prev) => !prev);
    changeQuestion(id, inputQuesData, questionData, setQuestionData);
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
        {inputQuesData.question_type === 'checkbox' ? (
          <CheckBoxQues
            changingQues={changingQues}
            question={inputQuesData}
            setInputQuesData={setInputQuesData}
          />
        ) : null}
        {inputQuesData.question_type === 'descriptive' ? (
          <DescriptiveQues
            changingQues={changingQues}
            question={inputQuesData}
            setInputQuesData={setInputQuesData}
          />
        ) : null}
        {/* {inputQuesData.question_type === 'file' ? (
          <CheckBoxQues question={question} />
        ) : null} */}
        <ChangeButton onClick={switchChangingQues} children="확인" />
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
          <CheckBoxQues question={question} />
        ) : null}
        {question_type === 'descriptive' ? (
          <DescriptiveQues question={question} />
        ) : null}
        {/* {question_type === 'file' ? (
          <CheckBoxQues question={question} />
        ) : null} */}
        <ChangeButton onClick={switchChangingQues} children="수정하기" />
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
