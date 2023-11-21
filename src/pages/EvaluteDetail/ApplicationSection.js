import React from 'react';
import styled from 'styled-components';

function ApplicationSection() {
  return <ApplicationSectionWrapper></ApplicationSectionWrapper>;
}

const ApplicationSectionWrapper = styled.div`
  width: 760px;
  height: 3000px;
  border-radius: 10px 10px 0px 0px;
  background: var(--blue-b-04, #5d90ee);
`;
export default ApplicationSection;
