import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import {Provider} from "react-redux"
import {store} from "./store/store.ts"
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Provider store={store}>
    <Toaster position='bottom-center' richColors/>
      <App />
    </Provider>
    </BrowserRouter>
  </QueryClientProvider>
)
