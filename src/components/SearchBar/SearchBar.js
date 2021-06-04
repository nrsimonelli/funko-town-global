import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = (data) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === 'Enter' && searchQuery.length >= 3) {
      data.search(searchQuery);
    }
  };

  const handleClick = () => {
    console.log(searchQuery);
    if (searchQuery.length >= 3) {
      data.search(searchQuery);
    }
  };

  return (
    <div className='search-bar text-xl flex-row justify-center text-center py-4 w-full'>
      <input
        className='search-bar-input text-xl p-2 min-w-60 bg-transparent text-secondary-dark'
        placeholder='Search'
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKey}
      />
      <AiOutlineSearch
        className='search-bar-button h-10 w-10 p-2 text-primary bg-secondary'
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchBar;
