import { Link } from 'react-router-dom'

import { HeaderBar, LinItem, Links, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
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
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}
export default Header
