import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Divider = styled.span`
  margin:0 10px;
`;

const Twitter = (props) => {
    const{link} = props;
    if(link === null) return null;
    return(
        <>
            <a href={`https://twitter.com/${link}`}>
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </a>
            <Divider>·</Divider>
        </>
    )
}
const Facebook = (props) =>{
    const {link} = props;
    if(link === null) return null;
    return(
        <>
            <a href={`https://facebook.com/${link}`}>
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
            <Divider>·</Divider>
        </>
    )
}

const Instagram = (props) =>{
    const {link} = props;
    if(link === null) return null;
    return(
        <>
            <a href={`https://instagram.com/${link}`}>
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
            </a>
        </>
    )
}

const SnsInfo = (externalID) => {
    const {externalID:{twitter_id:twitterId,facebook_id:facebookId,instagram_id:instagramId}} = externalID;
    return(
        <>
            <Twitter link={twitterId}/>
            <Facebook link={facebookId}/>
            <Instagram link={instagramId}/>
        </>
    )
}
Twitter.propTypes = {
    link:PropTypes.string,
}
Twitter.defaultProps = {
    link:""
}
Facebook.propTypes = {
    link:PropTypes.string,
}
Facebook.defaultProps = {
    link:"",
}
Instagram.propTypes = {
    link:PropTypes.string,
}
Instagram.defaultProps = {
    link:"",
}

export default SnsInfo;