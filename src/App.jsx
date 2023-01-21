import { Fragment } from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import Header from './components/GlobalComponents/Header/Header';
import Router from './shared/Router';

function App() {
  const queryClient = new QueryClient();
  return (
    <Fragment>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
