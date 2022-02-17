import CurrencyMenu from './CurrencyMenu';
import CartModal from './CartModal';

import styles from './CartMenu.module.scss';

const CartMenu = () => {
  return (
    <div className={styles.menu}>
      <CurrencyMenu />
      <CartModal />
    </div>
  );
};

export default CartMenu;
