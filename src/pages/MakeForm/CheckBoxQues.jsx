import styled from 'styled-components';
// Imported Functions

const CheckBoxQues = ({ changingQues, question, setInputQuesData }) => {
  const {
    id,
    is_mandatory,
    question_description,
    minimum_answer,
    maximum_answer,
    options,
  } = { ...question };

  const changeDescription = (e) => {
    setInputQuesData((prev) => {
      return { ...prev, question_description: e.target.value };
    });
  };

  const changeMinAns = (e) => {
    setInputQuesData((prev) => {
      return { ...prev, minimum_answer: e.target.value };
    });
  };

  const changeMaxAns = (e) => {
    setInputQuesData((prev) => {
      return { ...prev, maximum_answer: e.target.value };
    });
  };

  const changeOption = (value, id) => {
    const newOptions = options.map((op) => {
      if (op.id === id) return { id, option: value };
      else return op;
    });
    setInputQuesData((prev) => {
      return { ...prev, options: newOptions };
    });
  };

  const addOption = () => {
    let newId = options[options.length - 1].id + 1;
    setInputQuesData((prev) => {
      return {
        ...prev,
        options: [
          ...options,
          {
            id: newId,
            option: `#${newId}옵션을 변경해주세요.`,
          },
        ],
      };
    });
  };

  const deleteOption = (id) => {
    const newOptions = options.filter((op) => op.id !== id);
    setInputQuesData((prev) => {
      return {
        ...prev,
        options: newOptions,
      };
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
        <MyLabel>
          min
          <input type="number" onChange={changeMinAns} value={minimum_answer} />
        </MyLabel>
        <MyLabel>
          max
          <input type="number" onChange={changeMaxAns} value={maximum_answer} />
        </MyLabel>
        {options.map((it) => (
          <OptionContainer>
            <MyInput
              key={it.id}
              onChange={(e) => changeOption(e.target.value, it.id)}
              type="text"
              value={it.option}
            />
            <DeleteOption onClick={() => deleteOption(it.id)} children="X" />
          </OptionContainer>
        ))}
        <AddOption onClick={addOption} children="+" />
      </CheckBoxQuesContainer>
    );
  else
    return (
      <CheckBoxQuesContainer>
        <div>{question_description}</div>
        <div>{`min : ${minimum_answer}`}</div>
        <div>{`max : ${maximum_answer}`}</div>
        {options.map((it) => (
          <label>
            <input key={it.id} type="checkbox" checked={false} />
            {it.option}
          </label>
        ))}
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

export default CheckBoxQues;
