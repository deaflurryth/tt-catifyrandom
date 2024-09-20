import styled, { css } from 'styled-components'

export const SwiperWrapper = styled.section`
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.BaseBackground};
  border-radius: 10px;
`
export const SwiperContainerStyled = styled.div`
  height: 2220px;
  .swiper-wrapper {
    height: 100%;
    width: 100%;
  }
  .swiper {
    height: 2200px;
    width: 100%;
  }
  .swiper-button-next {
    top: 98% !important;
    right: 20px !important;
  }
  .swiper-button-next:after {
    font-size: 20px;
  }
  .swiper-button-prev {
    top: 98% !important;
    left: 10px !important;
  }
  .swiper-button-prev:after {
    font-size: 20px;
  }
  .swiper-pagination-bullet-active {
    color: ${({ theme }) => theme.colors.BaseSubFontColor};
    background: ${({ theme }) => theme.colors.BaseSubFontColor};
  }

  .swiper-pagination-bullets.swiper-pagination-horizontal {
    /* bottom: -50px !important; */
  }
  ${({ theme }) => css`
    @media screen and ${theme.media.lg} {
      height: 1400px;
      .swiper {
        height: calc(100%);
        width: 100%;
      }
    }
  `}
`
export const CardGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ theme }) => css`
    @media screen and ${theme.media.lg} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  `}
`
