import { StyledMenu } from "./Navbar";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
}

const Menu = ({ open }: Props) => {
  return (
    <StyledMenu id="burgermenu" open={open}>
      <Link style={{ textDecoration: "none" }} id="burgerhomelink" to="/">
        Home
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        id="burgercontactlink"
        to="/about"
      >
        About
      </Link>
    </StyledMenu>
  );
};
export default Menu;
