import styled from 'styled-components';
import { useState } from 'react';
import { Flex, Space, Text } from 'components/atoms';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    department1: '제 1전공',
    department2: '제 2전공',
    department3: '제 3전공',
    otherDepartment2: '',
    otherDepartment3: '',
    schoolemail: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    schoolemail: '',
  });

  const [isOtherDepartmentVisible2, setIsOtherDepartmentVisible2] =
    useState(false);
  const [isOtherDepartmentVisible3, setIsOtherDepartmentVisible3] =
    useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleDepartmentChange = (event, departmentNumber) => {
    const { value } = event.target;
    const otherDepartmentKey = `otherDepartment${departmentNumber}`;
    const isOtherDepartmentVisibleKey = `isOtherDepartmentVisible${departmentNumber}`;
    setFormData((prevData) => ({
      ...prevData,
      [`department${departmentNumber}`]: value,
      [otherDepartmentKey]: '',
    }));
    setOtherDepartmentVisibility(false, isOtherDepartmentVisibleKey);
  };

  const setOtherDepartmentVisibility = (
    isVisible,
    isOtherDepartmentVisibleKey
  ) => {
    setIsOtherDepartmentVisible2(false);
    setIsOtherDepartmentVisible3(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [isValid, setIsValid] = useState();
  const validateField = (fieldName, value) => {
    let errorMessage = '';

    switch (fieldName) {
      case 'username':
        errorMessage = value.trim() === '' ? '사용자 이름을 입력하세요.' : '';
        break;
      case 'email':
        errorMessage = !value.match(
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        )
          ? '올바른 이메일 형식이 아닙니다.'
          : '사용 가능한 아이디입니다.';
        break;
      case 'password':
        errorMessage =
          !value.match(/^(?=.*[!@#$%^&*])/) || value.length < 8
            ? '비밀번호는 8자 이상으로 특수문자를 포함해주세요.'
            : '';
        break;
      case 'confirmPassword':
        errorMessage =
          value !== formData.password ? '비밀번호가 일치하지 않습니다.' : '';
        break;
      case 'studentId':
        errorMessage = !/^\d{8}$/.test(value)
          ? '올바른 학번을 입력하세요 (8자리 숫자).'
          : '';
        break;
      case 'schoolemail':
        errorMessage = !value.match(
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        )
          ? '올바른 이메일 형식이 아닙니다.'
          : '사용 가능한 아이디입니다.';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
    setIsButtonEnabled(isAllFieldsFilled());
  };
  const isAllFieldsFilled = () => {
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && formData[key] === '') {
        return false;
      }
    }
    return true;
  };

  return (
    <SigninWrapper>
      <Space height="120px" />

      <TitleDiv>
        <Flex direction="column" align="start">
          <Text size="28px" weight={700} color="#3172EA">
            회원가입
          </Text>
          <Space height="12px" />
          <Text size="16px" weight={400} color="#999999">
            CREWS에 오신 것을 환영합니다! 계정을 생성해주세요.
          </Text>
        </Flex>
      </TitleDiv>
      <Space height="40px" />

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            아이디(이메일)
            <Space height="16px" />
          </Text>

          <Flex align="center">
            <ShortInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="이메일을 입력해주세요."
            />

            <SmallBtn>중복 확인</SmallBtn>
          </Flex>

          <ErrorMessage>{errors.email}</ErrorMessage>
        </FormGroup>
        <Space height="32px" />
        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            비밀번호
          </Text>
          <LongInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="비밀번호를 입력해주세요."
          />
          <ErrorMessage>{errors.password}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <LongInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="비밀번호를 입력해주세요."
            required
          />
          <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
        </FormGroup>
        <Text size="20px" weight={400} color="#999999">
          <Space height="8px" />
          학생 정보 등록 및 본인 인증을 진행해주세요.
          <Space height="20px" />
        </Text>
        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            이름
          </Text>

          <LongInput
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="이름을 입력해주세요."
            required
          />

          <ErrorMessage>{errors.username}</ErrorMessage>
        </FormGroup>
        <Space height="32px" />
        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            학번
          </Text>
          <LongInput
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
            placeholder="학번을 입력해주세요."
            required
          />
          <ErrorMessage>{errors.studentId}</ErrorMessage>
        </FormGroup>
        <Space height="32px" />
        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            제 1전공 (필수)
          </Text>
          <Select
            name="department"
            value={formData.department}
            onChange={handleDepartmentChange}
          >
            <option value="제 1전공">직접 입력</option>
            <option value="컴퓨터 공학">컴퓨터 공학</option>
            <option value="전기 공학">전기 공학</option>
            <option value="기계 공학">기계 공학</option>
          </Select>
        </FormGroup>
        <Space height="32px" />
        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            제 2전공 (선택)
          </Text>
          <Select
            name="department2"
            value={formData.department2}
            onChange={(e) => handleDepartmentChange(e, 2)}
          >
            <option value="제 2전공">직접 입력</option>
            <option value="컴퓨터 공학">컴퓨터 공학</option>
            <option value="전기 공학">전기 공학</option>
            <option value="기계 공학">기계 공학</option>
            <option value="기타">기타</option>
          </Select>
        </FormGroup>
        {formData.department2 === '기타' && (
          <FormGroup>
            <Text size="20px" weight={600} color="#101010">
              기타 학과
            </Text>
            <LongInput
              type="text"
              name="otherDepartment2"
              value={formData.otherDepartment2}
              onChange={handleInputChange}
              required={isOtherDepartmentVisible2}
            />
          </FormGroup>
        )}
        <Space height="32px" />
        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            제 3전공 (선택)
          </Text>
          <Select
            name="department3"
            value={formData.department3}
            onChange={(e) => handleDepartmentChange(e, 3)}
          >
            <option value="제 3전공">직접 입력</option>
            <option value="컴퓨터 공학">컴퓨터 공학</option>
            <option value="전기 공학">전기 공학</option>
            <option value="기계 공학">기계 공학</option>
            <option value="기타">기타</option>
          </Select>
        </FormGroup>
        {formData.department3 === '기타' && (
          <FormGroup>
            <Text size="20px" weight={600} color="#101010">
              기타 학과
            </Text>
            <LongInput
              type="text"
              name="otherDepartment3"
              value={formData.otherDepartment3}
              onChange={handleInputChange}
              required={isOtherDepartmentVisible3}
            />
          </FormGroup>
        )}
        <Space height="32px" />
        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            학교 이메일 인증
            <Space height="16px" />
          </Text>
          <Flex direction="row">
            <ShortInput
              type="email"
              id="schoolemail"
              name="schoolemail"
              value={formData.schoolemail}
              onChange={handleInputChange}
              placeholder="학교 이메일을 입력해주세요."
              required
            />
            <SmallBtn>인증번호 전송</SmallBtn>
          </Flex>
          <ErrorMessage>{errors.schoolemail}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <Text size="20px" weight={600} color="#101010">
            인증번호
            <Space height="16px" />
          </Text>
          <Flex direction="row">
            <ShortInput />
            <SmallBtn>인증번호 확인</SmallBtn>
          </Flex>
        </FormGroup>
        <Space height="60px" />
        <Flex>
          <CompleteBtn
            type="submit"
            onClick={validateField}
            disabled={!isButtonEnabled}
          >
            <Text color="white"> 회원 가입 완료</Text>
          </CompleteBtn>
        </Flex>
        <Space height="20px" />
        <Flex>
          <Text size={12} color="grey" cursor="default">
            이미 회원이신가요?
          </Text>
          <LoginBtn onClick={() => nav('/login')}>로그인</LoginBtn>
        </Flex>
        <Space height="60px" />
      </form>
    </SigninWrapper>
  );
};

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleDiv = styled.div`
  width: 522px;
  display: flex;

  justify-content: flex-start;
`;
const CompleteBtn = styled.button`
  width: 392px;
  height: 65px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#3172ea')};
  border-radius: 10px;
  font-size: 20px;

  border: none;
  margin-bottom: 10px;
`;
const SmallBtn = styled.button`
  width: 150px;
  height: 65px;
  background-color: ${(props) => (props.isValid ? '#3172ea' : '#ccc')};
  border-radius: 10px;
  border: none;
  color: ${(props) => (props.isValid ? 'white' : '#999')};
  font-size: 20px;
  font-weight: 700;
  box-sizing: border-box;
  font-family: 'Pretendard';
`;
const FormGroup = styled.div`
  width: 522px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
`;

const LongInput = styled.input`
  height: 65px;
  width: 522px;
  background-color: #f2f2f2;
  outline: none;
  border: 1px solid ${(props) => (props.isValid ? '#3172ea ' : '#ccc')};
  border-radius: 10px;
  padding: 22px;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 600;
  margin-top: 16px;
  &:focus {
    background: #fdf2f3;
    border: 2px solid #f15454;
  }
`;
const ShortInput = styled.input`
  height: 65px;
  width: 350px;
  outline: none;
  border: 1px solid ${(props) => (props.isValid ? '#3172ea' : '#ccc')};
  border-radius: 10px;
  background-color: #f2f2f2;
  margin-right: 12px;
  box-sizing: border-box;
  padding: 22px;
  font-family: 'Pretendard';
  font-size: 18px;
  outline: none;
  font-weight: 600;
  &:focus {
    background: #fdf2f3;
    border: 2px solid #f15454;
  }
`;
const Select = styled.select`
  appearance: none;
  height: 68px;
  width: 522px;
  border: 1.4px solid #ccc;
  border-radius: 5px;
  font-family: 'Pretendard-Regular';
  font-size: 18px;
  padding: 22px 18px 22px 22px;
  margin-top: 16px;
  font-weight: 600;
`;

const ErrorMessage = styled.div`
  color: ${(props) => (props.isValid ? '#3172ea' : '#f15454')};
  font-size: 18px;
  font-weight: 500;
  margin: 16px 0px 32px 0px;
  font-family: 'Pretendard-Regular';
`;
const LoginBtn = styled.div`
  color: blue;
  margin-left: 10px;
  font-family: 'Pretendard';
  cursor: pointer;
`;
