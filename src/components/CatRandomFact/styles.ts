import styled, { css } from 'styled-components'
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
  padding-bottom: 10px;
`
export const FactText = styled.p`
  font-size: 18px;
  color: #333;
  min-height: 340px;
  ${({ theme }) => css`
    @media screen and ${theme.media.lg} {
      min-height: 120px;
    }
  `}
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 20px;
`

export const NavigateButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'transparent' : '#362F20')};
  color: ${({ disabled }) => (disabled ? 'transparent' : '#DED6C2')};
  padding: 5px;
  width: 50px;
  height: 50px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'transparent' : '#222222'};
  }
`
