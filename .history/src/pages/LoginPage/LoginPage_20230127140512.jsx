import {
  Logo,
  LoginContainer,
  Form,
  Id,
  Password,
  Input,
  ToSignUp,
  SignUp,
  Error,
  BlueButton,
  Button,
  SocialLogin,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { authService } from '../../common/firebase';

const LoginPage = () => {
  // TODO: 헤더는 사라져야함
  const navigate = useNavigate();

  // 초기값 세팅 - 이메일, 닉네임, 비밀번호, 비밀번호 확인
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  // 에러 메시지
  const [idErrMsg, setIdErrMsg] = useState('');
  const [pwErrMsg, setPwErrMsg] = useState('');

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  // 회원가입 버튼 활성화
  const [notAllow, setNotAllow] = useState(true);

  // 에러 나면 그곳에 커서 이동되도록
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const onSubmit = async () => {
    await signInWithEmailAndPassword(authService, id, pw)
      .then(() => {
        // Signed in
        alert('로그인 되었습니다.');
        setId('');
        setPw('');
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('errorMessage', errorMessage);
      });
  };

  //* id (이메일)
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!idRegex.test(currentId)) {
      setIdErrMsg('! 잘못된 이메일 주소입니다.');
      setIsId(false);
    } else {
      setIdErrMsg('사용 가능합니다.');
      setIsId(true);
    }
  };

  //* 비밀번호
  const onChangePw = (e) => {
    const currentPw = e.target.value;
    setPw(currentPw);
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!pwRegex.test(currentPw)) {
      setPwErrMsg('! 숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
    } else {
      setPwErrMsg('사용 가능합니다.');
      setIsPw(true);
    }
  };

  // google signin
  const googleSignUpHandler = () => {
    signInWithPopup(authService, new GoogleAuthProvider())
      .then(() => {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // git hub signin
  const githubSignUpHandler = () => {
    signInWithPopup(authService, new GithubAuthProvider())
      .then(() => {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (isId && isPw) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [isId, isPw]);

  return (
    <LoginContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        <Id>
          이메일
          <Input
            ref={idRef}
            value={id}
            placeholder={'css@gmail.com'}
            onChange={onChangeId}
          />
        </Id>
        <Error>
          {id.length > 0 && (
            <span className={`message ${isId ? 'success' : 'error'}`}>
              {idErrMsg}
            </span>
          )}
        </Error>
        <Password>
          비밀번호
          <Input ref={pwRef} value={pw} onChange={onChangePw} />
        </Password>
        <Error>{pwErrMsg}</Error>
      </Form>
      <BlueButton disabled={notAllow} onClick={onSubmit}>
        로그인
      </BlueButton>

      <ToSignUp>
        아이디가 없으신가요?
        <SignUp onClick={() => navigate('/signUp')}> 회원가입</SignUp>
      </ToSignUp>
      <SocialLogin>
        <Button onClick={googleSignUpHandler}>Google 로그인</Button>
        <Button onClick={githubSignUpHandler}>Git Hub 로그인</Button>
      </SocialLogin>
    </LoginContainer>
  );
};

export default LoginPage;
