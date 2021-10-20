import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';

const Container = styled.div`
  padding:0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => loading ? <Loader /> : 
<Container>
  {topRated && topRated.length > 0 && 
  <Section title="Top Rated Shows">
    {topRated.map(show => <span key="{show.id}">{show.name}</span>)}
  </Section>}
  {popular && popular.length > 0 && 
  <Section title="Popular Shows">
    {popular.map(show => <span key="{show.id}">{show.name}</span>)}
  </Section>}
  {airingToday && airingToday.length > 0 && 
  <Section title="Shows Airing Today">
    {airingToday.map(show => <span key="{show.id}">{show.name}</span>)}
  </Section>}
</Container>

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
