// @flow strict
import React from 'react';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        <span role="img" aria-label="heart">{'Written with ❤️ by Deva K.'}</span>
      </p>
    </div>
  );
};

export default Author;
