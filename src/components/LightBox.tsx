import React, { useRef, useEffect } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import LightBoxItem, { Item } from './LightBoxItem';

import '../styles/LightBox.css';

export interface Props {
  itemSelectedIndex: number | null
  setItemSelectedIndex: (i: number | null) => void
  itemList: Item[]
}

export interface handleKeys {
  key: string
}

const LightBox = ({
  itemSelectedIndex,
  setItemSelectedIndex,
  itemList,
}: Props) => {
  let mouseStart: number | null = null;
  const lightBoxContent = useRef(null);

  const current = itemList[itemSelectedIndex];
  const prevItem = itemList[itemSelectedIndex !== null && itemSelectedIndex - 1] || null;
  const nextItem = itemList[itemSelectedIndex !== null && itemSelectedIndex + 1] || null;
  const destopView = useMediaPredicate('(min-width: 992px)');

  const handleKeys = ({ key }: handleKeys) => {
    if (key === 'Escape') {
      setItemSelectedIndex(null);
    } else if (key === 'ArrowLeft' && itemSelectedIndex !== 0) {
      if (itemSelectedIndex !== null) {
        setItemSelectedIndex(itemSelectedIndex - 1);
      }
    } else if (key === 'ArrowRight' && itemSelectedIndex !== null && itemSelectedIndex < itemList.length - 1) {
      if (itemSelectedIndex !== null) {
        setItemSelectedIndex(itemSelectedIndex + 1);
      }
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
            onClick={(e) => {
              e.preventDefault();
              if (itemSelectedIndex !== null) {
                setItemSelectedIndex(itemSelectedIndex - 1);
              }
            }}
          />
          )}

          <div
            onTouchStart={(e) => {
              mouseStart = (e.touches[0].clientX);
            }}
            onTouchEnd={(e) => {
              const mouseEnd = e.changedTouches[0].pageX;
              const prev: boolean = (mouseStart && (mouseEnd < mouseStart - 100)) || false;
              const next: boolean = (mouseStart && mouseEnd > mouseStart + 100) || false;

              if (prev && itemSelectedIndex !== null) {
                setItemSelectedIndex(itemSelectedIndex - 1);
              } else if (next && itemSelectedIndex !== null) {
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
            onClick={(e) => {
              e.preventDefault();
              if (itemSelectedIndex !== null) {
                setItemSelectedIndex(itemSelectedIndex + 1);
              }
            }}
          />
          )}

          <button
            aria-label="Close Modal"
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
