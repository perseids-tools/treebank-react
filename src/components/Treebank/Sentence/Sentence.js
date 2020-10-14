import React from 'react';

import styles from './Sentence.module.scss';

import { getColor } from '../config';

import TreebankContext from '../treebank-context';

// eslint-disable-next-line react/prop-types
const wordToSpan = (config, setActive, word) => {
  const { $: { id, form, postag } } = word;
  const color = getColor(config, postag);

  return (
    <span onClick={() => setActive(word)} key={id} style={{ color }}>
      {form}
      {' '}
    </span>
  );
};

const Sentence = () => (
  <TreebankContext.Consumer>
    {({ sentence, setActive, config }) => (
      <div className={styles.sentence}>
        <p>
          {sentence.word.map((word) => wordToSpan(config, setActive, word))}
        </p>
      </div>
    )}
  </TreebankContext.Consumer>
);

export default Sentence;
