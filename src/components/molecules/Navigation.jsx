import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'components/atoms';
import basicProfile from './basic-profile.svg';
export const Navigation = () => {
  const nav = useNavigate();

  return (
    <>
      <NavigationContainer>
        <button onClick={() => nav('/')}>To Home</button>
        <button onClick={() => nav('/makeform')}>To MakeForm</button>
        <button onClick={() => nav('/login')}>To Login</button>
        <button onClick={() => nav('/makepost')}>To MakePost</button>
        <button onClick={() => nav('/signin')}>To SignIn</button>
        <button onClick={() => nav('/evaluate')}>To Evaluate</button>
        <button onClick={() => nav('/evaluatedetail')}>
          To EvaluateDetail
        </button>
        <button onClick={() => nav('/mypage')}>mypage</button>
      </NavigationContainer>
      <CrewsNav>
        <CrewsLogo>Crews 🛳️</CrewsLogo>
        <ProfileSection>
          <ProfileImage src={basicProfile} />
          <Flex direction="column" align="flex-start">
            <UserName>C123456 김서강</UserName>
            <LoginButton>로그아웃</LoginButton>
          </Flex>
        </ProfileSection>
      </CrewsNav>
    </>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: yellow;
  gap: 20px;
`;

const CrewsNav = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: var(--blue-b-02, #e8effd);
`;

const CrewsLogo = styled.div`
  margin-left: 25px;
  color: var(--blue-b-05-m, #3172ea);
  font-family: Poppin;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6px;
`;

const ProfileSection = styled.div`
  margin-left: auto;
  margin-right: 28px;
  display: flex;
  gap: 12px;
`;

const ProfileImage = styled.img``;

const UserName = styled.div`
  color: var(--black-bk-01, #303030);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const LoginButton = styled.div`
  color: var(--black-bk-01, #303030);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  text-decoration-line: underline;
`;
