import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import noPoster from "../../assets/error.jpg";
import Message from '../../Components/Message';
import IMDB from '../../Components/IMDB';
import SnsInfo from '../../Components/SnsInfo';

const Container = styled.div`
  height: calc(100vh - 50px);
  width:100%;
  position:relative;
  padding:50px;
`;

const Backdrop = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${props => props.bgImage}) ;
  background-position:center center;
  background-size : cover;
  filter:blur(3px);
  z-index:0;

`;

const Content = styled.div`
  display:flex;
  width:100%;
  height:100%;
  position:relative;
  z-index:1;
  @media screen and (max-width:1024px){
    //flex-direction:column;
  }
`;

const Cover = styled.div`
  width:30%;
  background-image:url(${props => props.bgImage});
  background-position:center center;
  background-size:cover;
  height:100%;
  border-radius:5px;
  @media screen and (max-width:1024px){
    width:100%;
    background-size:contain;
    background-repeat:no-repeat;
  }
`;

const Data = styled.div`
  width:70%;
  margin-left:10px;
`;

const Title = styled.h3`
  font-size:30pt;
  margin-bottom:10px;
`;

const ItemContainer = styled.div`
  margin:20px 0 ;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin:0 10px;
`;

const Overview = styled.p`
  font-size:12px;
  opacity:0.7;
  line-height:1.5;
  width:50%;
`;

const DetailPresenter = ({ result, loading, error }) => (
  loading ? (
    <>
      <Loader/>
      <Helmet><title>Loading...</title></Helmet>
    </>
  ) : (
    <>
      <Helmet>
        <title>{result.original_title || result.original_name} | React Movie App</title>
      </Helmet>
      <Container>
        <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
        <Content>
          <Cover
            bgImage={
              result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : `${noPoster}`
            }
          />
          <Data>
            <Title>{result.original_title || result.original_name}</Title>
            <ItemContainer>
              <Item>
                {result.release_date || result.first_air_date}
              </Item>
              <Divider>·</Divider>
              <Item>
                {`${result.runtime || (result.episode_run_time && result.episode_run_time[0]) || '?'} min`}
              </Item>
              <Divider>·</Divider>
              <Item>
                {(result.genres && result.genres.length > 1) ?
                  result.genres.map((genre,index) => 
                    index === result.genres.length - 1
                      ? genre.name 
                      : `${genre.name} / `)
                  : "no genres info"
                }
              </Item>
              <Divider>·</Divider>
              <IMDB externalID={result.external_ids}/>
            </ItemContainer>
            <ItemContainer >
              <SnsInfo externalID={result.external_ids}/>
            </ItemContainer>
            <Overview>
              {result.overview}
            </Overview>
          </Data>
        </Content>
        {error && <Message color="#e74c3c" text = {error}/>}
      </Container>
    </>
  )
);

DetailPresenter.propTypes = {
  result: PropTypes.objectOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

DetailPresenter.defaultProps = {
  result:{},
  error:""
}

export default DetailPresenter;
