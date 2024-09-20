'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import * as S from './styles'
import FactCardComponent from '@components/FactCardComponent/FactCardComponent'
import { fetchAllCatsFacts } from '@/app/api/facts/fetchAllCatsFacts'
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader'

SwiperCore.use([Pagination])

const FactSwiperComponent: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const savedFacts = localStorage.getItem('catFacts')
        if (savedFacts) {
          setFacts(JSON.parse(savedFacts))
        } else {
          const fetchedFacts = await fetchAllCatsFacts()
          setFacts(fetchedFacts)
          localStorage.setItem('catFacts', JSON.stringify(fetchedFacts))
        }
      } catch (err) {
        console.error(err)
        setError('Не удалось загрузить факты (っ °Д °;)っ')
      } finally {
        setLoading(false)
      }
    }

    fetchFacts()
  }, [])

  if (loading) return <SpinnerLoader />
  if (error) return <p>{error}</p>
  if (facts.length === 0) return <p>Нет фактов для отображения.</p>

  const cardsPerPage = 10

  const chunkedFacts = facts.reduce<string[][]>((result, fact, index) => {
    const chunkIndex = Math.floor(index / cardsPerPage)
    if (!result[chunkIndex]) {
      result[chunkIndex] = []
    }
    result[chunkIndex].push(fact)
    return result
  }, [])

  return (
    <S.SwiperWrapper>
      <S.SwiperContainerStyled>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {chunkedFacts.map((factPage, pageIndex) => (
            <SwiperSlide key={pageIndex}>
              <S.CardGridWrapper>
                {factPage.map((fact, index) => (
                  <FactCardComponent key={index} fact={fact} />
                ))}
              </S.CardGridWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperContainerStyled>
    </S.SwiperWrapper>
  )
}

export default FactSwiperComponent
