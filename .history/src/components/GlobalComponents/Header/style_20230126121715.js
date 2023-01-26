import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem 3rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  width: 100px;
  height: 70px;
  justify-content: center;
`;
export const LoginToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  display: flex;
  margin-left: 20px;
  align-items: center;
`;
export const Link = styled(Link)`
  font-weight: bold;
  padding-right: 5px;
  cursor: pointer;
`;
