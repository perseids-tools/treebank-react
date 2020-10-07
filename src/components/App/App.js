import React, { useState } from 'react';

import { parseXml } from '../../lib/parsing';
import Treebank from '../Treebank';
import Sentence from '../Treebank/Sentence';
import Graph from '../Treebank/Graph';

const initialXml = '<treebank xml:lang="grc" format="aldt" version="1.5">\n'
  + '   <date>Thu Aug 21 19:31:06 +0000 2014</date>\n'
  + '   <annotator>\n'
  + '     <short/>\n'
  + '     <name/>\n'
  + '     <address/>\n'
  + '     <uri>http://services.perseids.org/llt/segtok</uri>\n'
  + '   </annotator>\n'
  + '   <annotator>\n'
  + '     <short/>\n'
  + '     <name/>\n'
  + '     <address/>\n'
  + '     <uri>http://github.com/latin-language-toolkit/arethusa</uri>\n'
  + '   </annotator>\n'
  + '   <annotator>\n'
  + '     <short>Vanessa Gorman</short>\n'
  + '     <name>Vanessa Gorman</name>\n'
  + '     <address>vbgorman@gmail.com</address>\n'
  + '     <uri>\n'
  + '       http://data.perseus.org/sosol/users/Vanessa%20Gorman\n'
  + '     </uri>\n'
  + '   </annotator>\n'
  + '   <sentence id="1" document_id="http://perseids.org/annotsrc/urn:cts:greekLit:tlg0540.tlg001.perseus-grc1" subdoc="1-50" span="">\n'
  + '     <word id="1" form="περὶ" lemma="περί" postag="r--------" relation="AuxP" head="4"/>\n'
  + '     <word id="2" form="πολλοῦ" lemma="πολύς" postag="a-s---mg-" relation="ADV" head="1"/>\n'
  + '     <word id="3" form="ἂν" lemma="ἄν1" postag="d--------" relation="AuxY" head="4"/>\n'
  + '     <word id="4" form="ποιησαίμην" lemma="ποιέω" postag="v1saom---" relation="PRED" head="0"/>\n'
  + '     <word id="5" form="," lemma="punc1" postag="u--------" relation="AuxX" head="7"/>\n'
  + '     <word id="6" form="ὦ" lemma="ὦ" postag="i--------" relation="AuxZ" head="7"/>\n'
  + '     <word id="7" form="ἄνδρες" lemma="ἀνήρ" postag="n-p---mv-" relation="ExD" head="4"/>\n'
  + '     <word id="8" form="," lemma="punc1" postag="u--------" relation="AuxX" head="7"/>\n'
  + '     <word id="9" form="τὸ" lemma="ὁ" postag="l-s---na-" relation="ATR" head="18"/>\n'
  + '     <word id="10" form="τοιούτους" lemma="τοιοῦτος" postag="a-p---ma_" relation="ATR" head="11"/>\n'
  + '     <word id="11" form="ὑμᾶς" lemma="σύ" postag="p2p---ma-" relation="SBJ" head="18"/>\n'
  + '     <word id="12" form="ἐμοὶ" lemma="ἐγώ" postag="p1s---md-" relation="ATR" head="13"/>\n'
  + '     <word id="13" form="δικαστὰς" lemma="δικαστής" postag="n-p---ma-" relation="PNOM" head="18"/>\n'
  + '     <word id="14" form="περὶ" lemma="περί" postag="r--------" relation="AuxP" head="13"/>\n'
  + '     <word id="15" form="τούτου" lemma="οὗτος" postag="a-s---ng_" relation="ATR" head="17"/>\n'
  + '     <word id="16" form="τοῦ" lemma="ὁ" postag="l-s---ng-" relation="ATR" head="17"/>\n'
  + '     <word id="17" form="πράγματος" lemma="πρᾶγμα" postag="n-s---ng-" relation="ATR" head="14"/>\n'
  + '     <word id="18" form="γενέσθαι" lemma="γίγνομαι" postag="v--anm---" relation="OBJ" head="4"/>\n'
  + '     <word id="19" form="," lemma="punc1" postag="u--------" relation="AuxX" head="24"/>\n'
  + '     <word id="20" form="οἷοίπερ" lemma="οἷος" postag="a-p---mn-" relation="PNOM" head="24"/>\n'
  + '     <word id="21" form="ἂν" lemma="ἄν1" postag="d--------" relation="AuxY" head="24"/>\n'
  + '     <word id="22" form="ὑμῖν" lemma="σύ" postag="p2p---md-" relation="ATR" head="20"/>\n'
  + '     <word id="23" form="αὐτοῖς" lemma="αὐτός" postag="a-p---md_" relation="ATR" head="22"/>\n'
  + '     <word id="24" form="εἴητε" lemma="εἰμί" postag="v2ppoa---" relation="ATR" head="10"/>\n'
  + '     <word id="25" form="τοιαῦτα" lemma="τοιοῦτος" postag="p-p---na-" relation="OBJ" head="26"/>\n'
  + '     <word id="26" form="πεπονθότες" lemma="πάσχω" postag="v-prpamn-" relation="ADV" head="24"/>\n'
  + '     <word id="27" form="·" lemma="punc1" postag="u--------" relation="AuxK" head="0"/>\n'
  + '   </sentence>\n'
  + ' </treebank>';

const App = () => {
  const [xml, setXml] = useState(initialXml);
  const handleChange = ({ target: { value } }) => {
    setXml(value);
  };

  const data = parseXml(xml);
  return (
    <>
      <Treebank treebank={data}>
        <Sentence />
        <Graph />
      </Treebank>
      <br />
      <textarea rows={30} cols={135} value={xml} onChange={handleChange} />
    </>
  );
};

export default App;
