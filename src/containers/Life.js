import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const LifeRow = styled.div`
  margin: 20px -15px;
`

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>More than a developer.. a person</CenteredHeader>
        </div>
        {/*Row 1*/}
        <LifeRow className="row">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <a href="https://generalassemb.ly/" target="_blank">
              <LifeThumbnail src="https://i.ytimg.com/vi/EdxTF9HZbPA/maxresdefault.jpg"/>
              <LifeHeader>things I like?</LifeHeader>
            </a>
            <LifeProjectBlurb>I like to do all of these things : ....</LifeProjectBlurb>
          </div>
        </div>
        </LifeRow>
        {/*Row 2*/}
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <a href="https://generalassemb.ly/" target="_blank">
              <LifeThumbnail src="https://thesummitregister.com/wp-content/uploads/2014/09/10669093_691782860916249_1053790285735695020_o-1-600x399.jpg"/>
              <LifeHeader>things I like?</LifeHeader>
            </a>
            <LifeProjectBlurb>I like to do all of these things : ....</LifeProjectBlurb>
          </div>
        </div>
      </div>
    );
  }
}

export default Life;
