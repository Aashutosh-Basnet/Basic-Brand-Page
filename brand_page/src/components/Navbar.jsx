import "./components.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>NIKE</p>

      <ul className="lists">
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>

      <button className="login_button">LOGIN</button>
    </div>
  );
};

export default Navbar;
