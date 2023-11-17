import React from 'react';
import styled from 'styled-components';
import backArrow from './backArrow.svg';
import { Space } from 'components/atoms';
function MyProfileSection() {
  return (
    <MyProfileSectionWrapper>
      <BackArrow src={backArrow} />
      <H1>마이페이지</H1>
      <ProfileBox>
        <ProfileCircle />
        <ProfilBasicInfo>
          <NameInput />
          <EmailInput />
        </ProfilBasicInfo>
        <MajorInfo>
          <MajorItem />
        </MajorInfo>
      </ProfileBox>
    </MyProfileSectionWrapper>
  );
}

const MyProfileSectionWrapper = styled.div`
  display: flex;
  marigin-top: 40px;
  flex-direction: column;
  gap: 38px;
  position: relative;
`;

const BackArrow = styled.img`
  position: absolute;
  top: -2px;
  left: -38px;
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
  background-color: blue;
`;

const ProfilBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NameInput = styled.input`
  border: none;
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const EmailInput = styled.input`
  border: none;
  color: var(--gray-g-04, #b3b3b3);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

const MajorInfo = styled.div``;

const MajorItem = styled.div``;

export default MyProfileSection;
