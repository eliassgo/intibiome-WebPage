import { useState } from 'react'

import { Link } from 'react-router-dom'

import Logo from '../../assets/images/Module1-Header-970x60025.jpg'
import Lupa from '../../assets/images/ic.search.svg'
import icMenu from '../../assets/images/ic.menu.svg'

import { ChevronDown, XLg } from 'react-bootstrap-icons'

import * as S from './styles'

const Header = () => {
  const [isHoveredProducts, setHoveredProducts] = useState<boolean>(false)
  const [isHoveredAbout, setHoveredAbout] = useState<boolean>(false)
  const [isHoveredHealth, setHoveredHealth] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <div>
      <S.Header className="container">
        <S.Hambuerguer
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={isMenuOpen ? 'is-open' : ''}
        >
          <img src={icMenu} alt="menu icon" />
        </S.Hambuerguer>
        <S.ButtonClose
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={isMenuOpen ? 'is-open' : ''}
        >
          <XLg size={17} />
        </S.ButtonClose>
        <div className="logo">
          <Link to="/">
            {' '}
            <img src={Logo} alt="intibiome web logo" />
          </Link>
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
          <li>
            <a href="">product tecnology</a>{' '}
          </li>
        </ul>
      </S.NavBarHover>
      <S.NavBarHover
        onMouseEnter={() => setHoveredProducts(true)}
        onMouseLeave={() => setHoveredProducts(false)}
        className={isHoveredProducts ? 'is-Hovered' : ''}
      >
        <ul className="container">
          <li>
            {' '}
            <a href="">all products</a>
          </li>
          <li>
            {' '}
            <a href="">intibiome wellness</a>{' '}
          </li>
          <li>
            <a href="">intibiome active</a>{' '}
          </li>
          <li>
            <a href="">intibiome agecare</a>{' '}
          </li>
        </ul>
      </S.NavBarHover>
      <S.NavBarHover
        onMouseEnter={() => setHoveredHealth(true)}
        onMouseLeave={() => setHoveredHealth(false)}
        className={isHoveredHealth ? 'is-Hovered' : ''}
      >
        <ul className="container">
          <li>
            <a href="#article01">article 1</a>{' '}
          </li>
          <li>
            {' '}
            <a href="#article02">article 2</a>{' '}
          </li>
          <li>
            {' '}
            <a href="#article03">article 3</a>{' '}
          </li>
          <li>
            {' '}
            <a href="">faq </a>{' '}
          </li>
        </ul>
      </S.NavBarHover>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <ul>
          <li>
            <a href="">brand philosophy</a>{' '}
          </li>
          <li>
            <a href="">product tecnology</a>{' '}
          </li>
          <li>
            {' '}
            <a href="">all products</a>
          </li>
          <li>
            {' '}
            <a href="">intibiome wellness</a>{' '}
          </li>
          <li>
            <a href="">intibiome active</a>{' '}
          </li>
          <li>
            <a href="">intibiome agecare</a>{' '}
          </li>
          <li>
            <a href="#article01">article 1</a>{' '}
          </li>
          <li>
            {' '}
            <a href="#article02">article 2</a>{' '}
          </li>
          <li>
            {' '}
            <a href="#article03">article 3</a>{' '}
          </li>
          <li>
            {' '}
            <a href="">faq </a>{' '}
          </li>
        </ul>
      </S.NavMobile>
    </div>
  )
}
export default Header
