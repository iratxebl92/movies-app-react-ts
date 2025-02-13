import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import { MoviesApp } from "./pages/MoviesApp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <MoviesApp />
    </QueryClientProvider>
  );
}

export default App;
