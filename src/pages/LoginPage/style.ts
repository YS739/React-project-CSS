import styled from 'styled-components';
import { colors } from '../../common/colors';

export const LoginContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 220px;
  height: 150px;
  justify-content: center;
`;

export const Form = styled.form`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

export const Id = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Label = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  color: #555;
  box-sizing: border-box;
  font-size: 18px;
  :focus-visible {
    outline: none;
  }
  margin-top: 3px;
  padding-left: 10px;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  padding: 5px;
`;

export const ToSignUp = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const SignUp = styled.div`
  padding-left: 5px;
  font-weight: bold;
  cursor: pointer;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const BlueButton = styled.button`
  align-items: center;
  background-color: ${colors.GREY};
  border-radius: 5px;
  width: 250px;
  height: 40px;
  color: #fff;
  font-size: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: #fff;
  color: ${colors.GREY};
  font-weight: 700;
  font-size: 14px;
  width: 250px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
