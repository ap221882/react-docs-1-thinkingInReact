import React, { useState, useEffect } from "react"
import ProductRow from "./ProductRow"

type Props = {
  allProducts: {
    category: string
    price: string
    stocked: boolean
    name: string
  }[]
}
const ProductTable = ({ allProducts }: Props) => {
  const [rows, setRows] = useState<JSX.Element[]>([])

  useEffect(() => {
    let categories: string[] = []
    allProducts.forEach((product) => {
      if (!categories.find((cat) => product.category === cat)) {
        categories.push(product.category)
      }
    })
    setRows(
      categories.map((category, index) => {
        return (
          <ProductRow
            key={index}
            category={category}
            allProducts={allProducts}
          />
        )
      })
    )
  }, [allProducts])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable
