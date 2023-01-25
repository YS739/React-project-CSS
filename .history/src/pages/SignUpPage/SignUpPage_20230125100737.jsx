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
        // TODO: 에러 - input 창 밑에 빨간 글씨
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
          <Error>{errorMessage}</Error>
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
        <Error>{errorMessage}</Error>

        <Password>
          비밀번호 확인
          {/* FIXME: 비밀번호가 같이 쳐진다 */}
          <Input
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
          />
          <Error>
            {password !== passwordCheck ?? `입력하신 비밀번호가 다릅니다.`}
          </Error>
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
