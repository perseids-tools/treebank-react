import React from 'react';
import renderer from 'react-test-renderer';

import AdditionalFields from './AdditionalFields';

it('renders a word with additional fields', () => {
  const active = {
    $: {
      id: '1',
      sg: 'sg',
      comment: 'comment',
      artificial: 'artificial',
      gloss: 'gloss',
      alternateGloss: 'alternateGloss',
      semanticRole: 'semanticRole',
      include: 'include',
      multiword: 'multiword',
      notes: 'notes',
    },
  };

  const component = (
    <AdditionalFields active={active} />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can render a subset of fields', () => {
  const active = {
    $: {
      id: '1',
      sg: 'sg',
      comment: 'comment',
      artificial: 'artificial',
      gloss: 'gloss',
      alternateGloss: 'alternateGloss',
      semanticRole: 'semanticRole',
      include: 'include',
      multiword: 'multiword',
      notes: 'notes',
    },
  };

  const component = (
    <AdditionalFields active={active} fields={['comment', 'gloss']} />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders an empty div when there are no fields', () => {
  const active = { $: { id: '1' } };

  const component = (
    <AdditionalFields active={active} />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
