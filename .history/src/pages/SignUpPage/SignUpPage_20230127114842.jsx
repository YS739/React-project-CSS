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
import { useState, useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../../common/firebase';
import { updateProfile } from 'firebase/auth';
import { async } from '@firebase/util';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  // 에러 나면 그곳에 커서 이동되도록
  const emailRef = useRef(null);
  const displayNameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);

  // 에러 메시지
  const [idErr, setIdErr] = useState('');
  const [idRegexErr, setIdRegexErr] = useState('');
  const [pwErr, setPwErr] = useState('');
  const [pwRegexErr, setPwRegexErr] = useState('');
  const [pwCheckErr, setPwCheckErr] = useState('');
  const [nickNameErr, setNickNameErr] = useState('');

  // 정규식
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // 유효성 검사
  const validateInputs = () => {
    const matchedEmail = email.match(emailRegex);
    const matchedPw = password.match(passwordRegex);

    if (!email) {
      setIdErr('이메일을 입력해주세요.');
      emailRef.current.focus();
    } else {
      setIdErr('');
      return true;
    }
    if (!nickName) {
      setNickNameErr('닉네임을 설정해주세요.');
    } else {
      setNickNameErr('');
      return true;
    }
    if (!password) {
      setPwErr('비밀번호를 입력해주세요.');
      passwordRef.current.focus();
    } else {
      setPwErr('');
      return true;
    }
    if (!passwordCheck) {
      setPwCheckErr('비밀번호를 확인해주세요.');
      passwordCheckRef.current.focus();
    } else {
      setPwCheckErr('');
      return true;
    }

    if (error.message.includes('invalid-email')) {
      setIdRegexErr('이메일 형식에 맞게 입력해 주세요.');
      emailRef.current.focus();
    } else {
      setIdErr('');
      return true;
    }
    // if (matchedEmail === null) {
    //   setIdRegexErr('이메일 형식에 맞게 입력해 주세요.');
    //   emailRef.current.focus();
    // } else {
    //   setIdErr('');
    //   return true;
    // }
    if (matchedPw === null) {
      setPwRegexErr(
        '비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.',
      );
      passwordRef.current.focus();
    } else {
      setPwRegexErr('');
      return true;
    }
    if (passwordCheck !== password) {
      setPwCheckErr('비밀번호를 잘못 입력하셨습니다.');
      passwordCheckRef.current.focus();
    } else {
      setPwCheckErr('');
      return true;
    }
  };

  // 회원가입 진행 함수
  const SignUpHandler = (e) => {
    e.preventDefault();

    // 유효성 검사
    if (validateInputs() === false) {
      console.log('유효성 검사 결과', validateInputs());
      return;
    }

    // 회원가입
    createUserWithEmailAndPassword(authService, email, password)
      .then(() => {
        console.log('회원가입 성공!');
        updateProfile(authService.currentUser, {
          displayName: nickName,
        })
          .then(() => {
            alert('회원가입이 완료되었습니다.');
            setEmail('');
            setNickName('');
            setPassword('');
            navigate('/');
          })
          .catch((error) => {
            console.log(error.message);
            alert('회원가입을 다시 진행해주세요');
            navigate('/signUp');
          });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message.includes('already-in-use')) {
          alert('이미 사용중인 이메일입니다. 로그인 화면으로 이동합니다.');
          navigate('/login');
        }
      });

    // TODO: 에러 - alert 말고 input 창 밑에 빨간 글씨
  };
  return (
    <SignUpContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        <Id>
          이메일
          <Input
            name="email"
            type="email"
            ref={emailRef}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Id>
        {idErr && <Error>{idErr}</Error>}
        {idRegexErr && <Error>{idRegexErr}</Error>}
        <Name>
          닉네임
          <Input
            name="nickName"
            maxLength={10}
            ref={displayNameRef}
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </Name>
        {nickNameErr && <Error>{nickNameErr}</Error>}

        <Password>
          비밀번호
          {/* FIXME: 비밀번호가 안 가려진다 */}
          <Input
            name="password"
            type="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Password>
        {pwErr && <Error>{pwErr}</Error>}
        {pwRegexErr && <Error>{pwRegexErr}</Error>}

        <Password>
          비밀번호 확인
          <Input
            name="password"
            type="password"
            ref={passwordCheckRef}
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
          />
        </Password>
        {pwCheckErr && <Error>{pwCheckErr}</Error>}
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
