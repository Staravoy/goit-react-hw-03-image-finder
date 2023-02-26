import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

class SearchBar extends Component {

   state = {
    search: '',
  };

  searchResult = event => {
    this.setState({
      search: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;

    this.props.onSubmit(search);
    this.setState({
      search: '',
    });
  };

  render() {
    const { search } = this.state;
        return (
            <header className={css.head}>
         <form onSubmit={this.handleSubmit} className={css.form}>
      <button type="submit" className = {css.button}>
      <span className={css.label}>Search</span>
    </button>

    <input
            className={css.input}
            placeholder='Search images and photos'
            type="text"
            autoComplete="off"
            autoFocus
            value={search}
            onChange={this.searchResult}
    />
  </form>
</header>
        )
    }

}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
