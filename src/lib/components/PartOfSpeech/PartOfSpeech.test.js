import React from 'react';
import renderer from 'react-test-renderer';

import { getConfig } from '../Treebank/config';

import PartOfSpeech from './PartOfSpeech';

it('renders a sentence', () => {
  const active = {
    $: {
      id: '1',
      form: 'δικαστὰς',
      lemma: 'δικαστής',
      postag: 'n-p---ma-',
      relation: 'PNOM',
      head: '1',
    },
  };

  const component = (
    <PartOfSpeech
      active={active}
      config={getConfig('aldt', 'grc')}
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
