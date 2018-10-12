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
  display: inline-block;
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 3px;
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
  display: inline;

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

const CenteredDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
  display: inline-block;
`;


class Code extends Component {
  render() {
    return (
      <div>
        <div>     {/*SKILLS SECTION*/}
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h3>Front-end:</h3>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery/ajax</li>
                <li>Material-UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h3>Back-end:</h3>
              <ul>
                <li>NodeJs</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SQL/PostgreSQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h3>Other:</h3>
              <ul>
                <li>Git</li>
                <li>Mocha/Chai & Jasmine Testing</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div> {/*Currently interested in learning*/}
        <CenteredHeader>Interested in learning:</CenteredHeader>
        <CenteredDiv>

            <PortButton href="https://graphql.org/" target="_blank">
              graphQL
            </PortButton>

            <PortButton href="https://www.gatsbyjs.org/" target="_blank">
              gatsbyjs
            </PortButton>


            <PortButton href="https://golang.org/" target="_blank">
              Go
            </PortButton>

            <PortButton href="https://solidity.readthedocs.io/en/v0.4.25/" target="_blank">
              Solidity
            </PortButton>

            <PortButton href="https://truffleframework.com/" target="_blank">
              truffle
            </PortButton>

            <PortButton href="https://aws.amazon.com/lambda/" target="_blank">
              lambda(aws)
            </PortButton>

        </CenteredDiv>

        </div>

     <hr />

        <div>         {/*RECENT WORK*/}
          <CenteredHeader>Recent work:</CenteredHeader>

          {/*START OF PROJECT 1*/}
          <PortRow>
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
                <UsedItem>jQuery</UsedItem>
                <UsedItem>BootStrap</UsedItem>
                <UsedItem>Vanilla JavaScript</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>{/*END OF PROJECT 1*/}
          <hr />

        {/*START OF PROJECT 2*/}
        <PortRow>
            <a href="https://piggybank-app.herokuapp.com/" target="_blank">
              <CodeThumbnail src={require("../assets/piggy_bank.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Piggy-Bank</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://piggybank-app.herokuapp.com/" target="_blank">
                    Demo
                </PortButton>
                  <PortButton href="https://github.com/natepappenhagen/piggy-bank" target="_blank">
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              Basic CryptoCurrency portfolio tracker.
              This first foray into full-stack web-apps built entirely with NodeJS. I got to practice consuming public APIs a lot!
              Standard MVC philosophy (no front end framework was used) views were managed with EJS templating.
            </PortDescription>
              <UsedList>
                <UsedItem>NodeJS</UsedItem>
                <UsedItem>ExpressJS</UsedItem>
                <UsedItem>BootStrap</UsedItem>
                <UsedItem>Vanilla JavaScript</UsedItem>
                <UsedItem>EJS Templating</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>{/*END OF PROJECT 1*/}
        {/*START OF PROJECT 3*/}

        </div> {/*END OF PROJECTS CONTAINER*/}


      </div>
    );
  }
}

export default Code;
