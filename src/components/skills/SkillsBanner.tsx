import { Tooltip } from "react-tooltip";

import {
  DiNpm,
  DiGitBranch,
  DiJavascript1,
  DiHtml5,
  DiUbuntu,
  DiBootstrap,
  DiSass,
  DiReact,
  DiCss3,
  DiRust,
  DiDocker,
  DiWindows,
  DiRedis,
  DiMongodb,
  DiGo,
  DiPython,
  DiJava,
  DiPostgresql,
} from "react-icons/di";
import styled from "styled-components";

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 5rem;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.background.secondary};
`;

// create a component that extends the tooltip and changes the base font size to 24px
const StyledTooltip = styled(Tooltip)`
  font-size: 24px;
`;

// create a component that extends the react icons git branch and adds a tooltip to it
const GitBranch = styled(DiGitBranch)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Javascript = styled(DiJavascript1)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Npm = styled(DiNpm)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Html = styled(DiHtml5)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Ubuntu = styled(DiUbuntu)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Bootstrap = styled(DiBootstrap)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Sass = styled(DiSass)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const ReactIcon = styled(DiReact)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Css = styled(DiCss3)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Rust = styled(DiRust)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Docker = styled(DiDocker)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Windows = styled(DiWindows)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Redis = styled(DiRedis)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Mongodb = styled(DiMongodb)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Go = styled(DiGo)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Python = styled(DiPython)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Java = styled(DiJava)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Postgresql = styled(DiPostgresql)`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const SkillsBanner = () => {
  return (
    <>
      <h2>Skills</h2>
      <SkillsWrapper>
        <StyledTooltip anchorSelect="#git" content="Git" />
        <StyledTooltip anchorSelect="#js" content="Javascript" />
        <StyledTooltip anchorSelect="#html" content="HTML5" />
        <StyledTooltip anchorSelect="#npm" content="Node Package Manager" />
        <StyledTooltip anchorSelect="#ubuntu" content="WSL & Linux CLI" />
        <StyledTooltip anchorSelect="#bs" content="BootStrap" />
        <StyledTooltip anchorSelect="#sass" content="Sass" />
        <StyledTooltip anchorSelect="#react" content="React" />
        <StyledTooltip anchorSelect="#css" content="CSS3" />
        <StyledTooltip anchorSelect="#rust" content="Rust" />
        <StyledTooltip anchorSelect="#dock" content="Docker" />
        <StyledTooltip anchorSelect="#wind" content="Windows" />
        <StyledTooltip anchorSelect="#mongo" content="MongoDB" />
        <StyledTooltip anchorSelect="#redis" content="Redis" />
        <StyledTooltip anchorSelect="#psql" content="PostgreSQL" />
        <StyledTooltip anchorSelect="#py" content="Python" />
        <StyledTooltip anchorSelect="#java" content="Java" />
        <StyledTooltip anchorSelect="#go" content="Go" />

        <a id="git">
          <GitBranch />
        </a>
        <a id="js">
          <Javascript />
        </a>
        <a id="html">
          <Html />
        </a>
        <a id="npm">
          <Npm />
        </a>
        <a id="ubuntu">
          <Ubuntu />
        </a>
        <a id="bs">
          <Bootstrap />
        </a>
        <a id="sass">
          <Sass />
        </a>
        <a id="react">
          <ReactIcon />
        </a>
        <a id="css">
          <Css />
        </a>
        <a id="rust">
          <Rust />
        </a>
        <a id="dock">
          <Docker />
        </a>
        <a id="wind">
          <Windows />
        </a>
        <a id="redis">
          <Redis />
        </a>
        <a id="mongo">
          <Mongodb />
        </a>
        <a id="go">
          <Go />
        </a>
        <a id="py">
          <Python />
        </a>
        <a id="java">
          <Java />
        </a>
        <a id="psql">
          <Postgresql />
        </a>
      </SkillsWrapper>
    </>
  );
};
