import _ from 'lodash';
import React from 'react';
import { Product } from '../dto/Product';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface Props {
  products: Array<Product>
}

const ProductTable: React.FC<Props> = (props) => {
  const category = _.groupBy(props.products, 'category');
  const categoryList = [];
  for (let key in category) {
    categoryList.push(<ProductCategoryRow category={key} key={key}></ProductCategoryRow>);
    category[key].forEach((item: Product) => {
      categoryList.push(<ProductRow name={item.name} price={item.price} stocked={item.stocked} key={item.name}></ProductRow>);
    });
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            categoryList
          }
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;