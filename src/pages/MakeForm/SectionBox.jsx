import styled from 'styled-components';

// Imported Components
import { Space } from 'components/atoms';

const SectionBox = ({ sectionData, questionData }) => {
  console.log(questionData);
  return (
    <SectionContainer>
      <h3>{sectionData.section_name}</h3>
      <Space height="50px" />
      <SectionDescriptionContainer>
        {sectionData.section_description}
      </SectionDescriptionContainer>
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

export default SectionBox;
