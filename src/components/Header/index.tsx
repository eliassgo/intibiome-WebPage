import Logo from '../../assets/images/Module1-Header-970x60025.jpg'
import Lupa from '../../assets/images/ic.search.svg'
import { ChevronDown } from 'react-bootstrap-icons'

import * as S from './styles'
import { useState } from 'react'

const Header = () => {
  const [isHoveredProducts, setHoveredProducts] = useState<boolean>(false)
  const [isHoveredAbout, setHoveredAbout] = useState<boolean>(false)
  const [isHoveredHealth, setHoveredHealth] = useState<boolean>(false)

  return (
    <div>
      <S.Header className="container">
        <div className="logo">
          <a href="#">
            {' '}
            <img src={Logo} alt="intibiome web logo" />
          </a>
        </div>
        <div className="search">
          <a href="#">
            {' '}
            <img src={Lupa} alt="search icon" />
          </a>
        </div>
      </S.Header>
      <S.NavBar>
        <ul className="container">
          <li
            onMouseEnter={() => setHoveredAbout(true)}
            onMouseLeave={() => setHoveredAbout(false)}
          >
            about us <ChevronDown style={{ marginLeft: '8px' }} size={18} />
          </li>
          <li
            onMouseEnter={() => setHoveredProducts(true)}
            onMouseLeave={() => setHoveredProducts(false)}
          >
            our products <ChevronDown style={{ marginLeft: '8px' }} size={18} />
          </li>
          <li
            onMouseEnter={() => setHoveredHealth(true)}
            onMouseLeave={() => setHoveredHealth(false)}
          >
            intimate health{' '}
            <ChevronDown style={{ marginLeft: '8px' }} size={18} />
          </li>
          <li>contact us</li>
        </ul>
      </S.NavBar>
      <S.NavBarHover
        onMouseEnter={() => setHoveredAbout(true)}
        onMouseLeave={() => setHoveredAbout(false)}
        className={isHoveredAbout ? 'is-Hovered' : ''}
      >
        <ul className="container">
          <li>
            <a href="">brand philosophy</a>{' '}
          </li>
          <li>product tecnology</li>
        </ul>
      </S.NavBarHover>
      <S.NavBarHover className={isHoveredProducts ? 'is-Hovered' : ''}>
        <ul className="container">
          <li>all products</li>
          <li>intibiome wellness</li>
          <li>intibiome active</li>
          <li>intibiome agecare</li>
        </ul>
      </S.NavBarHover>
      <S.NavBarHover className={isHoveredHealth ? 'is-Hovered' : ''}>
        <ul className="container">
          <li>brand philosophy</li>
          <li>product tecnology</li>
        </ul>
      </S.NavBarHover>
    </div>
  )
}
export default Header
