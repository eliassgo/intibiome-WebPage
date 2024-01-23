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
  if (listType === 'product') {
    return (
      <Container className="container">
        <h2 className="h2">{title}</h2>
        <ListComponent>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <Product
                  image={item.image}
                  description={item.description}
                  title={item.title}
                  imageDescription={item.imageDescription}
                />
              </li>
            ))}
        </ListComponent>
      </Container>
    )
  }

  return (
    <Container className="container">
      <h2 className="h2">{title}</h2>
      <ListComponent>
        {article &&
          article.map((a) => (
            <li key={a.id}>
              <Article
                image={a.image}
                description={a.description}
                imageDescription={a.imageDescription}
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
