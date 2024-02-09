import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient()
import  Welcome  from './components/welcome'
import Header from "./components/hearder";


function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <Header />
    <Welcome />
   </QueryClientProvider>
  )
}

export default App
