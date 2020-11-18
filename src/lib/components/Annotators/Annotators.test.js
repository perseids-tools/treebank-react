import React from 'react';
import renderer from 'react-test-renderer';

import Annotators from './Annotators';

it('renders the annotators', () => {
  const json = {
    treebank: {
      annotator: [
        {
          short: 'T', name: 'Test User', address: 'test@example.com', uri: 'http://example.com',
        },
        { uri: 'http://example.com/only-uri' },
      ],
    },
  };

  const component = (
    <Annotators json={json} />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
