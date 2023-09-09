import React from 'react';

function ColorText({ textColor }) {
  const textStyle = {
    color: textColor,
  };

  return (
    <div>
      <h2>Texto</h2>
      <p style={textStyle}>Este es un texto de ejemplo.</p>
    </div>
  );
}

export default ColorText;
