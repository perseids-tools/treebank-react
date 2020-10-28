import React from 'react';
import DagreGraph from 'dagre-d3-react';
import { curveBasis } from 'd3-shape';
import { object, func } from 'prop-types';

import { sentenceType, wordType } from '../../types';

import styles from './Graph.module.scss';

import { sentenceToGraph } from '../../lib/parsing';
import { getColor } from '../Treebank/config';

const dagreConfig = {
  rankdir: 'TB',
};

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
  curve: curveBasis,
};

const configureLinks = (links) => (
  links.map((link) => {
    // eslint-disable-next-line no-param-reassign
    link.config = linkConfig;

    return link;
  })
);

const Graph = ({
  sentence, active, toggleActive, config,
}) => {
  const { nodes, links } = sentenceToGraph(sentence);

  return (
    <DagreGraph
      nodes={configureNodes(config, active, nodes)}
      links={configureLinks(links)}
      zoomable
      className={styles.graph}
      config={dagreConfig}
      onNodeClick={({ original: { _word } }) => toggleActive(_word)}
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
