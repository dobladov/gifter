var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ItemList from './ItemList';
import Pagination from './Pagination';
import LightBox from './LightBox';
import Search from './Search';
import Loading from './Loading';
import { fetchData } from '../common';
const { API_URL } = process.env;
const { API_KEY } = process.env;
const { BASE_URL = '/' } = process.env;
const App = () => {
    // Define state elements
    const [searchTerm, setSearchTerm] = useState('');
    const [itemList, setItemList] = useState([]);
    const [itemSelectedIndex, setItemSelectedIndex] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(true);
    // Loads the data form the api with the given parameters,
    // if the required parameters are not presents it loads trending
    const getPage = ({ q, offset = 0, newPage = 0 }) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        const url = `${API_URL}/${q ? 'search' : 'trending'}?api_key=${API_KEY}&q=${q}&offset=${offset}`;
        const { data, pagination: newPagination } = yield fetchData(url);
        setItemList(data);
        setPagination(Object.assign(Object.assign({}, newPagination), { page: newPage }));
        setLoading(false);
    });
    useEffect(() => {
        // Get trending
        getPage({});
    }, []);
    return (React.createElement("div", { className: "wrapper" },
        React.createElement(Header, { BASE_URL: BASE_URL }),
        React.createElement("main", null,
            React.createElement(LightBox, { itemList: itemList, itemSelectedIndex: itemSelectedIndex, setItemSelectedIndex: setItemSelectedIndex }),
            React.createElement("div", { className: "controls" },
                React.createElement(Search, { searchTerm: searchTerm, setSearchTerm: setSearchTerm, getPage: getPage }),
                React.createElement(Pagination, { searchTerm: searchTerm, pagination: pagination, getPage: getPage })),
            loading && (React.createElement(Loading, null)),
            (!loading && itemList.length === 0) ? (React.createElement("div", { className: "centerWrapper" },
                React.createElement("h3", null, "Nothing found!"))) : (React.createElement(ItemList, { items: itemList, setItemSelectedIndex: setItemSelectedIndex })))));
};
export default App;
