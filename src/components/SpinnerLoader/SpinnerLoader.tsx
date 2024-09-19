'use client'

import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.CatsBackground};
  border-top: 4px solid ${({ theme }) => theme.colors.BaseFontColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`
const SpinnerLoader: React.FC = () => {
  return <Spinner />
}

export default SpinnerLoader
