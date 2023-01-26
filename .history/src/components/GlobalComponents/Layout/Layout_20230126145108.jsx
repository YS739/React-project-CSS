import styled from 'styled-components';
import Header from '../Header/Header';
// TODO: 컴포넌트 빼서 if문으로 로그인/글작성/마이페이지 보이게

const Layout = ({ children }) => {
  return (
    <LayOut>
      <Header />
      <div>{children}</div>
    </LayOut>
  );
};

export default Layout;

// styled-components
const LayOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
