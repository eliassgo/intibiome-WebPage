import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Title</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link title="Clique aqui para " to="/">
              Section
            </S.Link>
          </li>
          <li>
            <S.Link title="Clique aqui para " to="/">
              Section
            </S.Link>
          </li>

          <li>
            <S.Link title="Clique aqui para " to="/">
              Section
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar "
              to="/categories#simulation"
            >
              Section
            </S.Link>
          </li>

          <li>
            <S.Link title="Clique aqui para acessar " to="/">
              Section
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Title</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link title="clique aqui para acessar " to="/">
              Section
            </S.Link>
          </li>
          <li>
            <S.Link title="clique aqui para acessar " to="/">
              Em Section
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
