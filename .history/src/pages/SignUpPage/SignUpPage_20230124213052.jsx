import {
  SignUpContainer,
  Logo,
  Form,
  Id,
  Name,
  PassWord,
  Input,
  BlueButton,
  Login,
  ToLogin,
} from './style';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// 회원가입 진행 함수
const SignUpHandler = (event) => {
  event.preventDefault();

  const email = document.getElementById('Id').value;
  const password = document.getElementById('PassWord').value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('userCredential', userCredential);
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <SignUpContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        <Id>
          이메일
          <Input value={email} placeholder={'css@gmail.com'} />
        </Id>
        <Name>
          닉네임
          <Input placeholder={'닉네임을 적어주세요'} />
        </Name>
        <PassWord>
          비밀번호
          <Input value={password} />
        </PassWord>
        <PassWord>
          비밀번호 확인
          <Input value={password} />
        </PassWord>
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
