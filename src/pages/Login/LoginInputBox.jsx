import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
//imported components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Space, Text } from 'components/atoms';

export const LoginInputBox = (props) => {
  return (
    <LoginBoxWrapper>
      {/* <label>
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
      )} */}
    </LoginBoxWrapper>
  );
};

const LoginBoxWrapper = styled.div`
  position: relative;
  .deleteButton {
    position: absolute;
    top: 59px;
    right: 22px;
  }
`;
