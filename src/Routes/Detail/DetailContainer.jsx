/* eslint-disable react/prop-types */
import React from 'react';
import DetailPresenter from './DetailPresenter';
import {movieApi, tvApi} from '../../api'

export default class extends React.Component {
    constructor(props) {
      super(props);
      const {location:{pathname}} = props;
      this.state = {
        result: null,
        error: null,
        loading: true,
        isMovie : pathname.includes("/movie/"),
      };
  
    }

    async componentDidMount() {
      const{
        match:{
          params: {id}
        },
        history:{push},
      } = this.props;
      const {isMovie} = this.state;
      const parsedId = parseInt(id,10);
      if(Number.isNaN(parsedId)){
        push("/");
      }
      let result;
      try{
        if(isMovie){
           ({data:result}= await movieApi.showDetail(parsedId));
        }
        else{
           ({data:result}= await tvApi.showDetail(parsedId));
        }
      }
      catch{
        this.setState({error:"Can't find anything"})
      }finally{
        this.setState({loading:false,result});
      }
    }

    render() {
      const { result, error, loading } = this.state;
      return (
        <DetailPresenter
          result={result}
          error={error}
          loading={loading}
        />
      );
    }
}
