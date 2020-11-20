import React, { useMemo } from 'react';
import { node, string } from 'prop-types';

import { xmlToJson } from '../../utils/parsing';
import { getConfig } from './config';

import TreebankContext from './treebank-context';

const configFromJson = (json) => (
  getConfig(
    json.treebank.$['xml:lang'],
    json.treebank.$.format,
  )
);

const Treebank = ({ treebank, children }) => {
  const json = useMemo(() => xmlToJson(treebank), [treebank]);
  const config = configFromJson(json);

  return (
    <TreebankContext.Provider value={{ json, config }}>
      {children}
    </TreebankContext.Provider>
  );
};

Treebank.propTypes = {
  treebank: string.isRequired,
  children: node,
};

Treebank.defaultProps = {
  children: null,
};

export default Treebank;
