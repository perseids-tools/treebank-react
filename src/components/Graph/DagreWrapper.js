import React, { useRef, useEffect } from 'react';
import { arrayOf, object, func } from 'prop-types';
import dagreD3 from 'dagre-d3';
import * as d3 from 'd3';

import styles from './Graph.module.scss';

const config = {
  rankdir: 'TB',
};

const drawGraph = (svg, g, { nodes, links, onClick }) => {
  const graph = new dagreD3.graphlib.Graph().setGraph(config);

  nodes.forEach(({
    id, label, config: { labelType, labelStyle, class: className },
  }) => {
    graph.setNode(id, {
      label, labelType, labelStyle, class: className,
    });
  });

  links.forEach(({
    source, target, label, config: { arrowheadStyle },
  }) => {
    graph.setEdge(source, target, { label, arrowheadStyle });
  });

  // eslint-disable-next-line new-cap
  const renderer = new dagreD3.render();
  const selectedSvg = d3.select(svg.current);
  const selectedG = d3.select(g.current);
  const zoom = d3.zoom().on('zoom', (event) => selectedG.attr('transform', event.transform));

  selectedSvg.call(zoom);

  renderer(selectedG, graph);

  selectedSvg.selectAll('g.node').on('click', ({ target }) => {
    // eslint-disable-next-line no-underscore-dangle
    onClick(target.__data__);
  });
};

const DagreWrapper = ({ nodes, links, onClick }) => {
  const svg = useRef(null);
  const g = useRef(null);

  useEffect(() => drawGraph(svg, g, { nodes, links, onClick }));

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
