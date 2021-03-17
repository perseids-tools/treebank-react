import React from 'react';
import { func, instanceOf } from 'prop-types';

import { sentenceType, wordType } from '../../types';

import styles from './Graph.module.scss';

import DagreWrapper from './DagreWrapper';

import { sentenceToGraph } from '../../utils/parsing';
import { Configuration } from '../../utils/config';

const Graph = ({
  sentence, active, toggleActive, highlight, config,
}) => {
  const { nodes, links } = sentenceToGraph(sentence, active, highlight, config, styles);

  return (
    <DagreWrapper
      nodes={nodes}
      links={links}
      onClick={toggleActive}
    />
  );
};

Graph.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  toggleActive: func.isRequired,
  highlight: instanceOf(Set),
  config: instanceOf(Configuration).isRequired,
};

Graph.defaultProps = {
  active: null,
  highlight: new Set(),
};

export default Graph;
