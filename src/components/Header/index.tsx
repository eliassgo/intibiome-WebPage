import { Link } from 'react-router-dom'

import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartItem from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

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
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinItem>
                <Link
                  title="clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinItem>
              <S.LinItem>
                <HashLink
                  title="clique aqui para acessar a seção de novidades"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinItem>
              <S.LinItem>
                <HashLink
                  title="clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart} href="#">
          {items.length} <span>- produto(s)</span>
          <img src={cartItem} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinItem>
            <Link
              title="clique aqui para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinItem>
          <S.LinItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="clique aqui para acessar a seção de novidades"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </S.LinItem>
          <S.LinItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </S.LinItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}
export default Header
