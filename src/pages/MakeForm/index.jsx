import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { sectionDataAtom } from './FormAtom';

// Imported Functions & Datas
import { addSection } from './formFunctions';
import { BK02, G05, G06 } from 'style/palette';

// Imported Components
import SectionBox from './SectionBox';
import { Space, Button, Input, Flex, Text } from 'components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export const MakeForm = () => {
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);

  return (
    <MakeFormWrapper>
      <Space height="200px" />
      <DescriptionBox>
        <Flex justify="left" align="center" gap="15">
          <Text children="STEP 02" size="32px" weight="bold" color={BK02} />
          <TextLine color={G05} size="32px" />
          <Text
            children="지원서 양식 작성"
            size="32px"
            weight="bold"
            color={BK02}
          />
          <QuestionButton>
            <FontAwesomeIcon
              onClick={() => alert('Modal!')}
              icon={faCircleQuestion}
              className="fa-2xl"
              style={{ color: BK02 }}
            />
          </QuestionButton>
        </Flex>
        <Space height="20px" />
        <Text
          children="모집 공고는 등록 후에도 수정이 가능하지만, 지원서는 모집 기간 이후 수정이 불가능합니다."
          size="20px"
          weight="400"
          color={G05}
        />
      </DescriptionBox>
      <Space height="50px" />

      <TmpBox />
      {/* {sectionData.map((it, idx) => (
        <>
          <SectionBox section={it} />
          <Space height="50px" />
        </>
      ))} */}
      <Space height="50px" />

      {/* onClick={() => addSection(sectionData, setSectionData)} */}
      <TextButton color={G06}>
        <Text
          size="24px"
          color={G06}
          weight="400"
          children="새로운 섹션 추가하기"
        />
      </TextButton>
      <Space height="80px" />
      <CenteredButton
        status="inactive"
        width="530px"
        height="70px"
        children="모집 공고 등록하기"
      />
      <Space height="80px" />
    </MakeFormWrapper>
  );
};

const MakeFormWrapper = styled.div`
  overflow: hidden;
  width: fit-content;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

const DescriptionBox = styled.div`
  text-align: left;
`;

const QuestionButton = styled.button`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const TextLine = styled.span`
  border: 2px solid ${({ color }) => color};
  border-radius: 999px;
  height: ${({ size }) => size};
`;

const TextButton = styled.button`
  border-bottom: 1px solid ${({ color }) => color};
  cursor: pointer;
`;

const CenteredButton = styled(Button)`
  margin: 0 auto;
`;

const TmpBox = styled.div`
  width: 920px;
  height: 600px;
  border: 1px solid black;
`;
