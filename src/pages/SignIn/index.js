import styled from 'styled-components';
import { useState } from 'react';
import { Button, Flex, Text } from 'components/atoms';
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
          : '';
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
          : '';
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
      <TitleDiv>
        <Flex direction="column" align="start">
          <Text size={32} weight={700} color="#3172EA">
            회원가입
          </Text>

          <Text size={20} weight={400} color="#999999">
            CREWS에 오신 것을 환영합니다! 계정을 생성해주세요.
          </Text>
        </Flex>
      </TitleDiv>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Text size={22} weight={600}>
            이메일(아이디)
          </Text>
          <Flex>
            <Input
              width={380}
              height={68}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Button width="150" height="68" fontSize="20" buttonColor="#CCCCCC">
              중복확인
            </Button>
          </Flex>
          <ErrorMessage>{errors.email}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <Text>비밀번호</Text>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <ErrorMessage>{errors.password}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <Text>비밀번호 확인</Text>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
        </FormGroup>
        <Text size={20} weight={400} color="#999999">
          학생 정보 등록 및 본인 인증을 진행해주세요.
        </Text>
        <FormGroup>
          <Text>이름</Text>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <ErrorMessage>{errors.username}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <Text>학번</Text>
          <Input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
            required
          />
          <ErrorMessage>{errors.studentId}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <Text>제 1전공 (필수)</Text>
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
        <FormGroup>
          <Text>제 2전공 (선택)</Text>
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
            <Text>기타 학과</Text>
            <Input
              type="text"
              name="otherDepartment2"
              value={formData.otherDepartment2}
              onChange={handleInputChange}
              required={isOtherDepartmentVisible2}
            />
          </FormGroup>
        )}

        <FormGroup>
          <Text>제 3전공 (선택)</Text>
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
            <Text>기타 학과</Text>
            <Input
              type="text"
              name="otherDepartment3"
              value={formData.otherDepartment3}
              onChange={handleInputChange}
              required={isOtherDepartmentVisible3}
            />
          </FormGroup>
        )}
        <FormGroup>
          <Text>학교 이메일 인증</Text>
          <Flex direction="row">
            <Input
              type="email"
              id="schoolemail"
              name="schoolemail"
              value={formData.schoolemail}
              onChange={handleInputChange}
              required
            />
            <Button width="150" height="68" fontSize="20">
              인증번호 전송
            </Button>
          </Flex>{' '}
          <ErrorMessage>{errors.schoolemail}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <Text>인증번호</Text>
          <Flex direction="row">
            <Input />
            <Button width="150" height="68" fontSize="20">
              인증번호 확인
            </Button>
          </Flex>
        </FormGroup>

        <CompleteBtn
          type="submit"
          onClick={validateField}
          disabled={!isButtonEnabled}
        >
          <Text color="white"> 회원 가입 완료</Text>
        </CompleteBtn>
        <Flex>
          <Text size={12} color="grey">
            이미 회원이신가요?
          </Text>
          <LoginBtn onClick={() => nav('/login')}>로그인</LoginBtn>
        </Flex>
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
  display: flex;
  justify-content: flex-start;
`;
const CompleteBtn = styled.button`
  width: 522px;
  height: 68px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#3172ea')};
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
`;
const FormGroup = styled.div`
  width: 522px;
  height: 68px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Input = styled.input`
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Select = styled.select`
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 300;
`;
const LoginBtn = styled.div`
  color: blue;
  margin-left: 10px;
`;
