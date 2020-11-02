// TODO - the code in this file along with the logic in parsing.js and Graph.js need to be
// combined and simplified.

import dagreD3 from 'dagre-d3';
import * as d3 from 'd3';

import styles from './Graph.module.scss';

const treeMargin = 15;

const config = {
  rankdir: 'TB',
};

const drawNoChange = (state, nodes, links, prevNodes, prevLinks) => {
  if (!prevNodes || !prevLinks) {
    return false;
  }

  if (nodes.length !== prevNodes.length) {
    return false;
  }

  if (links.length !== prevLinks.length) {
    return false;
  }

  let ii;

  for (ii = 0; ii < links.length; ii += 1) {
    const link = links[ii];
    const prevLink = prevLinks[ii];

    if (link.head !== prevLink.head
      || link.target !== prevLink.target
      || link.label !== prevLink.label) {
      return false;
    }
  }
  // eslint-disable-next-line no-param-reassign
  state.linksIdentical = true;

  for (ii = 0; ii < nodes.length; ii += 1) {
    const node = nodes[ii];
    const prevNode = prevNodes[ii];

    if (node.id !== prevNode.id
      || node.label !== prevNode.label
      || node.postag !== prevNode.postag
      || node.config.isActive !== prevNode.config.isActive) {
      return false;
    }
  }

  return true;
};

const drawChangeActive = (state, selectedG, nodes, prevNodes, onClick) => {
  if (!state.linksIdentical) {
    return false;
  }

  if (!prevNodes) {
    return false;
  }

  if (nodes.length !== prevNodes.length) {
    return false;
  }

  let ii; let active; let
    prevActive;

  for (ii = 0; ii < nodes.length; ii += 1) {
    const node = nodes[ii];
    const prevNode = prevNodes[ii];

    if (node.id !== prevNode.id
      || node.label !== prevNode.label
      || node.postag !== prevNode.postag) {
      return false;
    }

    if (prevNode.config.isActive) {
      prevActive = prevNode;
    }

    if (node.config.isActive) {
      active = node;
    }
  }

  // eslint-disable-next-line func-names
  selectedG.selectAll('g.node').each(function () {
    // eslint-disable-next-line no-underscore-dangle
    if (active && this.__data__ === active.id) {
      this.classList.add(styles.active);
      d3.select(this).on('mousedown', ({ target }) => {
        // eslint-disable-next-line no-underscore-dangle
        onClick(target.__data__);
      });
    }

    // eslint-disable-next-line no-underscore-dangle
    if (prevActive && this.__data__ === prevActive.id) {
      this.classList.remove(styles.active);
      d3.select(this).on('mousedown', ({ target }) => {
        // eslint-disable-next-line no-underscore-dangle
        onClick(target.__data__);
      });
    }
  });

  return true;
};

const setInitialPosition = (selectedSvg, zoom) => {
  const node = selectedSvg.node();
  const bounds = node.getBBox();
  const width = node.clientWidth;
  const offset = d3.zoomIdentity.translate(treeMargin, treeMargin);

  const scale = (width - treeMargin * 2) / bounds.width;

  selectedSvg.call(zoom.transform, offset.scale(scale));
};

const drawInitial = (state, selectedSvg, selectedG, nodes, links, onClick) => {
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
  const zoom = d3.zoom().on('zoom', (event) => {
    selectedG.attr('transform', event.transform);
  });

  selectedSvg.call(zoom);

  selectedG.attr('transform', d3.zoomIdentity);

  renderer(selectedG, graph);

  setInitialPosition(selectedSvg, zoom);

  selectedSvg.selectAll('g.node').on('mousedown', ({ target }) => {
    // eslint-disable-next-line no-underscore-dangle
    onClick(target.__data__);
  });

  return true;
};

const drawGraph = (svg, g, nodes, links, onClick, prevNodes, prevLinks) => {
  const selectedSvg = d3.select(svg.current);
  const selectedG = d3.select(g.current);
  const state = {};

  // eslint-disable-next-line no-unused-expressions
  drawNoChange(state, nodes, links, prevNodes, prevLinks)
  || drawChangeActive(state, selectedG, nodes, prevNodes, onClick)
  || drawInitial(state, selectedSvg, selectedG, nodes, links, onClick);
};

export {
  // eslint-disable-next-line import/prefer-default-export
  drawGraph,
};
