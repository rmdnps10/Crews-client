import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { W01, G02, G06, B05 } from 'style/palette';
import {
  faCircleCheck,
  faFont,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

const QuestionTypeBox = ({ questionType }) => {
  return (
    <QuestionTypeBoxContainer>
      <TypeButton
        className={'fa-xl' + (questionType === 'checkbox' ? ' selected' : '')}
        children={<FontAwesomeIcon icon={faCircleCheck} />}
      />
      <TypeButton
        className={
          'fa-xl' + (questionType === 'descriptive' ? ' selected' : '')
        }
        children={<FontAwesomeIcon icon={faFont} />}
      />
      <TypeButton
        className={'fa-xl' + (questionType === 'file' ? ' selected' : '')}
        children={<FontAwesomeIcon icon={faFolder} />}
      />
    </QuestionTypeBoxContainer>
  );
};

const QuestionTypeBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  border: 1px solid ${G02};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  width: 128px;
  padding: 12px;

  background-color: ${W01};

  // Type 선택창의 Overlap을 위한 CSS
  position: relative;
  margin-bottom: -1px;
  z-index: 1;
`;

const TypeButton = styled.button`
  color: ${G06};

  &.selected {
    color: ${B05};
  }
`;

export default QuestionTypeBox;
