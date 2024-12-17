import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input
            type='text'
            placeholder='Search certifications...'
            className='w-full p-2 border rounded-lg'
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;
