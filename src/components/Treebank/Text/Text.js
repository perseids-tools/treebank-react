import React from 'react';

import TreebankContext from '../treebank-context';

import Text from '../../Text';

const TextWithContext = () => (
  <TreebankContext.Consumer>
    {({
      sentence, active, toggleActive, config,
    }) => (
      <Text sentence={sentence} active={active} toggleActive={toggleActive} config={config} />
    )}
  </TreebankContext.Consumer>
);

export default TextWithContext;
