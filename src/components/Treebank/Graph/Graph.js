import React from 'react';
import DagreGraph from 'dagre-d3-react';
import { curveBasis } from 'd3-shape';

import styles from './Graph.module.scss';

import { sentenceToGraph } from '../../../lib/parsing';
import { getColor } from '../config';

import TreebankContext from '../treebank-context';

const dagreConfig = {
  rankdir: 'TB',
};

const nodeConfig = (config, { postag }) => {
  const color = getColor(config, postag);

  if (color) {
    return {
      labelStyle: `fill: ${getColor(config, postag)}`,
    };
  }

  return {};
};

const configureNodes = (config, nodes) => (
  nodes.map((node) => {
    // eslint-disable-next-line no-param-reassign
    node.config = nodeConfig(config, node);

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

const Graph = () => (
  <TreebankContext.Consumer>
    {({ sentence, setActive, config }) => {
      const { nodes, links } = sentenceToGraph(sentence);

      return (
        <DagreGraph
          nodes={configureNodes(config, nodes)}
          links={configureLinks(links)}
          fitBoundaries
          zoomable
          className={styles.graph}
          config={dagreConfig}
          onNodeClick={({ original: { _word } }) => setActive(_word)}

          height="600"
          width="1000"
        />
      );
    }}
  </TreebankContext.Consumer>
);

export default Graph;
