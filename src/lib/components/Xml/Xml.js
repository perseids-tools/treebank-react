import React, { Fragment } from 'react';
import { func } from 'prop-types';

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

const renderWord = (word, active, toggleActive) => {
  const { $: { id } } = word;
  const isActive = active && active.$.id === id;
  const className = isActive ? [styles.word, styles.active].join(' ') : styles.word;
  const onClick = () => {
    toggleActive(word);
  };
  const onKeyDown = (event) => {
    const { key } = event;

    if (key === 'Enter') {
      onClick(event);
    }
  };

  return (
    <div
      key={id}
      role="button"
      tabIndex="0"
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {openingTag('word', word.$, id, true, <>&nbsp;&nbsp;&nbsp;&nbsp;</>)}
    </div>
  );
};

const Xml = ({ sentence, active, toggleActive }) => (
  <div className={styles.xml}>
    {openingTag('sentence', sentence.$, 'sentence')}
    {sentence.word.map((word) => (
      renderWord(word, active, toggleActive)
    ))}
    {closingTag('sentence', 'sentence-close')}
  </div>
);

Xml.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  toggleActive: func,
};

Xml.defaultProps = {
  active: null,
  toggleActive: () => {},
};

export default Xml;
