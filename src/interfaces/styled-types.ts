export interface ITheme {
  colors: {
    [key: string]: string
    BaseBackground: string
    BaseFontColor: string
    BaseSubFontColor: string
  }
  media: {
    xtra: string
    xxxl: string
    xxl: string
    xl: string
    lg: string
    md: string
    sm: string
    xs: string
  }
  durations: { standart: '0.3s'; medium: '0.5s'; slow: '1s' }
  order: {
    minus: -1
    one: 1
    two: 2
    three: 3
    fixed: 20
    height: 1000
    action: 1100
  }
  opacity: {
    main: 0.66
  }
}

// тип css фрагмента
import { RuleSet } from 'styled-components'

// E - элемент enum
export type StyledVariants<E extends string | number> = {
  [key in E]?: RuleSet<any>
}
