import styled from 'styled-components';

export const SignUpContainer = styled.div`
  padding: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 250px;
  height: 250px;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin: 5px;
`;
export const Id = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 250px;
`;
export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 250px;
`;
export const PassWord = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  color: #555;
  box-sizing: border-box;
  font-size: 18px;
`;
export const BlueButton = styled.button`
  background-color: #205295;
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
`;
export const Login = styled.div`
  font: bold;
  cursor: pointer;
  margin-left: 5px;
`;