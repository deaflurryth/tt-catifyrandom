// styled.d.ts
import 'styled-components'
import { ITheme } from '@/interfaces/styled-types'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
