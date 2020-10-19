import {
  arrayOf,
  shape,
  string,
} from 'prop-types';

const wordType = shape({
  $: shape({
    id: string.isRequired,
    form: string,
    lemma: string,
    postag: string,
    relation: string,
    head: string,
  }),
});

const sentenceType = shape({
  $: shape({
    id: string.isRequired,
    document_id: string,
    subdoc: string,
    span: string,
  }),
  word: arrayOf(wordType),
});

export {
  wordType,
  sentenceType,
};
