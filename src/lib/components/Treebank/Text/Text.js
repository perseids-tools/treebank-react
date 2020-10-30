import React from 'react';

import SentenceContext from '../sentence-context';

import Text from '../../Text';

const TextWithContext = () => (
  <SentenceContext.Consumer>
    {({
      sentence, active, toggleActive, config,
    }) => (
      <Text sentence={sentence} active={active} toggleActive={toggleActive} config={config} />
    )}
  </SentenceContext.Consumer>
);

export default TextWithContext;
