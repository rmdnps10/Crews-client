import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
//imported components
import { Button, Flex, Input, Space, Text } from 'components/atoms';
//imported styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { BK01, BK02 } from 'style/palette';

export const LoginInput = () => {
  const navigate = useNavigate();
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
  const onSubmitHanlder = (e) => {
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
  return (
    <LoginInputWrapper>
      <form onSubmit={onSubmitHanlder}>
        <LoginBoxWrapper>
          <label>
            <Text
              children="아이디"
              color={BK02}
              size="22px"
              weight={600}
              spacing="-0.44px"
            />
            <Space height="16px" />
            <Input
              status={emailStatus}
              placeholder="이메일을 입력해주세요."
              width="522px"
              height="68px"
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
          {emailStatus === 'active' && (
            <FontAwesomeIcon
              className="deleteButton"
              icon={faCircleXmark}
              style={{ color: '#101010', width: '36px', height: '36px' }}
              onClick={() => {
                setEmail('');
              }}
              cursor={'pointer'}
            />
          )}
        </LoginBoxWrapper>
        <Space height="28px" />
        <LoginBoxWrapper>
          <label>
            <Text
              children="비밀번호"
              color={BK02}
              size="22px"
              weight={600}
              spacing="-0.44px"
            />
            <br />
            <Space height="16px" />
            <Input
              status={passwordStatus}
              placeholder="비밀번호를 입력해주세요."
              width="522px"
              height="68px"
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
          {passwordStatus === 'active' && (
            <FontAwesomeIcon
              className="deleteButton"
              icon={faCircleXmark}
              style={{ color: '#101010', width: '36px', height: '36px' }}
              onClick={(e) => {
                e.stopPropagation();
                setPassword('');
              }}
              cursor={'pointer'}
            />
          )}
        </LoginBoxWrapper>
      </form>
      <Space height="28px" />

      <Flex>
        <input type="checkbox" checked={isStore} onChange={toggleIsStore} />
        <Text>아이디 저장</Text>
        <input type="checkbox" checked={showPW} onChange={toggleShowPW}></input>
        <Text>비밀번호 표시</Text>
      </Flex>
      <Flex>
        <Text
          children="회원가입"
          color={BK01}
          cursor="pointer"
          onClick={() => {
            navigate('/signin');
          }}
        />
      </Flex>
      <form onSubmit={onSubmitHanlder}>
        <Button
          children="로그인"
          width="522px"
          height="68px"
          onClick={onSubmitHanlder}
        />
      </form>
    </LoginInputWrapper>
  );
};

const LoginInputWrapper = styled.div`
  width: 522px;
`;

const LoginBoxWrapper = styled.div`
  position: relative;
  .deleteButton {
    position: absolute;
    top: 59px;
    right: 22px;
  }
`;
