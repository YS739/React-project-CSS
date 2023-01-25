import {
  SignUpContainer,
  Logo,
  Form,
  Id,
  Name,
  Password,
  Input,
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

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // 유효성 검사
  const validateInputs = () => {
    if (!email) {
      alert('이메일을 입력해주세요.');
      emailRef.current.focus();
      return true;
    }
    // TODO: 닉네임은 사용자 프로필에 저장되도록 하고 빈칸이면 디폴트값
    // internal-error로 처리돼서 에러처리 제대로 안됨
    // if (!displayName) {
    //   alert('닉네임을 입력해주세요.');
    //   displayNameRef.current.focus();
    //   return true;
    // }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      passwordRef.current.focus();
      return true;
    }
    if (!passwordCheck) {
      alert('비밀번호를 입력해주세요.');
      passwordCheckRef.current.focus();
      return true;
    }

    const matchedEmail = email.match(emailRegex);
    const matchedPw = password.match(passwordRegex);
    if (matchedEmail === null) {
      alert('이메일 형식에 맞게 입력해 주세요.');
      emailRef.current.focus();
      return true;
    }
    if (matchedPw === null) {
      alert('비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.');
      passwordRef.current.focus();
      return true;
    }
    if (passwordCheck !== password) alert('비밀번호를 잘못 입력하셨습니다.');
    passwordCheckRef.current.focus();
    return true;
  };

  // 회원가입 진행 함수
  const SignUpHandler = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!!validateInputs() === false) {
      console.log('!!validateInputs()', !!validateInputs());
      return;
    }

    // 회원가입
    await createUserWithEmailAndPassword(authService, email, password)
      .then(() => {
        console.log('회원가입 성공!');
        updateProfile(authService.currentUser, {
          displayName: nickName,
        })
          .then(() => {
            alert('회원가입 성공!');
            setEmail('');
            setNickName('');
            setPassword('');
            navigate('Tabs', { screen: 'Home' });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (error.message.includes('already-in-use')) {
      alert('이미 사용중인 아이디입니다.');
    }
    // TODO: 에러 - alert 말고 input 창 밑에 빨간 글씨
  };
  return (
    <SignUpContainer>
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
        <Name>
          닉네임
          <Input
            ref={displayNameRef}
            value={nickName}
            placeholder={'닉네임을 적어주세요'}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </Name>
        <Password>
          비밀번호
          {/* FIXME: 비밀번호가 안 가려진다 */}
          <Input
            ref={passwordRef}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Password>
        <Password>
          비밀번호 확인
          <Input
            ref={passwordCheckRef}
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
