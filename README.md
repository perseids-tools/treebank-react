# Treebank React

React library for displaying treebanks.
It displays treebanks visually using the [Dagre](https://github.com/dagrejs/dagre) library
as well as displaying XML and other formats.

## Demo

[https://perseids-tools.github.io/treebank-react/](https://perseids-tools.github.io/treebank-react/)

## Usage

```jsx
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
```
