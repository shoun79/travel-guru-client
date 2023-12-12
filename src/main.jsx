import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import AuthProviders from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
