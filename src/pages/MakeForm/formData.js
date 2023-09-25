export const DefaultSectionData = [
  {
    section_name: '공통',
    section_description: '어쩌구 저쩌구',
  },
];

export const DummyQuestionDatas = {
  공통: [
    {
      is_mandatory: true,
      question_type: 'checkbox',
      question_description: '다음 중 옳은 것은?',
      minimum_answer: 1,
      maximum_answer: 1,
      options: ['옵션 1', '옵션 2', '옵션 3'],
    },
  ],
  프론트엔드: [
    {
      is_mandatory: false,
      question_type: 'descriptive',
      question_description: '자기소개하세요',
      character_limit: 500,
    },
  ],
};
