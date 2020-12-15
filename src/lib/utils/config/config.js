const configMap = {
  'aldt-misc-grc': true,
  'aldt-misc': true,
  'aldt2grc-stage': true,
  aldt2grc: true,
  'aldt2lat-stage': true,
  aldt2lat: true,
  elmlatch1: true,
  elmlatch10: true,
  elmlatch10b: true,
  elmlatch11: true,
  elmlatch2: true,
  elmlatch3: true,
  elmlatch4: true,
  elmlatch5: true,
  elmlatch6: true,
  elmlatch7: true,
  elmlatch9: true,
  english: true,
  gclat: true,
  harrington: true,
  jmhgreek: true,
  lyonGrec: true,
  lyonLatin: true,
  midlat: true,
  morphgrc: true,
  morphlat: true,
  pedalion: true,
  persian: true,
  sanskrit: true,
  smyth2: true,
  smyth3: true,
  snap: true,
  testlat: true,
  turkish: true,
  ud: true,
  vortex: true,
  wheelock: true,
  'wheelock1-3': true,
  wheelock15: true,
  wheelock17: true,
  wheelock22: true,
  wheelock24: true,
  wheelock30: true,
  'wheelock4-6': true,
  whitaker: true,
};

const getConfig = (format, lang, callback) => {
  // Backwards compatibility
  const key = format === 'aldt' ? `aldt2${lang}` : format;
  const config = configMap[key] ? key : (lang === 'grc' ? 'aldt-misc-grc' : 'aldt-misc')

  import(`./arethusa-configs/${config}.json`).then(callback);
};

const getColor = (config, postag) => {
  if (postag && config.plugins && config.plugins.morph) {
    const { postagSchema, styledThrough, attributes } = config.plugins.morph;
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

const deconstructPostag = (config, postag) => {
  const deconstructedPostag = [];

  if (postag && config.plugins && config.plugins.morph) {
    const { postagSchema, attributes } = config.plugins.morph;

    postagSchema.forEach((type, index) => {
      const attribute = attributes[type];
      const name = attribute.long || attribute.short || type;
      const values = Object.entries(attribute.values);
      const match = values.find(([, { postag: abbreviation }]) => abbreviation === postag[index]);

      if (match) {
        deconstructedPostag.push([
          name,
          match[1].long || match[1].short || match[0],
        ]);
      }
    });
  }

  return deconstructedPostag;
};

export {
  getConfig,
  getColor,
  deconstructPostag,
};
