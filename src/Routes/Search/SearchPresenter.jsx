import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';

const Container = styled.div`
  padding:0px 20px;
`;

const Form = styled.form`
  margin-bottom:50px;
  width:100%;
`;

const Input = styled.input`
  all:unset;
  font-size:28px;
  width:100%;
`;


const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  handleSubmit,
  error,
  updateTerm
}) => (
<Container>
  <Form onSubmit={handleSubmit}>
    <Input placeholder="Search Movies or TV Shows..." 
    value={searchTerm}
    onChange={updateTerm}/>
  </Form>
  {loading ? <Loader/> : 
    <>
      {movieResults && movieResults.length > 0 && (
        <Section title="Movie Results">
          {movieResults.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
      )}
      {tvResults && tvResults.length > 0 && (
        <Section title="TV Results">
          {tvResults.map(tv => <span key={tv.id}>{tv.name}</span>)}
        </Section>
      )}
    </>
  }
</Container>);

SearchPresenter.defaultProps = {
  movieResults:[],
  tvResults:[],
  searchTerm:'',
  error:''
}

SearchPresenter.propTypes = {
  movieResults: PropTypes.arrayOf(PropTypes.object),
  tvResults: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;