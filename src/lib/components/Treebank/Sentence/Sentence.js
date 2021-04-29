import React, { useState, useEffect } from 'react';
import {
  node, string, func, arrayOf, instanceOf, oneOfType,
} from 'prop-types';

import TreebankContext from '../treebank-context';
import SentenceContext from '../sentence-context';

const sentenceFromJson = (json, id) => (
  json.treebank.sentence.find(({ $ }) => $.id && $.id === id)
);

const findWord = (wordId, sentence) => (
  sentence.word.find(({ $: { id } }) => id === wordId)
);

const WrappedSentence = ({
  /* eslint-disable react/prop-types */
  id,
  callback,
  active: externalActiveId,
  setActive: externalSetActiveId,
  highlight: highlightIterable,
  json,
  config,
  children,
  /* eslint-enable react/prop-types */
}) => {
  let activeId;
  let setActiveId;

  if (externalActiveId !== null || externalSetActiveId !== null) {
    activeId = externalActiveId;
    setActiveId = externalSetActiveId || (() => {});
  } else {
    [activeId, setActiveId] = useState(null);
  }

  const highlight = new Set(highlightIterable);

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
      callback({ treebank: json, sentence, configuration: config });
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
      highlight,
    }}
    >
      {children}
    </SentenceContext.Provider>
  );
};

const Sentence = ({
  id, callback, active, setActive, highlight, children,
}) => (
  <TreebankContext.Consumer>
    {({ json, config }) => (
      <WrappedSentence
        id={id}
        callback={callback}
        active={active}
        setActive={setActive}
        highlight={highlight}
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
  highlight: oneOfType([arrayOf(string), instanceOf(Set)]),
  children: node,
};

Sentence.defaultProps = {
  callback: null,
  active: null,
  setActive: null,
  highlight: [],
  children: null,
};

export default Sentence;
