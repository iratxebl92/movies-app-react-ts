
import {QueryClientProvider, QueryClient} from 'react-query'
import "./App.css";
import { MoviesApp } from "./pages/MoviesApp";
import { MoviesProvider } from "./context/MoviesProvider";



const queryClient = new QueryClient()

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <MoviesProvider>
    <MoviesApp/>
    </MoviesProvider>
    </QueryClientProvider>
  
    </>
  );
}

export default App;
