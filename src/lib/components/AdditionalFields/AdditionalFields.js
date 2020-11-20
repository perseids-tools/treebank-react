import React from 'react';
import { arrayOf, string } from 'prop-types';

import { wordType } from '../../types';

import styles from './AdditionalFields.module.scss';

const defaultFields = [
  'sg',
  'comment',
  'artificial',
  'gloss',
  'alternateGloss',
  'semanticRole',
  'include',
  'multiword',
  'notes',
];

const fieldsFromJson = ({ $ }, fields) => (
  fields.filter((f) => Object.prototype.hasOwnProperty.call($, f)).map((f) => [f, $[f]])
);

const renderField = ([name, value]) => (
  <div key={name} className={styles.container}>
    <dt className={styles.dt}>{name}</dt>
    <dd className={styles.dd}>{value}</dd>
  </div>
);

const AdditionalFields = ({ active, fields }) => {
  if (active) {
    const displayFields = fieldsFromJson(active, fields);

    if (displayFields.length !== 0) {
      return (
        <div className={styles.information}>
          <dl className={styles.dl}>
            {displayFields.map(renderField)}
          </dl>
        </div>
      );
    }
  }

  return (
    <div />
  );
};

AdditionalFields.propTypes = {
  active: wordType,
  fields: arrayOf(string),
};

AdditionalFields.defaultProps = {
  active: null,
  fields: defaultFields,
};

export default AdditionalFields;
