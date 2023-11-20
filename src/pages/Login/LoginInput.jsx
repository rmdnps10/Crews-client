import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
//imported components
import { Button, Input, Space, Text } from 'components/atoms';
//imported styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { BK02 } from 'style/palette';
import { LoginOptions } from './LoginOptions';

export const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //input box status
  const [emailStatus, setEmailStatus] = useState('inactive');
  const [passwordStatus, setPasswordStatus] = useState('inactive');
  //x버튼 표시 toggle
  const [showEmailX, setShowEmailX] = useState(false);
  const [showPwX, setShowPwX] = useState(false);
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

  const toggleShowPW = () => {
    setShowPW(!showPW);
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

  useEffect(() => {}, [showEmailX]);

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
                setShowEmailX(true);
              }}
              onBlur={() => {
                setEmailStatus('inactive');
                setShowEmailX(false);
              }}
            />
          </label>
          {showEmailX === true && (
            <FontAwesomeIcon
              className="deleteButton"
              icon={faCircleXmark}
              style={{ color: '#999999', width: '32px', height: '32px' }}
              onMouseDown={() => {
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
                setShowPwX(true);
              }}
              onBlur={() => {
                setPasswordStatus('inactive');
                setShowPwX(false);
              }}
            />
          </label>
          {showPwX === true && (
            <FontAwesomeIcon
              className="deleteButton"
              icon={faCircleXmark}
              style={{ color: '#101010', width: '32px', height: '32px' }}
              onMouseDown={() => {
                setPassword('');
              }}
              cursor={'pointer'}
            />
          )}
        </LoginBoxWrapper>
        <Space height="28px" />

        <LoginOptions isStore={isStore} toggleIsStore={toggleIsStore} />

        <Space height="28px" />
        <Button
          children="로그인"
          width="522px"
          height="68px"
          onClick={onSubmitHanlder}
        />
      </form>
      {/* <input type="checkbox" checked={showPW} onChange={toggleShowPW}></input>
      <Text children="비밀번호 표시" color={BK01} /> */}
      <FontAwesomeIcon icon={faEyeSlash} onClick={toggleShowPW} />
      <FontAwesomeIcon icon={faEye} onClick={toggleShowPW} />
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
    top: 61px;
    right: 22px;
  }
`;
