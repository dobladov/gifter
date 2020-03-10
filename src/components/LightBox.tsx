import React, { useRef, useEffect, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
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
  let mouseStart = null;
  const lightBoxContent = useRef(null);

  const current = itemList[itemSelectedIndex];
  const prevItem = itemList[itemSelectedIndex - 1] || null;
  const nextItem = itemList[itemSelectedIndex + 1] || null;
  const destopView = useMediaPredicate('(min-width: 992px)');

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

          {destopView && prevItem && (
          <LightBoxItem
            className="prev"
            item={prevItem}
            onClick={() => {
              setItemSelectedIndex(itemSelectedIndex - 1);
            }}
          />
          )}

          <div
            onTouchStart={(e) => {
              mouseStart = (e.touches[0].clientX);
            }}
            onTouchEnd={(e) => {
              const mouseEnd = e.changedTouches[0].pageX;
              const prev = mouseEnd < mouseStart - 100;
              const next = mouseEnd > mouseStart + 100;

              if (prev) {
                setItemSelectedIndex(itemSelectedIndex - 1);
              } else if (next) {
                setItemSelectedIndex(itemSelectedIndex + 1);
              }
            }}
          >
            <LightBoxItem
              main
              item={current}
            />
          </div>


          {destopView && nextItem && (
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
