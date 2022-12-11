import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss"

const NavBar = () => {

  return (
    <nav>
      <a className={styles.logo} aria-label="Logo" href="/">
        <i class="fa fa-tasks"></i>
        <span>ToDo_List</span>
      </a>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorite">Favorite</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;