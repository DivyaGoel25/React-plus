import { NavLink } from "react-router-dom";

const MenuList = () => {
    const menuListItem = ["Home","About Us","Contact Us"];
    return (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
       {/*{menuListItem.map((member) => (
        <li className="nav-item" key={member}>
          <a className="nav-link" href="#">
           {member}
          </a>
        </li>
        ))}
       */ }
       <li className="nav-item">
          <NavLink className="nav-link" to="/">
           Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/users">
          User Management
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/hoc">
           HOC
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/todos">
           ToDos 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about-us">
          About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact-us">
           Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/unit-testing">
           Unit Testing
          </NavLink>
        </li>
      </ul>
    );
  };
  
  // exporting the component
  export default MenuList;
  