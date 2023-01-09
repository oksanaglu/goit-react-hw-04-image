import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdSearch } from 'react-icons/md';
import { SearchHeader, SearchForm, SearchFormInput, SearchButton } from './Searchbar.styled';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.warn('Please specify your query!');
      return;
    }
    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

    return (
      <SearchHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <MdSearch style={{ width: 25, height: 25 }} />
          </SearchButton>

          <SearchFormInput
            type="text"
            name="query"
            value={query}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    );
};


SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
