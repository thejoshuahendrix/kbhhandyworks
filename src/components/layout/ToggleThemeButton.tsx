import styled from "styled-components";
import { DarkTheme } from "../../themes";

export const ToggleThemeButton = styled.button<{ active: boolean }>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin-top: 5px;
  z-index: 100;
  background-color: ${(props) => props.theme.background.ternary};
  border-radius: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.background.secondary};
    transition: transform 0.3s ease;
    transform: ${(props) =>
      props.theme === DarkTheme ? "translateX(30px)" : "translateX(0)"};
  }
`;
