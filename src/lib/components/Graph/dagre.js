/* eslint-disable new-cap, func-names, no-underscore-dangle, import/prefer-default-export */

import dagreD3 from 'dagre-d3';
import * as d3 from 'd3';

import styles from './Graph.module.scss';

const treeMargin = 15;

const config = {
  rankdir: 'TB',
  nodesep: 40,
  edgesep: 10,
  ranksep: 30,
};

// This file provides an interface between React and Dagre-d3. Because React
// is declarative and Dagre-d3 is imperative, any interface will be a little
// messy. Hopefully, this file (together with DagreWrapper.js) will be able to
// contain the mess. The goal is to provide a fully-declarative interface to
// Dagre-d3.
//
// The `drawGraph` function is exported, but the `Dagre` class is where
// most of the logic lives. The class is instantiated with the nodes, links,
// previous nodes, previous links, a callback that should be called when a node
// is clicked, and some d3 elements.
//
// The `draw` function works like a state machine and executes all the logic
// necessary for determining whether the graph should be redrawn and how to draw
// it. For example, if several nodes have been added, the entire graph is
// redrawn. But if the only change is the active node, the graph is not redrawn.
// Instead, the CSS classes of the active node and previously active node are
// changed.
//
// See the comments in the `draw` function for more information.
class Dagre {
  constructor(selectedSvg, selectedG, nodes, links, onClick, prevNodes, prevLinks) {
    this.selectedSvg = selectedSvg;
    this.selectedG = selectedG;
    this.nodes = nodes;
    this.links = links;
    this.onClick = onClick;
    this.prevNodes = prevNodes;
    this.prevLinks = prevLinks;

    this.state = 'initial';

    // Instance variables that can be set or unset as part of a state transition
    this.active = null;
    this.previousActive = null;

    this.draw = this.draw.bind(this);
    this.checkGraphSize = this.checkGraphSize.bind(this);
    this.redraw = this.redraw.bind(this);
    this.checkLinks = this.checkLinks.bind(this);
    this.checkNodes = this.checkNodes.bind(this);
    this.drawActive = this.drawActive.bind(this);
  }

  draw() {
    if (this.state === 'complete') {
      return;
    }

    const transitions = {
      // Checks for changes in the number of nodes and links
      // -> sameSize : if the number of nodes and number of  links haven't changed
      // -> redraw   : if there are changes or if there is no previous graph
      initial: this.checkGraphSize,

      // Checks for any changes between `links` and `prevLinks`
      // -> linksIdentical : if there are no changes
      // -> redraw         : if there are changes
      sameSize: this.checkLinks,

      // Checks for any changes between `nodes` and `prevNodes`
      // Also checks whether the active node has changed
      // (Sets `this.active` and `this.previousActive`)
      // -> complete      : if there are no changes
      // -> activeChanged : if the only change is the active node
      // -> redraw        : if there are any other changes
      linksIdentical: this.checkNodes,

      // Adds the `active` class to the active node in the graph
      // Removes the `active` class from the previously active node
      // Makes no other change to the graph
      // -> complete
      activeChanged: this.drawActive,

      // Draws the graph
      // If the graph has already been drawn, this function redraws it
      // -> complete
      redraw: this.redraw,
    };

    transitions[this.state]();

    this.draw();
  }

  checkGraphSize() {
    if (!this.prevNodes || !this.prevLinks
      || this.nodes.length !== this.prevNodes.length
      || this.links.length !== this.prevLinks.length) {
      this.state = 'redraw';

      return;
    }

    this.state = 'sameSize';
  }

  checkLinks() {
    let ii;

    for (ii = 0; ii < this.links.length; ii += 1) {
      const link = this.links[ii];
      const prevLink = this.prevLinks[ii];

      if (link.head !== prevLink.head
        || link.source !== prevLink.source
        || link.target !== prevLink.target
        || link.label !== prevLink.label) {
        this.state = 'redraw';

        return;
      }
    }

    this.state = 'linksIdentical';
  }

  checkNodes() {
    let ii;

    for (ii = 0; ii < this.nodes.length; ii += 1) {
      const node = this.nodes[ii];
      const prevNode = this.prevNodes[ii];

      if (node.id !== prevNode.id
        || node.label !== prevNode.label
        || node.postag !== prevNode.postag) {
        this.state = 'redraw';

        return;
      }

      if (prevNode.config.isActive) {
        this.previousActive = prevNode;
      }

      if (node.config.isActive) {
        this.active = node;
      }
    }

    if ((this.active && !this.previousActive)
      || (!this.active && this.previousActive)
      || (this.active && this.previousActive && this.active.id !== this.previousActive.id)) {
      this.state = 'activeChanged';

      return;
    }

    this.state = 'complete';
  }

  drawActive() {
    const { active } = this;
    const { previousActive } = this;
    const { onClick } = this;

    this.selectedG.selectAll('g.node').each(function () {
      if (active && this.__data__ === active.id) {
        this.classList.add(styles.active);

        // For some reason, the listener has to be re-added to manipulated nodes
        d3.select(this).on('mousedown', ({ target }) => {
          onClick(target.__data__);
        });
      }

      if (previousActive && this.__data__ === previousActive.id) {
        this.classList.remove(styles.active);
        d3.select(this).on('mousedown', ({ target }) => {
          onClick(target.__data__);
        });
      }
    });

    this.state = 'complete';
  }

  redraw() {
    const graph = new dagreD3.graphlib.Graph().setGraph(config);

    this.nodes.forEach(({
      id, label, config: { labelType, labelStyle, class: className },
    }) => {
      graph.setNode(id, {
        label,
        labelType,
        labelStyle,
        class: className,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,
      });
    });

    this.links.forEach(({
      source, target, label, config: { arrowheadStyle },
    }) => {
      graph.setEdge(source, target, { label, arrowheadStyle, curve: d3.curveBasis });
    });

    const renderer = new dagreD3.render();
    const zoom = d3.zoom().on('zoom', (event) => {
      this.selectedG.attr('transform', event.transform);
    }).scaleExtent([0.3, 2.5]);

    this.selectedSvg.call(zoom);

    this.selectedG.attr('transform', d3.zoomIdentity);

    renderer(this.selectedG, graph);

    this.setInitialPosition(zoom);

    this.selectedSvg.selectAll('g.node').on('mousedown', ({ target }) => {
      this.onClick(target.__data__);
    });

    this.state = 'complete';
  }

  setInitialPosition(zoom) {
    const node = this.selectedSvg.node();
    const bounds = node.getBBox();
    const width = node.clientWidth;

    if (bounds.width > width - (treeMargin * 2)) {
      const offset = d3.zoomIdentity.translate(treeMargin, treeMargin);
      const scale = (width - treeMargin * 2) / bounds.width;

      this.selectedSvg.call(zoom.transform, offset.scale(scale));
    } else {
      const offset = d3.zoomIdentity.translate((width - bounds.width) / 2, treeMargin);

      this.selectedSvg.call(zoom.transform, offset);
    }
  }
}

const drawGraph = (svg, g, nodes, links, onClick, prevNodes, prevLinks) => {
  const selectedSvg = d3.select(svg.current);
  const selectedG = d3.select(g.current);
  const graph = new Dagre(selectedSvg, selectedG, nodes, links, onClick, prevNodes, prevLinks);

  graph.draw();
};

export {
  drawGraph,
};
