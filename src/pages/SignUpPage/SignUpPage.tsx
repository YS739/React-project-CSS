import {
  SignUpContainer,
  Logo,
  Form,
  Id,
  Name,
  Password,
  Label,
  Input,
  Error,
  SubmitButtonContainer,
  BlueButton,
  Login,
  ToLogin,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, ChangeEvent, MouseEvent } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../../common/firebase';
import { updateProfile } from 'firebase/auth';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../../components/GlobalComponents/AlertUI/AlertUI';

const SignUpPage = () => {
  const navigate = useNavigate();

  // 초기값 세팅 - 이메일, 닉네임, 비밀번호, 비밀번호 확인
  const [id, setId] = useState('');
  const [nickName, setNickName] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [error, setError] = useState('');

  // 에러 메시지
  const [idErrMsg, setIdErrMsg] = useState('');
  const [nickNameErrMsg, setNickNameErrMsg] = useState('');
  const [pwErrMsg, setPwErrMsg] = useState('');
  const [pwConfirmErrMsg, setPwConfirmErrMsg] = useState('');

  // 유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isPw, setIsPw] = useState<boolean>(false);
  const [isPwConfirm, setIsPwConfirm] = useState<boolean>(false);
  const [isNickName, setIsNickName] = useState<boolean>(false);

  // 회원가입 버튼 활성화
  const [notAllow, setNotAllow] = useState<boolean>(true);

  // 에러 나면 그곳에 커서 이동되도록
  const idRef = useRef(null);
  const nickNameRef = useRef(null);
  const pwRef = useRef(null);
  const pwConfirmRef = useRef(null);

  // 회원가입 완료
  const onSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(authService, id, pw)
      .then(() => {
        if (authService.currentUser)
          updateProfile(authService?.currentUser, {
            displayName: nickName,
          })
            .then(() => {
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <AlertUI
                      title={'회원가입이 완료되었습니다.'}
                      onClose={onClose}
                    />
                  );
                },
              });

              setId('');
              setNickName('');
              setPw('');
              navigate('/');
            })
            .catch((error) => {
              console.log(error.message);
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <AlertUI
                      title={'회원가입을 다시 진행해주세요.'}
                      onClose={onClose}
                    />
                  );
                },
              });
              navigate('/signUp');
            });
      })
      .catch((error) => {
        setError(error.message);
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <AlertUI
                title={'! 이미 존재하는 계정 입니다.'}
                onClose={onClose}
              />
            );
          },
        });
        console.log(error);
      });
  };

  //* id (이메일)
  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
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

  //* 닉네임
  const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    const currentNickName = e.target.value;
    setNickName(currentNickName);

    if (currentNickName.length < 2 || currentNickName.length > 12) {
      setNickNameErrMsg('! 2글자 이상, 12글자 미만으로만 사용할 수 있습니다.');
      setIsNickName(false);
    } else {
      setNickNameErrMsg('사용 가능합니다.');
      setIsNickName(true);
    }
  };
  //* 비밀번호
  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPw = e.target.value;
    setPw(currentPw);
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!pwRegex.test(currentPw)) {
      setPwErrMsg('! 숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
      setIsPwConfirm(false);
    } else {
      setPwErrMsg('사용 가능합니다.');
      setIsPw(true);
    }
  };

  //* 비밀번호 확인
  const onChangePwConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPwConfirm = e.target.value;
    setPwConfirm(currentPwConfirm);
    if (pw === currentPwConfirm) {
      setPwConfirmErrMsg('일치합니다.');
      setIsPwConfirm(true);
    } else {
      setPwConfirmErrMsg('! 비밀번호가 일치하지 않습니다.');
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
          <Label>이메일</Label>

          <Input
            name="id"
            type="email"
            ref={idRef}
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
        <Name>
          <Label>닉네임</Label>

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
          <Label>비밀번호</Label>
          <Input
            name="password"
            type="password"
            ref={pwRef}
            value={pw}
            onChange={onChangePw}
          />
        </Password>
        <Error>{pwErrMsg}</Error>

        <Password>
          <Label>비밀번호 확인</Label>

          <Input
            name="password"
            type="password"
            ref={pwConfirmRef}
            value={pwConfirm}
            onChange={onChangePwConfirm}
          />
        </Password>
        <Error>{pwConfirmErrMsg}</Error>
        <SubmitButtonContainer>
          <BlueButton disabled={notAllow}>회원가입</BlueButton>
        </SubmitButtonContainer>
      </Form>
      <ToLogin>
        이미 가입 하셨나요?
        <Login onClick={() => navigate('/login')}>로그인</Login>
      </ToLogin>
    </SignUpContainer>
  );
};

export default SignUpPage;
