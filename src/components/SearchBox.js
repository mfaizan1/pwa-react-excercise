import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <label for="search">Search</label>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
        name="search"
        id="search"
      />
    </div>
  );
}

export default SearchBox;