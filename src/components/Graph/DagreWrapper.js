import React, { useRef, useEffect } from 'react';
import { arrayOf, object, func } from 'prop-types';
import dagreD3 from 'dagre-d3';
import * as d3 from 'd3';

import styles from './Graph.module.scss';

const config = {
  rankdir: 'TB',
};

const drawGraph = (svg, g, {
  nodes, links, onClick, transform,
}) => {
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
  const zoom = d3.zoom().on('zoom', (event) => {
    // eslint-disable-next-line no-param-reassign
    transform.current = event.transform;
    selectedG.attr('transform', event.transform);
  });

  selectedSvg.call(zoom);

  selectedG.attr('transform', d3.zoomIdentity);
  renderer(selectedG, graph);
  selectedG.attr('transform', transform.current);

  selectedSvg.selectAll('g.node').on('mousedown', ({ target }) => {
    // eslint-disable-next-line no-underscore-dangle
    onClick(target.__data__);
  });
};

const DagreWrapper = ({ nodes, links, onClick }) => {
  const svg = useRef(null);
  const g = useRef(null);

  // See https://github.com/dagrejs/dagre-d3/issues/251
  // There is a bug in Dagre D3 (0.6.4) which causes positioning issues
  // when a user zooms and then the graph is re-rendered. This variable
  // keeps track of the zoom level and positioning. When a re-render occurs,
  // the code first sets the zoom and and position to the default, then
  // re-renders, and finally resets the zoom to what it was before.
  const transform = useRef(d3.zoomIdentity);

  useEffect(() => drawGraph(svg, g, {
    nodes, links, onClick, transform,
  }));

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
