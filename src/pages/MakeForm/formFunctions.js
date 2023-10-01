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

export const deleteSecition = (
  sectionName,
  sectionData,
  setSectionData,
  questionData,
  setQuestionData
) => {
  if (!window.confirm('섹션 삭제 시 내부의 생성된 질문들이 모두 삭제됩니다.'))
    return;

  const newSectionData = sectionData.filter(
    (sec) => sec.section_name !== sectionName
  );
  setSectionData(newSectionData);

  const newQuestionData = questionData.filter(
    (ques) => ques.section_name !== sectionName
  );
  setQuestionData(newQuestionData);
};

export const changeSection = (
  newSectionName,
  newDescription,
  originalName,
  sectionData,
  setSectionData,
  questionData,
  setQuestionData,
  setChangingSecName
) => {
  if (
    newSectionName !== originalName &&
    isRedundantName(sectionData, newSectionName)
  ) {
    window.alert('섹션명은 중복되면 안된당!');
    return;
  }

  const newSectionData = sectionData.map((sec) => {
    if (sec.section_name === originalName)
      return {
        section_name: newSectionName,
        section_description: newDescription,
      };
    return sec;
  });
  setSectionData(newSectionData);

  if (newSectionName !== originalName) {
    const newQuestionData = questionData.map((ques) => {
      if (ques.section_name === originalName)
        return { ...ques, section_name: newSectionName };
      return ques;
    });
    setQuestionData(newQuestionData);
  }
  setChangingSecName(false);
};

export const deleteQuestion = (id, questionData, setQuestionData) => {
  const newQuestionData = questionData.filter((ques) => ques.id !== id);
  setQuestionData(newQuestionData);
};

export const addQuestion = (section_name, questionData, setQuestionData) => {
  let lastId =
    questionData.length === 0
      ? 0
      : questionData[questionData.length - 1].id + 1;
  setQuestionData([
    ...questionData,
    {
      id: lastId,
      section_name,
      is_mandatory: false,
      question_type: 'checkbox',
      question_description: `생성된 질문 ${lastId}`,
      minimum_answer: 1,
      maximum_answer: 1,
      options: [{ id: 0, option: '옵션을 추가해주세요!' }],
    },
  ]);
};

export const changeQuestion = (
  id,
  changedQuestion,
  questionData,
  setQuestionData
) => {
  // 각종 예외처리 필요 ex) 체크박스 문항에 옵션이 하나 이상 있어야한다던가
  const newQuestionData = questionData.map((it) => {
    if (it.id === id) return changedQuestion;
    else return it;
  });
  setQuestionData(newQuestionData);
};
