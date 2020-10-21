import React from 'react';

import TreebankContext from '../treebank-context';

import Sentence from '../../Sentence';

const SentenceWithContext = () => (
  <TreebankContext.Consumer>
    {({
      sentence, active, setActive, config,
    }) => (
      <Sentence sentence={sentence} active={active} setActive={setActive} config={config} />
    )}
  </TreebankContext.Consumer>
);

export default SentenceWithContext;
