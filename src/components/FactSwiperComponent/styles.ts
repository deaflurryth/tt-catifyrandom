import styled from 'styled-components'

export const SwiperWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.BaseBackground};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
