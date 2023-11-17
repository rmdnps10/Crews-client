import styled from 'styled-components';
import MyProfileSection from './MyProfileSection';
export const MyPage = () => {
  return (
    <MyPageContainer>
      <MyProfileSection />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  width: 760px;
  margin: 0 auto;
`;
