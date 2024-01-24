import { createGlobalStyle } from 'styled-components'

/* Colors: */
export const colors = {
  white: '#FFFFFF',
  blue: '#389CD6',
  darkGray: '#7B7070',
  green: '#309D5F',
  lightGray: '#00000014',
  red: '#EE6381',
  color549bd1: '#549BD1',
  brandGray: '#9d8d8d'
}

/* Font/text values */
export const fonts = {
  unnamedFontStyleNormal: 'normal',
  unnamedFontWeightBold: 'bold',
  unnamedFontWeightNormal: 'normal',
  unnamedFontSize16: '16px',
  unnamedFontSize20: '20px',
  unnamedFontSize25: '25px',
  unnamedFontSize31: '31px',
  unnamedFontSize39: '39px',
  unnamedFontSize48: '48px',
  unnamedCharacterSpacing05: '0.5px',
  unnamedCharacterSpacing062: '0.62px',
  unnamedCharacterSpacing078: '0.78px',
  unnamedCharacterSpacing096: '0.96px',
  unnamedCharacterSpacing032: '0.32px',
  unnamedCharacterSpacing04: '0.4px',
  unnamedLineSpacing22: '22px',
  unnamedLineSpacing28: '28px',
  unnamedLineSpacing36: '36px',
  unnamedLineSpacing40: '40px',
  unnamedLineSpacing50: '50px',
  unnamedLineSpacing70: '70px'
}

export const breakpoints = {
  tablet: '1024px',
  mobile: '760px'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', sans-serif;
  list-style: none;
}

body{

/* Character Styles */

.h1 {
font-style: ${fonts.unnamedFontStyleNormal};
font-weight: ${fonts.unnamedFontWeightBold};
font-size: ${fonts.unnamedFontSize48};
line-height:  ${fonts.unnamedLineSpacing70};
letter-spacing:  ${fonts.unnamedCharacterSpacing096};
color: ${colors.color549bd1};
}

.h2 {
font-style: ${fonts.unnamedFontStyleNormal};
font-weight: ${fonts.unnamedFontWeightBold};
font-size: ${fonts.unnamedFontSize39};
line-height:  ${fonts.unnamedLineSpacing50};
letter-spacing:  ${fonts.unnamedCharacterSpacing078};
color: ${colors.color549bd1};
}

.h3 {
font-style: ${fonts.unnamedFontStyleNormal};
font-weight: ${fonts.unnamedFontWeightBold};
font-size: ${fonts.unnamedFontSize31};
line-height:  ${fonts.unnamedLineSpacing40};
letter-spacing:  ${fonts.unnamedCharacterSpacing062};
color: ${colors.color549bd1};
}

.h4 {
font-style: ${fonts.unnamedFontStyleNormal};
font-weight: ${fonts.unnamedFontWeightBold};
font-size: ${fonts.unnamedFontSize25};
line-height:  ${fonts.unnamedLineSpacing36};
letter-spacing:  ${fonts.unnamedCharacterSpacing05};
color: ${colors.white};
}

.p{
font-style: ${fonts.unnamedFontStyleNormal};
font-weight: ${fonts.unnamedFontWeightNormal};
font-size: ${fonts.unnamedFontSize20};
line-height:  ${fonts.unnamedLineSpacing28};
letter-spacing:  ${fonts.unnamedCharacterSpacing04};
color: ${colors.darkGray};
opacity: 1;
}

.p-large {
font-style: ${fonts.unnamedFontStyleNormal};
font-weight: ${fonts.unnamedFontWeightNormal};
font-size: ${fonts.unnamedFontSize16};
line-height:  ${fonts.unnamedLineSpacing22};
letter-spacing:  ${fonts.unnamedCharacterSpacing032};
color: ${colors.brandGray};
}

}

.container{
  max-width: 1134px;
  width: 100%;
  margin: 0 auto;
}
`
