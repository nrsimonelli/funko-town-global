import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = (data) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    console.log('onChange:', event.target.value);
    setSearchQuery(event.target.value);
  };

  return (
    <div className='search-bar text-xl flex-row justify-center text-center py-4 w-full'>
      <input
        className='search-bar-input text-xl p-2 min-w-60 bg-transparent text-accent-darker'
        placeholder='Search'
        value={searchQuery}
        onChange={handleChange}
      />
      <AiOutlineSearch
        className='search-bar-button h-10 w-10 p-2 text-primary-darker bg-accent'
        onClick={() => data.search(searchQuery)}
      />
    </div>
  );
};

export default SearchBar;
