import React from 'react'
import * as S from './styles'

interface FactCardProps {
  fact: string
}

const FactCardComponent: React.FC<FactCardProps> = ({ fact }) => {
  return (
    <S.CardWrapper>
      <S.FactText>{fact}</S.FactText>
    </S.CardWrapper>
  )
}

export default FactCardComponent
