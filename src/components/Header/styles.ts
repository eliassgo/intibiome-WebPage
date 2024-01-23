import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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
  }

  li {
    margin: 0 20px 0 20px;
  }
`
