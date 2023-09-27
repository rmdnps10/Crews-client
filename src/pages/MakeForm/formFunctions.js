export const generateRandomString = () => {
  const characters = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < 10; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
};

export const isRedundantName = (section, newName) => {
  for (let i = 0; i < section.length; i++)
    if (section[i].section_name === newName) return true;
  return false;
};

export const addSection = (sectionData, setSectionData) => {
  let newName;
  do {
    newName = generateRandomString();
  } while (isRedundantName(sectionData, newName));

  setSectionData((prev) => [
    ...prev,
    {
      section_name: newName,
      section_description: '어쩌구 저쩌구',
    },
  ]);
};

export const changeSection = (
  newSectionName,
  originalName,
  sectionData,
  setSectionData,
  questionData,
  setQuestionData,
  setChangingSecName
) => {
  if (newSectionName !== originalName) {
    if (isRedundantName(sectionData, newSectionName)) {
      alert('섹션명은 중복되면 안된당!');
      return;
    }

    const newSectionData = sectionData.map((sec) => {
      if (sec.section_name === originalName)
        return { ...sec, section_name: newSectionName };
      return sec;
    });
    setSectionData(newSectionData);

    const newQuestionData = questionData.map((ques) => {
      if (ques.section_name === originalName)
        return { ...ques, section_name: newSectionName };
      return ques;
    });
    setQuestionData(newQuestionData);
  }
  setChangingSecName(false);
};

export const addCheckboxQues = (
  section_name,
  questionData,
  setQuestionData
) => {
  let lastId = questionData[questionData.length - 1].id + 1;
  setQuestionData([
    ...questionData,
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
