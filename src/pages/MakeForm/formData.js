export const Default_Section_Data = [
  {
    section_name: '공통',
    section_description: '어쩌구 저쩌구',
  },
];

export const Default_CheckboxQues_Data = {
  // id, is_mandatory, question_description 유지
  question_type: 'checkbox',
  minimum_answer: 1,
  maximum_answer: 1,
  options: [{ id: 0, option: '옵션을 추가해주세요!' }],
};

export const Default_DescriptiveQues_Data = {
  // id, is_mandatory, question_description 유지
  question_type: 'descriptive',
  character_limit: 500,
};
