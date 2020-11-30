import React, { useState } from 'react';

import styles from './App.module.scss';

import {
  Treebank,
  Sentence,
  Text,
  Graph,
  PartOfSpeech,
  Annotators,
  Xml,
  Collapse,
} from '../../lib';

const initialXml = `
<?xml version="1.0" encoding="UTF-8"?>
<treebank xmlns:saxon="http://saxon.sf.net/"
          xml:lang="grc"
          format="aldt"
          direction="ltr"
          version="1.5">
   <date>2020-01-01 14:59:24 UTC</date>
   <annotator>
      <short/>
      <name/>
      <address/>
      <uri>https://services.perseids.org/llt/segtok</uri>
  </annotator>
   <annotator>
      <short/>
      <name/>
      <address/>
      <uri>http://github.com/latin-language-toolkit/arethusa</uri>
  </annotator>
   <annotator>
      <short>zfletch</short>
      <name>Zachary Fletcher</name>
      <address>zfletch2@gmail.com</address>
      <uri>http://data.perseus.org/sosol/users/zfletch</uri>
  </annotator>
   <sentence id="1" document_id="" subdoc="" span="">
      <word id="1" form="Λακεδαιμόνιοι" lemma="Λακεδαιμόνιος" postag="n-p---mn-" relation="SBJ_CO" head="2"/>
      <word id="2" form="καὶ" lemma="καί" postag="c--------" relation="COORD" head="6"/>
      <word id="3" form="Ἀθηναῖοι" lemma="Ἀθηναῖος" postag="n-p---mn-" relation="SBJ_CO" head="2"/>
      <word id="4" form="τὴν" lemma="ὁ" postag="l-s---fa-" relation="ATR" head="5"/>
      <word id="5" form="σπονδὴν" lemma="σπονδή" postag="n-s---fa-" relation="OBJ" head="6"/>
      <word id="6" form="ἐποίησεν" lemma="ποιέω" postag="v3saia---" relation="PRED" head="0"/>
      <word id="7" form="." lemma="punc1" postag="u--------" relation="AuxK" head="0"/>
   </sentence>
</treebank>
`;

const App = () => {
  const [xml, setXml] = useState(initialXml);
  const handleChange = ({ target: { value } }) => {
    setXml(value);
  };

  return (
    <div className={styles.treebank}>
      <Treebank treebank={xml}>
        <Sentence id="1">
          <Text />
          <div className={styles.graph}>
            <Graph />
          </div>
          <PartOfSpeech />
          <Collapse title="XML">
            <Xml />
          </Collapse>
          <Collapse title="Annotators">
            <Annotators />
          </Collapse>
        </Sentence>
        <br />
        <textarea rows={30} className={styles.textarea} value={xml} onChange={handleChange} />
      </Treebank>
    </div>
  );
};

export default App;
