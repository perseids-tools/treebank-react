import React from 'react';
import renderer from 'react-test-renderer';

import { getConfig } from '../config';

import { Sentence } from './Sentence';

it('renders a sentence', () => {
  const component = (
    <Sentence
      sentence={{ word: [{ $: { id: '1', form: 'Ἡροδότου', postag: 'n-s---mg-' } }] }}
      active={null}
      setActive={() => {}}
      config={getConfig('aldt', 'grc')}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
