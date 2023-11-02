import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { sectionDataAtom } from './FormAtom';

// Imported Functions & Datas
import { addSection } from './formFunctions';
import { G06 } from 'style/palette';

// Imported Components
import SectionBox from './Section/SectionBox';
import MakeFormHeader from './MakeFormHeader';
import { Space, Button, Text } from 'components/atoms';

export const MakeForm = () => {
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);

  return (
    <MakeFormWrapper>
      <MakeFormContent>
        <Space height="40px" />
        <MakeFormHeader />
        <Space height="40px" />

        {sectionData.map((it, idx) => (
          <>
            <SectionBox sectionData={it} />
            <Space height="50px" />
          </>
        ))}
        <Space height="50px" />

        {/* onClick={() => addSection(sectionData, setSectionData)} */}
        <TextButton color={G06}>
          <Text
            size="20px"
            color={G06}
            weight="400"
            children="새로운 섹션 추가하기"
          />
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
`;

const CenteredButton = styled(Button)`
  margin: 0 auto;
`;
