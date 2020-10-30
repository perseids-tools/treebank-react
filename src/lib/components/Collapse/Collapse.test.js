import React from 'react';
import renderer from 'react-test-renderer';

import Collapse from './Collapse';

it('renders collapsed', () => {
  const component = (
    <Collapse title="Title">
      <div>Hello world</div>
    </Collapse>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders uncollapsed', () => {
  const component = (
    <Collapse title="Title" collapsed={false}>
      <div>Hello world</div>
    </Collapse>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
