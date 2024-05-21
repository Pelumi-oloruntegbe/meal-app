import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      
      <RotatingLines
        visible={true}
        width="200"
        color="green"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
