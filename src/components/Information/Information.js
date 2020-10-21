import React, { Fragment } from 'react';
import { object } from 'prop-types';

import { wordType } from '../../types';

import styles from './Information.module.scss';

import { deconstructPostag } from '../Treebank/config';

const renderLemma = (lemma) => (
  <>
    <dt>Lemma</dt>
    <dd>{lemma}</dd>
  </>
);

const renderPostag = ([name, value]) => (
  <Fragment key={name}>
    <dt>{name}</dt>
    <dd>{value}</dd>
  </Fragment>
);

const Information = ({ active, config }) => {
  if (active) {
    const { $: { postag, lemma } } = active;

    return (
      <div className={styles.information}>
        <dl>
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
