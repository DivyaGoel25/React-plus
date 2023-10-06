import styles from "./Footer.module.css";
import MenuList from "../MenuList/MenuList";

// Functional component with Anonymous Function
const Footer = function () {
  const copyrightYear = 2023;

  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p className={styles.textColor}>Copyright {copyrightYear}| Divya Goel</p>
    </footer>
  );
};

export default Footer;