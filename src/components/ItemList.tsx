import React from 'react';

import '../styles/ItemList.css';

const ItemList = ({ items, setItemSelectedIndex }) => (
  <ul className="ItemList">
    {items.map((item, i) => (
      <li
        key={item.id}
      >
        <a
          href={`#${item.id}`}
          onClick={() => {
            setItemSelectedIndex(i);
          }}
        >
          <img
            src={item.images.fixed_height_still.url}
            loading="lazy"
            alt={item.title}
          />
        </a>
      </li>
    ))}
  </ul>
);

export default ItemList;
