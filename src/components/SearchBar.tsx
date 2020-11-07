import React from 'react';

interface Props {
  keyword: string;
  setKeyword: any;
  stockChecked: boolean;
  setStockChecked: any;
}

const SearchBar: React.FC<Props> = (props) => {

  return (
    <>
      <input placeholder="Search..." value={props.keyword}
              onChange={(e) => props.setKeyword(e.target.value)}></input><br />
      <input type="checkbox" checked={props.stockChecked}
             onChange={(e) => props.setStockChecked(e.target.checked)}></input>
      Only show products in stock
    </>
  );
}

export default SearchBar;