import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading,
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-7">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              ref="searchForm"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" name="savesearch" value="search" className="btn btn-primary btn-bg mt-3">
              Search
            </button> {' '} 
            <button type="reset" value="Reset" onClick={this.clearForm} className="btn btn-primary btn-bg mt-3">
              Clear
            </button>
            
          </form>

          
 

        </div>
      </div>
    );
  }
}




const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading,}
)(SearchForm);

