import React from 'react';

import TreebankContext from '../treebank-context';

import Information from '../../Information';

const InformationWithContext = () => (
  <TreebankContext.Consumer>
    {({ active, config }) => <Information active={active} config={config} />}
  </TreebankContext.Consumer>
);

export default InformationWithContext;
