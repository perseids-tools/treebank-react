import React from 'react';
import { object } from 'prop-types';

import { wordType } from '../../types';

import styles from './Information.module.scss';

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

const Information = ({ active, config }) => {
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

Information.propTypes = {
  active: wordType,
  // eslint-disable-next-line react/forbid-prop-types
  config: object.isRequired,
};

Information.defaultProps = {
  active: null,
};

export default Information;
