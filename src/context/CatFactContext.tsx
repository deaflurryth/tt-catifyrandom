'use client'

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { fetchCatFact } from '@api/facts/fetchCatFact'

interface CatRandomFactContextType {
  randomFact: string
  generateRandomFact: () => void
}

const CatRandomFactContext = createContext<
  CatRandomFactContextType | undefined
>(undefined)

export const CatRandomFactProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [randomFact, setRandomFact] = useState<string>('')
  const hasFetchedFact = useRef(false)

  const generateRandomFact = useCallback(async () => {
    try {
      const fact = await fetchCatFact()
      setRandomFact(fact)
    } catch (error) {
      console.error('Ошибка получения факта о котиках:', error)
    }
  }, [])

  useEffect(() => {
    if (!hasFetchedFact.current) {
      generateRandomFact()
      hasFetchedFact.current = true
    }
  }, [generateRandomFact])

  return (
    <CatRandomFactContext.Provider value={{ randomFact, generateRandomFact }}>
      {children}
    </CatRandomFactContext.Provider>
  )
}

export const useCatRandomFact = () => {
  const context = useContext(CatRandomFactContext)
  if (!context) {
    throw new Error('useCatRandomFact должен быть с CatRandomFactProvider')
  }
  return context
}
