(this["webpackJsonptreebank-react"]=this["webpackJsonptreebank-react"]||[]).push([[17],{516:function(o){o.exports=JSON.parse('{"plugins":{"morph":{"noRetrieval":"online","retrievers":{"BspMorphRetriever":{"resource":"newMorphologyServiceLat"}},"postagSchema":["pos","pers","num","tense","mood","voice","gend","case","degree"],"styledThrough":"pos","attributes":{"pos":{"long":"Part of Speech","short":"pos","values":{"noun":{"long":"noun","short":"noun","postag":"n","style":{"color":"rgb(43, 114, 124)"}},"adj":{"long":"adjective","short":"adj","postag":"a","style":{"color":"blue"}},"adv":{"long":"adverb","short":"adv","postag":"d","style":{"color":"darkorange"}},"conj":{"long":"conjunction","short":"conj","postag":"c","style":{"color":"deeppink"}},"prep":{"long":"preposition","short":"prep","postag":"r","style":{"color":"green"}},"pron":{"long":"pronoun","short":"pron","postag":"p","style":{"color":"purple"}},"excl":{"long":"exclamation","short":"excl","postag":"e","style":{"color":"gold"}},"verb":{"long":"verb","short":"verb","postag":"v","style":{"color":"red"}},"nrl":{"long":"numeral","short":"nrl","postag":"m","style":{"color":"lightgreen"}},"punct":{"long":"punctuation","short":"punct","postag":"u"},"irreg":{"long":"irregular","short":"irreg","postag":"x","style":{"color":"gray"}}}},"pers":{"long":"Person","short":"pers","values":{"1st":{"long":"first person","short":"1st","postag":"1"},"2nd":{"long":"second person","short":"2nd","postag":"2"},"3rd":{"long":"third person","short":"3rd","postag":"3"}},"rules":[{"if":{"pos":"verb","mood":"*"},"unless":{"mood":["part","inf"]}}]},"num":{"long":"Number","short":"num","rules":[{"if":{"pos":["noun","adj","nrl","pron"]}},{"if":{"pos":"verb","mood":"*"},"unless":{"mood":"inf"}}],"values":{"sg":{"long":"singular","short":"sg","postag":"s"},"pl":{"long":"plural","short":"pl","postag":"p"}}},"tense":{"long":"Tense","short":"tense","rules":[{"if":{"pos":"verb"}}],"values":{"pr":{"long":"present","short":"pr","postag":"p"},"imp":{"long":"imperfect","short":"imp","postag":"i"},"perf":{"long":"perfect","short":"perf","postag":"r"},"pqpf":{"long":"plusquamperfect","short":"pqpf","postag":"l"},"fex":{"long":"future perfect","short":"fex","postag":"t"},"fut":{"long":"future","short":"fut","postag":"f"}}},"mood":{"long":"Mood","short":"mood","rules":[{"if":{"pos":"verb"}}],"values":{"ind":{"long":"indicative","short":"ind","postag":"i"},"sub":{"long":"subjunctive","short":"sub","postag":"s"},"inf":{"long":"infinitive","short":"inf","postag":"n"},"imp":{"long":"imperative","short":"imp","postag":"m"},"gerund":{"long":"gerund","short":"gerund","postag":"d"},"gerundive":{"long":"gerundive","short":"gerundive","postag":"g"},"part":{"long":"participle","short":"part","postag":"p"},"sup":{"long":"supine","short":"sup","postag":"u"}}},"voice":{"long":"Voice","short":"voice","rules":[{"if":{"pos":"verb"}}],"values":{"act":{"long":"active","short":"act","postag":"a"},"pass":{"long":"passive","short":"pass","postag":"p"},"dep":{"long":"deponens","short":"dep","postag":"d"}}},"gend":{"long":"gender","short":"gend","rules":[{"if":{"pos":["noun","adj","pron","nrl"]}},{"if":{"pos":"verb","mood":"part"}},{"if":{"pos":"verb","mood":"gerundive"}}],"values":{"masc":{"long":"masculine","short":"masc","postag":"m"},"fem":{"long":"feminine","short":"fem","postag":"f"},"neut":{"long":"neuter","short":"neut","postag":"n"}}},"case":{"long":"Casus","short":"case","rules":[{"if":{"pos":["noun","adj","pron","nrl"]}},{"if":{"pos":"verb","mood":"part"}},{"if":{"pos":"verb","mood":"gerund"}},{"if":{"pos":"verb","mood":"gerundive"}}],"values":{"nom":{"long":"nominative","short":"nom","postag":"n"},"gen":{"long":"genitive","short":"gen","postag":"g"},"dat":{"long":"dative","short":"dat","postag":"d"},"acc":{"long":"accusative","short":"acc","postag":"a"},"voc":{"long":"vocative","short":"voc","postag":"v"},"abl":{"long":"ablative","short":"abl","postag":"b"},"loc":{"long":"locative","short":"loc","postag":"l"}}},"degree":{"long":"Degree","short":"degree","rules":[{"if":{"pos":"adj"}},{"if":{"pos":"adv"}},{"if":{"pos":"verb","mood":"part"}}],"values":{"pos":{"long":"positive","short":"pos","postag":"p"},"comp":{"long":"comparative","short":"comp","postag":"c"},"sup":{"long":"superlative","short":"sup","postag":"s"}}}},"mappings":{"BspMorphRetriever":{"attributes":{"pofs":"pos","comp":"degree"},"values":{"pos":{"verb\\nparticiple":"verb","verb participle":"verb"},"tense":{"pluperfect":"plusquamperfect"}}}}},"relation":{"relations":{"labels":{"MnVb":{"short":"MnVb","long":"main verb"},"Sbj":{"short":"Sbj","long":"subject"},"Atr":{"short":"Atr","long":"attribute"},"Adv":{"short":"Adv","long":"adverbial"},"Pnom":{"short":"Pnom","long":"predicate nom"},"C-Phr":{"short":"C-Phr","long":"complement phrase"},"Poss":{"short":"Poss","long":"possessive"},"DirObj":{"short":"DirObj","long":"direct obj"},"PlceTo":{"short":"PlceTo","long":"place to"},"IndObj":{"short":"IndObj","long":"Indirect obj"},"Ref":{"short":"Ref","long":"reference"},"Prep":{"short":"Prep","long":"preposition"},"ObPrep":{"short":"ObPrep","long":"obj of prep"},"Mns":{"short":"Mns","long":"means"},"Mnr":{"short":"Mnr","long":"manner"},"Acmp":{"short":"Acmp","long":"accompaniment"},"Sepr":{"short":"Sepr","long":"separation"},"PlceFr":{"short":"PlceFr","long":"place from"},"PlceAt":{"short":"PlceAt","long":"place where"},"Rsp":{"short":"Rsp","long":"respect"},"Caus":{"short":"Caus","long":"cause"},"APOS":{"short":"APOS","long":"apposing element"},"COORD":{"short":"COORD","long":"coordinator"},"SubConj":{"short":"SubConj","long":"subordinating conj"},"SntAdv":{"short":"SntAdv","long":"sentence adv"},"Adr":{"short":"Adr","long":"address"},"AuxZ":{"short":"AuxZ","long":"AuxZ (emph)"},"AuxV":{"short":"AuxV","long":"auxiliary verb)"},"C-Cl":{"short":"C-Cl","long":"complement cl"},"Tmp-Cl":{"short":"Tmp-Cl","long":"temporal cl"},"Circ-Cl":{"short":"Circ-Cl","long":"circumstance cl"},"Caus-Cl":{"short":"Caus-Cl","long":"causal cl"},"Cond-Cl":{"short":"Cond-Cl","long":"conditional cl"},"Conc-Cl":{"short":"Conc-Cl","long":"concessive cl"}},"suffixes":{"AP":{"short":"AP","long":""},"CO":{"short":"CO","long":""},"AP_CO":{"short":"AP_CO","long":""}}}}}}')}}]);
//# sourceMappingURL=17.d27f1814.chunk.js.map