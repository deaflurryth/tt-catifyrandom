// CatRandomFact.tsx
'use client'

import React from 'react'
import * as S from './styles'
import { useCatRandomFact } from '@context/CatFactContext'

const CatRandomFact: React.FC = () => {
  const { randomFact } = useCatRandomFact()

  return (
    <S.CardWrapper>
      <S.FactTitle>Cat Facts</S.FactTitle>
      <S.FactText>{randomFact}</S.FactText>
    </S.CardWrapper>
  )
}

export default CatRandomFact
