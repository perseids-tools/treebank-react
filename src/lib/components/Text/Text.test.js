import React from 'react';
import renderer from 'react-test-renderer';

import config from '../Treebank/config/arethusa-configs/aldt2grc.json';

import Text from './Text';

it('renders a sentence', () => {
  const component = (
    <Text
      sentence={{ word: [{ $: { id: '1', form: 'Ἡροδότου', postag: 'n-s---mg-' } }] }}
      active={null}
      toggleActive={() => {}}
      config={config}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('orders the words of a sentence correctly', () => {
  const sentence = {
    word: [
      { $: { id: '4', form: 'ὦ', postag: 'e--------' } },
      { $: { id: '3', form: 'χαῖρε', postag: 'v2spma---' } },
      {
        $: {
          id: '2', insertion_id: '0004f', form: '.', postag: 'u--------',
        },
      },
      {
        $: {
          id: '1', insertion_id: '0004e', form: 'κόσμε', postag: 'n-s---mv-',
        },
      },
    ],
  };

  const component = (
    <Text
      sentence={sentence}
      active={null}
      toggleActive={() => {}}
      config={config}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('styles `artificial="elliptic"` words differently', () => {
  const sentence = {
    word: [
      {
        $: {
          id: '1', form: 'Ἡροδότου', postag: 'n-s---mg-', artificial: 'elliptic',
        },
      },
    ],
  };

  const component = (
    <Text
      sentence={sentence}
      active={null}
      toggleActive={() => {}}
      config={config}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
