import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const nav = useNavigate();

  return (
    <NavigationContainer>
      <button onClick={() => nav('/')}>To Home</button>
      <button onClick={() => nav('/makeform')}>To MakeForm</button>
      <button onClick={() => nav('/login')}>To Login</button>
      <button onClick={() => nav('/makepost')}>To MakePost</button>
      <button onClick={() => nav('/signin')}>To SignIn</button>
      <button onClick={() => nav('/evaluate')}>To Evaluate</button>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;
`;
