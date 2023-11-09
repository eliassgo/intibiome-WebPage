import { Link } from 'react-router-dom'

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
                <Link to="/categories">Categorias</Link>
              </LinItem>
              <LinItem>
                <a href="#">Novidades</a>
              </LinItem>
              <LinItem>
                <a href="#">Promoções</a>
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
            <Link to="/categories">Categorias</Link>
          </LinItem>
          <LinItem>
            <a href="#">Novidades</a>
          </LinItem>
          <LinItem>
            <a href="#">Promoções</a>
          </LinItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
export default Header
