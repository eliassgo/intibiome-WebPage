import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  blue: '#389CD6',
  darkGray: '#7B7070',
  green: '#309D5F',
  lightGray: '#00000014',
  red: '##EE6381'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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

}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}){
    max-width: 80%;
  }
}
`
