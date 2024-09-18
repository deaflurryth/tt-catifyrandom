'use client'

import React from 'react'
import useSWR from 'swr'
import * as S from './styles'
import { fetchCatFact } from '@/app/api/facts/fetchCatFact'

// swr
const fetcher = async () => await fetchCatFact()

const FactGenertatorComponent: React.FC = () => {
  const {
    data: fact,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR('cat-fact', fetcher)

  // состояние загрузки
  const loading = (!fact && !error) || isValidating

  if (error)
    return (
      <S.FactText>Неудача, факт о котиках не загружен (っ °Д °;)っ</S.FactText>
    )

  return (
    <S.FactWrapper>
      {loading ? <S.Spinner /> : <S.FactText>{fact}</S.FactText>}
      <S.RefreshButton onClick={() => mutate()} disabled={loading}>
        {loading ? 'Генерация...' : 'Сгенерировать'}
      </S.RefreshButton>
    </S.FactWrapper>
  )
}

export default FactGenertatorComponent
