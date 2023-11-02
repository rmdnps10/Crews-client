export const Default_Section_Data = [
  {
    sectionName: '공통',
    sectionDescription: '',
  },
];

export const Default_CheckboxQues_Data = {
  // id, is_mandatory, question_description 유지
  sectinoName: '공통',
  questionType: 'checkbox',
  minimumAnswer: 1,
  maximumAnswer: 1,
  options: [{ id: 0, option: '옵션을 추가해주세요!' }],
};

export const Default_DescriptiveQues_Data = {
  // id, is_mandatory, question_description 유지
  sectinoName: '공통',
  questionType: 'descriptive',
  characterLimit: 500,
};
