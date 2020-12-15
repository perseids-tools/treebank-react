import React, { useEffect } from 'react';
import { func, instanceOf } from 'prop-types';

import { sentenceType, wordType } from '../../types';

import styles from './Graph.module.scss';

import DagreWrapper from './DagreWrapper';

import { sentenceToGraph } from '../../utils/parsing';
import { Configuration } from '../../utils/config';

const findWord = (wordId, sentence) => (
  sentence.word.find(({ $: { id } }) => id === wordId)
);

const Graph = ({
  sentence, active, toggleActive, config,
}) => {
  const { nodes, links } = sentenceToGraph(sentence, active, config, styles);

  useEffect(() => {
    toggleActive(null);
  }, [sentence]);

  return (
    <DagreWrapper
      nodes={nodes}
      links={links}
      onClick={(id) => toggleActive(findWord(id, sentence))}
    />
  );
};

Graph.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  toggleActive: func.isRequired,
  config: instanceOf(Configuration).isRequired,
};

Graph.defaultProps = {
  active: null,
};

export default Graph;
