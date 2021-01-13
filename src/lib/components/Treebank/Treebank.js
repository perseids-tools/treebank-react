import React, { useMemo, useState, useEffect } from 'react';
import { node, string, func } from 'prop-types';

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

const Treebank = ({
  treebank, configUrl, callback, children,
}) => {
  const [config, setConfig] = useState(null);
  const json = useMemo(() => xmlToJson(treebank), [treebank]);

  useMemo(() => configFromJson(json, configUrl, setConfig), [treebank]);

  useEffect(() => {
    if (callback) {
      callback(json);
    }
  }, [treebank]);

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
  callback: func,
  children: node,
};

Treebank.defaultProps = {
  configUrl: 'https://arethusa-configs.perseids.org/',
  callback: null,
  children: null,
};

export default Treebank;
