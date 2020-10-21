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

const renderWord = (word, active, setActive) => {
  const { $: { id } } = word;
  const isActive = active && active.$.id === id;
  const className = isActive ? [styles.word, styles.active].join(' ') : styles.word;

  return (
    <div
      key={id}
      className={className}
      onClick={() => setActive(word)}
    >
      {openingTag('word', word.$, id, true, <>&nbsp;&nbsp;&nbsp;&nbsp;</>)}
    </div>
  );
};

const Xml = ({ sentence, active, setActive }) => (
  <div className={styles.xml}>
    {openingTag('sentence', sentence.$, 'sentence')}
    {sentence.word.map((word) => (
      renderWord(word, active, setActive)
    ))}
    {closingTag('sentence', 'sentence-close')}
  </div>
);

Xml.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  setActive: func,
};

Xml.defaultProps = {
  active: null,
  setActive: () => {},
};

export default Xml;
