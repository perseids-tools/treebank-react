import React from 'react';

import TreebankContext from '../treebank-context';

import Graph from '../../Graph';

const GraphWithContext = () => (
  <TreebankContext.Consumer>
    {({
      sentence, active, toggleActive, config,
    }) => <Graph sentence={sentence} active={active} toggleActive={toggleActive} config={config} />}
  </TreebankContext.Consumer>
);

export default GraphWithContext;
