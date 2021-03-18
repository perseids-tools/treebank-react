# Treebank React

React library for displaying treebanks.
It displays treebanks visually using the [Dagre](https://github.com/dagrejs/dagre) library
as well as displaying XML and other formats.

## Demo

[https://perseids-tools.github.io/treebank-react/](https://perseids-tools.github.io/treebank-react/)

## Installation

`yarn add treebank-react`

Note that this package has the following peer dependencies:

```json
{
  "react": "^16.0.0 || ^17.0.0"
}
```

(See project on [npm](https://www.npmjs.com/package/treebank-react).)

## How to use

### Demo

See the demo [App.js](/src/demo/App/App.js).

### Example

```jsx
import {
  Treebank,
  Sentence,
  Text,
  Graph,
  Information,
  Xml,
  Collapse,
} from 'treebank-react';

import 'treebank-react/build/index.css';

const xml = '<treebank xml:lang="grc" format="aldt" version="1.5">\n'
  + '  <sentence id="1" document_id="" subdoc="" span="">\n'
  + '    <word id="1" form="χαῖρε" lemma="χαίρω" postag="v2spma---" relation="PRED" head="0"/>\n'
  + '    <word id="2" form="ὦ" lemma="ὦ" postag="i--------" relation="AuxZ" head="3"/>\n'
  + '    <word id="3" form="κόσμε" lemma="κόσμος" postag="n-s---mv-" relation="ExD" head="1"/>\n'
  + '  </sentence>\n'
  + '</treebank>';

const App = () => (
  <Treebank treebank={xml}>
    <Sentence id="1">
      <Text />
      <Graph />
      <Information />
      <Collapse title="XML">
        <Xml />
      </Collapse>
    </Sentence>
  </Treebank>
);

export default  App;
```

#### Treebank

The `<Treebank>` component accepts treebank XML as a `treebank` prop.
The other components should be children (or grandchildren, etc.) of the `<Treebank>` component.

#### Sentence

The `<Sentence>` component accepts a string `id` which represents the `id` of the
sentence to display.

It also accepts an optional `highlight` prop. This is an array of `id` strings to be
emphasized by the child components.

#### Graph

The `<Graph>` component must be within a `<Sentence>` component.
It uses Dagre-d3 to display the treebank.

The height and width of the graph are determined by the parent element.
This is subject to change, but currently it expects a parent with `display: flex`.

```jsx
<div style={{ display: 'flex', height: '60vh' }}>
  <Graph />
</div>
```

#### Information

The `<Information>` component shows the deconstructed POSTag and the lemma for the active word.
The headers are taken from the treebank configuration.
See [alpheios-project/arethusa-configs](https://github.com/alpheios-project/arethusa-configs) for more information about treebank configuration.

#### Xml

The `<Xml>` component displays the XML of the sentence.

#### Collapse

The `<Collapse>` component is provided for convenience.
It is a button that displays or hides its children whenever it is clicked.

## Development

### Setup

```
git clone git@github.com:perseids-tools/treebank-react.git
```

then install development dependencies

```
yarn install
```

### Running tests

#### Unit tests

`yarn test`

#### Visual regression tests

`yarn visual-test`

### Running demo application

`yarn start`

### Deploying demo application

`yarn deploy`

### Building

`yarn build`

### Publishing

```
yarn build
npm publish
```

(Make sure to update the `version` in `package.json` before publishing a new release.)

## Upgrading Notes

This library is build on top of [DimiMikadze/create-react-library](https://github.com/DimiMikadze/create-react-library).
To upgrade to the latest version of `create-react-library`:

* In `package.json`, everything above `devDependencies` should not be updated,
  but everything below it should be replaced by the new versions in `create-react-library`.
* Add back the dependencies for the project
* All of the files in `./scripts` should be replaced with new versions in `create-react-library`.
* All of the files in `./config` should be replaced with new versions in `create-react-library`.
* Test to make sure that building and deploying demo application still work
