import React from 'react';

import '../styles/ItemList.css';

export interface Props {
  items: Item[]
  setItemSelectedIndex: (i: number) => void
}

export interface Item {
  id: string
  title: string
  images: {
    fixed_height_still: {
      url: string
    }
  }
}

const ItemList = ({ items, setItemSelectedIndex }: Props) => (
  <ul className="ItemList">
    {items.map((item, i) => (
      <li
        key={item.id}
      >
        <a
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
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
