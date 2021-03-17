import { parseString } from 'xml2js';

const xmlToJson = (xml) => {
  let json;
  parseString(xml, (_err, result) => {
    json = result;
  });

  return json;
};

const createNode = (word, active, highlight, config, styles) => {
  const {
    $: {
      id, form, postag, artificial,
    },
  } = word;
  const color = config.getColor(postag);
  const isActive = active && active.$.id === id;
  const isHighlighted = !isActive && highlight.has(id);
  const classes = [styles.node];

  if (isActive) {
    classes.push(styles.active);
  }

  if (isHighlighted) {
    classes.push(styles.highlight);
  }

  if (artificial === 'elliptic') {
    classes.push(styles.elliptic);
  }

  return {
    artificial,
    id,
    postag,
    label: form,
    config: {
      labelStyle: `color: ${color}`,
      labelType: 'html',
      class: classes.join(' '),
      isActive,
      isHighlighted,
    },
  };
};

const createLink = (word) => {
  const {
    $: {
      id, head, relation,
    },
  } = word;

  if (id && head) {
    return {
      label: relation,
      source: head,
      target: id,
      config: {
        arrowheadStyle: 'display: none',
      },
    };
  }

  return null;
};

const sentenceToGraph = (sentence, active, highlight, config, styles) => {
  const graph = { nodes: [{ id: '0', label: '[ROOT]', config: { labelType: 'html', class: styles.node } }], links: [] };

  sentence.word.forEach((word) => {
    const node = createNode(word, active, highlight, config, styles);
    const link = createLink(word);

    graph.nodes.push(node);

    if (link) {
      graph.links.push(link);
    }
  });

  return graph;
};

export {
  xmlToJson,
  sentenceToGraph,
};
