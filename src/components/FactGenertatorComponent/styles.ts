import styled, { keyframes } from 'styled-components'

export const FactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.BaseBackground || '#f9f9f9'};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`

export const FactText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.TextPrimary || '#333'};
  text-align: center;
  margin-bottom: 20px;
`

export const RefreshButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.Primary || '#0070f3'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.PrimaryDark || '#005bb5'};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.Disabled || '#ccc'};
    cursor: not-allowed;
  }
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.SpinnerBg || '#f3f3f3'};
  border-top: 4px solid ${({ theme }) => theme.colors.Primary || '#3498db'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`
