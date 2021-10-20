import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section'
import Loader from '../../Components/Loader';

const Container = styled.div`
  padding:0px 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>(loading ? <Loader /> :
  <Container>
    {upcoming && upcoming.length > 0 && (
      <Section title="Upcoming movies">
        {upcoming.map(movie => <span key="{movie.id}">{movie.title}</span>)}
      </Section>
    )}
    {nowPlaying && nowPlaying.length > 0 && (
     <Section title="Now Playing">
       {nowPlaying.map(movie => <span key="{movie.id}">{movie.title}</span>)}
     </Section>
    )}
    {popular && popular.length > 0 && (
      <Section title="popular movie">
        {popular.map(movie => <span key="{movie.id}">{movie.title}</span>)}
      </Section>
    )}

  </Container>
);

HomePresenter.defaultProps = {
  nowPlaying:[],
  popular:[],
  upcoming:[],
  error:""
}

HomePresenter.propTypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes.object),
  popular: PropTypes.arrayOf(PropTypes.object),
  upcoming: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
