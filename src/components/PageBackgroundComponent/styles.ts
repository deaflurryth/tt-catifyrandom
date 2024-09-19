// styles.ts
import styled from 'styled-components'
import CatSample from './assets/catbackg.png'

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 110vh;
  height: 100%;
  background-image: url(${CatSample.src});
  background-repeat: repeat;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const CenterContent = styled.div`
  position: relative;
  top: 0;
  width: 1300px;
  min-height: 110vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BaseBackground};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`
