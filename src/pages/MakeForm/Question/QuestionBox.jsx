import styled from 'styled-components';

// Imported Functions & Datas
import { G02, W01, BK01, B04 } from 'style/palette';

// Imported Components
import QuestionTypeBox from './QuestionTypeBox';
import CheckBoxQues from './CheckBoxQues';
import DescriptiveQues from './DescriptiveQues';

const QuestionBox = ({ questionData }) => {
  const { questionType } = { ...questionData };
  return (
    <>
      <QuestionTypeBox questionType={questionType} />
      <QuestionBoxContainer>
        <QuestionDescription placeholder="질문을 입력해주세요." />
        <QuestionBoxContent questionData={questionData} />
      </QuestionBoxContainer>
    </>
  );
};

const QuestionBoxContent = ({ questionData }) => {
  const { questionType } = { ...questionData };

  if (questionType === 'checkbox')
    return <CheckBoxQues questionData={questionData} />;
  else if (questionType === 'descriptive') return <DescriptiveQues />;
  else if (questionType === 'file') return null;
};

const QuestionBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid ${G02};
  border-radius: 0 10px 10px 10px;

  background-color: ${W01};
  color: ${BK01};

  text-align: left;
`;

const QuestionDescription = styled.input`
  color: ${BK01};

  width: 100%;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Pretendard-Regular';

  padding-bottom: 16px;
  border-bottom: 3px solid ${B04};

  &::placeholder {
    color: ${BK01};
    font-size: 18px;
    font-weight: 700;
    font-family: 'Pretendard-Regular';
  }
`;

export default QuestionBox;
