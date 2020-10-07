import React from 'react';

import styles from './Sentence.module.scss';

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
const nodeToSpan = ({ pos, label }) => {
  const color = colorMap[pos];

  return (
    <span key={label} style={{ color }}>
      {label}
      {' '}
    </span>
  );
};

const Sentence = () => (
  <TreebankContext.Consumer>
    {({ nodes }) => (
      <div className={styles.sentence}>
        <p>
          {nodes.map(nodeToSpan)}
        </p>
      </div>
    )}
  </TreebankContext.Consumer>
);

export default Sentence;
