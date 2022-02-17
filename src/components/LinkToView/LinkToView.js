import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LinkToView.module.scss';

const LinkToView = ({ content, path }) => (
  <div className={styles.linkToContainer}>
    <Link to={path} className={styles.link}>
      {content}
    </Link>
  </div>
);

export default LinkToView;
