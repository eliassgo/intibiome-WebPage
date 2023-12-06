import { Link } from 'react-router-dom'

import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hambuerguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hambuerguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinItem>
                <Link title="clique aqui para acessar a página " to="/">
                  Page
                </Link>
              </S.LinItem>
              <S.LinItem>
                <HashLink title="clique aqui para acessar a seção " to="/">
                  Section
                </HashLink>
              </S.LinItem>
              <S.LinItem>
                <HashLink title="clique aqui para acessar a seção " to="/">
                  Section
                </HashLink>
              </S.LinItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          ICON
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinItem>
            <Link
              title="clique aqui para acessar a página "
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Página
            </Link>
          </S.LinItem>
          <S.LinItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="clique aqui para acessar a seção "
              to="/"
            >
              Seçao
            </HashLink>
          </S.LinItem>
          <S.LinItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="clique aqui para acessar a seção"
              to="/"
            >
              Seçao
            </HashLink>
          </S.LinItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}
export default Header
