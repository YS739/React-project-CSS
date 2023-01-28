import { LayOut } from './style';
import Header from '../Header/Header';
// TODO: 컴포넌트 빼서 if문으로 로그인/글작성/마이페이지 보이게

// TODO: any 수정하기
const Layout = ({ children }: any) => {
  return (
    <LayOut>
      <Header />
      <div>{children}</div>
    </LayOut>
  );
};

export default Layout;
