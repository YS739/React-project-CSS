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
import { useState, useRef, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../../common/firebase';
import { updateProfile } from 'firebase/auth';
import { async } from '@firebase/util';

const SignUpPage = () => {
  const navigate = useNavigate();

  // 초기값 세팅 - 이메일, 닉네임, 비밀번호, 비밀번호 확인
  const [id, setId] = useState('');
  const [nickName, setNickName] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');

  // 에러 메시지
  const [idErrMsg, setIdErrMsg] = useState('');
  const [nickNameErrMsg, setNickNameErrMsg] = useState('');
  const [pwErrMsg, setPwErrMsg] = useState('');
  const [pwCheckErrMsg, setPwCheckErrMsg] = useState('');
  // const [pwRegexErrMsg, setPwRegexErrMsg] = useState('');
  // const [idRegexErrMsg, setIdRegexErrMsg] = useState('');

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwConfirm, setIsPwConfirm] = useState(false);
  const [isNickName, setIsNickName] = useState(false);

  // 회원가입 버튼 활성화
  const [notAllow, setNotAllow] = useState(true);

  // 에러 나면 그곳에 커서 이동되도록
  const emailRef = useRef(null);
  const nickNameRef = useRef(null);
  const pwRef = useRef(null);
  const pwCheckRef = useRef(null);
  // 정규식
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // 회원가입 완료
  const SignUpHandler = async (e) => {
    e.preventDefault();

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
        // if (error.message.includes('invalid-email')) {
        //   setIdErr('이메일을 확인해주세요');
        //   emailRef.current.focus();
        // }
        if (email.match(emailRegex) === null) {
          setIdRegexErr('이메일 형식에 맞게 입력해 주세요.');
          emailRef.current.focus();
        }
        if (password.match(passwordRegex) === null) {
          setPwRegexErr(
            '비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.',
          );
          passwordRef.current.focus();
        }
      });
  };

  //* id (이메일)
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(currentId)) {
      setIdErrMsg('! 잘못된 이메일 주소입니다.');
      setIsId(false);
    } else {
      setIdErrMsg('! 사용가능한 이메일입니다.');
      setIsId(true);
    }
  };

  //* 닉네임
  const onChangeNickName = (e) => {
    const currentNickName = e.target.value;
    setName(currentNickName);

    if (currentNickName.length < 2 || currentNickName.length > 12) {
      setNickNameMsg('! 2글자 이상, 12글자 미만으로만 사용할 수 있습니다.');
      setIsNickName(false);
    } else {
      setNickNameMsg('! 사용 가능한 닉네임 입니다.');
      setIsNickName(true);
    }
  };
  //* 비밀번호
  const onChangePw = (e) => {
    const currentPw = e.target.value;
    setPw(currentPw);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!passwordRegex.test(currentPw)) {
      setPwMsg('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPwConfirm(false);
    } else {
      setPwMsg('! 사용 가능한 비밀번호에요.');
      setIsPw(true);
    }
  };

  //* 비밀번호 확인
  const onChangePwConfirm = (e) => {
    const currentPwConfirm = e.target.value;
    setPwConfirm(currentPwConfirm);
    if (password === currentPwConfirm) {
      setPwConfirmMsg('! 비밀번호가 일치합니다.');
      setIsPwConfirm(true);
    } else {
      setPwConfirmMsg('! 비밀번호가 일치하지 않아요. 다시 입력해주세요.');
      setIsPwConfirm(false);
    }
  };

  useEffect(() => {
    if (isId && isNickName && isPw && isPwConfirm) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [isId, isNickName, isPw, isPwConfirm]);

  return (
    <SignUpContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form onSubmit={onSubmit}>
        <Id>
          이메일
          <Input
            name="id"
            type="email"
            ref={emailRef}
            value={id}
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
        <Error>{idErrMsg}</Error>
        <Name>
          닉네임
          <Input
            name="nickName"
            maxLength={10}
            ref={nickNameRef}
            value={nickName}
            onChange={onChangeNickName}
          />
        </Name>
        <Error>{nickNameErrMsg}</Error>

        <Password>
          비밀번호
          {/* FIXME: 비밀번호가 안 가려진다 */}
          <Input
            name="password"
            type="password"
            ref={passwordRef}
            value={pw}
            onChange={onChangePw}
          />
        </Password>
        <Error>{pwErrMsg}</Error>

        <Password>
          비밀번호 확인
          <Input
            name="password"
            type="password"
            ref={passwordCheckRef}
            value={pwConfirm}
            onChange={onChangePwConfirm}
          />
        </Password>
        <Error>{pwConfirmErrMsg}</Error>
      </Form>
      <BlueButton disabled={notAllow}>회원가입</BlueButton>
      <ToLogin>
        이미 가입 하셨나요?
        <Login onClick={() => navigate('/login')}>로그인</Login>
      </ToLogin>
    </SignUpContainer>
  );
};

export default SignUpPage;
