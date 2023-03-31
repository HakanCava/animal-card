import logo from "../../helpers/animalsWorld.jpg";
import "./Header.scss"
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="title">Animals World</div>
    </div>
  );
};

export default Header;
