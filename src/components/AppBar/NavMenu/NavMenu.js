import Logo from '../../Logo';
import { NavLink } from 'react-router-dom';

import styles from './NavMenu.module.scss';

const NavMenu = () => {
  return (
    <div className={styles.containerNav}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NavLink
              exact
              to="women"
              className={({ isActive }) => {
                return isActive ? styles.navLinkActive : styles.navLink;
              }}
            >
              Women
            </NavLink>
          </li>

          <li className={styles.navListItem}>
            <NavLink
              to="men"
              className={({ isActive }) => {
                return isActive ? styles.navLinkActive : styles.navLink;
              }}
            >
              Men
            </NavLink>
          </li>

          <li className={styles.navListItem}>
            <NavLink
              to="kids"
              className={({ isActive }) => {
                return isActive ? styles.navLinkActive : styles.navLink;
              }}
            >
              Kids
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.containerLogo}>
        <Logo />
      </div>
    </div>
  );
};

export default NavMenu;
