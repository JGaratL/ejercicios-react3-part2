import React from 'react';

function ColorPicker({ selectedColor, onColorChange }) {
  const handleChange = (e) => {
    const newColor = e.target.value;
    onColorChange(newColor);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input type="color" value={selectedColor} onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
