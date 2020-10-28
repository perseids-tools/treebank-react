import React from 'react';

import TreebankContext from '../treebank-context';

import Sentence from '../../Sentence';

const SentenceWithContext = () => (
  <TreebankContext.Consumer>
    {({
      sentence, active, toggleActive, config,
    }) => (
      <Sentence sentence={sentence} active={active} toggleActive={toggleActive} config={config} />
    )}
  </TreebankContext.Consumer>
);

export default SentenceWithContext;
