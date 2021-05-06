import fetch from 'cross-fetch';

import aldtMisc from './aldt-misc.json';

const memoize = (fun) => {
  const results = {};

  return (arg) => {
    if (!results.hasOwnProperty(arg)) {
      results[arg] = fun(arg);
    }

    return results[arg];
  };
}

class Configuration {
  constructor(config) {
    this.config = config;

    this.getColor = memoize(this.getColor.bind(this));
    this.deconstructPostag = memoize(this.deconstructPostag.bind(this));
  }

  deconstructPostag(postag) {
    const deconstructedPostag = [];

    if (postag && this.config.plugins && this.config.plugins.morph) {
      const { postagSchema, attributes } = this.config.plugins.morph;

      postagSchema.forEach((type, index) => {
        const attribute = attributes[type];
        const values = Object.entries(attribute.values);
        const match = values.find(([, { postag: abbreviation }]) => abbreviation === postag[index]);

        if (match) {
          deconstructedPostag.push([
            { long: attribute.long, short: attribute.short, key: type },
            { long: match[1].long, short: match[1].short, key: match[0] },
          ]);
        }
      });
    }

    return deconstructedPostag;
  };


  getColor(postag) {
    if (postag && this.config.plugins && this.config.plugins.morph) {
      const { postagSchema, styledThrough, attributes } = this.config.plugins.morph;
      const index = postagSchema.findIndex((n) => n === styledThrough);
      const mapping = attributes[styledThrough];

      if (mapping && index > -1) {
        const values = Object.values(mapping.values);
        const valueIndex = values.findIndex(({ postag: abbreviation }) => (
          abbreviation === postag[index]
        ));

        if (valueIndex > -1) {
          const value = values[valueIndex];

          if (value.style && value.style.color) {
            return value.style.color;
          }
        }
      }
    }

    return null;
  };
}

const getConfig = (format, lang, configUrl, callback) => {
  // Backwards compatibility
  const config = format === 'aldt' ? `aldt2${lang}` : format;

  fetch(`${configUrl}${encodeURIComponent(config)}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .then(json => callback(new Configuration(json)))
    .catch(() => callback(new Configuration(aldtMisc)));
};

export {
  getConfig,
  Configuration,
};
