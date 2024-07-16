import React from 'react';
import loading from './loader2.gif';

const Spinner = () => {
  return (
    <div className='text-center spinner-container'>
      <img src={loading} style={{ width: '75px', height: '75px', backgroundColor: "transparent" }} alt="loading..." />
    </div>
  );
};

export default Spinner;