import React from 'react';

const SearchBox = ({ value, onFilter }) => {
    return (
        <input
            type="text"
            placeholder="Search by name..."
            value={value}
            onChange={onFilter}
        />
    );
};

export default SearchBox;