import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { BK02 } from 'style/palette';
//imported components
import { Flex, Input, Text } from 'components/atoms';

export const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //input box status
  const [emailStatus, setEmailStatus] = useState('inactive');
  const [passwordStatus, setPasswordStatus] = useState('inactive');
  //비밀번호 표시 toggle
  const [showPW, setShowPW] = useState(false);
  //user id pw 쿠키
  const [cookies, setCookie, removeCookie] = useCookies([
    'userEmail',
    'userPassword',
  ]);
  //id 저장할건지 체크박스 유무
  const [isStore, setIsStore] = useState(false);
  useEffect(() => {
    // 컴포넌트가 렌더링될 때 쿠키가 있으면 바로 입력
    const savedEmail = cookies.userEmail;
    const savedPassword = cookies.userPassword;

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);
  const toggleShowPW = (e) => {
    const isShowed = e.target.checked;
    setShowPW(isShowed);
  };
  const toggleIsStore = (e) => {
    const isStoreChecked = e.target.checked;
    setIsStore(isStoreChecked);
  };
  const onSumitHanlder = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      alert('아이디를 입력하세요');
    } else if (password.trim() === '') {
      alert('비밀번호를 입력하세요');
    } else {
      //아이디 비번 input 초기화, 서버에서 있는지 확인하고 처리 여기서
      setEmail('');
      setPassword('');
      if (isStore) {
        const oneMonth = 30 * 24 * 60 * 60; // 1달 cookie 저장
        setCookie('userEmail', email, { path: '/', maxAge: oneMonth });
        setCookie('userPassword', password, { path: '/', maxAge: oneMonth });
      }
    }
  };
  const storeCookie = () => {};
  return (
    <>
      <form onSubmit={onSumitHanlder}>
        <label>
          <Text children="아이디" color={BK02} />
          <br />
          <Input
            status={emailStatus}
            placeholder="이메일을 입력해주세요."
            width="32.625rem"
            height="4.25rem"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => {
              setEmailStatus('active');
            }}
            onBlur={() => {
              setEmailStatus('inactive');
            }}
          />
        </label>
        <br />
        <label>
          <Text children="비밀번호" color={BK02} />
          <br />
          <Input
            status={passwordStatus}
            placeholder="비밀번호를 입력해주세요."
            width="32.625rem"
            height="4.25rem"
            type={showPW ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => {
              setPasswordStatus('active');
            }}
            onBlur={() => {
              setPasswordStatus('inactive');
            }}
          />
        </label>
        <br />
        <button type="submit">
          <Text>로그인</Text>
        </button>
      </form>
      <Flex>
        <input type="checkbox" checked={isStore} onChange={toggleIsStore} />
        <Text>아이디 저장</Text>
        <input type="checkbox" checked={showPW} onChange={toggleShowPW}></input>
        <Text>비밀번호 표시</Text>
      </Flex>
    </>
  );
};
