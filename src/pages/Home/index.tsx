import Banner from '../../components/Banner'

import Header from '../../components/Header'

import Card from '../../components/Card'

import Paragraph from '../../components/Paragraph'

import Icons from '../../components/Icons'

import List from '../../components/List'

import bannerImage from '../../assets/images/banner-hero.jpg'
import banner02 from '../../assets/images/Asset-22.jpg'
import imageMask01 from '../../assets/images/image-mask.jpg'
import imageMask03 from '../../assets/images/image-mask-2.jpg'
import imageMask02 from '../../assets/images/imagemask-1.jpg'
import imageMaskArticle01 from '../../assets/images/image-mask-03.jpg'
import imageMaskArticle02 from '../../assets/images/image-mask-01.jpg'
import imageMaskArticle03 from '../../assets/images/image-mask-02.jpg'

export type ProductType = {
  image: string
  description: string
  title: string
  imageDescription: string
  id: number
}
export type ArticleType = {
  image: string
  description: string
  imageDescription: string
  id: number
}

const ProducsItems: ProductType[] = [
  {
    id: 1,
    image: imageMask01,
    description: 'intibiome wellness daily intimate wash',
    title: 'wellness',
    imageDescription: 'oooooooo'
  },
  {
    id: 2,
    image: imageMask03,
    description: 'intibiome active extra protection intimate wash',
    title: 'active',
    imageDescription: 'oooooooo'
  },
  {
    id: 3,
    image: imageMask02,
    description: 'intibiome agecare dryness relief intimate wash',
    title: 'agecare',
    imageDescription: 'oooooooo'
  }
]
const ArticleItems: ArticleType[] = [
  {
    id: 1,
    image: imageMaskArticle01,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageDescription: 'oooooooo'
  },
  {
    id: 2,
    image: imageMaskArticle02,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageDescription: 'oooooooo'
  },
  {
    id: 3,
    image: imageMaskArticle03,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageDescription: 'oooooooo'
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <Banner image={bannerImage} imageDescription="banner" />
      <Card title="we’re here to help" margin="28" width="400">
        <>
          <Paragraph width="400">
            <>
              When it comes to caring for our most intimate areas, we’ve lost
              our connection
            </>
          </Paragraph>
          <Paragraph width="400">
            <>
              Embarrassed, unwilling, or unable to communicate with others,
              we’re needlessly neglecting the parts of our bodies that need it
              most
            </>
          </Paragraph>
          <Paragraph width="400">
            <>
              We’re here to help. Providing you with the expertise, knowledge
              and products you need to feel confident in your
            </>
          </Paragraph>
        </>
      </Card>
      <Icons />
      <Card
        title="whatever your age. whatever your lifestyle. whatever your interests."
        margin="28"
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
      <Banner image={banner02} imageDescription="banner" />
      <List
        title="keep up to date with our discoveries"
        article={ArticleItems}
        listType="article"
      />
    </>
  )
}

export default Home
