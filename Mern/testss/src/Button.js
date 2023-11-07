import React, { useState } from 'react';

function Button() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button onClick={handleClick} data-testid="button">
      {clicked ? 'Clicked' : 'Click me'}
    </button>
  );
}

export default Button;