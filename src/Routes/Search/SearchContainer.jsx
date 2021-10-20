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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(event) {
    event.preventDefault();
    const {searchTerm} = this.state;
    if(searchTerm !== ""){
      this.searchByTerm();
    }
  }
  
  updateTerm = (event) => {
    const {
      target:{value}
    } = event;
    this.setState({searchTerm:value});
    const {searchTerm} = this.state;
  };

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
  };

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
        updateTerm={this.updateTerm}
      />
    );
  };
}
