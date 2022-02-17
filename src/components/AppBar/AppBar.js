import NavMenu from './NavMenu';
import CartMenu from './CartMenu';

import styles from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.appBar}>
        <NavMenu />
        <CartMenu />
      </div>
    </header>
  );
};

export default AppBar;
