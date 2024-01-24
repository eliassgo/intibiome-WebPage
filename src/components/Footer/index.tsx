import * as S from './styles'
import InstagraIcon from '../../assets/icons/Layer-2.svg'
import uLabsIcon from '../../assets/icons/u-labs-icon.png'

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.Links>
        <li>
          <S.Link title="Clique aqui para" href="">
            contact us{' '}
          </S.Link>
        </li>
        <S.Line />
        <li>
          <S.Link title="Clique aqui para" href="">
            faq
          </S.Link>
        </li>
        <S.Line />
        <li>
          <S.Link title="Clique aqui para" href="">
            privacy policy
          </S.Link>
        </li>
        <S.Line />
        <li>
          <S.Link title="Clique aqui para" href="">
            cookies policy
          </S.Link>
        </li>
        <S.Line />
        <li>
          <S.Link title="Clique aqui para" href="">
            legal police
          </S.Link>
        </li>
      </S.Links>

      <S.FooterSection>
        <ul>
          <li>
            <S.Link href="">
              <img src={uLabsIcon} alt=" U-Labs Web Icons" />
            </S.Link>
          </li>
          <li>
            <S.Link href="">
              <img src={InstagraIcon} alt="Instagram Web Icon" />
            </S.Link>
          </li>
        </ul>
      </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer
