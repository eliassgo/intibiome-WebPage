import { Link } from 'react-router-dom'

import { HeaderBar, LinItem, Links, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
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
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header