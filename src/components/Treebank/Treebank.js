import React, { useState } from 'react';
import { node, string } from 'prop-types';

import styles from './Treebank.module.scss';

import { xmlToJson } from '../../lib/parsing';
import { getConfig } from './config';

import TreebankContext from './treebank-context';

const sentenceFromJson = (treebankJson, id) => (
  treebankJson.treebank.sentence.find(({ $ }) => $.id && $.id === id)
);

const configFromJson = (treebankJson) => (
  getConfig(
    treebankJson.treebank.$['xml:lang'],
    treebankJson.treebank.$.format,
  )
);

const Treebank = ({ treebank, id, children }) => {
  const [active, setActive] = useState(null);
  const treebankJson = xmlToJson(treebank);
  const sentence = sentenceFromJson(treebankJson, id);
  const config = configFromJson(treebankJson);

  const toggleActive = (word) => {
    if (word && active && word.$.id === active.$.id) {
      setActive(null);
    } else {
      setActive(word);
    }
  };

  return (
    <TreebankContext.Provider value={{
      sentence,
      config,
      active,
      toggleActive,
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
  id: string.isRequired,
  children: node,
};

Treebank.defaultProps = {
  children: null,
};

export default Treebank;
