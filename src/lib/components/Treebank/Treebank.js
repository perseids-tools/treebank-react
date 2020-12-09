import React, { useMemo, useState } from 'react';
import { node, string } from 'prop-types';

import { xmlToJson } from '../../utils/parsing';
import { getConfig } from './config';

import TreebankContext from './treebank-context';

const configFromJson = (json, callback) => (
  getConfig(
    json.treebank.$.format,
    json.treebank.$['xml:lang'],
    callback,
  )
);

const Treebank = ({ treebank, children }) => {
  const [config, setConfig] = useState(null);
  const json = useMemo(() => xmlToJson(treebank), [treebank]);

  useMemo(() => configFromJson(json, setConfig), [treebank]);

  if (config) {
    return (
      <TreebankContext.Provider value={{ json, config }}>
        {children}
      </TreebankContext.Provider>
    );
  }

  return (
    <div />
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
