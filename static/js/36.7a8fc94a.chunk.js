(this["webpackJsonptreebank-react"]=this["webpackJsonptreebank-react"]||[]).push([[36],{537:function(o){o.exports=JSON.parse('{"plugins":{"morph":{"postagSchema":["pos","pers","num","tense","mood","voice","gend","case","degree"],"styledThrough":"pos","attributes":{"pos":{"long":"Part of Speech","short":"pos","values":{"noun":{"long":"noun","short":"noun","postag":"n","style":{"color":"rgb(43, 114, 124)"}},"adj":{"long":"adjective","short":"adj","postag":"a","style":{"color":"blue"}},"adv":{"long":"adverb","short":"adv","postag":"d","style":{"color":"darkorange"}},"conj":{"long":"conjunction","short":"conj","postag":"c","style":{"color":"deeppink"}},"prep":{"long":"preposition","short":"prep","postag":"r","style":{"color":"green"}},"pron":{"long":"pronoun","short":"pron","postag":"p","style":{"color":"purple"}},"excl":{"long":"exclamation","short":"excl","postag":"e","style":{"color":"gold"}},"verb":{"long":"verb","short":"verb","postag":"v","style":{"color":"red"}},"nrl":{"long":"numeral","short":"nrl","postag":"m","style":{"color":"lightgreen"}},"punct":{"long":"punctuation","short":"punct","postag":"u"},"irreg":{"long":"irregular","short":"irreg","postag":"x","style":{"color":"gray"}}}},"pers":{"long":"Person","short":"pers","values":{"1st":{"long":"first person","short":"1st","postag":"1"},"2nd":{"long":"second person","short":"2nd","postag":"2"},"3rd":{"long":"third person","short":"3rd","postag":"3"}},"rules":[{"if":{"pos":"verb","mood":"*"},"unless":{"mood":["part","inf"]}}]},"num":{"long":"Number","short":"num","rules":[{"if":{"pos":["noun","adj","nrl","pron"]}},{"if":{"pos":"verb","mood":"*"},"unless":{"mood":"inf"}}],"values":{"sg":{"long":"singular","short":"sg","postag":"s"},"pl":{"long":"plural","short":"pl","postag":"p"}}},"tense":{"long":"Tense","short":"tense","rules":[{"if":{"pos":"verb"}}],"values":{"pr":{"long":"present","short":"pr","postag":"p"},"imp":{"long":"imperfect","short":"imp","postag":"i"},"perf":{"long":"perfect","short":"perf","postag":"r"},"pqpf":{"long":"plusquamperfect","short":"pqpf","postag":"l"},"fex":{"long":"future perfect","short":"fex","postag":"t"},"fut":{"long":"future","short":"fut","postag":"f"}}},"mood":{"long":"Mood","short":"mood","rules":[{"if":{"pos":"verb"}}],"values":{"ind":{"long":"indicative","short":"ind","postag":"i"},"sub":{"long":"subjunctive","short":"sub","postag":"s"},"inf":{"long":"infinitive","short":"inf","postag":"n"},"imp":{"long":"imperative","short":"imp","postag":"m"},"gerund":{"long":"gerund","short":"gerund","postag":"d"},"gerundive":{"long":"gerundive","short":"gerundive","postag":"g"},"part":{"long":"participle","short":"part","postag":"p"},"sup":{"long":"supine","short":"sup","postag":"u"}}},"voice":{"long":"Voice","short":"voice","rules":[{"if":{"pos":"verb"}}],"values":{"act":{"long":"active","short":"act","postag":"a"},"pass":{"long":"passive","short":"pass","postag":"p"},"dep":{"long":"deponens","short":"dep","postag":"d"}}},"gend":{"long":"gender","short":"gend","rules":[{"if":{"pos":["noun","adj","pron","nrl"]}},{"if":{"pos":"verb","mood":"part"}},{"if":{"pos":"verb","mood":"gerundive"}}],"values":{"masc":{"long":"masculine","short":"masc","postag":"m"},"fem":{"long":"feminine","short":"fem","postag":"f"},"neut":{"long":"neuter","short":"neut","postag":"n"}}},"case":{"long":"Casus","short":"case","rules":[{"if":{"pos":["noun","adj","pron","nrl"]}},{"if":{"pos":"verb","mood":"part"}},{"if":{"pos":"verb","mood":"gerund"}},{"if":{"pos":"verb","mood":"gerundive"}}],"values":{"nom":{"long":"nominative","short":"nom","postag":"n"},"gen":{"long":"genitive","short":"gen","postag":"g"},"dat":{"long":"dative","short":"dat","postag":"d"},"acc":{"long":"accusative","short":"acc","postag":"a"},"voc":{"long":"vocative","short":"voc","postag":"v"},"abl":{"long":"ablative","short":"abl","postag":"b"},"loc":{"long":"locative","short":"loc","postag":"l"}}},"degree":{"long":"Degree","short":"degree","rules":[{"if":{"pos":"adj"}},{"if":{"pos":"adv"}},{"if":{"pos":"verb","mood":"part"}}],"values":{"pos":{"long":"positive","short":"pos","postag":"p"},"comp":{"long":"comparative","short":"comp","postag":"c"},"sup":{"long":"superlative","short":"sup","postag":"s"}}}},"mappings":{"BspMorphRetriever":{"attributes":{"pofs":"pos","comp":"degree"},"values":{"pos":{"verb\\nparticiple":"verb","verb participle":"verb"},"tense":{"pluperfect":"plusquamperfect"}}}}},"relation":{"relations":{"labels":{"Y\xdcK":{"short":"Y\xdcK","long":"y\xfcklem","style":{"color":"rgb(223, 38, 38)"}},"\xd6ZN":{"short":"\xd6ZN","long":"\xf6zne","style":{"color":"rgb(92, 201, 83)"}},"NES":{"short":"NES","long":"nesne","style":{"color":"rgb(11, 200, 216)"}},"NTL":{"short":"NTL","long":"niteleyici","style":{"color":"blue"}},"BLT":{"short":"BLT","long":"belirtecimsi","style":{"color":"darkorange"}},"T\xdcM":{"short":"T\xdcM","long":"t\xfcmle\xe7","style":{"color":"rgb(131, 11, 16)"}},"ADLY":{"short":"ADLY","long":"ad\u0131ls\u0131l y\xfcklem","style":{"color":"rgb(87, 160, 119)"}},"NEST":{"short":"NEST","long":"nesne t\xfcmleci","style":{"color":"rgb(92, 201, 83)"}},"SRL":{"short":"SRL","long":"s\u0131ralay\u0131c\u0131","style":{"color":"rgb(154, 130, 206)"}},"E\u015eL":{"short":"E\u015eL","long":"e\u015fleme","style":{"color":"rgb(7, 95, 39)"}},"Eks":{"short":"Eks","long":"eksilti","style":{"color":"rgb(7, 95, 39)"}},"Yar":{"short":"Yar","long":"yard\u0131mc\u0131","nested":{"YarI":{"short":"Yar\u0130","long":"ilge\xe7","style":{"color":"green"}},"YarB":{"short":"YarB","long":"ba\u011fla\xe7","style":{"color":"deeppink"}},"YarD":{"short":"YarD","long":"d\xf6n\xfc\u015fl\xfc edilgen","style":{"color":"rgb(162, 70, 235)"}},"YarE":{"short":"YarE","long":"yard\u0131mc\u0131 eylem","style":{"color":"rgb(70, 96, 235)"}},"YarV":{"short":"YarV","long":"virg\xfcller","style":{"color":"black"}},"YarA":{"short":"YarA","long":"ayra\xe7 i\u015faretleri","style":{"color":"black"}},"YarN":{"short":"YarN","long":"nokta","style":{"color":"black"}},"YarZ":{"short":"YarZ","long":"zarf t\xfcmcesi","style":{"color":"rgb(139, 211, 31)"}},"YarVP":{"short":"YarVP","long":"vurgulama par\xe7ac\u0131\u011f\u0131","style":{"color":"rgb(216, 57, 159)"}}}}}}}}}')}}]);
//# sourceMappingURL=36.7a8fc94a.chunk.js.map