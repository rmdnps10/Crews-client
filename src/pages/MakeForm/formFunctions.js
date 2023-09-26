export const generateRandomString = () => {
  const characters = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < 10; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
};

export const isRedundantName = (sections, newName) => {
  for (let i = 0; i < sections.length; i++)
    if (sections[i].section_name === newName) return true;
  return false;
};

export const addSection = (sectionDatas, setSectionDatas) => {
  let newName;
  do {
    newName = generateRandomString();
  } while (isRedundantName(sectionDatas, newName));

  setSectionDatas((prev) => [
    ...prev,
    {
      section_name: newName,
      section_description: '어쩌구 저쩌구',
    },
  ]);
};

export const addCheckboxQues = (
  questionDatas,
  section_name,
  setQuestionDatas
) => {
  let lastId = questionDatas[questionDatas.length - 1].id + 1;
  setQuestionDatas([
    ...questionDatas,
    {
      id: lastId,
      section_name,
      is_mandatory: false,
      question_type: 'checkbox',
      question_description: `질문 ${lastId}`,
      minimum_answer: 1,
      maximum_answer: 1,
      options: [],
    },
  ]);
};
