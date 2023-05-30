
import { UserProvider } from '../context/Context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-dark.svg" />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/logo-dark.svg' />
        <meta name="theme-color" content="#1D0F4A" />
        <meta name="msapplication-navbutton-color" content="black" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="description" content="Sistema de Administracion de Clientes y Formularios" />
        <meta name="keywords" content="Logistics Gear" />
        <meta name="author" content="Logistics Gear" />
        <title>Precio Justo</title>
      </head>
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}


