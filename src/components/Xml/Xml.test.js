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
