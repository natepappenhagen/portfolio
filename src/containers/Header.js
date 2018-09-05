import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';
import TypedJS from '../Typed/index.js'
import '../Typed/typed.css'
import Typed from 'react-typed';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: black;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: rgba(223, 223, 223, 1);
  font-size: 24px;
`


class Header extends Component {
  render(props) {
    return (
      <HeaderDiv>
        <Link to="/">
{/*          <ProfileImage src={require('../assets/')} alt=''/>*/}

          <TypedJS typingText={this.props.typingText} classy=""/>
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/articles'>ARTICLES</NavLink>
          <NavLink to='/life'>LIFE</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;