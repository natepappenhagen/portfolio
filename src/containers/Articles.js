import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const Date = styled.p`
  font-size: 12px;
`

class Articles extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>I write about software, climbing, and personal growth.</CenteredHeader>
        </div>
        <h5>Tech-related:</h5>
        <ul>
          <li>
            <a href="" target="_blank">Link to an article I have time to write here</a>
            <Date>September 10, 2018</Date>
          </li>
        </ul>
        <h5>Other:</h5>
        <ul>
          <li>
            <a href="" target="_blank">Personal Growth blog post here</a>
            <Date>March 16, 2017</Date>
          </li>
        </ul>
        <div>
          <CenteredHeader>Read more on <a href="" target="_blank"><i className="fa fa-medium fa-fw" />Medium</a>.</CenteredHeader>
        </div>
      </div>
    );
  }
}

export default Articles;
