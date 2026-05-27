import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'

import './styles/globals.scss'

/* TOAST */

import {
  Toaster
} from 'react-hot-toast'

/* CONTEXTS */

import {
  LanguageProvider
} from './utils/LanguageContext'

import {
  AuthProvider
} from './context/AuthContext'

import {
  WalletProvider
} from './context/WalletContext'

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>

    <AuthProvider>

      <WalletProvider>

        <LanguageProvider>

          {/* APP */}

          <App />

          {/* TOASTER */}

          <Toaster

            position="top-center"

            reverseOrder={false}

            toastOptions={{

              duration: 3000,

              style: {

                background: '#111827',

                color: '#fff',

                border:
                  '1px solid rgba(255,255,255,0.08)',

                borderRadius: '16px',

                padding: '14px 18px',

                fontSize: '14px'

              }

            }}
          />

        </LanguageProvider>

      </WalletProvider>

    </AuthProvider>

  </React.StrictMode>
)