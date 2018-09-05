import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.js'
import Footer from './Footer.js'

import Typed from 'react-typed';
import TypedJS from '../Typed/index.js'
import '../Typed/typed.css'
import ParticlesJS from './ParticlesJS/ParticlesJS.js'


export const ColorScheme = {
  primary: 'red',
  secondary: 'blue',
  third: 'purple',
  fourth: 'goldenrod'
}

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.35em;
`;

export const CenteredHeader = styled.h3`
  text-align: center;
  margin-bottom: 1.25em;
  font-size: 1.5em;
`
const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      fullStack : "full stack developer ya'll",
      JS : "javascript",
      react : "React",
      interests : "climbing",
      name : "Nate Pappenhagen"
    }
  }

  render() {
    return (
      <AppDiv>
        <Header typingText={this.state.name}/>
{/*        <TypedJS typingText={this.state.fullStack} />
        <TypedJS className="App-intro" typingText={this.state.JS} classy="markBlue"/>*/}
        <ContainerDiv>
          {this.props.children}
        </ContainerDiv>
        <Footer />
        <ParticlesJS />
      </AppDiv>
    );
  }
}

export default App;