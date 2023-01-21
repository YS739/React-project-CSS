import { Logo, Form, BlueButton } from './style';

const SignUpPage = () => {
  return (
    <div>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        이메일
        <input placeholder={'clonecodingsharespace@gmail.com'} />
        닉네임
        <input placeholder={'닉네임을 적어주세요'} />
        비밀번호
        <input />
        비밀번호 확인
        <input />
      </Form>
      <BlueButton>회원가입</BlueButton>
      <Login>이미 가입 하셨나요? 로그인</Login>
    </div>
  );
};

export default SignUpPage;
