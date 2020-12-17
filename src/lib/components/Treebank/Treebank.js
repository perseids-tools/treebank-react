import React, { useMemo, useState } from 'react';
import { node, string } from 'prop-types';

import { xmlToJson } from '../../utils/parsing';
import { getConfig } from '../../utils/config';

import TreebankContext from './treebank-context';

const configFromJson = (json, configUrl, callback) => (
  getConfig(
    json.treebank.$.format,
    json.treebank.$['xml:lang'],
    configUrl,
    callback,
  )
);

const Treebank = ({ treebank, configUrl, children }) => {
  const [config, setConfig] = useState(null);
  const json = useMemo(() => xmlToJson(treebank), [treebank]);

  useMemo(() => configFromJson(json, configUrl, setConfig), [treebank]);

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
  configUrl: string,
  children: node,
};

Treebank.defaultProps = {
  configUrl: 'https://arethusa-configs.perseids.org/',
  children: null,
};

export default Treebank;
