import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import { useMoviesStore } from "./config/store/store";
import { useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";

const queryClient = new QueryClient();

function App() {
  const {theme} = useMoviesStore()
  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [theme])
  
  return (
    <QueryClientProvider client={queryClient}>
       <AppRouter/>
    </QueryClientProvider>
  );
}

export default App;
