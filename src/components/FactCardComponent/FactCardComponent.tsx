import React from 'react'
import * as S from './styles'
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader'

interface FactCardProps {
  fact: string
}

const FactCardComponent: React.FC<FactCardProps> = ({ fact }) => {
  return (
    <S.CardWrapper>
      {fact ? <S.FactText>{fact}</S.FactText> : <SpinnerLoader />}
    </S.CardWrapper>
  )
}

export default FactCardComponent
