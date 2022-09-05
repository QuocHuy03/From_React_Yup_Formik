import "./NavStyle.css";

const NavBar = () => {
  const navBar = { color: "#fff",textDecoration: 'none' };
  const logoImg = { width: "250px", height: "100px"}
  return (
    <nav>
      <div>
        <img  style={logoImg} src="https://i.imgur.com/brNzlU6.png" alt="logo" />
      </div>
      <ul className="navbar">
        <li>
          <a href="/" style={navBar}>Home</a>
        </li>
        <li>
          <a href="/products" style={navBar}>Products</a>
        </li>
        <li>
          <a href="/date" style={navBar}>Date</a>
        </li>
        <li>
          <a href="/login" style={navBar}>Login</a>
        </li>
        <li>
          <a href="/post" style={navBar}>Api</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
