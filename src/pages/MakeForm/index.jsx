import styled from 'styled-components';

import { instance } from 'api/axios';
import { applyAppPageRequest } from 'api/request';

// Imported Functions & Datas
import useSection from './useSection';
import useQuestion from './useQuestion';
import { G06, BK01 } from 'style/palette';

// Imported Components
import SectionBox from './Section/SectionBox';
import MakeFormHeader from './MakeFormHeader';
import LoadingPage from './LoadingPage';
import { Space, Button, Text } from 'components/atoms';
import { useState } from 'react';

export const MakeForm = () => {
  const [loading, setLoading] = useState(0);
  const { sectionData, addSection } = useSection();
  const { questionData } = useQuestion();

  const handleMakeFormClick = async () => {
    for (const section of sectionData) {
      const body = {};

      setLoading((prev) => prev + 1);

      await instance.post(
        `${applyAppPageRequest.applyApplication}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        }
      );
      setLoading((prev) => prev - 1);
    }
  };

  if (loading !== 0) return <LoadingPage />;
  else
    return (
      <MakeFormWrapper>
        <MakeFormContent>
          <Space height="40px" />
          <MakeFormHeader />
          <Space height="40px" />

          {sectionData.map((it, idx) => (
            <>
              <SectionBox key={idx} sectionData={it} idx={idx} />
              <Space height="50px" />
            </>
          ))}
          <Space height="50px" />

          <TextButton color={G06} onClick={addSection}>
            <Text size="20px" weight="400" children="새로운 섹션 추가하기" />
          </TextButton>
          <Space height="80px" />
          <CenteredButton
            status="inactive"
            width="392px"
            height="65px"
            children="모집 공고 등록하기"
          />
          <Space height="80px" />
        </MakeFormContent>
      </MakeFormWrapper>
    );
};

const MakeFormWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

const MakeFormContent = styled.div`
  width: 760px;
  margin: 0 auto;
`;

const TextButton = styled.button`
  border-bottom: 1px solid ${({ color }) => color};
  color: ${G06};
  &:hover {
    color: ${BK01};
  }
`;

const CenteredButton = styled(Button)`
  margin: 0 auto;
`;
