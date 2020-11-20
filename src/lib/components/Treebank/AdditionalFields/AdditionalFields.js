import React from 'react';

import SentenceContext from '../sentence-context';

import AdditionalFields from '../../AdditionalFields';

const AdditionalFieldsWithContext = () => (
  <SentenceContext.Consumer>
    {({ active }) => <AdditionalFields active={active} />}
  </SentenceContext.Consumer>
);

export default AdditionalFieldsWithContext;
