import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import { AppRouter } from "./AppRouter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <AppRouter/>
    </QueryClientProvider>
  );
}

export default App;
