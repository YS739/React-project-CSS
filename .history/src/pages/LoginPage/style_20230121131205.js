import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 250px;
  height: 200px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

export const Id = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 300px;
`;
export const PassWord = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  color: #555;
  box-sizing: border-box;
  font-size: 18px;
  padding: 0px 20px;
  margin-left: 20px;
`;

export const SignUp = styled.div`
  display: flex;
  align-items: center;
`;

export const BlueButton = styled.button`
  background-color: #205295;
  border-radius: 5px;
  width: 250px;
  height: 40px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: white;
  width: 250px;
  height: 40px;
  cursor: pointer;
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
