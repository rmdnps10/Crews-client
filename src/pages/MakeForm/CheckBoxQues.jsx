import styled from 'styled-components';

const CheckBoxQues = ({ questionData }) => {
  const {
    is_mandatory,
    question_description,
    minimum_answer,
    maximum_answer,
    options,
  } = { ...questionData };

  return (
    <CheckBoxQuesContainer>
      <label>
        <input type="checkbox" checked={is_mandatory} />
        필수 여부
      </label>
      <div>{question_description}</div>
      <div>{`min : ${minimum_answer}`}</div>
      <div>{`max : ${maximum_answer}`}</div>
      {options.map((it, idx) => (
        <label>
          <input key={idx} type="checkbox" checked={false} />
          {it}
        </label>
      ))}
    </CheckBoxQuesContainer>
  );
};

const CheckBoxQuesContainer = styled.div`
  border: 2px solid black;
  padding: 10px;
`;

export default CheckBoxQues;

// 라벨 달아주기
// Recoil 공부
