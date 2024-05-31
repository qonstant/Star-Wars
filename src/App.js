import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
