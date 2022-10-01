import React, { useState, useEffect } from "react"
import { PRODUCTS } from "../products"
import ProductRow from "./ProductRow"

type Props = {}

const ProductTable = (props: Props) => {
  const [rows, setRows] = useState<JSX.Element[]>([])

  useEffect(() => {
    let rowsTemp = []
    let categories: string[] = []
    PRODUCTS.map((product) => {
      if (!categories.find((cat) => product.category === cat)) {
        categories.push(product.category)
      }
    })
    console.log(categories)
    setRows(
      categories.map((category) => {
        return <ProductRow category={category} />
      })
    )
  }, [])

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
