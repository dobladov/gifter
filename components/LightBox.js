import React, { useRef, useEffect } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import LightBoxItem from './LightBoxItem';
import '../styles/LightBox.css';
const LightBox = ({ itemSelectedIndex, setItemSelectedIndex, itemList, }) => {
    let mouseStart = null;
    const lightBoxContent = useRef(null);
    const current = itemList[itemSelectedIndex];
    const prevItem = itemList[itemSelectedIndex !== null && itemSelectedIndex - 1] || null;
    const nextItem = itemList[itemSelectedIndex !== null && itemSelectedIndex + 1] || null;
    const destopView = useMediaPredicate('(min-width: 992px)');
    const handleKeys = ({ key }) => {
        if (key === 'Escape') {
            setItemSelectedIndex(null);
        }
        else if (key === 'ArrowLeft' && itemSelectedIndex !== 0) {
            if (itemSelectedIndex !== null) {
                setItemSelectedIndex(itemSelectedIndex - 1);
            }
        }
        else if (key === 'ArrowRight' && itemSelectedIndex !== null && itemSelectedIndex < itemList.length - 1) {
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
    return (current ? (React.createElement("div", { className: "LightBox", role: "presentation", onClick: (e) => {
            if (!lightBoxContent.current.contains(e.target)) {
                setItemSelectedIndex(null);
            }
        } },
        React.createElement("div", { className: "lightBoxContent", ref: lightBoxContent },
            destopView && prevItem && (React.createElement(LightBoxItem, { className: "prev", item: prevItem, onClick: () => {
                    if (itemSelectedIndex !== null) {
                        setItemSelectedIndex(itemSelectedIndex - 1);
                    }
                } })),
            React.createElement("div", { onTouchStart: (e) => {
                    mouseStart = (e.touches[0].clientX);
                }, onTouchEnd: (e) => {
                    const mouseEnd = e.changedTouches[0].pageX;
                    const prev = (mouseStart && (mouseEnd < mouseStart - 100)) || false;
                    const next = (mouseStart && mouseEnd > mouseStart + 100) || false;
                    if (prev && itemSelectedIndex !== null) {
                        setItemSelectedIndex(itemSelectedIndex - 1);
                    }
                    else if (next && itemSelectedIndex !== null) {
                        setItemSelectedIndex(itemSelectedIndex + 1);
                    }
                } },
                React.createElement(LightBoxItem, { main: true, item: current })),
            destopView && nextItem && (React.createElement(LightBoxItem, { className: "next", item: nextItem, onClick: () => {
                    if (itemSelectedIndex !== null) {
                        setItemSelectedIndex(itemSelectedIndex + 1);
                    }
                } })),
            React.createElement("button", { "aria-label": "Close Modal", className: "close styledInput", type: "button", onClick: () => {
                    setItemSelectedIndex(null);
                } }, "Close")))) : null);
};
export default LightBox;
