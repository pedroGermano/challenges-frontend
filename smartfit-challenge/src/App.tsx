import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient()
import  Welcome  from './components/welcome'


function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <Welcome />
   </QueryClientProvider>
  )
}

export default App
