import styles from "./NavBar.module.scss"

const NavBar = () => {

  return (
    <nav>
      <a className={styles.logo} aria-label="Logo" href="/">
        <i class="fa fa-tasks"></i>
        <span>ToDo_List</span>
      </a>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/favorite">Favorite</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;