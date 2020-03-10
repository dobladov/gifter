import React, { useState, useEffect } from 'react';
import Header from './Header.tsx';
import ItemList from './ItemList.tsx';
import Pagination from './Pagination.tsx';
import LightBox from './LightBox.tsx';
import Search from './Search.tsx';
import Loading from './Loading.tsx';

import { fetchData } from '../common.ts';

const { API_URL } = process.env;
const { API_KEY } = process.env;

const App = () => {
  // Define state elements
  const [searchTerm, setSearchTerm] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelectedIndex, setItemSelectedIndex] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);

  // Loads the data form the api with the given parameters,
  // if the required parameters are not presents it loads trending
  const getPage = async ({ q, offset = 0, newPage = 0 }) => {
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

      <Header />

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
