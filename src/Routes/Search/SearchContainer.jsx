import React from 'react';
import { movieApi, tvApi } from '../../api';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieResults: null,
      tvResults: null,
      searchTerm: '',
      loading: false,
      error: null,
    };
  }

  handleSubmit() {
    const {searchTerm} = this.state;
    if(searchTerm !== ""){
      this.searchByTerm();
    }
  }

  searchByTerm = async() =>{
    const {searchTerm} = this.state;
    try{
      this.setState({loading: true});
      const {data:{results:movieResults}} = await movieApi.search(searchTerm);
      const {data:{results:showResults}} = await tvApi.search(searchTerm);
      this.setState({movieResults,tvResults:showResults})
    }
    catch{
      this.setState({error:"Can't find result"})
    }
    finally{
      this.setState({loading: false});
    }
  }

  render() {
    const {
      movieResults, tvResults, searchTerm, loading, error,
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
