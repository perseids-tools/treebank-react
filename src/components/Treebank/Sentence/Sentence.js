import React from 'react';

import styles from './Sentence.module.scss';

import { extractPostag } from '../../../lib/parsing';

import TreebankContext from '../treebank-context';

const colorMap = {
  n: 'rgb(43, 114, 124)',
  a: 'blue',
  d: 'darkorange',
  c: 'deeppink',
  r: 'green',
  p: 'purple',
  i: 'gold',
  v: 'red',
  m: 'lightgreen',
  u: '#222',
  l: 'lightblue',
  g: 'lightcoral',
  x: 'gray',
  '-': '#222',
};

// eslint-disable-next-line react/prop-types
const wordToSpan = ({ $: { id, form, postag } }) => {
  const color = colorMap[extractPostag(postag)];

  return (
    <span key={id} style={{ color }}>
      {form}
      {' '}
    </span>
  );
};

const Sentence = () => (
  <TreebankContext.Consumer>
    {({ sentence }) => (
      <div className={styles.sentence}>
        <p>
          {sentence.word.map(wordToSpan)}
        </p>
      </div>
    )}
  </TreebankContext.Consumer>
);

export default Sentence;
