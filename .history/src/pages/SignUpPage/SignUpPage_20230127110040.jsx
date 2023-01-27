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
  const [err, setErr] = useState(false);
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

  // 유효성 검사 통과
  // const [disable, setDisable] = useState(true);

  // 유효성 검사
  const validateInputs = () => {
    const matchedEmail = email.match(emailRegex);
    const matchedPw = password.match(passwordRegex);

    if (!email || matchedEmail === null) {
      setErr(false);
      emailRef.current.focus();
    } else {
      setErr(true);
    }
    if (!nickName) {
      setNickNameErr('닉네임을 설정해주세요.');
    } else {
      setNickNameErr('');
      return 1;
    }
    if (!password) {
      setPwErr('비밀번호를 입력해주세요.');
      passwordRef.current.focus();
    } else {
      setPwErr('');
      return 1;
    }
    if (!passwordCheck) {
      setPwErr('비밀번호를 확인해주세요.');
      passwordCheckRef.current.focus();
    } else {
      setPwCheckErr('');
      return 1;
    }

    // if (matchedEmail === null) {
    //   setIdRegexErr('이메일 형식에 맞게 입력해 주세요.');
    //   emailRef.current.focus();
    // } else {
    //   setIdErr('');
    //   return 1;
    // }
    if (matchedPw === null) {
      setPwRegexErr(
        '비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.',
      );
      passwordRef.current.focus();
    } else {
      setPwRegexErr('');
      return 1;
    }
    if (passwordCheck !== password) {
      setPwCheckErr('비밀번호를 잘못 입력하셨습니다.');
      passwordCheckRef.current.focus();
    } else {
      setPwCheckErr('');
      return 1;
    }
  };

  // 회원가입 진행 함수
  const SignUpHandler = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (validateInputs()) {
      console.log('유효성 검사 결과', validateInputs());
      console.log('err', err);
      console.log('idErr :', idErr);
      console.log('pwErr : ', pwErr);
      console.log('pwCheckErr : ', pwCheckErr);
      console.log('idRegexErr : ', idRegexErr);
      console.log('pwRegexErr : ', pwRegexErr);
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
        <Error>{idErr}</Error>
        {/* <Error>{idRegexErr}</Error> */}
        <Name>
          닉네임
          <Input
            name="nickName"
            maxLength={10}
            ref={displayNameRef}
            value={nickName}
            placeholder={'닉네임을 적어주세요'}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </Name>
        <Error>{nickNameErr}</Error>

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
        {!err && <Error>{err}</Error>}
        <Error>{pwRegexErr}</Error>

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
        <Error>{pwCheckErr}</Error>
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
