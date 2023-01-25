import {
  SignUpContainer,
  Logo,
  Form,
  Id,
  Name,
  Password,
  Input,
  Error,
  BlueButton,
  Login,
  ToLogin,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  // 회원가입 진행 함수
  const SignUpHandler = async (e) => {
    e.preventDefault();

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const validateInputs = () => {
      if (!email) {
        alert('이메일을 입력해주세요.');
        email.current.focus();
        return true;
      }
      // TODO: 닉네임은 사용자 프로필에 저장되도록 하고 빈칸이면 디폴트값
      // internal-error로 처리돼서 에러처리 제대로 안됨
      if (!name) {
        alert('닉네임을 입력해주세요.');
        //   name.current.focus();
        //   return true;
      }
      if (!password) {
        alert('비밀번호를 입력해주세요.');
        password.current.focus();
        return true;
      }
      const matchedEmail = email.match(emailRegex);
      const matchedPw = password.match(passwordRegex);
      const wrongPw = passwordCheck.match(password);
      if (matchedEmail === null) {
        alert('이메일 형식에 맞게 입력해 주세요.');
        email.current.focus();
        return true;
      }
      if (matchedPw === null) {
        alert(
          '비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.',
        );
        password.current.focus();
        return true;
      }
      if (wrongPw) alert('비밀번호를 잘못 입력하셨습니다.');
      passwordCheck.current.focus();
      return true;
    };
    // 유효성 검사
    if (validateInputs()) {
      return;
    }

    // 회원가입
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, name, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`회원가입이 완료되었습니다.`);
        setEmail('');
        setName('');
        setPassword('');
        navigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage', errorMessage);
        if (errorMessage.includes('already-in-use')) {
          alert('이미 사용중인 아이디입니다.');
        }
        // TODO: 에러 - alert 말고 input 창 밑에 빨간 글씨
      });
  };
  return (
    <SignUpContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        <Id>
          이메일
          <Input
            value={email}
            placeholder={'css@gmail.com'}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Id>
        <Name>
          닉네임
          <Input
            value={name}
            placeholder={'닉네임을 적어주세요'}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* <Error>{errorMessage}</Error> */}
        </Name>
        <Password>
          비밀번호
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Password>
        {/* <Error>{errorMessage}</Error> */}

        <Password>
          비밀번호 확인
          {/* FIXME: 비밀번호가 같이 쳐진다 */}
          <Input
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
          />
        </Password>
      </Form>
      <BlueButton onClick={SignUpHandler}>회원가입</BlueButton>
      <ToLogin>
        이미 가입 하셨나요?
        <Login onClick={() => navigate('/login')}>로그인</Login>
      </ToLogin>
    </SignUpContainer>
  );
};

export default SignUpPage;
