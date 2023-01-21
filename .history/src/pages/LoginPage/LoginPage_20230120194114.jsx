import { Form } from 'react-router-dom';
import style from './style';

const LoginPage = () => {
  return (
    <login_container>
      <form>
        아이디
        <input />
        비밀번호
        <input />
      </form>
      <div>아직 회원이 아니세요?</div>
      <div>회원가입하기</div>
    </login_container>
  );
};

export default LoginPage;
