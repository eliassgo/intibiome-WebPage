import styled from 'styled-components'
import { breakpoints, colors, fonts } from '../../styles'

export const ListUl = styled.ul`
  display: flex;
  font-style: ${fonts.unnamedFontStyleNormal};
  font-weight: ${fonts.unnamedFontWeightNormal};
  font-size: ${fonts.unnamedFontSize16};
  line-height: ${fonts.unnamedLineSpacing22};
  letter-spacing: ${fonts.unnamedCharacterSpacing032};
  color: ${colors.white};
`

export const MobileList = styled(ListUl)`
  flex-direction: column;
  background-color: ${colors.blue};

  li {
    padding: 15px 48px;
    display: flex;

    cursor: pointer;

    a {
      text-decoration: none;
      color: ${colors.white};
    }
  }
`
export const HoverList = styled(ListUl)`
  justify-content: flex-start;
  align-items: center;

  li {
    margin: 0 20px 0 20px;

    a {
      text-decoration: none;
      color: ${colors.white};
    }
  }
`

export const HeaderList = styled(ListUl)`
  justify-content: center;
  align-items: center;

  li {
    padding: 15px 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
export const NavMobile = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s ease;

  &.is-open {
    transition: opacity 0.5s ease;
    opacity: 1;
    z-index: 1;
  }
`
export const NavBarHover = styled.nav`
  position: absolute;
  background-color: ${colors.brandGray};
  height: 100%;
  display: flex;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
  align-items: center;

  &.is-Hovered {
    transition: opacity 0.5s ease;
    opacity: 1;
    z-index: 1;
  }

  @media (max-width: 760px) {
    display: none;
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

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 760px) {
    width: 80% !important;
    margin: 0 auto !important;
  }
`

export const NavBar = styled.nav`
  background-color: ${colors.blue};
  height: 49px;
  display: flex;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`
export const Hambuerguer = styled.div`
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }

  &.is-open {
    display: none;
  }
`

export const ButtonClose = styled.div`
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
  &.is-open {
    display: block;
  }
`
