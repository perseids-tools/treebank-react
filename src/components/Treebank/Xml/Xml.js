import React from 'react';

import TreebankContext from '../treebank-context';

import Xml from '../../Xml';

const XmlWithContext = () => (
  <TreebankContext.Consumer>
    {({ sentence, active, setActive }) => (
      <Xml sentence={sentence} active={active} setActive={setActive} />
    )}
  </TreebankContext.Consumer>
);

export default XmlWithContext;
