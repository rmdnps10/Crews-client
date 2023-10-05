import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { sectionDataAtom } from './FormAtom';

// Imported Functions & Datas
import { addSection } from './formFunctions';

// Imported Components
import SectionBox from './SectionBox';
import { Space } from 'components/atoms';

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

      <AddSectionButton
        onClick={() => addSection(sectionData, setSectionData)}
        children="섹션 추가하기"
      />
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
