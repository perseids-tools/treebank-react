import React, { Fragment } from 'react';
import { object, func } from 'prop-types';

import { sentenceType, wordType } from '../../types';

import styles from './Text.module.scss';

import { getColor } from '../Treebank/config';

// eslint-disable-next-line react/prop-types
const wordToSpan = (config, active, toggleActive, word) => {
  const { $: { id, form, postag } } = word;
  const color = getColor(config, postag);
  const isActive = active && active.$.id === id;
  const className = isActive ? [styles.word, styles.active].join(' ') : styles.word;

  return (
    <Fragment key={id}>
      <span
        onClick={() => toggleActive(word)}
        className={className}
        style={{ color }}
      >
        {form}
      </span>
      {' '}
    </Fragment>
  );
};

const Text = ({
  sentence, active, toggleActive, config,
}) => (
  <div className={styles.sentence}>
    <p>
      {sentence.word.map((word) => wordToSpan(config, active, toggleActive, word))}
    </p>
  </div>
);

Text.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  toggleActive: func,
  // eslint-disable-next-line react/forbid-prop-types
  config: object.isRequired,
};

Text.defaultProps = {
  active: null,
  toggleActive: () => {},
};

export default Text;
