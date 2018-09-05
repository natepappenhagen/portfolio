import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>     {/*SKILLS SECTION*/}
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>Material-UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>NodeJs</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SQL/PostgreSQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Mocha/Chai & Jasmine Testing</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div>         {/*RECENT WORK*/}
          <CenteredHeader>Recent work:</CenteredHeader>

          <PortRow> {/*START OF PROJECT 1*/}
            <a href="https://natepappenhagen.github.io/world_DOM_ination/" target="_blank">
              <CodeThumbnail src={require("../assets/worldDOM.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>World DOM-ination</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://natepappenhagen.github.io/world_DOM_ination/" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/natepappenhagen/world_DOM_ination"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              Simple risk-like 2 player game where the goal is to try to win all of the tiles in the map w/o getting too unlucky battling the other player!
            </PortDescription>
              <UsedList>
                <UsedItem>ReactJS</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Firebase</UsedItem>
                <UsedItem>Material-UI</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>{/*END OF PROJECT 1*/}
          <hr />

        {/*START OF PROJECT 2*/}
        {/*START OF PROJECT 3*/}

        </div> {/*END OF PROJECTS CONTAINER*/}


      </div>
    );
  }
}

export default Code;
