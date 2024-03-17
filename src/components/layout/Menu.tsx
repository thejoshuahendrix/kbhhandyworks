import { StyledMenu } from "./Navbar";
import { Link } from "react-router-dom";

const Menu = ({ open }: any) => {
  return (
    <StyledMenu id="burgermenu" open={open}>
      <Link style={{ textDecoration: "none" }} id="burgerhomelink" to="/">
        Home
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        id="burgercontactlink"
        to="/projects"
      >
        Projects
      </Link>
      <Link style={{ textDecoration: "none" }} id="burgeraboutlink" to="/resume">
        Resume
      </Link>

      {/* {isLoggedIn && <Link id="burgerpostslink" style={{ textDecoration: "none"}} to='/posts'>Posts</Link>}
            {isLoggedIn &&<LogoutButton id="burgerlogoutbutton" />}
            {!isLoggedIn && <Link id="burgerloginlink" style={{ textDecoration: "none"}} to='/login'>Login</Link>}
            {!isLoggedIn && <Link id="burgerregisterlink" style={{ textDecoration: "none"}} to='/register'>Register</Link>} */}
    </StyledMenu>
  );
};
export default Menu;
