import React from "react"

type Tproduct = {
  category: string
  price: string
  stocked: boolean
  name: string
}
type Props = {
  product: Tproduct
}
const Product = ({ product }: Props) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  )

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default Product
