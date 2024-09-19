import { ITheme } from '@/interfaces/styled-types'

export const CatsTheme: ITheme = {
  colors: {
    BaseBackground: 'hsla(39, 14%, 73%, 1)', //#c3bcaf
    BaseFontColor: 'hsla(0, 0%, 13%, 1)', //#222222
    BaseSubFontColor: 'hsla(41, 26%, 17%, 1)', //#362F20
    CatsBackground: 'hsla(55, 9%, 70%, 1)', //#BAB9AD
    CatsSolidWhite: 'hsla(43, 30%, 82%, 1)', //#DED6C2
    CatsBlack: 'hsla(0, 0%, 7%, 1)', //#111111
  },
  media: {
    xtra: '(min-width: 1800px)',
    xxxl: '(min-width: 1660px)',
    xxl: '(min-width: 1400px)',
    xl: '(min-width: 1200px)',
    lg: '(min-width: 992px)',
    md: '(min-width: 768px)',
    sm: '(min-width: 576px)',
    xs: '(min-width: 420px)',
  },
  durations: { standart: '0.3s', medium: '0.5s', slow: '1s' },
  order: {
    minus: -1,
    one: 1,
    two: 2,
    three: 3,
    fixed: 20,
    height: 1000,
    action: 1100,
  },
  opacity: {
    main: 0.66,
  },
}
