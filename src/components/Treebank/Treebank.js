import React from 'react';
import DagreGraph from 'dagre-d3-react'

import styles from './Treebank.module.scss';

const Treebank = ({ treebank: { nodes, links } }) => (
  <DagreGraph
    nodes={nodes}
    links={links}
    fitBoundaries
    zoomable
    className={styles.treebank}

    height="1000"
    width="1000"
  />
);

export default Treebank;
