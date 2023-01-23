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
  padding-bottom: 20px;
`;
export const PassWord = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  /* background-color: transparent; */
  border: none;
  border-bottom: 1px solid #ccc;
  color: #555;
  box-sizing: border-box;
  font-size: 18px;
  height: 50px;
  left: 50%;
  padding: 0px 10px;
  /* position: relative; */
  top: 50%;
  width: 200px;
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
