import React from 'react';

import SentenceContext from '../sentence-context';

import Information from '../../Information';

const InformationWithContext = () => (
  <SentenceContext.Consumer>
    {({ active, config }) => <Information active={active} config={config} />}
  </SentenceContext.Consumer>
);

export default InformationWithContext;
