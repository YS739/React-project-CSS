import { Fragment } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Fragment>
  );
};

export default App;
