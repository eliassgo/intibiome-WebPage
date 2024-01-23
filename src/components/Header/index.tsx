import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Logo from '../../assets/images/Module1-Header-970x60025.jpg'
import Lupa from '../../assets/images/ic.search.svg'
import * as S from './styles'

const Header = () => {
  return (
    <div>
      <S.Header className="container">
        <div className="logo">
          <a href="#">
            {' '}
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="search">
          <a href="#">
            {' '}
            <img src={Lupa} alt="" />
          </a>
        </div>
      </S.Header>
      <S.NavBar>
        <ul className="container">
          <li>about us</li>
          <li>our products</li>
          <li>intimate health</li>
          <li>contact us</li>
        </ul>
      </S.NavBar>
    </div>
  )
}
export default Header
