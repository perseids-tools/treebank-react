import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';

it('renders a sentence', () => {
  const component = (
    <Text
      sentence={{ word: [{ $: { id: '1', form: 'Ἡροδότου', postag: 'n-s---mg-' } }] }}
      toggleActive={() => {}}
      config={global.defaultConfig}
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
      toggleActive={() => {}}
      config={global.defaultConfig}
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
      toggleActive={() => {}}
      config={global.defaultConfig}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('displays highlighted and active words differently', () => {
  const sentence = {
    word: [
      { $: { id: '1', form: 'Ἡροδότου', postag: 'n-s---mg-' } },
      { $: { id: '2', form: 'Ἁλικαρνησσέος', postag: 'n-s---mg-' } },
      { $: { id: '3', form: 'ἱστορίης', postag: 'n-s---fg-' } },
      { $: { id: '4', form: 'ἀπόδεξις', postag: 'n-s---fn-' } },
    ],
  };

  const component = (
    <Text
      sentence={sentence}
      active={{ $: { id: '1' } }}
      toggleActive={() => {}}
      highlight={new Set(['1', '3'])}
      config={global.defaultConfig}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
