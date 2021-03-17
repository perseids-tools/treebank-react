import React from 'react';

import SentenceContext from '../sentence-context';

import Xml from '../../Xml';

const XmlWithContext = () => (
  <SentenceContext.Consumer>
    {({
      sentence, active, toggleActive, highlight,
    }) => (
      <Xml
        sentence={sentence}
        active={active}
        toggleActive={toggleActive}
        highlight={highlight}
      />
    )}
  </SentenceContext.Consumer>
);

export default XmlWithContext;
