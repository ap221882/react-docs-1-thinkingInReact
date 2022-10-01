import React from "react"

type Props = {
  category: string
}

const Category = (props: Props) => {
  return (
    <tr>
      <th colSpan={2}>{props.category}</th>
    </tr>
  )
}

export default Category
