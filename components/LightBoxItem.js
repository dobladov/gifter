/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import '../styles/LightBoxItem.css';
const LightBoxItem = ({ item, onClick, main, className, }) => {
    const [copyButtonText, setCopyButtonText] = useState('Copy Link');
    return (React.createElement("a", { className: `LightBoxItem${className ? ` ${className}` : ''}`, href: `#${item.id}`, onClick: onClick },
        React.createElement("video", { poster: main ? item.images.downsized_still.url : item.images.fixed_width_still.url, key: item.id, loop: true, autoPlay: true, muted: true, width: main ? item.images.original.width : 'auto', height: main ? item.images.original.height : 'auto' }, main ? (React.createElement(React.Fragment, null,
            React.createElement("source", { src: item.images.original.webp, type: "video/webp" }),
            React.createElement("source", { src: item.images.original_mp4.mp4, type: "video/mp4" }))) : (React.createElement(React.Fragment, null,
            React.createElement("source", { src: item.images.fixed_width.webp, type: "video/webp" }),
            React.createElement("source", { src: item.images.fixed_width.mp4, type: "video/mp4" })))),
        main && (React.createElement("div", { className: "meta" },
            item.username && (React.createElement("span", { className: "credit" }, `By: @${item.username}`)),
            React.createElement("button", { type: "button", className: "styledInput", onClick: () => {
                    // Creates and delete a dom element
                    // to copy the value to the clipboard
                    const el = document.createElement('textarea');
                    el.value = item.images.original.url;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                    setCopyButtonText('Copied to clipboard!');
                    setTimeout(() => {
                        setCopyButtonText('Copy Link');
                    }, 1000);
                } }, copyButtonText)))));
};
export default LightBoxItem;
