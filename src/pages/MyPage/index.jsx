import styled from 'styled-components';
import MyProfileSection from './MyProfileSection';
import MyPostSection from './MyPostSection';
export const MyPage = () => {
 
  return (
    <MyPageContainer>
      <MyProfileSection />
      <MyPostSection />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  width: 760px;
  margin: 0 auto;
`;
