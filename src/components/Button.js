import React from 'react';

const Button = ({ border, color, backgroundColor, textDecoration, display,
    fontSize, height, width, opacity, boxShadow, outline, borderRadius, margin,
    padding, cursor, font, onClick, onHover, children }) => {
    return (
        <button
            onClick={onClick}
            onHover={onHover} 
            style={{
                border,
                color,
                backgroundColor,
                textDecoration,
                display,
                fontSize,
                height,
                width,
                opacity,
                boxShadow,
                outline,
                borderRadius,
                margin,
                padding,
                cursor,
                font
            }}
        >
            {children}
        </button>
    );
}

export default Button;