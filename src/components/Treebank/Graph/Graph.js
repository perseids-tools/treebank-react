import React from 'react';

import TreebankContext from '../treebank-context';

import Graph from '../../Graph';

const GraphWithContext = () => (
  <TreebankContext.Consumer>
    {({
      sentence, active, setActive, config,
    }) => <Graph sentence={sentence} active={active} setActive={setActive} config={config} />}
  </TreebankContext.Consumer>
);

export default GraphWithContext;
