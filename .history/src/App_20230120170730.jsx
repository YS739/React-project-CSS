import { Fragment } from 'react';
import Header from './components/GlobalComponents/Header/Header';
import Router from './shared/Router';

function App() {
  return (
    <Fragment>
      <Header />
      <Router />
    </Fragment>
  );
}

export default App;
