import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import LogoImg from '../../assets/icons/group-logo.svg';

import styles from './Logo.module.scss';

function Logo() {
  return (
    <div className={styles.containerLogo}>
      <Link to="/">
        <ReactSVG src={LogoImg} />
      </Link>
    </div>
  );
}

export default Logo;
