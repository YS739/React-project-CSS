import { Form } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <div>
      <Form>
        아이디
        <input />
        비밀번호
        <input />
      </Form>
    </div>
  );
};

export default LoginPage;

// const Form = styled.div`
//   padding: 30px;
//   margin: 5px;
// `;
