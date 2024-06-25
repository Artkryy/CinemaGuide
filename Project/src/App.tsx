import './App.css'
import { BaseLayout } from './ui/BaseLayout'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/queryClient'

function App() {
    return (
      <div className='app'>
        <QueryClientProvider client={queryClient}>
          <BaseLayout />
        </QueryClientProvider>
      </div>
    )
}

export default App
