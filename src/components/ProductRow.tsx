import classNames from 'classnames';
import React from 'react';
import styles from './ProductRow.module.scss';

interface Props {
  name: String;
  price: String;
  stocked: boolean;
}

const ProductRow: React.FC<Props> = (props) => {
  return (
    <tr className={classNames({[styles.stock]: !props.stocked})}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;