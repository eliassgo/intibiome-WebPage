import { Button, Container, ListComponent } from './styles'
import { ArticleType, ProductType } from '../../pages/Home'
import Product from '../Product'
import Article from '../Article'

export type Props = {
  title: string
  items?: ProductType[]
  article?: ArticleType[]
  listType: 'product' | 'article'
}

const List = ({ title, items, listType, article }: Props) => {
  const marginTop = {
    marginTop: '120px'
  }

  const marginTopArticle = {
    marginTop: '80px'
  }

  if (listType === 'product') {
    return (
      <Container className="container" style={marginTop}>
        <span className="h2">{title}</span>
        <ListComponent>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <Product
                  idProduct={item.idProduct}
                  image={item.image}
                  description={item.description}
                  title={item.title}
                  imageDescription={item.imageDescription}
                  descriptionCardColor={item.cardColor}
                />
              </li>
            ))}
        </ListComponent>
      </Container>
    )
  }

  return (
    <Container className="container" style={marginTopArticle}>
      <h2 className="h2">{title}</h2>
      <ListComponent>
        {article &&
          article.map((a) => (
            <li key={a.id}>
              <Article
                id={a.id}
                image={a.image}
                description={a.description}
                imageDescription={a.imageDescription}
                link={a.link}
              />
            </li>
          ))}
      </ListComponent>
      <Button type="button" className="p">
        see more
      </Button>
    </Container>
  )
}

export default List
