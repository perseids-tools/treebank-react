import React from 'react';

import TreebankContext from '../treebank-context';

import Xml from '../../Xml';

const XmlWithContext = () => (
  <TreebankContext.Consumer>
    {({ sentence, active, toggleActive }) => (
      <Xml sentence={sentence} active={active} toggleActive={toggleActive} />
    )}
  </TreebankContext.Consumer>
);

export default XmlWithContext;
