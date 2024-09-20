import styled, { css } from 'styled-components'

export const CardWrapper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.CatsSolidWhite};
  border: 2px dashed ${({ theme }) => theme.colors.BaseSubFontColor};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  ${({ theme }) => css`
    @media screen and ${theme.media.lg} {
      height: 250px;
    }
  `}
`

export const FactText = styled.p`
  font-size: 12px;
  color: #333;
  ${({ theme }) => css`
    @media screen and ${theme.media.lg} {
      font-size: 18px;
    }
  `}
`
