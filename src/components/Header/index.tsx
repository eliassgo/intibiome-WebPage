import { useState } from 'react'

import Logo from '../../assets/images/Module1-Header-970x60025.jpg'
import Lupa from '../../assets/icons/ic.search.svg'
import icMenu from '../../assets/icons/ic.menu.svg'

import { ChevronDown, XLg } from 'react-bootstrap-icons'

import * as S from './styles'

const Header = () => {
  const [isHoveredProducts, setHoveredProducts] = useState<boolean>(false)
  const [isHoveredAbout, setHoveredAbout] = useState<boolean>(false)
  const [isHoveredHealth, setHoveredHealth] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <S.Header className="container" id="/">
        <S.Hambuerguer
          onClick={handleMenuClick}
          className={isMenuOpen ? 'is-open' : ''}
        >
          <img src={icMenu} alt="menu icon" />
        </S.Hambuerguer>
        <S.ButtonClose
          onClick={handleMenuClick}
          className={isMenuOpen ? 'is-open' : ''}
        >
          <XLg size={18} style={{ marginLeft: '6px' }} />
        </S.ButtonClose>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="intibiome web logo" />
          </a>
        </div>

        <a href="">
          {' '}
          <img src={Lupa} alt="search icon" />
        </a>
      </S.Header>
      <S.NavBar>
        <S.HeaderList className="container">
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
        </S.HeaderList>
      </S.NavBar>
      <S.NavBarHover
        onMouseEnter={() => setHoveredAbout(true)}
        onMouseLeave={() => setHoveredAbout(false)}
        className={isHoveredAbout ? 'is-Hovered' : ''}
      >
        <S.HoverList className="container">
          <li>
            <a href="">brand philosophy</a>{' '}
          </li>
          <li>
            <a href="">product tecnology</a>{' '}
          </li>
        </S.HoverList>
      </S.NavBarHover>
      <S.NavBarHover
        onMouseEnter={() => setHoveredProducts(true)}
        onMouseLeave={() => setHoveredProducts(false)}
        className={isHoveredProducts ? 'is-Hovered' : ''}
      >
        <S.HoverList className="container">
          <li>
            {' '}
            <a href="">all products</a>
          </li>
          <li>
            {' '}
            <a href="#wellnessPack">intibiome wellness</a>{' '}
          </li>
          <li>
            <a href="#activePack">intibiome active</a>{' '}
          </li>
          <li>
            <a href="#agecarePack">intibiome agecare</a>{' '}
          </li>
        </S.HoverList>
      </S.NavBarHover>
      <S.NavBarHover
        onMouseEnter={() => setHoveredHealth(true)}
        onMouseLeave={() => setHoveredHealth(false)}
        className={isHoveredHealth ? 'is-Hovered' : ''}
      >
        <S.HoverList className="container">
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
        </S.HoverList>
      </S.NavBarHover>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.MobileList>
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
        </S.MobileList>
      </S.NavMobile>
    </div>
  )
}
export default Header
