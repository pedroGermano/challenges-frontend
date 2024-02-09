import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient()
import  Welcome  from './components/welcome'
import Header from "./components/hearder";
import Filter from "./components/filter";


function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <Header />
    <Welcome />
    <Filter />
   </QueryClientProvider>
  )
}

export default App
