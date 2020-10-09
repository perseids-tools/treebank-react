import aldtMiscGrc from './arethusa-configs/aldt-misc-grc.json';
import aldtMisc from './arethusa-configs/aldt-misc.json';
import aldt2grcStage from './arethusa-configs/aldt2grc-stage.json';
import aldt2grc from './arethusa-configs/aldt2grc.json';
import aldt2latStage from './arethusa-configs/aldt2lat-stage.json';
import aldt2lat from './arethusa-configs/aldt2lat.json';
import elmlatch1 from './arethusa-configs/elmlatch1.json';
import elmlatch10 from './arethusa-configs/elmlatch10.json';
import elmlatch10b from './arethusa-configs/elmlatch10b.json';
import elmlatch11 from './arethusa-configs/elmlatch11.json';
import elmlatch2 from './arethusa-configs/elmlatch2.json';
import elmlatch3 from './arethusa-configs/elmlatch3.json';
import elmlatch4 from './arethusa-configs/elmlatch4.json';
import elmlatch5 from './arethusa-configs/elmlatch5.json';
import elmlatch6 from './arethusa-configs/elmlatch6.json';
import elmlatch7 from './arethusa-configs/elmlatch7.json';
import elmlatch9 from './arethusa-configs/elmlatch9.json';
import english from './arethusa-configs/english.json';
import gclat from './arethusa-configs/gclat.json';
import harrington from './arethusa-configs/harrington.json';
import jmhgreek from './arethusa-configs/jmhgreek.json';
import lyonGrec from './arethusa-configs/lyonGrec.json';
import lyonLatin from './arethusa-configs/lyonLatin.json';
import midlat from './arethusa-configs/midlat.json';
import morphgrc from './arethusa-configs/morphgrc.json';
import morphlat from './arethusa-configs/morphlat.json';
import pedalion from './arethusa-configs/pedalion.json';
import persian from './arethusa-configs/persian.json';
import sanskrit from './arethusa-configs/sanskrit.json';
import smyth2 from './arethusa-configs/smyth2.json';
import smyth3 from './arethusa-configs/smyth3.json';
import snap from './arethusa-configs/snap.json';
import testlat from './arethusa-configs/testlat.json';
import turkish from './arethusa-configs/turkish.json';
import ud from './arethusa-configs/ud.json';
import vortex from './arethusa-configs/vortex.json';
import wheelock from './arethusa-configs/wheelock.json';
import wheelock13 from './arethusa-configs/wheelock1-3.json';
import wheelock15 from './arethusa-configs/wheelock15.json';
import wheelock17 from './arethusa-configs/wheelock17.json';
import wheelock22 from './arethusa-configs/wheelock22.json';
import wheelock24 from './arethusa-configs/wheelock24.json';
import wheelock30 from './arethusa-configs/wheelock30.json';
import wheelock46 from './arethusa-configs/wheelock4-6.json';
import whitaker from './arethusa-configs/whitaker.json';

const configMap = {
  'aldt-misc-grc': aldtMiscGrc,
  'aldt-misc': aldtMisc,
  'aldt2grc-stage': aldt2grcStage,
  aldt2grc,
  'aldt2lat-stage': aldt2latStage,
  aldt2lat,
  elmlatch1,
  elmlatch10,
  elmlatch10b,
  elmlatch11,
  elmlatch2,
  elmlatch3,
  elmlatch4,
  elmlatch5,
  elmlatch6,
  elmlatch7,
  elmlatch9,
  english,
  gclat,
  harrington,
  jmhgreek,
  lyonGrec,
  lyonLatin,
  midlat,
  morphgrc,
  morphlat,
  pedalion,
  persian,
  sanskrit,
  smyth2,
  smyth3,
  snap,
  testlat,
  turkish,
  ud,
  vortex,
  wheelock,
  'wheelock1-3': wheelock13,
  wheelock15,
  wheelock17,
  wheelock22,
  wheelock24,
  wheelock30,
  'wheelock4-6': wheelock46,
  whitaker,
};

const getConfig = (format, lang) => {
  // Backwards compatibility
  const key = format === 'aldt' ? `aldt2${lang}` : format;

  if (configMap[key]) {
    return configMap[key];
  }

  if (lang === 'grc') {
    return aldtMiscGrc;
  }

  return aldtMisc;
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
