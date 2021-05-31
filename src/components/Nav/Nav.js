import React from 'react';

const Nav = () => {
  return (
    <div className='nav-root h-16 w-full bg-primary-dark'>
      <div className='container mx-auto h-full flex-row justify-between items-center'>
        <div className='ml-4'>Pop City</div>
        <div className='mr-4'>Profile</div>
      </div>
    </div>
  );
};

export default Nav;
