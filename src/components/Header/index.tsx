import React from 'react'
import { HeaderBar, LinItem, Links, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinItem>
            <a href="#">Categorias</a>
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
