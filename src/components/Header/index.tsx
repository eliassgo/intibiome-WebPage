import { Link } from 'react-router-dom'

import { HashLink } from 'react-router-hash-link'

import {
  HeaderBar,
  LinItem,
  Links,
  CartButton,
  Hambuerguer,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

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
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hambuerguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hambuerguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinItem>
                <Link
                  title="clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinItem>
              <LinItem>
                <HashLink
                  title="clique aqui para acessar a seção de novidades"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinItem>
              <LinItem>
                <HashLink
                  title="clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart} href="#">
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinItem>
            <Link
              title="clique aqui para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinItem>
          <LinItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="clique aqui para acessar a seção de novidades"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </LinItem>
          <LinItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </LinItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
export default Header
