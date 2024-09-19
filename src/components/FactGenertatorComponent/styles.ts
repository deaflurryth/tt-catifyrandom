import styled, { keyframes } from 'styled-components'

export const FactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.BaseBackground};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
`

export const FactText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.BaseFontColor};
  text-align: center;
  margin-bottom: 20px;
`

export const RefreshButton = styled.button`
  padding: 10px 30px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.CatsSolidWhite};
  color: ${({ theme }) => theme.colors.BaseSubFontColor};
  border: 2px solid ${({ theme }) => theme.colors.BaseSubFontColor};
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background-color: ${({ theme }) => theme.colors.BaseSubFontColor};
    border: 2px solid ${({ theme }) => theme.colors.CatsBlack};
    color: ${({ theme }) => theme.colors.CatsSolidWhite};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.BaseSubFontColor};
    cursor: not-allowed;
  }
`

export const FactWrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.BaseSubFontColor};
  border-radius: 10px;
  width: 100%;
  height: 400px;
  background: ${({ theme }) => theme.colors.CatsBackground};
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 2;
`
export const FactLeftContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.BaseSubFontColor};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.CatsSolidWhite};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  height: 100%;
  width: 50%;
  padding: 30px;
`
export const StyledTitle = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.CatsBlack};
`
export const StyledUnderTitle = styled.p`
  text-align: left;
`
export const FactRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.CatsBackground};
  width: 50%;
  border-radius: 10px;
  height: 100%;
  & > img {
    max-width: 300px;
    height: auto;
  }
`
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
export const SmallSpinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.CatsBackground};
  border-top: 4px solid ${({ theme }) => theme.colors.BaseFontColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`
