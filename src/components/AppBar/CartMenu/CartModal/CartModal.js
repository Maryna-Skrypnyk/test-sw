import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import Modal from '../../../Modal';
import ButtonIcon from '../../../ButtonIcon';
import Button from '../../../Button';

import CartIcon from '../../../../assets/icons/empty-cart.svg';

import styles from './CartModal.module.scss';
import LinkToView from '../../../LinkToView/LinkToView';

const CartModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    setShowModal(true);
  };

  return (
    <>
      <ButtonIcon
        onClick={toggleModal}
        aria-label="Open modal"
        btnClass="ButtonIconCart"
      >
        {/* {productCart.length ? (
          <span className={styles.productsCount}>{productCart.length}</span>
        ) : null} */}
        <span className={styles.productsCount}>1</span>
        <ReactSVG src={CartIcon} className={styles.cartIcon} />
      </ButtonIcon>

      {showModal && (
        <Modal onClose={toggleModal}>
          <h3 className={styles.titleModalCart}>
            My Bag,
            <span className={styles.countModalItems}> 1 items</span>
          </h3>

          <div className={styles.totalAmount}>
            <p>Total</p>
            <p className={styles.amount}>$Amount</p>
          </div>

          <div className={styles.containerButtons}>
            <Button handleClick={toggleModal} button="ButtonSecondary">
              <LinkToView content="View Bag" path="cart" />
            </Button>
            {/* <LinkToView content="View Bag" path="cart"></LinkToView> */}

            <Button
              handleClick={toggleModal}
              contentBtn="Check out"
              //   button="Button"
            />
          </div>
        </Modal>
      )}
    </>

    // <div className={styles.cart}>
    //   <Link to="cart">
    //     <span className={styles.productsCount}>X</span>
    //     <ReactSVG src={CartIcon} className={styles.cartIcon} />
    //   </Link>
    // </div>
  );
};

export default CartModal;
