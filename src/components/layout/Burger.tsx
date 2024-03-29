import styled from "styled-components";

export const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 15%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.text.secondary : theme.text.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger = ({ open, setOpen }: Props) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div id="burger" />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
