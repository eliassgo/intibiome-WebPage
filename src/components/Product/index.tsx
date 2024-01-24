import { CardTitle, Item } from './styles'

export type Props = {
  image: string
  description: string
  title: string
  imageDescription: string
  descriptionCardColor: string
  idProduct: string
}
const Product = ({
  image,
  description,
  title,
  imageDescription,
  descriptionCardColor,
  idProduct
}: Props) => {
  return (
    <Item title={title} id={idProduct}>
      <div>
        <img src={image} alt={imageDescription} />
      </div>
      <p className="p">{description}</p>
      <CardTitle descriptionCardColor={descriptionCardColor}>
        <span className="h4">{title}</span>
      </CardTitle>
    </Item>
  )
}

export default Product
