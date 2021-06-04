import React from 'react';

const PopCard = (data) => {
  return (
    <div className='pop-card bg-primary p-4 flex items-center justify-center w-full md:w-72'>
      <div className='py-4'>{data.title}</div>
      <div className='pop-image'>
        <img className='w-64' src={`${data.image}`} alt='' />
      </div>
      <div className='py-4 flex-row'>
        <div className='mx-4'>collection</div>
        <div className='mx-4'>wishlist</div>
      </div>
    </div>
  );
};

export default PopCard;
