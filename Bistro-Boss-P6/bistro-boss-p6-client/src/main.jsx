import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='max-w-[1200px] mx-auto'>
          <HelmetProvider>
            <RouterProvider router={router}></RouterProvider>
          </HelmetProvider>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
