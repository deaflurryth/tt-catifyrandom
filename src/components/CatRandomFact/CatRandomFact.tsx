// CatRandomFact.tsx
'use client'

import React from 'react'
import * as S from './styles'
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader'
import { useCatRandomFact } from '@context/CatFactContext'

const CatRandomFact: React.FC = () => {
  const {
    randomFact,
    goToPreviousFact,
    goToNextFact,
    hasPreviousFact,
    hasNextFact,
  } = useCatRandomFact()
  return (
    <S.CardWrapper>
      <S.FactTitle>Cat Facts</S.FactTitle>
      {randomFact ? <S.FactText>{randomFact}</S.FactText> : <SpinnerLoader />}
      <S.ButtonContainer>
        <S.NavigateButton
          onClick={goToPreviousFact}
          disabled={!hasPreviousFact}
        >
          ᕙ
        </S.NavigateButton>
        <S.NavigateButton onClick={goToNextFact} disabled={!hasNextFact}>
          ᕗ
        </S.NavigateButton>
      </S.ButtonContainer>
    </S.CardWrapper>
  )
}

export default CatRandomFact
