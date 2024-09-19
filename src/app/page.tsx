'use client'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import SpinnerLoader from '@/components/SpinnerLoader/SpinnerLoader'
import { CatRandomFactProvider } from '@context/CatFactContext'

const CatRandomFact = dynamic(
  () => import('@/components/CatRandomFact/CatRandomFact'),
  {
    suspense: true,
    ssr: false,
    loading: () => <></>,
  }
)

const FactGenertatorComponent = dynamic(
  () => import('@components/FactGenertatorComponent/FactGenertatorComponent'),
  {
    suspense: true,
    ssr: false,
    loading: () => <></>,
  }
)
const FactSwiperComponent = dynamic(
  () => import('@components/FactSwiperComponent/FactSwiperComponent'),
  {
    suspense: true,
    ssr: false,
    loading: () => <></>,
  }
)

export default function Home() {
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <CatRandomFactProvider>
          <CatRandomFact />
          <FactGenertatorComponent />
        </CatRandomFactProvider>
        <FactSwiperComponent />
      </main>
    </Suspense>
  )
}
