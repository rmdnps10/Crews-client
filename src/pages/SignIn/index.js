import styled from 'styled-components';
import { useState } from 'react';
import { Flex, Space } from 'components/atoms';
import { Text } from 'components/atoms';

export const SignIn = () => {
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
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
  });

  const [isOtherDepartmentVisible2, setIsOtherDepartmentVisible2] =
    useState(false);
  const [isOtherDepartmentVisible3, setIsOtherDepartmentVisible3] =
    useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      studentId: '',
    };

    if (formData.username.trim() === '') {
      newErrors.username = '사용자 이름을 입력하세요.';
      valid = false;
    }

    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
      valid = false;
    }

    if (
      !formData.password.match(/^(?=.*[!@#$%^&*])/) ||
      formData.password.length < 8
    ) {
      newErrors.password = '비밀번호는 8자 이상으로 특수문자를 포함해주세요.';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
      valid = false;
    }

    if (!/^\d{8}$/.test(formData.studentId)) {
      newErrors.studentId = '올바른 학번을 입력하세요 (8자리 숫자).';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <Flex width="441" height="831">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Text>이메일(아이디)</Text>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
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
          <Text>전공</Text>
          <Select
            name="department"
            value={formData.department}
            onChange={handleDepartmentChange}
          >
            <option value="제 1전공">제 1전공</option>
            <option value="컴퓨터 공학">컴퓨터 공학</option>
            <option value="전기 공학">전기 공학</option>
            <option value="기계 공학">기계 공학</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Text>제 2전공</Text>
          <Select
            name="department2"
            value={formData.department2}
            onChange={(e) => handleDepartmentChange(e, 2)}
          >
            <option value="제 2전공">제 2전공</option>
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
          <Text>제 3전공</Text>
          <Select
            name="department3"
            value={formData.department3}
            onChange={(e) => handleDepartmentChange(e, 3)}
          >
            <option value="제 3전공">제 3전공</option>
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
            <Input value={formData.email} />
            <button>
              <Text> 인증코드 전송</Text>
            </button>
          </Flex>{' '}
          <ErrorMessage>{errors.email}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <Text>인증코드</Text>
          <Flex direction="row">
            <Input />
            <button>
              <Text> 인증 확인</Text>
            </button>
          </Flex>
        </FormGroup>

        <CompleteBtn>
          <button type="submit" onClick={validateForm}>
            <Text color="white"> 회원 가입 완료</Text>
          </button>
        </CompleteBtn>
        <Flex>
          <Text size={12} color="grey">
            이미 회원이신가요?
          </Text>
          <LoginBtn>로그인</LoginBtn>
        </Flex>
      </form>
    </Flex>
  );
};

const CompleteBtn = styled.button`
  width: 263px;
  height: 37px;
  background-color: #3172ea;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
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
