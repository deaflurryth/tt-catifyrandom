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
  goToPreviousFact: () => void
  goToNextFact: () => void
  hasPreviousFact: boolean
  hasNextFact: boolean
}

const CatRandomFactContext = createContext<
  CatRandomFactContextType | undefined
>(undefined)

export const CatRandomFactProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [factHistory, setFactHistory] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const hasFetchedFact = useRef(false) // флаг для предотвращения двойного запроса

  const generateRandomFact = useCallback(async () => {
    try {
      const fact = await fetchCatFact()
      setFactHistory((prevHistory) => {
        const newHistory = [...prevHistory.slice(0, currentIndex + 1), fact]
        return newHistory
      })
      setCurrentIndex((prevIndex) => prevIndex + 1)
    } catch (error) {
      console.error('Ошибка получения факта о котиках:', error)
    }
  }, [currentIndex])

  // генерация при первой загрузке
  useEffect(() => {
    if (!hasFetchedFact.current && currentIndex === -1) {
      generateRandomFact()
      hasFetchedFact.current = true // реф выполненного запроса
    }
  }, [generateRandomFact, currentIndex])

  const goToPreviousFact = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }, [currentIndex])

  const goToNextFact = useCallback(() => {
    if (currentIndex < factHistory.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }, [currentIndex, factHistory.length])

  return (
    <CatRandomFactContext.Provider
      value={{
        randomFact: factHistory[currentIndex] || '',
        generateRandomFact,
        goToPreviousFact,
        goToNextFact,
        hasPreviousFact: currentIndex > 0,
        hasNextFact: currentIndex < factHistory.length - 1,
      }}
    >
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
