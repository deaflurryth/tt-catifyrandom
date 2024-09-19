import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GlobalStyles from '@styles/global'
import React from 'react'
import ClientThemeProvider from '@styles/ClientThemeProvider'
import PageBackgroundComponent from '@/components/PageBackgroundComponent/PageBackgroundComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catify Random',
  description: 'Тестовое задание со случайными фактами о кошках!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <React.StrictMode>
        <ClientThemeProvider>
          <body className={inter.className}>
            <PageBackgroundComponent />
            {children}
          </body>
        </ClientThemeProvider>
      </React.StrictMode>
    </html>
  )
}
