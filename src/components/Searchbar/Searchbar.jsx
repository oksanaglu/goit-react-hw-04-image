import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdSearch } from 'react-icons/md';
import { SearchHeader, SearchForm, SearchFormInput, SearchButton } from './Searchbar.styled';



export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.warn('Please specify your query!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <MdSearch style={{ width: 25, height: 25 }} />
          </SearchButton>

          <SearchFormInput
            type="text"
            name="query"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export default SearchBar;
