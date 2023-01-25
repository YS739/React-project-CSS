import {
  Logo,
  LoginContainer,
  Form,
  Id,
  Password,
  Input,
  ToSignUp,
  SignUp,
  BlueButton,
  Button,
  SocialLogin,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { authService } from '../../common/firebase';

const LoginPage = () => {
  // TODO: 헤더는 사라져야함
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validateInputs = () => {
    console.log('email유효성검사', email);
    console.log('password유효성검사', password);
    if (!email) {
      alert('email을 입력해주세요.');
      emailRef.current.focus();
      return false;
    }
    if (!password) {
      alert('password를 입력해주세요.');
      passwordRef.current.focus();
      console.log('pw = true');
      return false;
    }
    console.log('유효성 검사 통과', validateInputs());
    return true;
  };
  const LoginHandler = () => {
    // 유효성 검사
    if (validateInputs() === false) {
      console.log('validateInputs():', validateInputs());
      return;
    }

    // 로그인 요청
    // const auth = getAuth();
    console.log('email :>> ', email);
    console.log('password :>> ', password);
    signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        // Signed in
        alert('로그인 되었습니다.');
        setEmail('');
        setPassword('');
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage', errorMessage);
        // TODO: 에러났다고 알려주는 방법 고민
      });
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        console.log('로그인 되어있음');
      } else if (!user) {
        console.log('로그인 안됨');
      }
    });
  }, []);
  return (
    <LoginContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        <Id>
          이메일
          <Input
            ref={emailRef}
            value={email}
            placeholder={'css@gmail.com'}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Id>
        <Password>
          비밀번호
          <Input
            ref={passwordRef}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Password>
      </Form>
      <BlueButton onClick={LoginHandler}>로그인</BlueButton>

      <ToSignUp>
        아이디가 없으신가요?
        <SignUp onClick={() => navigate('/signUp')}> 회원가입</SignUp>
      </ToSignUp>
      <SocialLogin>
        <Button>구글 로그인</Button>
        <Button>Git Hub 로그인</Button>
      </SocialLogin>
    </LoginContainer>
  );
};

export default LoginPage;
