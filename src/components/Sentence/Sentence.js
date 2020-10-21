import React, { Fragment } from 'react';
import { object, func } from 'prop-types';

import { sentenceType, wordType } from '../../types';

import styles from './Sentence.module.scss';

import { getColor } from '../Treebank/config';

// eslint-disable-next-line react/prop-types
const wordToSpan = (config, active, setActive, word) => {
  const { $: { id, form, postag } } = word;
  const color = getColor(config, postag);
  const isActive = active && active.$.id === id;
  const className = isActive ? [styles.word, styles.active].join(' ') : styles.word;

  return (
    <Fragment key={id}>
      <span
        onClick={() => setActive(word)}
        className={className}
        style={{ color }}
      >
        {form}
      </span>
      {' '}
    </Fragment>
  );
};

const Sentence = ({
  sentence, active, setActive, config,
}) => (
  <div className={styles.sentence}>
    <p>
      {sentence.word.map((word) => wordToSpan(config, active, setActive, word))}
    </p>
  </div>
);

Sentence.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  setActive: func,
  // eslint-disable-next-line react/forbid-prop-types
  config: object.isRequired,
};

Sentence.defaultProps = {
  active: null,
  setActive: () => {},
};

export default Sentence;
