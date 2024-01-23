import * as S from './styles'
import InstagraIcon from '../../assets/images/Layer-2.svg'
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
              <img src={InstagraIcon} alt="" />
            </S.Link>
          </li>
          <li>
            <S.Link>
              <img src={InstagraIcon} alt="" />
            </S.Link>
          </li>
        </ul>
      </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer
