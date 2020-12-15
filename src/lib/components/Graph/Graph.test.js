import React from 'react';
import renderer from 'react-test-renderer';

import config from '../../utils/config/arethusa-configs/aldt2grc.json';

import Graph from './Graph';

it('renders a sentence', () => {
  const sentence = {
    $: {
      id: '1', document_id: 'test', subdoc: '2', span: '',
    },
    word: [
      {
        $: {
          id: '1', form: 'οὐκ', lemma: 'οὐ', postag: 'd--------', relation: 'AuxZ', head: '1',
        },
      },
      {
        $: {
          id: '2', form: 'ᾔδη', lemma: 'οἶδα', postag: 'v1slia---', relation: 'PRED', head: '0',
        },
      },
    ],
  };

  const component = (
    <Graph
      sentence={sentence}
      active={null}
      toggleActive={() => {}}
      config={config}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
