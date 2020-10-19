import React from 'react';

import TreebankContext from '../treebank-context';

import Xml from '../../Xml';

const XmlWithContext = () => (
  <TreebankContext.Consumer>
    {({ sentence }) => <Xml sentence={sentence} />}
  </TreebankContext.Consumer>
);

export default XmlWithContext;
