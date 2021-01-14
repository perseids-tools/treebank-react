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
  id, callback, active: externalActiveId, setActive: externalSetActiveId, json, config, children,
}) => {
  let activeId;
  let setActiveId;

  if (externalActiveId !== null || externalSetActiveId !== null) {
    activeId = externalActiveId;
    setActiveId = externalSetActiveId || (() => {});
  } else {
    [activeId, setActiveId] = useState(null);
  }

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

  useEffect(() => {
    setActiveId(externalActiveId);
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

const Sentence = ({
  id, callback, active, setActive, children,
}) => (
  <TreebankContext.Consumer>
    {({ json, config }) => (
      <WrappedSentence
        id={id}
        callback={callback}
        active={active}
        setActive={setActive}
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
  active: string,
  setActive: func,
  children: node,
};

Sentence.defaultProps = {
  callback: null,
  active: null,
  setActive: null,
  children: null,
};

export default Sentence;
