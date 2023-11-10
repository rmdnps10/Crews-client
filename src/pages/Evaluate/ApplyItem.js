import React from 'react';
import styled from 'styled-components';

function ApplyItem({ isActive }) {
  return (
    <ApplyItemContainer>
      {isActive ? (
        <ActiveApplyItem></ActiveApplyItem>
      ) : (
        <UnActivateApplyItem>
          <ApplicantInform>
            <div className="student-id">20201148</div>
            <div className="name">정인영</div>
            <div className="class">아트엔테크놀리지학과</div>
          </ApplicantInform>
          <IsSelectLabel />
        </UnActivateApplyItem>
      )}
    </ApplyItemContainer>
  );
}

const ApplyItemContainer = styled.div`
  width: 258px;
  height: 427px;
`;

const ActiveApplyItem = styled.div`
  width: 258px;
  height: 427px;
  border-radius: 10px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: #fff;
`;

const UnActivateApplyItem = styled.div`
  width: 258px;
  height: 121px;
  border-radius: 10px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
`;

const ApplicantInform = styled.div`
  .student-id {
    color: var(--black-bk-02, #101010);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.4px;
  }
  .name {
    color: var(--black-bk-02, #101010);
    font-size: 20px;
    font-weight: 700;
  }
  .class {
    color: var(--gray-g-05, #999);
    font-size: 14px;
    font-weight: 400;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const IsSelectLabel = styled.label`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid gray;
`;

export default ApplyItem;
