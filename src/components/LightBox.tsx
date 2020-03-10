import React, { useRef, useEffect } from 'react';
import LightBoxItem from './LightBoxItem.tsx';

import '../styles/LightBox.css';

export interface Props {
  // TODO
}

const LightBox = ({
  itemSelectedIndex,
  setItemSelectedIndex,
  itemList,
}: Props) => {
  const lightBoxContent = useRef(null);

  const current = itemList[itemSelectedIndex];
  const prevItem = itemList[itemSelectedIndex - 1] || null;
  const nextItem = itemList[itemSelectedIndex + 1] || null;

  const handleKeys = ({ key }) => {
    if (key === 'Escape') {
      setItemSelectedIndex(null);
    } else if (key === 'ArrowLeft' && itemSelectedIndex !== 0) {
      setItemSelectedIndex(itemSelectedIndex - 1);
    } else if (key === 'ArrowRight' && itemSelectedIndex < itemList.length - 1) {
      setItemSelectedIndex(itemSelectedIndex + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeys);
    return () => {
      window.removeEventListener('keyup', handleKeys);
    };
  }, [itemSelectedIndex]);

  return (
    current ? (
      <div
        className="LightBox"
        role="presentation"
        onClick={(e) => {
          if (!lightBoxContent.current.contains(e.target)) {
            setItemSelectedIndex(null);
          }
        }}
      >

        <div
          className="lightBoxContent"
          ref={lightBoxContent}
        >

          {prevItem && (
          <LightBoxItem
            className="prev"
            item={prevItem}
            onClick={() => {
              setItemSelectedIndex(itemSelectedIndex - 1);
            }}
          />
          )}

          <LightBoxItem
            main
            item={current}
          />


          {nextItem && (
          <LightBoxItem
            className="next"
            item={nextItem}
            onClick={() => {
              setItemSelectedIndex(itemSelectedIndex + 1);
            }}
          />
          )}

          <button
            className="close styledInput"
            type="button"
            onClick={() => {
              setItemSelectedIndex(null);
            }}
          >
            Close
          </button>
        </div>

      </div>
    ) : null
  );
};

export default LightBox;
