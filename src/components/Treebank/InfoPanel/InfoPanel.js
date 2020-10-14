import React, { Fragment } from 'react';

import styles from './InfoPanel.module.scss';

import { deconstructPostag } from '../config';

import TreebankContext from '../treebank-context';

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

const InfoPanel = () => (
  <TreebankContext.Consumer>
    {({ active, config }) => {
      if (active) {
        const { $: { postag, lemma } } = active;

        return (
          <div className={styles.infoPanel}>
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
    }}
  </TreebankContext.Consumer>
);

export default InfoPanel;
