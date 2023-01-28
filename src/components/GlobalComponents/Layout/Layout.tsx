import { LayOut } from './style';
import Header from '../Header/Header';

const Layout = ({ children }: any) => {
  return (
    <LayOut>
      <Header />
      <div>{children}</div>
    </LayOut>
  );
};

export default Layout;
