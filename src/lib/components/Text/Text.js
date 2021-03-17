import React, { Fragment } from 'react';
import { func, instanceOf } from 'prop-types';

import { sentenceType, wordType } from '../../types';

import styles from './Text.module.scss';

import { Configuration } from '../../utils/config';

const formatId = (id) => id.padStart(4, '0');

const wordId = ({ $: { id, insertion_id: insertionId } }) => (
  formatId(insertionId || id)
);

const compareWords = (wordA, wordB) => {
  const idA = wordId(wordA);
  const idB = wordId(wordB);

  if (idA < idB) {
    return -1;
  }

  if (idB < idA) {
    return 1;
  }

  return 0;
};

const wordToSpan = (word, config, active, highlight, toggleActive) => {
  const {
    $: {
      id, form, postag, artificial,
    },
  } = word;
  const color = config.getColor(postag);
  const classes = [styles.word];

  if (active && active.$.id === id) {
    classes.push(styles.active);
  } else if (highlight.has(id)) {
    classes.push(styles.highlight);
  }

  if (artificial === 'elliptic') {
    classes.push(styles.elliptic);
  }

  const onClick = () => {
    toggleActive(id);
  };
  const onKeyDown = (event) => {
    const { key } = event;

    if (key === 'Enter') {
      onClick();
    }
  };

  return (
    <Fragment key={id}>
      <span
        role="button"
        tabIndex="0"
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={classes.join(' ')}
        style={{ color }}
      >
        {form}
      </span>
      {' '}
    </Fragment>
  );
};

const Text = ({
  sentence, active, toggleActive, highlight, config,
}) => {
  const wordsCopy = [...sentence.word];
  const spans = wordsCopy
    .sort(compareWords)
    .map((word) => wordToSpan(word, config, active, highlight, toggleActive));

  return (
    <div className={styles.text}>
      <p>
        {spans}
      </p>
    </div>
  );
};

Text.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  toggleActive: func,
  highlight: instanceOf(Set),
  config: instanceOf(Configuration).isRequired,
};

Text.defaultProps = {
  active: null,
  toggleActive: () => {},
  highlight: new Set(),
};

export default Text;
