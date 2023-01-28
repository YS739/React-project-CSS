import styled from 'styled-components';
import { color } from '../../common/color';

export const SignUpContainer = styled.div`
  padding: 50px;
  /* margin-bottom: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: antiquewhite; */
`;

export const Logo = styled.img`
  width: 220px;
  height: 130px;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: aliceblue;
`;

export const Id = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
export const Name = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
export const Password = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
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
export const BlueButton = styled.button`
  background-color: ${color.lightColor};
  border-radius: 5px;
  width: 250px;
  height: 40px;
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const ToLogin = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
export const Login = styled.div`
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
`;
