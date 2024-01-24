import * as S from './styles'
import InstagraIcon from '../../assets/images/Layer-2.svg'
import uLabsIcon from '../../assets/images/u-labs-icon.png'

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.Links>
        <li>
          <S.Link title="Clique aqui para">contact us </S.Link>
        </li>
        <li>
          <S.Link title="Clique aqui para ">faq</S.Link>
        </li>

        <li>
          <S.Link title="Clique aqui para ">privacy policy</S.Link>
        </li>
        <li>
          <S.Link title="Clique aqui para acessar ">cookies policy</S.Link>
        </li>

        <li className="noneBorder">
          <S.Link title="Clique aqui para acessar ">legal police</S.Link>
        </li>
      </S.Links>

      <S.FooterSection>
        <ul>
          <li>
            <S.Link>
              <img src={uLabsIcon} alt=" U-Labs Web Icons" />
            </S.Link>
          </li>
          <li>
            <S.Link>
              <img src={InstagraIcon} alt="Instagram Web Icon" />
            </S.Link>
          </li>
        </ul>
      </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer
