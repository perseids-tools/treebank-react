import React, { useState } from 'react';
import { node, string } from 'prop-types';

import styles from './Treebank.module.scss';

import { xmlToJson } from '../../lib/parsing';
import { getConfig } from './config';

import TreebankContext from './treebank-context';

const sentenceFromJson = (treebankJson, chunk) => (
  treebankJson.treebank.sentence.find(({ $ }) => $.id && $.id === chunk)
);

const configFromJson = (treebankJson) => (
  getConfig(
    treebankJson.treebank.$['xml:lang'],
    treebankJson.treebank.$.format,
  )
);

const Treebank = ({ treebank, chunk, children }) => {
  const [active, setActive] = useState(null);
  const treebankJson = xmlToJson(treebank);
  const sentence = sentenceFromJson(treebankJson, chunk);
  const config = configFromJson(treebankJson);

  return (
    <TreebankContext.Provider value={{
      sentence,
      chunk,
      config,
      active,
      setActive,
    }}
    >
      <div className={styles.container}>
        {children}
      </div>
    </TreebankContext.Provider>
  );
};

Treebank.propTypes = {
  treebank: string.isRequired,
  chunk: string.isRequired,
  children: node,
};

Treebank.defaultProps = {
  children: null,
};

export default Treebank;
