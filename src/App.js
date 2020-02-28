import React from 'react';

import { Comment } from './components';

import { COMMENT } from './constants/defaultValue';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.root}>
      <Comment data={COMMENT} />
    </div>
  );
};

export default App;
