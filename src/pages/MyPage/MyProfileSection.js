import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import backArrow from './backArrow.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
function MyProfileSection() {
  // input 폼으로 만들었고, 프로필 편집 누르면 여기에서 바로 편집되도록 함
  const nameRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [profileText, setProfileText] = useState({
    name: '정인영',
    email: 'rmdnps10@gmail.com',
    major: ['아트엔테크놀리지', '컴퓨터공학과', '미디어커뮤니케이션학과'],
  });
  const onChangeProfileText = (e) => {
    e.stopPropagation();
    if (e.target.name.includes('major')) {
      const majorIndex = parseInt(e.target.name.replace('major', ''), 10);
      const updatedMajor = [...profileText.major];
      updatedMajor[majorIndex] = e.target.value;
      setProfileText({
        ...profileText,
        major: updatedMajor,
      });
      return;
    }
    setProfileText({ ...profileText, [e.target.name]: e.target.value });
  };

  const deleteMajor = (idx) => {
    const updatedMajor = [
      ...profileText.major.slice(0, idx),
      ...profileText.major.slice(idx + 1),
    ];
    setProfileText({ ...profileText, major: updatedMajor });
  };
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const addMajor = () => {
    const updatedMajor = [...profileText.major, ''];
    setProfileText({ ...profileText, major: updatedMajor });
  };

  useEffect(() => {
    if (isEdit === true) {
      nameRef.current.focus();
    }
  }, [isEdit]);

  return (
    <MyProfileSectionWrapper>
      <BackArrow src={backArrow} />
      <H1>마이페이지</H1>
      <ProfileBox>
        <ProfileCircle>
          <EditButton onClick={toggleIsEdit}>
            {isEdit ? '프로필 수정 완료' : '프로필 수정'}
          </EditButton>
        </ProfileCircle>
        <ProfilBasicInfo>
          <NameInput
            value={profileText.name}
            name={'name'}
            onChange={onChangeProfileText}
            $isEdit={isEdit}
            disabled={isEdit ? false : true}
            ref={nameRef}
          />
          <EmailInput
            value={profileText.email}
            name={'email'}
            onChange={onChangeProfileText}
            $isEdit={isEdit}
            disabled={isEdit ? false : true}
          />
        </ProfilBasicInfo>
        <MajorInfo>
          {profileText.major.map((item, idx) => {
            return (
              <MajorLabel>
                <LabelText>제{idx + 1}전공</LabelText>
                <MajorItem
                  value={profileText.major[idx]}
                  name={`${idx}major`}
                  onChange={onChangeProfileText}
                  $isEdit={isEdit}
                  disabled={isEdit ? false : true}
                />
                {isEdit ? (
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    onClick={() => {
                      deleteMajor(idx);
                    }}
                    size="lg"
                    style={{
                      position: 'absolute',
                      top: '7px',
                      left: '-25px',
                      cursor: 'pointer',
                    }}
                  />
                ) : (
                  ''
                )}
              </MajorLabel>
            );
          })}
          {isEdit ? (
            <AddMajorButton onClick={addMajor}>전공 추가하기</AddMajorButton>
          ) : (
            ''
          )}
        </MajorInfo>
      </ProfileBox>
    </MyProfileSectionWrapper>
  );
}

const MyProfileSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 40px;
  gap: 38px;
`;

const BackArrow = styled.img`
  position: absolute;
  top: -2px;
  left: -43px;
  cursor: pointer;
`;

const H1 = styled.h1`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.56px;
`;

const ProfileBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const ProfileCircle = styled.div`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: relative;
  background-color: blue;
`;

const ProfilBasicInfo = styled.div`
  display: flex;
  width: 216px;
  flex-direction: column;
  gap: 10px;
`;

const NameInput = styled.input`
  border: none;
  color: var(--black-bk-02, #101010);
  background ${(props) =>
    props.$isEdit ? 'var(--blue-b-01, #f6f9fe);' : 'none'}  ;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  border-radius: 8.046px;
  appearance: none;
  &:focus {
    outline: none;
  }
`;

const EmailInput = styled.input`
  border: none;
  color: var(--gray-g-04, #b3b3b3);
  background ${(props) =>
    props.$isEdit ? 'var(--blue-b-01, #f6f9fe);' : 'none'}  ;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  border-radius: 8.046px;
  font-weight: 500;
  appearance: none;
  &:focus {
    outline: none;
  }
`;

const MajorInfo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 15px;
  position: relative;
  align-items: flex-end;
`;

const MajorLabel = styled.label`
  position: relative;
`;

const LabelText = styled.div`
  position: absolute;
  top: 0px;
  left: 14px;
  height: 100%;
  color: var(--gray-g-05, #999);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const MajorItem = styled.input`
  width: 307px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 8.046px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: #fff;
  background ${(props) =>
    props.$isEdit ? 'var(--blue-b-01, #f6f9fe);' : 'none'}  ;
  &:focus {
    outline: none;
  }
  color: var(--black-bk-01, #303030);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 70px;
`;

const EditButton = styled.div`
  color: var(--gray-g-04, #b3b3b3);
  font-family: Pretendard;
  position: absolute;
  cursor: pointer;
  top: 130px;
  left: 20px;
  text-align: center;
  width: 90px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  text-decoration-line: underline;
`;

const AddMajorButton = styled.div`
  position: absolute;
  left: 60px;
  text-decoration-line: underline;
  bottom: -30px;
`;
export default MyProfileSection;
