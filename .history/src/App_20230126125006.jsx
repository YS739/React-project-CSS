import { Fragment } from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import Header from './components/GlobalComponents/Header/Header';
import Router from './shared/Router';

function App() {
  const queryClient = new QueryClient();
  return (
    <Fragment>
      {/* 로그인 여부에 따라 헤더 바뀌기 */}
      {/* <Header /> */}
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
