import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { B05, B02 } from 'style/palette';

import { Text } from 'components/atoms';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const nav = useNavigate();

  return (
    <HeaderContainer>
      <Logo>
        <Text
          children="CREWS"
          size="30px"
          weight={700}
          style={{ letterSpacing: '2px' }}
        />
        <FontAwesomeIcon icon={faAnchor} className="fa-xl" />
      </Logo>

      {/* <button onClick={() => nav('/')}>To Home</button>
      <button onClick={() => nav('/makeform')}>To MakeForm</button>
      <button onClick={() => nav('/login')}>To Login</button>
      <button onClick={() => nav('/makepost')}>To MakePost</button>
      <button onClick={() => nav('/signin')}>To SignIn</button> */}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: ${B02};
  padding: 25px;
  width: 100%;
  height: 80px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${B05};
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;
`;
