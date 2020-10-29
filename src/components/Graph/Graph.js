import React from 'react';
import { object, func } from 'prop-types';

import { sentenceType, wordType } from '../../types';

import styles from './Graph.module.scss';

import DagreWrapper from './DagreWrapper';

import { sentenceToGraph } from '../../lib/parsing';
import { getColor } from '../Treebank/config';

const nodeConfig = (config, active, { id, postag }) => {
  const color = getColor(config, postag);
  const isActive = active && active.$.id === id;
  const className = isActive ? [styles.node, styles.active].join(' ') : styles.node;

  return {
    labelStyle: `color: ${color}`,
    labelType: 'html',
    class: className,
  };
};

const configureNodes = (config, active, nodes) => (
  nodes.map((node) => {
    // eslint-disable-next-line no-param-reassign
    node.config = nodeConfig(config, active, node);

    return node;
  })
);

const linkConfig = {
  arrowheadStyle: 'display: none',
};

const configureLinks = (links) => (
  links.map((link) => {
    // eslint-disable-next-line no-param-reassign
    link.config = linkConfig;

    return link;
  })
);

const findWord = (wordId, sentence) => (
  sentence.word.find(({ $: { id } }) => id === wordId)
);

const Graph = ({
  sentence, active, toggleActive, config,
}) => {
  const { nodes, links } = sentenceToGraph(sentence);

  return (
    <DagreWrapper
      nodes={configureNodes(config, active, nodes)}
      links={configureLinks(links)}
      onClick={(id) => toggleActive(findWord(id, sentence))}
    />
  );
};

Graph.propTypes = {
  sentence: sentenceType.isRequired,
  active: wordType,
  toggleActive: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  config: object.isRequired,
};

Graph.defaultProps = {
  active: null,
};

export default Graph;
