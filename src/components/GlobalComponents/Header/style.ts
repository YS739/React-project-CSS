import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 3rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
  justify-content: center;
  cursor: pointer;
`;

export const LoginToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

export const Nav = styled.div`
  font-weight: bold;
  padding-left: 30px;
  box-sizing: border-box;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding-left: 15px;
  }
`;

export const Name = styled.div`
  font-weight: bold;
`;
