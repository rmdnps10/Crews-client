import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Imported Functions & Datas
import { B01, W01 } from 'style/palette';
import { addQuestion, deleteSecition } from '../formFunctions';
import { sectionDataAtom, questionDataAtom } from '../FormAtom';

// Imported Components
import { Space } from 'components/atoms';
import SectionHeader from './SectionHeader';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import QuestionBox from '../Question/QuestionBox';

const SectionBox = ({ sectionData }) => {
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  return (
    <SectionContainer>
      <SectionHeader sectionData={sectionData} />
      <DeleteSectionButton
        children={<FontAwesomeIcon icon={faXmark} className="fa-xl" />}
      />
      <SectionContent>
        {questionData.map((ques) => {
          if (ques.sectionName === sectionData.sectionName)
            return <QuestionBox questionData={ques} />;
        })}
      </SectionContent>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
  background-color: ${B01};
`;

const DeleteSectionButton = styled.button`
  position: absolute;
  color: ${W01};
  top: 20px;
  right: 20px;
`;

const SectionContent = styled.div`
  padding: 20px;
`;

export default SectionBox;
