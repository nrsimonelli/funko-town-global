import React from 'react';

const PopCard = (data) => {
  return (
    <div className='pop-card bg-primary b px-4 flex items-center justify-center'>
      <div className='py-4'>{data.title}</div>
      <div className='pop-image'>
        <img className='w-64' src={`${data.image}`} alt='' />
      </div>
      <div className='py-4'>buttons</div>
    </div>
  );
};

export default PopCard;
