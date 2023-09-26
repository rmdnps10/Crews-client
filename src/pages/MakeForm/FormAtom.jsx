import { atom } from 'recoil';
import { Default_Section_Data, Dummy_Question_Data } from './formData';

export const sectionDataAtom = atom({
  key: 'sectionData',
  default: Default_Section_Data,
});

export const questionDataAtom = atom({
  key: 'questionData',
  default: Dummy_Question_Data,
});
