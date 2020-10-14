import React from 'react';

import styles from './Sentence.module.scss';

import { getColor } from '../config';

import TreebankContext from '../treebank-context';

// eslint-disable-next-line react/prop-types
const wordToSpan = (config, { $: { id, form, postag } }) => {
  const color = getColor(config, postag);

  return (
    <span key={id} style={{ color }}>
      {form}
      {' '}
    </span>
  );
};

const Sentence = () => (
  <TreebankContext.Consumer>
    {({ sentence, config }) => (
      <div className={styles.sentence}>
        <p>
          {sentence.word.map((word) => wordToSpan(config, word))}
        </p>
      </div>
    )}
  </TreebankContext.Consumer>
);

export default Sentence;
