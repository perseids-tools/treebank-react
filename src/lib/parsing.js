import { parseString } from 'xml2js';

const xmlToJson = (xml) => {
  let json;
  parseString(xml, function (_err, result) {
    json = result;
  });

  return json;
};

const extractPostag = (postag) => (
  postag ? postag[0] : '-'
);

const parseXml = (xml) => {
  const { treebank } = xmlToJson(xml);
  const json = { nodes: [{ id: '0', label: '[ROOT]' }], links: [] };

  treebank.sentence[0].word.forEach(({ $: { id, form, head, relation, postag }}) => {
    json.nodes.push({ id, label: form, pos: extractPostag(postag) });
    json.links.push({ source: head, target: id, label: relation });
  });

  return json;
};

export {
  parseXml,
};
