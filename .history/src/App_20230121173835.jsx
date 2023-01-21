import { Fragment } from 'react';
import Header from './components/GlobalComponents/Header/Header';
import Router from './shared/Router';

function App() {
  return (
    <Fragment>
      {/* 로그인 여부에 따라 헤더 바뀌기 */}
      <Header />
      <Router />
    </Fragment>
  );
}

export default App;
