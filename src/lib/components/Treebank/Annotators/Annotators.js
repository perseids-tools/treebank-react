import React from 'react';

import TreebankContext from '../treebank-context';

import Annotators from '../../Annotators';

const AnnotatorsWithContext = () => (
  <TreebankContext.Consumer>
    {({ json }) => <Annotators json={json} />}
  </TreebankContext.Consumer>
);

export default AnnotatorsWithContext;
