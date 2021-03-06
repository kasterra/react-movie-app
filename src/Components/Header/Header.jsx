import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  color:white;
  position:fixed;
  top:0;
  left:0;
  height:50px;
  display:flex;
  align-items:center;
  padding: 8px 10px;
  background-color:rgba(20,20,20,0.8);
  width:100vw;
  z-index:10;
  box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);
  font-size:12pt;
`;

const List = styled.ul`
  display:flex;
`;

const Item = styled.li`
  width:50px;
  height:50px;
  &:not(:last-child){
    margin-right:10px;
  };
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom: 3px solid ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition:border-bottom .5s ease-in-out;
`;

const SLink = styled(Link)`
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
