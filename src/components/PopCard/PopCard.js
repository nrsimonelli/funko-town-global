import React from 'react';

const PopCard = (data) => {
  return (
    <div className='pop-card bg-primary-light mx-4 flex items-center'>
      <div>{data.title}</div>
      <div className='pop-image'>
        <img src={`${data.image}`} alt='' />
      </div>
    </div>
  );
};

export default PopCard;
