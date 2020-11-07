import React, { useState } from 'react';
import { Product } from '../dto/Product';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const products: Array<Product> =  [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

function FilterableProductTable() {
  const [keyword, setKeyword] = useState<string>('');
  const [stockChecked, setStockChecked] = useState(false);

  return (
    <div>
      <SearchBar keyword={keyword} setKeyword={setKeyword}
                 stockChecked={stockChecked} setStockChecked={setStockChecked}></SearchBar>
      <ProductTable products={products.filter(item => item.name.indexOf(keyword) >= 0).filter(item => stockChecked ? item.stocked : true)}></ProductTable>
    </div>
  )
}

export default FilterableProductTable;