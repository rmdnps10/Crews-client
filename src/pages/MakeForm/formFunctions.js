// 길이 10의 랜덤 문자열 생성
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

export const addNewSection = (sectionDatas, setSectionDatas) => {
  let newName;
  do {
    newName = generateRandomString();
  } while (isRedundantName(sectionDatas, newName));

  setSectionDatas([
    ...sectionDatas,
    {
      section_name: newName,
      section_description: '어쩌구 저쩌구',
    },
  ]);
};
