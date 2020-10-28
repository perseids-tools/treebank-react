import React from 'react';

import SentenceContext from '../sentence-context';

import Graph from '../../Graph';

const GraphWithContext = () => (
  <SentenceContext.Consumer>
    {({
      sentence, active, toggleActive, config,
    }) => <Graph sentence={sentence} active={active} toggleActive={toggleActive} config={config} />}
  </SentenceContext.Consumer>
);

export default GraphWithContext;
