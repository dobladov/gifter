import React, { useState, useEffect } from 'react';
import Header from './Header';
import ItemList from './ItemList';
import Pagination from './Pagination';
import LightBox from './LightBox';
import Search from './Search';
import Loading from './Loading';

import { fetchData } from '../common';

export interface GetPage {
  (obj: getPageOptions)
  : void;
}

export interface getPageOptions {
  q?: string,
  offset?: number,
  newPage?: number
}

declare const process : {
  env: {
    API_URL: string
    API_KEY: string
    BASE_URL: string
  }
};

const { API_URL } = process.env;
const { API_KEY } = process.env;
const { BASE_URL = '/' } = process.env;

const App = () => {
  // Define state elements
  const [searchTerm, setSearchTerm] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelectedIndex, setItemSelectedIndex] = useState<number | null>(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);

  // Loads the data form the api with the given parameters,
  // if the required parameters are not presents it loads trending
  const getPage = async ({ q, offset = 0, newPage = 0 }: getPageOptions) => {
    setLoading(true);
    const url = `${API_URL}/${q ? 'search' : 'trending'}?api_key=${API_KEY}&q=${q}&offset=${offset}`;
    const { data, pagination: newPagination } = await fetchData(url);
    setItemList(data);
    setPagination({ ...newPagination, page: newPage });
    setLoading(false);
  };

  useEffect(() => {
    // Get trending
    getPage({});
  }, []);

  return (
    <div className="wrapper">

      <Header BASE_URL={BASE_URL} />

      <main>
        <LightBox
          itemList={itemList}
          itemSelectedIndex={itemSelectedIndex}
          setItemSelectedIndex={setItemSelectedIndex}
        />

        <div className="controls">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            getPage={getPage}
          />

          <Pagination
            searchTerm={searchTerm}
            pagination={pagination}
            getPage={getPage}
          />
        </div>

        {loading && (
          <Loading />
        )}

        {(!loading && itemList.length === 0) ? (
          <div className="centerWrapper">
            <h3>Nothing found!</h3>
          </div>
        ) : (
          <ItemList items={itemList} setItemSelectedIndex={setItemSelectedIndex} />
        )}

      </main>
    </div>
  );
};

export default App;
