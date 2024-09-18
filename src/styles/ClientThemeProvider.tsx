'use client'
import { ThemeProvider } from 'styled-components'
import { CatsTheme } from '@/styles/theme'
import React from 'react'
export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeProvider theme={CatsTheme}>{children}</ThemeProvider>
}
