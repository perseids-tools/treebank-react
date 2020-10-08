import React, { useState } from 'react';
import { node, string } from 'prop-types';

import { xmlToJson } from '../../lib/parsing';

import TreebankContext from './treebank-context';

const getSentence = (treebank, chunk) => {
  const treebankJson = xmlToJson(treebank);

  return treebankJson.treebank.sentence.find(({ $ }) => $.id && $.id === chunk);
};

const Treebank = ({ treebank, chunk, children }) => {
  const [active, setActive] = useState(null);
  const sentence = getSentence(treebank, chunk);

  return (
    <TreebankContext.Provider value={{
      sentence,
      chunk,
      active,
      setActive,
    }}
    >
      {children}
    </TreebankContext.Provider>
  );
};

Treebank.propTypes = {
  treebank: string.isRequired,
  chunk: string.isRequired,
  children: node,
};

Treebank.defaultProps = {
  children: null,
};

export default Treebank;
