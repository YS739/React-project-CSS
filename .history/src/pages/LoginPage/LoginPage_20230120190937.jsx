import { Form } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <div>
      <form>
        아이디
        <input />
        비밀번호
        <input />
      </form>
    </div>
  );
};

export default LoginPage;

export const form = styled.div`
  display: flex;
  padding: 30px;
  margin: 5px;
`;
