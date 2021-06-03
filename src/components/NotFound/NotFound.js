import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='search-bar text-xl text-center py-4 w-full'>
      <div>404</div>
      <img src='./voldemort.png' alt='he who must not be named' />
      <div>
        Sorry, We cannot seem to find what you are looking for...
      </div>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default NotFound;
