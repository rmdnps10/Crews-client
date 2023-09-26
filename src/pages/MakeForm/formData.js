export const Default_Section_Data = [
  {
    section_name: '공통',
    section_description: '어쩌구 저쩌구',
  },
];

export const Dummy_Question_Data = [
  {
    id: 1,
    section_name: '공통',
    is_mandatory: true,
    question_type: 'checkbox',
    question_description: '다음 중 옳은 것은?',
    minimum_answer: 1,
    maximum_answer: 1,
    options: ['옵션 1', '옵션 2', '옵션 3'],
  },
  {
    id: 2,
    section_name: '공통',
    is_mandatory: true,
    question_type: 'checkbox',
    question_description: '질문 2',
    minimum_answer: 2,
    maximum_answer: 4,
    options: ['옵션 4', '옵션 5', '옵션 6'],
  },
  {
    id: 3,
    section_name: '프론트엔드',
    is_mandatory: false,
    question_type: 'descriptive',
    question_description: '자기소개하세요',
    character_limit: 500,
  },
];
