// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {/* leave here if I ever get a twitter */}
        {/* {author.bio} */}
        {/*<a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> 
        </a> */}
        <span role="img" aria-label="heart">{"Written with ❤️ by Deva K."}</span>
      </p>
    </div>
  );
};

export default Author;