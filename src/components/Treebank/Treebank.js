import React from 'react';
import DagreGraph from 'dagre-d3-react'
import { curveBasis } from 'd3-shape';

import styles from './Treebank.module.scss';

const config = {
  rankdir: 'TB',
};

const linkConfig = {
  arrowheadStyle: 'display: none',
  curve: curveBasis,
};

const configureLinks = (links) => (
  links.map((link) => {
    link.config = linkConfig;

    return link;
  })
);

const Treebank = ({ treebank: { nodes, links } }) => (
  <DagreGraph
    nodes={nodes}
    links={configureLinks(links)}
    fitBoundaries
    zoomable
    className={styles.treebank}
    config={config}

    height="600"
    width="1000"
  />
);

export default Treebank;
