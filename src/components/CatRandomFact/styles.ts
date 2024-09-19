import styled from 'styled-components'
export const CardWrapper = styled.div`
  padding: 20px;
  background-color: transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 200px;
  max-width: 1200px;
  flex-wrap: wrap;
`

export const FactTitle = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.CatsBlack};
`
export const FactText = styled.p`
  font-size: 18px;
  color: #333;
`
