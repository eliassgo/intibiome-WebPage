import styled from 'styled-components'
import { breakpoints, colors, fonts } from '../../styles'

export const NavBarHover = styled.nav`
  position: absolute;
  background-color: ${colors.brandGray};
  height: 49px;
  display: none;
  width: 100%;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-style: ${fonts.unnamedFontStyleNormal};
    font-weight: ${fonts.unnamedFontWeightNormal};
    font-size: ${fonts.unnamedFontSize16};
    line-height: ${fonts.unnamedLineSpacing22};
    letter-spacing: ${fonts.unnamedCharacterSpacing032};
    color: ${colors.white};
  }

  li {
    margin: 0 20px 0 20px;

    a {
      text-decoration: none;
      color: ${colors.white};
    }
  }

  &.is-Hovered {
    display: flex;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 16px 0 16px 0;

  .logo {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .search {
    margin: 24px;
  }
`

export const NavBar = styled.nav`
  background-color: ${colors.blue};
  height: 49px;
  display: flex;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: ${fonts.unnamedFontStyleNormal};
    font-weight: ${fonts.unnamedFontWeightNormal};
    font-size: ${fonts.unnamedFontSize16};
    line-height: ${fonts.unnamedLineSpacing22};
    letter-spacing: ${fonts.unnamedCharacterSpacing032};
    color: ${colors.white};
  }

  li {
    padding: 15px 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
