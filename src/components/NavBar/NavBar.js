import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss"

const NavBar = () => {

  return (
    <nav>
      <NavLink className={({isActive}) => isActive ? `${styles.linkActive} ${styles.logo}` : styles.logo} to="/">
      <div className={styles.logo}>
        <i className={`fa fa-tasks`}></i>
        <span>ToDo_List</span>
      </div>
      </NavLink>

      <ul>
        <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;