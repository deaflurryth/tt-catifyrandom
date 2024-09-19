'use client'

import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import CatAva from './assets/catavatar.png'
import { useCatRandomFact } from '@context/CatFactContext'

const FactGenertatorComponent: React.FC = () => {
  const { generateRandomFact } = useCatRandomFact()

  return (
    <S.FactWrapper>
      <S.FactWrapperContainer>
        <S.FactLeftContainer>
          <S.StyledTitle>Random Fact</S.StyledTitle>
          <S.StyledUnderTitle>Cats eat mice</S.StyledUnderTitle>
          <S.RefreshButton onClick={generateRandomFact}>
            Generate Random Fact
          </S.RefreshButton>
        </S.FactLeftContainer>
        <S.FactRightContainer>
          <Image alt="generated cat avatar" src={CatAva} />
        </S.FactRightContainer>
      </S.FactWrapperContainer>
    </S.FactWrapper>
  )
}

export default FactGenertatorComponent
