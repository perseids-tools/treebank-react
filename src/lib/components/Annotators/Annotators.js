import React from 'react';
import { object } from 'prop-types';

import styles from './Annotators.module.scss';

const annotatorFields = [
  'short',
  'name',
  'address',
  'uri',
];

const annotatorsFromJson = (json) => {
  const annotators = json.treebank.annotator;

  if (annotators) {
    return annotators.map((annotator) => annotatorFields
      .map((field) => ({ title: field, value: annotator[field] ? annotator[field][0] : '' }))
      .filter(({ value }) => value !== ''));
  }

  return [];
};

// eslint-disable-next-line react/prop-types
const renderField = ({ title, value }, ii, jj) => (
  <div key={`annotator-field-${ii}-${jj}`} className={styles.container}>
    <dt className={styles.dt}>{title}</dt>
    <dd className={styles.dd}>{value}</dd>
  </div>
);

const Annotators = ({ json }) => (
  annotatorsFromJson(json).map((annotator, ii) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={`annotator-${ii}`} className={styles.annotators}>
      <dl className={styles.dl}>
        {annotator.map((field, jj) => renderField(field, ii, jj))}
      </dl>
    </div>
  ))
);

Annotators.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  json: object.isRequired,
};

export default Annotators;
