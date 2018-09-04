import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typed from 'react-typed';
import TypedJS from './Typed/index.js'
import './Typed/typed.css'
import Particles from 'react-particles-js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullStack : "full stack developer ya'll",
      JS : "javascript",
      react : "React",
      interests : "climbing",
    }
  }

  render() {
    return (


      <div className="App">

        <Particles
            params={{
              particles: {
                 number: {
                  value: 226,
                  density: {
                    enable: true,
                    value_area: 1683.5826639087988
                  }
                 },
                 color: {
                  value: "#ffffff"
                 },
                 shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  }
                 },
                 line_linked: {
                  enable: false,
                  },
                  move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  }
                }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    },
                    repulse:{
                      distance: 97,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove:{
                      particles_nb: 2
                    }
                  }
                  // end of params
                 },
                 fps_limit: 28
                 }}

             style={{

                 position: "fixed",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100%",
                 background: "cover",
                 overflow: "scroll",

                 }} />

        <header className="App-header">
        <TypedJS typingText={this.state.fullStack} />
        </header>

        <br/>

        <TypedJS className="App-intro" typingText={this.state.JS} classy="markBlue"/>
        <TypedJS className="App-intro" typingText={this.state.react} classy="markYellow"/>
        <TypedJS className="App-intro" typingText={this.state.interests} classy="markRed"/>


      </div>

    );
  }
}

export default App;
