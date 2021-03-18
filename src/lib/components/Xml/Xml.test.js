import React from 'react';
import renderer from 'react-test-renderer';

import Xml from './Xml';

it('renders a sentence as XML', () => {
  const sentence = {
    $: {
      id: '1', document_id: 'test', subdoc: '2', span: '',
    },
    word: [
      {
        $: {
          id: '1', form: 'οὐκ', postag: 'd--------', relation: 'AuxZ', head: '1',
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
    <Xml sentence={sentence} />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('displays highlighted and active words differently', () => {
  const sentence = {
    $: {
      id: '1', document_id: 'test', subdoc: '2', span: '',
    },
    word: [
      { $: { id: '1', form: 'Ἡροδότου', postag: 'n-s---mg-' } },
      { $: { id: '2', form: 'Ἁλικαρνησσέος', postag: 'n-s---mg-' } },
      { $: { id: '3', form: 'ἱστορίης', postag: 'n-s---fg-' } },
      { $: { id: '4', form: 'ἀπόδεξις', postag: 'n-s---fn-' } },
    ],
  };

  const component = (
    <Xml
      sentence={sentence}
      active={{ $: { id: '1' } }}
      highlight={new Set(['1', '3'])}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
