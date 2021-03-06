import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message'
import Poster from '../../Components/Poster'

const Container = styled.div`
  padding:0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => loading ? <Loader /> : <>
  <Helmet><title>TV show | React Movie App</title></Helmet>
  <Container>
    {topRated && topRated.length > 0 && 
    <Section title="Top Rated Shows">
      {topRated.map(show =>
        <Poster
          key={show.id}
          id={show.id}
          title={show.original_name}
          imageUrl={show.poster_path}
          isMovie={false}
          rating={show.vote_average}
          year={show.first_air_date && show.first_air_date.substring(0,4)}
        />)}
    </Section>}
    {popular && popular.length > 0 && 
    <Section title="Popular Shows">
      {popular.map(show =>
        <Poster
          key={show.id}
          id={show.id}
          title={show.original_name}
          imageUrl={show.poster_path}
          isMovie={false}
          rating={show.vote_average}
          year={show.first_air_date && show.first_air_date.substring(0,4)}
        />)}
    </Section>}
    {airingToday && airingToday.length > 0 && 
    <Section title="Shows Airing Today">
      {airingToday.map(show =>
        <Poster
          key={show.id}
          id={show.id}
          title={show.original_name}
          imageUrl={show.poster_path}
          isMovie={false}
          rating={show.vote_average}
          year={show.first_air_date && show.first_air_date.substring(0,4)}
        />)}
    </Section>}
    {error && <Message color="#e74c3c" text = {error}/>}
  </Container>
</>

TVPresenter.defaultProps = {
  topRated:[],
  popular:[],
  airingToday:[],
  error:"",
}

TVPresenter.propTypes = {
  topRated: PropTypes.arrayOf(PropTypes.object),
  popular: PropTypes.arrayOf(PropTypes.object),
  airingToday: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
