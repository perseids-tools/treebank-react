import React, { Fragment } from 'react';

import styles from './XmlPanel.module.scss';

import TreebankContext from '../treebank-context';

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

const sentenceToJsx = (sentence) => (
  <>
    {openingTag('sentence', sentence.$, 'sentence')}
    {sentence.word.map((word) => (
      openingTag('word', word.$, word.$.id, true, <>&nbsp;&nbsp;&nbsp;&nbsp;</>)
    ))}
    {closingTag('sentence', 'sentence-close')}
  </>
);

const XmlPanel = () => (
  <TreebankContext.Consumer>
    {({ sentence }) => sentenceToJsx(sentence)}
  </TreebankContext.Consumer>
);

export default XmlPanel;
