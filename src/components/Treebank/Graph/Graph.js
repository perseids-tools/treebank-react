import React, { useState } from 'react';
import DagreGraph from 'dagre-d3-react';
import { curveBasis } from 'd3-shape';

import styles from './Graph.module.scss';

import { sentenceToGraph } from '../../../lib/parsing';
import { getColor } from '../config';

import TreebankContext from '../treebank-context';

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

let previousSentence = null;
const Graph = () => {
  const [render, setRender] = useState(true);

  return (
    <TreebankContext.Consumer>
      {({
        sentence, active, setActive, config,
      }) => {
        const { nodes, links } = sentenceToGraph(sentence);

        // TODO this is a workaround for a re-rendering issue in the Dagre D3 React library.
        // It's only here to get the demo working!
        // In the future, we will use a custom Dagre D3 wrapper instead of the library.
        if (previousSentence !== sentence) {
          previousSentence = sentence;
          setRender(!render);

          return <div />;
        }

        return (
          <DagreGraph
            nodes={configureNodes(config, active, nodes)}
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
};

export default Graph;
