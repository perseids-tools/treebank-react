(this["webpackJsonptreebank-react"]=this["webpackJsonptreebank-react"]||[]).push([[24],{523:function(o){o.exports=JSON.parse('{"plugins":{"relation":{"relations":{"labels":{"ART":{"short":"ART","long":"Article"},"COI":{"short":"COI","long":"COI"},"PREP":{"short":"PREP","long":"Pr\xe9positionn\xe9"},"NPro":{"short":"NPro","long":"Nom Propre Additionnel"},"COORD":{"short":"COORD","long":"Coordonnant"},"AUX":{"short":"AUX","long":"Auxiliaire"},"APST":{"short":"APST","long":"Apostrophre"},"PRED":{"short":"PRED","long":"Pr\xe9dicat"},"AtrCOD":{"short":"AtrCOD","long":"Attribut du COD"},"SUJ":{"short":"SUJ","long":"Sujet"},"SUB":{"short":"SUB","long":"Subordonn\xe9"},"COD":{"short":"COD","long":"COD"},"CdN":{"short":"CdN","long":"Compl\xe9ment du nom"},"AGNT":{"short":"AGNT","long":"Compl\xe9ment d\'Agent"},"COS":{"short":"COS","long":"COS"},"CC":{"short":"CC","long":"Compl\xe9ment Circonstanciel","nested":{"CCCcs":{"short":"CCCcs","long":"Compl\xe9ment Circonstanciel de concession"},"CCMat":{"short":"CCMat","long":"Compl\xe9ment Circonstanciel de mati\xe8re"},"CCBut":{"short":"CCBut","long":"Compl\xe9ment Circonstanciel de but"},"CCCse":{"short":"CCCse","long":"Compl\xe9ment Circonstanciel de cause"},"CCCmp":{"short":"CCCmp","long":"Compl\xe9ment Circonstanciel de comparaison"},"CCCsq":{"short":"CCCsq","long":"Compl\xe9ment Circonstanciel de cons\xe9quence"},"CCCnd":{"short":"CCCnd","long":"Compl\xe9ment Circonstanciel de condition"},"CCTps":{"short":"CCTps","long":"Compl\xe9ment Circonstanciel de temps"},"CCMoy":{"short":"CCMoy","long":"Compl\xe9ment Circonstanciel de moyen"},"CCMan":{"short":"CCMan","long":"Compl\xe9ment Circonstanciel de mani\xe8re"},"CCAcc":{"short":"CCAcc","long":"Compl\xe9ment Circonstanciel de accompagnement"},"CCLie":{"short":"CCLie","long":"Compl\xe9ment Circonstanciel de lieu"},"CCOpp":{"short":"CCOpp","long":"Compl\xe9ment Circonstanciel d\'opposition"}}},"ATTR":{"short":"ATTR","long":"Attribut"},"Pnt":{"short":"Pnt","long":"Ponctuation"},"APP":{"short":"APP","long":"Apposition"},"EPI":{"short":"EPI","long":"Epith\xe8te"}},"suffixes":{"CO":{"short":"CO","long":"Coordonn\xe9"}}}},"morph":{"retrievers":{"BspMorphRetriever":{"resource":"newMorphologyServiceGrc"}},"postagSchema":["pos","pers","num","tense","mood","voice","gend","case","degree"],"styledThrough":"pos","attributes":{"pos":{"long":"Part of Speech","short":"pos","values":{"noun":{"long":"noun","short":"noun","postag":"n","style":{"color":"rgb(43, 114, 124)"}},"adj":{"long":"adjective","short":"adj","postag":"a","style":{"color":"blue"}},"adv":{"long":"adverb","short":"adv","postag":"d","style":{"color":"darkorange"}},"conj":{"long":"conjunction","short":"conj","postag":"c","style":{"color":"deeppink"}},"prep":{"long":"preposition","short":"prep","postag":"r","style":{"color":"green"}},"pron":{"long":"pronoun","short":"pron","postag":"p","style":{"color":"purple"}},"excl":{"long":"exclamation","short":"excl","postag":"e","style":{"color":"gold"}},"verb":{"long":"verb","short":"verb","postag":"v","style":{"color":"red"}},"nrl":{"long":"numeral","short":"nrl","postag":"m","style":{"color":"lightgreen"}},"punct":{"long":"punctuation","short":"punct","postag":"u"},"art":{"long":"article","short":"art","postag":"l","style":{"color":"lightblue"}},"prtl":{"long":"particle","short":"prtl","postag":"g","style":{"color":"lightcoral"}},"irreg":{"long":"irregular","short":"irreg","postag":"x","style":{"color":"gray"}}}},"pers":{"long":"Person","short":"pers","values":{"1st":{"long":"first person","short":"1st","postag":"1"},"2nd":{"long":"second person","short":"2nd","postag":"2"},"3rd":{"long":"third person","short":"3rd","postag":"3"}},"rules":[{"if":{"pos":"verb","mood":"*"},"unless":{"mood":"part"}}]},"num":{"long":"Number","short":"num","rules":[{"if":{"pos":["noun","art","nrl","part","adj","pron"]}},{"if":{"pos":"verb","mood":"*"}}],"values":{"sg":{"long":"singular","short":"sg","postag":"s"},"pl":{"long":"plural","short":"pl","postag":"p"},"dl":{"long":"dual","short":"dl","postag":"d"}}},"tense":{"long":"Tense","short":"tense","rules":[{"if":{"pos":"verb"}}],"values":{"pr":{"long":"present","short":"pr","postag":"p"},"imp":{"long":"imperfect","short":"imp","postag":"i"},"perf":{"long":"perfect","short":"perf","postag":"r"},"pqpf":{"long":"plusquamperfect","short":"pqpf","postag":"l"},"fex":{"long":"future perfect","short":"fex","postag":"t"},"fut":{"long":"future","short":"fut","postag":"f"},"aor":{"long":"aorist","short":"aor","postag":"a"}}},"mood":{"long":"Mood","short":"mood","rules":[{"if":{"pos":"verb"}}],"values":{"ind":{"long":"indicative","short":"ind","postag":"i"},"sub":{"long":"subjunctive","short":"sub","postag":"s"},"inf":{"long":"infinitive","short":"inf","postag":"n"},"imp":{"long":"imperative","short":"imp","postag":"m"},"part":{"long":"participle","short":"part","postag":"p"},"opt":{"long":"optative","short":"opt","postag":"o"}}},"voice":{"long":"Voice","short":"voice","rules":[{"if":{"pos":"verb"}}],"values":{"act":{"long":"active","short":"act","postag":"a"},"pass":{"long":"passive","short":"pass","postag":"p"},"mid":{"long":"middle","short":"mid","postag":"m"},"mp":{"long":"medio-passive","short":"mp","postag":"e"},"dep":{"long":"deponens","short":"dep","postag":"d"}}},"gend":{"long":"gender","short":"gend","rules":[{"if":{"pos":["art","noun","adj","pron","nrl"]}},{"if":{"pos":"verb","mood":"part"}}],"values":{"masc":{"long":"masculine","short":"masc","postag":"m"},"fem":{"long":"feminine","short":"fem","postag":"f"},"neut":{"long":"neuter","short":"neut","postag":"n"}}},"case":{"long":"Casus","short":"case","rules":[{"if":{"pos":["art","noun","adj","pron","nrl"]}},{"if":{"pos":"verb","mood":"part"}}],"values":{"nom":{"long":"nominative","short":"nom","postag":"n"},"gen":{"long":"genitive","short":"gen","postag":"g"},"dat":{"long":"dative","short":"dat","postag":"d"},"acc":{"long":"accusative","short":"acc","postag":"a"},"voc":{"long":"vocative","short":"voc","postag":"v"},"loc":{"long":"locative","short":"loc","postag":"l"}}},"degree":{"long":"Degree","short":"degree","rules":[{"if":{"pos":"adj"}},{"if":{"pos":"verb","mood":"part"}}],"values":{"pos":{"long":"positive","short":"pos","postag":"p"},"comp":{"long":"comparative","short":"comp","postag":"c"},"sup":{"long":"superlative","short":"sup","postag":"s"}}}},"mappings":{"BspMorphRetriever":{"attributes":{"pofs":"pos","comp":"degree"},"values":{"pos":{"verb\\nparticiple":"verb","verb participle":"verb"},"tense":{"pluperfect":"plusquamperfect"},"voice":{"mediopassive":"medio-passive"}}}}}}}')}}]);
//# sourceMappingURL=24.30cce9ca.chunk.js.map