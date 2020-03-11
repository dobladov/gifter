/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

import '../styles/LightBoxItem.css';

export interface Props {
  className?: string
  main?: boolean
  onClick?: (e) => void
  item: Item
}

export interface Item {
  id: string
  username: string
  images: {
    fixed_width_still: {
      url: string
    }
    downsized_still: {
      url: string
    }
    original: {
      width: string
      height: string
      webp: string
      url: string
    }
    original_mp4: {
      mp4: string
    }
    fixed_width: {
      webp: string
      mp4: string
    }
  }
}

const LightBoxItem = ({
  item, onClick, main, className,
}: Props) => (
  <a
    className={`LightBoxItem${className ? ` ${className}` : ''}`}
    href={`#${item.id}`}
    onClick={onClick}
  >
    <video
      poster={main ? item.images.downsized_still.url : item.images.fixed_width_still.url}
      key={item.id}
      loop
      autoPlay
      muted
      width={main ? item.images.original.width : 'auto'}
      height={main ? item.images.original.height : 'auto'}
    >
      {main ? (
        <>
          <source src={item.images.original.webp} type="video/webp" />
          <source src={item.images.original_mp4.mp4} type="video/mp4" />
        </>
      ) : (
        <>
          <source src={item.images.fixed_width.webp} type="video/webp" />
          <source src={item.images.fixed_width.mp4} type="video/mp4" />
        </>
      )}
    </video>

    {main && (
      <div
        className="meta"
      >
        {item.username && (
          <span
            className="credit"
          >
            {`By: @${item.username}`}
          </span>
        )}
        <button
          type="button"
          className="styledInput"
          onClick={() => {
            // Creates and delete a dom element
            // to copy the value to the clipboard
            const el = document.createElement('textarea');
            el.value = item.images.original.url;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
          }}
        >
          Copy Link
        </button>
      </div>
    )}
  </a>
);

export default LightBoxItem;
