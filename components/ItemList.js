import React from 'react';
import '../styles/ItemList.css';
const ItemList = ({ items, setItemSelectedIndex }) => (React.createElement("ul", { className: "ItemList" }, items.map((item, i) => (React.createElement("li", { key: item.id },
    React.createElement("a", { href: `#${item.id}`, onClick: (e) => {
            e.preventDefault();
            setItemSelectedIndex(i);
        } },
        React.createElement("img", { src: item.images.fixed_height_still.url, loading: "lazy", alt: item.title })))))));
export default ItemList;
