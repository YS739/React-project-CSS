import { Form } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <login_container>
      <form>
        아이디
        <input />
        비밀번호
        <input />
      </form>
    </login_container>
  );
};

export default LoginPage;

export const login_container = styled.div`
  padding: 50px;
  margin: 100px;
`;

export const form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin: 5px;
`;
