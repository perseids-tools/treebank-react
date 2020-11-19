import React from 'react';
import { object } from 'prop-types';

import { wordType } from '../../types';

import styles from './PartOfSpeech.module.scss';

import { deconstructPostag } from '../Treebank/config';

const renderLemma = (lemma) => (
  <div className={styles.container}>
    <dt className={styles.dt}>Lemma</dt>
    <dd className={styles.dd}>{lemma}</dd>
  </div>
);

const renderPostag = ([name, value]) => (
  <div key={name} className={styles.container}>
    <dt className={styles.dt}>{name}</dt>
    <dd className={styles.dd}>{value}</dd>
  </div>
);

const PartOfSpeech = ({ active, config }) => {
  if (active) {
    const { $: { postag, lemma } } = active;

    return (
      <div className={styles.information}>
        <dl className={styles.dl}>
          {renderLemma(lemma)}
          {deconstructPostag(config, postag).map(renderPostag)}
        </dl>
      </div>
    );
  }

  return (
    <div />
  );
};

PartOfSpeech.propTypes = {
  active: wordType,
  // eslint-disable-next-line react/forbid-prop-types
  config: object.isRequired,
};

PartOfSpeech.defaultProps = {
  active: null,
};

export default PartOfSpeech;
