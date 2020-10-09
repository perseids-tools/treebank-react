import { parseString } from 'xml2js';

const xmlToJson = (xml) => {
  let json;
  parseString(xml, (_err, result) => {
    json = result;
  });

  return json;
};

const sentenceToGraph = (sentence) => {
  const graph = { nodes: [{ id: '0', label: '[ROOT]' }], links: [] };

  sentence.word.forEach((word) => {
    const {
      $: {
        id, form, head, relation, postag,
      },
    } = word;
    graph.nodes.push({
      id, label: form, postag, _word: word,
    });
    graph.links.push({ source: head, target: id, label: relation });
  });

  return graph;
};

export {
  xmlToJson,
  sentenceToGraph,
};
