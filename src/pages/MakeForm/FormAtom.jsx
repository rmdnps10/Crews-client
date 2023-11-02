import { atom } from 'recoil';
import { Default_Section_Data, Dummy_Question_Data } from './formData';

export const sectionDataAtom = atom({
  key: 'sectionData',
  default: Default_Section_Data,
});

export const questionDataAtom = atom({
  key: 'questionData',
  default: [
    {
      id: 0,
      sectionName: '공통',
      questionDescription: '',
      questionType: 'checkbox',
      isMandatory: true,
      canMultipleCheck: true,
      options: [
        { id: 0, option: '옵션을 추가해주세요!' },
        { id: 1, option: '옵션을 추가해주세요!' },
      ],
    },
    {
      id: 1,
      sectionName: '공통',
      questionDescription: '',
      questionType: 'descriptive',
      isMandatory: false,
      characterLimit: 500,
    },
  ],
});
