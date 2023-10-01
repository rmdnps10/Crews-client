import styled from 'styled-components';
// Imported Functions

const DescriptiveQues = ({
  changingQues = false,
  question,
  setInputQuesData,
}) => {
  console.log(question);
  const { id, is_mandatory, question_description, character_limit } = {
    ...question,
  };

  const changeDescription = (e) => {
    setInputQuesData((prev) => {
      return { ...prev, question_description: e.target.value };
    });
  };

  const changeCharLimit = (e) => {
    setInputQuesData((prev) => {
      return { ...prev, character_limit: e.target.value };
    });
  };

  if (changingQues)
    return (
      <CheckBoxQuesContainer>
        <MyInput
          type="text"
          onChange={changeDescription}
          value={question_description}
        />
        <textarea />

        <MyLabel>
          글자수 제한
          <input
            type="number"
            onChange={changeCharLimit}
            value={character_limit}
          />
        </MyLabel>
      </CheckBoxQuesContainer>
    );
  else
    return (
      <CheckBoxQuesContainer>
        <div>{question_description}</div>
        <textarea />

        <label>
          <input type="number" value={character_limit} />
          글자수 제한
        </label>
      </CheckBoxQuesContainer>
    );
};

const CheckBoxQuesContainer = styled.div`
  position: relative;
  padding: 10px;
`;

const OptionContainer = styled.div`
  display: flex;
`;

const AddOption = styled.button`
  background-color: purple;
  cursor: pointer;
  color: white;
`;

const DeleteOption = styled.button`
  background-color: red;
  cursor: pointer;
  color: white;
`;

const MyLabel = styled.label`
  display: block;
`;

const MyInput = styled.input`
  display: block;
`;

export default DescriptiveQues;
