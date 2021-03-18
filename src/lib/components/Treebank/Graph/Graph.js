import React from 'react';

import SentenceContext from '../sentence-context';

import Graph from '../../Graph';

const GraphWithContext = () => (
  <SentenceContext.Consumer>
    {({
      sentence, active, toggleActive, highlight, config,
    }) => (
      <Graph
        sentence={sentence}
        active={active}
        toggleActive={toggleActive}
        highlight={highlight}
        config={config}
      />
    )}
  </SentenceContext.Consumer>
);

export default GraphWithContext;
