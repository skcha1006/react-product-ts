import React from 'react';

interface Props {
  name: String;
  price: String;
  stocked: boolean;
}

const ProductRow: React.FC<Props> = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;