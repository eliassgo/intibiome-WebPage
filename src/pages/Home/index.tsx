import Banner from '../../components/Banner'

import Header from '../../components/Header'

import Card from '../../components/Card'

import Paragraph from '../../components/Paragraph'

import Icons from '../../components/Icons'

import List from '../../components/List'

import bannerImage from '../../assets/images/banner-hero.jpg'
import banner02 from '../../assets/images/Asset-22.jpg'
import bluePack from '../../assets/images/Blue-Pack.jpg'
import greenPack from '../../assets/images/Green-Pack.jpg'
import pinkPack from '../../assets/images/Pink-Pack.jpg'
import imageMaskArticle01 from '../../assets/images/image-mask-03.jpg'
import imageMaskArticle02 from '../../assets/images/image-mask-01.jpg'
import imageMaskArticle03 from '../../assets/images/image-mask-02.jpg'
import mobileBanner01 from '../../assets/images/banner-intibiome-02.jpg'
import mobileBanner02 from '../../assets/images/banner-intibiome-05.jpg'

export type ProductType = {
  image: string
  description: string
  title: string
  imageDescription: string
  id: number
  cardColor: string
  idProduct: string
}
export type ArticleType = {
  image: string
  description: string
  imageDescription: string
  id: string
  link: string
}

const ProducsItems: ProductType[] = [
  {
    id: 1,
    image: bluePack,
    description: 'intibiome wellness daily intimate wash',
    title: 'wellness',
    imageDescription: 'intibiome wellness pack',
    cardColor: 'blue',
    idProduct: 'wellnessPack'
  },
  {
    id: 2,
    image: greenPack,
    description: ' intibiome active extra protection intimate wash',
    title: 'active',
    imageDescription: 'intibiome active pack',
    cardColor: 'green',
    idProduct: 'activePack'
  },
  {
    id: 3,
    image: pinkPack,
    description: 'intibiome agecare dryness relief intimate wash',
    title: 'agecare',
    imageDescription: 'intibiome agecare pack',
    cardColor: 'red',
    idProduct: 'agecarePack'
  }
]
const ArticleItems: ArticleType[] = [
  {
    id: 'article01',
    image: imageMaskArticle01,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageDescription: 'woman stretching',
    link: ''
  },
  {
    id: 'article02',
    image: imageMaskArticle02,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageDescription: 'woman"s face',
    link: ''
  },
  {
    id: 'article03',
    image: imageMaskArticle03,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageDescription: 'water drops',
    link: ''
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <Banner
        image={bannerImage}
        imageDescription="Intibiome Web Banner"
        mobileBanner={mobileBanner01}
      />
      <Card title="we’re here to help" width="400">
        <>
          <Paragraph width="400">
            <>
              When it comes to caring for our most intimate areas, we’ve lost
              our connection.
            </>
          </Paragraph>
          <Paragraph width="400">
            <>
              Embarrassed, unwilling, or unable to communicate with others,
              we’re needlessly neglecting the parts of our bodies that need it
              most.
            </>
          </Paragraph>
          <Paragraph width="400">
            <>
              We’re here to help. Providing you with the expertise, knowledge
              and products you need to feel confident in your.
            </>
          </Paragraph>
        </>
      </Card>
      <Icons />
      <Card
        title="whatever your age. whatever your lifestyle. whatever your interests."
        width="800"
      >
        <>
          <Paragraph width="600">
            <>
              Co-created with gynaecologists, our revolutionary products have
              been expertly developed to support your intimate microbiome and pH
              balance, and strengthen overall natural health.
            </>
          </Paragraph>
          <Paragraph width="600">
            <>
              As the experts in intimate hygiene, we want to bring discussion
              about intimate wellness care out of the dark and demystify the
              taboos that surround it.
            </>
          </Paragraph>
        </>
      </Card>
      <List title="our products" items={ProducsItems} listType="product" />
      <Banner
        image={banner02}
        imageDescription="Intibiome Products Banner"
        mobileBanner={mobileBanner02}
      />
      <List
        title="keep up to date with our discoveries"
        article={ArticleItems}
        listType="article"
      />
    </>
  )
}

export default Home
