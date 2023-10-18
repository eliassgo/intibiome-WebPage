import bannerimg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'
import Tag from '../Tag'
import { ImagemDiv, Precos, Titulo } from './styles'

const Banner = () => (
  <ImagemDiv style={{ backgroundImage: `url(${bannerimg})` }}>
    <div className="container">
      <Tag size={'large'}>Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
        </Precos>
      </div>
      <Button type="link" to="/product" title="Venha Aproveitar essa oferta">
        Aproveitar
      </Button>
    </div>
  </ImagemDiv>
)
export default Banner
