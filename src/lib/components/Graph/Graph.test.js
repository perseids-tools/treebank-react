import React from 'react';
import renderer from 'react-test-renderer';

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
      toggleActive={() => {}}
      config={global.defaultConfig}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
