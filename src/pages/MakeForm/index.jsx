import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { sectionDataAtom } from './FormAtom';

// Imported Functions & Datas
import { addSection } from './formFunctions';

// Imported Components
import SectionBox from './SectionBox';
import { Space, Button, Input, Flex } from 'components/atoms';

export const MakeForm = () => {
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);

  return (
    <div>
      <h1>지원서 양식 작성</h1>
      {sectionData.map((it, idx) => (
        <>
          <SectionBox section={it} />
          <Space height="50px" />
        </>
      ))}

      <Button
        onClick={() => addSection(sectionData, setSectionData)}
        children="섹션 추가하기"
      />
      <Space height="50px" />

      <Flex justify="center" direction="column" gap="30">
        <Button
          width="500px"
          height="70px"
          fontSize="24px"
          children="회원가입 완료"
        />
        <Button
          width="500px"
          height="70px"
          status="inactive"
          children="회원가입 완료"
        />
        <Input width="360px" height="70px" value="입력되는중" />
        <Input status="active" width="360px" height="70px" value="입력됨" />
        <Input
          status="inactive"
          width="360px"
          height="70px"
          placeholder="입력해주세요"
        />
        <Input status="error" width="360px" height="70px" value="잘못된 입력" />
      </Flex>
    </div>
  );
};

const AddSectionButton = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  cursor: pointer;
  background-color: blue;
`;
