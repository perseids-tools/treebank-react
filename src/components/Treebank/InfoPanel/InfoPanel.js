import React from 'react';

import TreebankContext from '../treebank-context';

const InfoPanel = () => (
  <TreebankContext.Consumer>
    {({ active }) => {
      if (active) {
        const { $: { id, label, postag } } = active;

        return (
          <div>
            <ul>
              <li>
                id:
                {id}
              </li>
              <li>
                label:
                {label}
              </li>
              <li>
                pos:
                {postag}
              </li>
            </ul>
          </div>
        );
      }

      return (
        <div />
      );
    }}
  </TreebankContext.Consumer>
);

export default InfoPanel;
