import { Container, ListComponent } from './styles'
import { ProductType } from '../../pages/Home'
import Product from '../Product'

export type Props = {
  title: string
  items: ProductType[]
}

const List = ({ title, items }: Props) => {
  return (
    <Container className="container">
      <h2 className="h2">{title}</h2>
      <ListComponent>
        {items.map((item) => (
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

export default List
