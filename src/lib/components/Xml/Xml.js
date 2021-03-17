import React, { Fragment } from 'react';
import { func, instanceOf } from 'prop-types';

import { sentenceType, wordType } from '../../types';

import styles from './Xml.module.scss';

const attributesToJsx = (attributes) => (
  Object.entries(attributes).map(([key, value]) => (
    <Fragment key={key}>
      {' '}
      <span className={styles.attribute}>
        {key}
        =
      </span>
      <span className={styles.attributeText}>
        &quot;
        {value}
        &quot;
      </span>
    </Fragment>
  ))
);

const openingTag = (name, attributes, key, close = false, prefix = '') => (
  <Fragment key={key}>
    <span className={styles.bracket}>
      {prefix}
      &lt;
    </span>
    <span className={styles.element}>{name}</span>
    {attributesToJsx(attributes)}
    {close ? ' /' : ''}
    <span className={styles.bracket}>&gt;</span>
    <br />
  </Fragment>
);

const closingTag = (name, key) => (
  <Fragment key={key}>
    <span className={styles.bracket}>&lt;</span>
    <span className={styles.element}>
      /
      {name}
    </span>
    <span className={styles.bracket}>&gt;</span>
  </Fragment>
);

const renderWord = (word, active, toggleActive, highlight) => {
  const { $: { id } } = word;
  const classes = [styles.word];
  const onClick = () => {
    toggleActive(id);
  };
  const onKeyDown = (event) => {
    const { key } = event;

    if (key === 'Enter') {
      onClick(event);
    }
  };

  if (active && active.$.id === id) {
    classes.push(styles.active);
  } else if (highlight.has(id)) {
    classes.push(styles.highlight);
  }

  return (
    <div
      key={id}
      role="button"
      tabIndex="0"
      className={classes.join(' ')}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {openingTag('word', word.$, id, true, <>&nbsp;&nbsp;&nbsp;&nbsp;</>)}
    </div>
  );
};

const Xml = ({
  sentence, active, toggleActive, highlight,
}) => (
  <div className={styles.xml}>
    {openingTag('sentence', sentence.$, 'sentence')}
    {sentence.word.map((word) => (
      renderWord(word, active, toggleActive, highlight)
    ))}
    {closingTag('sentence', 'sentence-close')}
  </div>
);

Xml.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  toggleActive: func,
  highlight: instanceOf(Set),
};

Xml.defaultProps = {
  active: null,
  toggleActive: () => {},
  highlight: new Set(),
};

export default Xml;
