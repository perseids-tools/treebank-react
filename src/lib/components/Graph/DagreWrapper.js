import React, { useRef, useEffect } from 'react';
import { arrayOf, object, func } from 'prop-types';

import styles from './Graph.module.scss';

import { drawGraph } from './dagre';

const DagreWrapper = ({ nodes, links, onClick }) => {
  const svg = useRef(null);
  const g = useRef(null);
  const prevNodes = useRef(null);
  const prevLinks = useRef(null);

  useEffect(() => {
    drawGraph(svg, g, nodes, links, onClick, prevNodes.current, prevLinks.current);

    prevNodes.current = nodes;
    prevLinks.current = links;
  }, [nodes, links]);

  return (
    <svg ref={svg} className={styles.graph}>
      <g ref={g} />
    </svg>
  );
};

DagreWrapper.propTypes = {
  nodes: arrayOf(object).isRequired,
  links: arrayOf(object).isRequired,
  onClick: func.isRequired,
};

export default DagreWrapper;
