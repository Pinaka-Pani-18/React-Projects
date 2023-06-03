import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navigation}`}>
      <div>
        <img src="../images/logo.png" alt="" />
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
