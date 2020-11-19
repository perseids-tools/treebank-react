import React from 'react';

import SentenceContext from '../sentence-context';

import PartOfSpeech from '../../PartOfSpeech';

const PartOfSpeechWithContext = () => (
  <SentenceContext.Consumer>
    {({ active, config }) => <PartOfSpeech active={active} config={config} />}
  </SentenceContext.Consumer>
);

export default PartOfSpeechWithContext;
