import React, { useState } from 'react';
import { node, string } from 'prop-types';

import styles from './Sentence.module.scss';

import TreebankContext from '../treebank-context';
import SentenceContext from '../sentence-context';

const sentenceFromJson = (json, id) => (
  json.treebank.sentence.find(({ $ }) => $.id && $.id === id)
);

const Sentence = ({ children, id }) => {
  const [active, setActive] = useState(null);

  const toggleActive = (word) => {
    if (word && active && word.$.id === active.$.id) {
      setActive(null);
    } else {
      setActive(word);
    }
  };

  return (
    <TreebankContext.Consumer>
      {({ json, config }) => (
        <SentenceContext.Provider value={{
          sentence: sentenceFromJson(json, id),
          config,
          active,
          toggleActive,
        }}
        >
          <div className={styles.container}>
            {children}
          </div>
        </SentenceContext.Provider>
      )}
    </TreebankContext.Consumer>
  );
};

Sentence.propTypes = {
  id: string.isRequired,
  children: node,
};

Sentence.defaultProps = {
  children: null,
};

export default Sentence;
