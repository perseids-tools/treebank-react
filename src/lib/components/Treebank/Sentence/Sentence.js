import React, { useState, useEffect } from 'react';
import { node, string, func } from 'prop-types';

import styles from './Sentence.module.scss';

import TreebankContext from '../treebank-context';
import SentenceContext from '../sentence-context';

const sentenceFromJson = (json, id) => (
  json.treebank.sentence.find(({ $ }) => $.id && $.id === id)
);

const findWord = (wordId, sentence) => (
  sentence.word.find(({ $: { id } }) => id === wordId)
);

const WrappedSentence = ({
  // eslint-disable-next-line react/prop-types
  id, callback, json, config, children,
}) => {
  const [activeId, setActiveId] = useState(null);
  const sentence = sentenceFromJson(json, id);

  const active = findWord(activeId, sentence);

  const toggleActive = (wordId) => {
    const newActive = findWord(wordId, sentence);

    if (newActive && active && activeId === wordId) {
      setActiveId(null);
    } else {
      setActiveId(wordId);
    }
  };

  useEffect(() => {
    if (callback) {
      callback(sentence);
    }
  }, [id, json]);

  return (
    <SentenceContext.Provider value={{
      sentence,
      config,
      active,
      toggleActive,
    }}
    >
      <div className={styles.container}>
        {children}
      </div>
    </SentenceContext.Provider>
  );
};

const Sentence = ({ id, callback, children }) => (
  <TreebankContext.Consumer>
    {({ json, config }) => (
      <WrappedSentence
        id={id}
        callback={callback}
        json={json}
        config={config}
      >
        {children}
      </WrappedSentence>
    )}
  </TreebankContext.Consumer>
);

Sentence.propTypes = {
  id: string.isRequired,
  callback: func,
  children: node,
};

Sentence.defaultProps = {
  callback: null,
  children: null,
};

export default Sentence;
