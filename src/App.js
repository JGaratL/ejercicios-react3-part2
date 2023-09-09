import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import ColorText from './components/ColorText';

function App() {
  const [selectedColor, setSelectedColor] = useState('#000000'); // Estado para almacenar el color seleccionado

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  return (
    <div>
      <h1>Color Picker App</h1>
      <ColorText textColor={selectedColor} />

      <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
    </div>
  );
}

export default App;

