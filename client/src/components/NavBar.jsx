import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Unity Jam</h1>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/artists">Artists</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
