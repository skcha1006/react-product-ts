import React from 'react';

interface Props {
  category: String;
}

const ProductCategoryRow: React.FC<Props> = (props) =>  {
  return (
    <tr>
      <th colSpan={2}>{props.category}</th>
    </tr>
  );
}

export default ProductCategoryRow;