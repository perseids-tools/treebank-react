!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var n=t();for(var a in n)("object"===typeof exports?exports:e)[a]=n[a]}}(this,(function(){return(this["webpackJsonptreebank-react"]=this["webpackJsonptreebank-react"]||[]).push([[0],{123:function(e,t,n){e.exports={button:"Collapse_button__2f77d",right:"Collapse_right__1XDGM"}},21:function(e,t,n){e.exports={graph:"Graph_graph__61aOY",node:"Graph_node__206k1",active:"Graph_active__BgUAv"}},210:function(e,t,n){e.exports={container:"Sentence_container__1_8b5"}},23:function(e,t,n){e.exports={information:"PartOfSpeech_information__2wKMB",dl:"PartOfSpeech_dl__34YRv",container:"PartOfSpeech_container__1UAbJ",dt:"PartOfSpeech_dt__brvjJ",dd:"PartOfSpeech_dd__c2Bm3"}},278:function(e,t,n){e.exports=n(501)},283:function(e,t,n){},41:function(e,t,n){e.exports={information:"AdditionalFields_information__1DKph",dl:"AdditionalFields_dl__2NgAs",container:"AdditionalFields_container__1PvOz",dt:"AdditionalFields_dt__vWdSD",dd:"AdditionalFields_dd__iXWjo"}},42:function(e,t,n){e.exports={annotators:"Annotators_annotators__3tUlp",dl:"Annotators_dl__3w5YQ",container:"Annotators_container__cZH47",dt:"Annotators_dt__48WM3",dd:"Annotators_dd__3ntRr"}},487:function(e,t){},489:function(e,t){},49:function(e,t,n){e.exports={text:"Text_text__3vMKP",word:"Text_word__u68jU",active:"Text_active__8HwsG",elliptic:"Text_elliptic__1mO5p"}},499:function(e,t,n){var a={"./aldt-misc-grc.json":[502,3],"./aldt-misc.json":[503,4],"./aldt2grc-stage.json":[504,5],"./aldt2grc.json":[505,6],"./aldt2lat-stage.json":[506,7],"./aldt2lat.json":[507,8],"./elmlatch1.json":[508,9],"./elmlatch10.json":[509,10],"./elmlatch10b.json":[510,11],"./elmlatch11.json":[511,12],"./elmlatch2.json":[512,13],"./elmlatch3.json":[513,14],"./elmlatch4.json":[514,15],"./elmlatch5.json":[515,16],"./elmlatch6.json":[516,17],"./elmlatch7.json":[517,18],"./elmlatch9.json":[518,19],"./english.json":[519,20],"./gclat.json":[520,21],"./harrington.json":[521,22],"./jmhgreek.json":[522,23],"./lyonGrec.json":[523,24],"./lyonLatin.json":[524,25],"./midlat.json":[525,26],"./morphgrc.json":[526,27],"./morphlat.json":[527,28],"./pedalion.json":[528,29],"./persian.json":[529,30],"./sanskrit.json":[530,31],"./smyth2.json":[531,32],"./smyth3.json":[532,33],"./snap.json":[533,34],"./testlat.json":[534,35],"./turkish.json":[535,36],"./ud.json":[536,37],"./vortex.json":[537,38],"./wheelock.json":[538,39],"./wheelock1-3.json":[539,40],"./wheelock15.json":[540,41],"./wheelock17.json":[541,42],"./wheelock22.json":[542,43],"./wheelock24.json":[543,44],"./wheelock30.json":[544,45],"./wheelock4-6.json":[545,46],"./whitaker.json":[546,47]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=499,e.exports=r},501:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(208),l=n.n(o),c=(n(283),n(5)),i=n(75),s=n.n(i),u=Object(a.createContext)();u.displayName="SentenceContext";var d=u,m=n(1),f=Object(m.shape)({$:Object(m.shape)({id:m.string.isRequired,form:m.string,lemma:m.string,postag:m.string,relation:m.string,head:m.string,sg:m.string,comment:m.string,artificial:m.string,gloss:m.string,alternateGloss:m.string,semanticRole:m.string,include:m.string,multiword:m.string,notes:m.string})}),g=(Object(m.shape)({$:Object(m.shape)({id:m.string.isRequired,document_id:m.string,subdoc:m.string,span:m.string}),word:Object(m.arrayOf)(f)}),n(41)),p=n.n(g),h=function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{key:n,className:p.a.container},r.a.createElement("dt",{className:p.a.dt},n),r.a.createElement("dd",{className:p.a.dd},a))},v=function(e){var t=e.active,n=e.fields;if(t){var a=function(e,t){var n=e.$;return t.filter((function(e){return Object.prototype.hasOwnProperty.call(n,e)})).map((function(e){return[e,n[e]]}))}(t,n);if(0!==a.length)return r.a.createElement("div",{className:p.a.information},r.a.createElement("dl",{className:p.a.dl},a.map(h)))}return r.a.createElement("div",null)};v.defaultProps={active:null,fields:["sg","comment","artificial","gloss","alternateGloss","semanticRole","include","multiword","notes"]};var _=Object(a.createContext)();_.displayName="TreebankContext";var b=_,j=n(42),E=n.n(j),w=["short","name","address","uri"],k=function(e){return function(e){var t=e.treebank.annotator;return t?t.map((function(e){return w.map((function(t){return{title:t,value:e[t]?e[t][0]:""}})).filter((function(e){return""!==e.value}))})):[]}(e.json).map((function(e,t){return r.a.createElement("div",{key:"annotator-".concat(t),className:E.a.annotators},r.a.createElement("dl",{className:E.a.dl},e.map((function(e,n){return function(e,t,n){var a=e.title,o=e.value;return r.a.createElement("div",{key:"annotator-field-".concat(t,"-").concat(n),className:E.a.container},r.a.createElement("dt",{className:E.a.dt},a),r.a.createElement("dd",{className:E.a.dd},o))}(e,t,n)}))))}))},A=function(){return r.a.createElement(b.Consumer,null,(function(e){var t=e.json;return r.a.createElement(k,{json:t})}))},x=n(123),O=n.n(x),y=function(e){var t=e.title,n=e.children,o=e.collapsed,l=Object(a.useState)(o),i=Object(c.a)(l,2),s=i[0],u=i[1];return Object(a.useEffect)((function(){u(o)}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:O.a.button,onClick:function(){return u(!s)}},r.a.createElement("div",null,t),r.a.createElement("div",{className:O.a.right},s?"+":"-")),s?null:n)};y.defaultProps={collapsed:!0};var N=y,T=n(21),P=n.n(T),S=n(124),R=n.n(S),C=n(17),$={rankdir:"TB",nodesep:40,edgesep:10,ranksep:30},B=function(e,t,n,a,r,o){var l=(new R.a.graphlib.Graph).setGraph($);a.forEach((function(e){var t=e.id,n=e.label,a=e.config,r=a.labelType,o=a.labelStyle,c=a.class;l.setNode(t,{label:n,labelType:r,labelStyle:o,class:c,paddingLeft:2,paddingRight:2,paddingTop:2,paddingBottom:2})})),r.forEach((function(e){var t=e.source,n=e.target,a=e.label,r=e.config.arrowheadStyle;l.setEdge(t,n,{label:a,arrowheadStyle:r,curve:C.a})}));var c=new R.a.render,i=C.c().on("zoom",(function(e){n.attr("transform",e.transform)})).scaleExtent([.3,2.5]);return t.call(i),n.attr("transform",C.d),c(n,l),function(e,t){var n=e.node(),a=n.getBBox(),r=n.clientWidth;if(a.width>r-30){var o=C.d.translate(15,15),l=(r-30)/a.width;e.call(t.transform,o.scale(l))}else{var c=C.d.translate((r-a.width)/2,15);e.call(t.transform,c)}}(t,i),t.selectAll("g.node").on("mousedown",(function(e){var t=e.target;o(t.__data__)})),!0},G=function(e,t,n,a,r,o,l){var c=C.b(e.current),i=C.b(t.current),s={};(function(e,t,n,a,r){if(!a||!r)return!1;if(t.length!==a.length)return!1;if(n.length!==r.length)return!1;var o;for(o=0;o<n.length;o+=1){var l=n[o],c=r[o];if(l.head!==c.head||l.target!==c.target||l.label!==c.label)return!1}for(e.linksIdentical=!0,o=0;o<t.length;o+=1){var i=t[o],s=a[o];if(i.id!==s.id||i.label!==s.label||i.postag!==s.postag||i.config.isActive!==s.config.isActive)return!1}return!0})(s,n,a,o,l)||function(e,t,n,a,r){if(!e.linksIdentical)return!1;if(!a)return!1;if(n.length!==a.length)return!1;var o,l,c;for(o=0;o<n.length;o+=1){var i=n[o],s=a[o];if(i.id!==s.id||i.label!==s.label||i.postag!==s.postag)return!1;s.config.isActive&&(c=s),i.config.isActive&&(l=i)}return t.selectAll("g.node").each((function(){l&&this.__data__===l.id&&(this.classList.add(P.a.active),C.b(this).on("mousedown",(function(e){var t=e.target;r(t.__data__)}))),c&&this.__data__===c.id&&(this.classList.remove(P.a.active),C.b(this).on("mousedown",(function(e){var t=e.target;r(t.__data__)})))})),!0}(s,i,n,o,r)||B(0,c,i,n,a,r)},X=function(e){var t=e.nodes,n=e.links,o=e.onClick,l=Object(a.useRef)(null),c=Object(a.useRef)(null),i=Object(a.useRef)(null),s=Object(a.useRef)(null);return Object(a.useEffect)((function(){G(l,c,t,n,o,i.current,s.current),i.current=t,s.current=n}),[t,n]),r.a.createElement("svg",{ref:l,className:P.a.graph},r.a.createElement("g",{ref:c}))},D=n(209),F={"aldt-misc-grc":!0,"aldt-misc":!0,"aldt2grc-stage":!0,aldt2grc:!0,"aldt2lat-stage":!0,aldt2lat:!0,elmlatch1:!0,elmlatch10:!0,elmlatch10b:!0,elmlatch11:!0,elmlatch2:!0,elmlatch3:!0,elmlatch4:!0,elmlatch5:!0,elmlatch6:!0,elmlatch7:!0,elmlatch9:!0,english:!0,gclat:!0,harrington:!0,jmhgreek:!0,lyonGrec:!0,lyonLatin:!0,midlat:!0,morphgrc:!0,morphlat:!0,pedalion:!0,persian:!0,sanskrit:!0,smyth2:!0,smyth3:!0,snap:!0,testlat:!0,turkish:!0,ud:!0,vortex:!0,wheelock:!0,"wheelock1-3":!0,wheelock15:!0,wheelock17:!0,wheelock22:!0,wheelock24:!0,wheelock30:!0,"wheelock4-6":!0,whitaker:!0},M=function(e,t){if(t&&e.plugins&&e.plugins.morph){var n=e.plugins.morph,a=n.postagSchema,r=n.styledThrough,o=n.attributes,l=a.findIndex((function(e){return e===r})),c=o[r];if(c&&l>-1){var i=Object.values(c.values),s=i.findIndex((function(e){return e.postag===t[l]}));if(s>-1){var u=i[s];if(u.style&&u.style.color)return u.style.color}}}return null},L=function(e,t,n){return n.map((function(n){return n.config=function(e,t,n){var a=n.id,r=n.postag,o=M(e,r),l=t&&t.$.id===a,c=l?[P.a.node,P.a.active].join(" "):P.a.node;return{labelStyle:"color: ".concat(o),labelType:"html",class:c,isActive:l}}(e,t,n),n}))},J={arrowheadStyle:"display: none"},H=function(e){return e.map((function(e){return e.config=J,e}))},I=function(e){var t=e.sentence,n=e.active,o=e.toggleActive,l=e.config,c=function(e){var t={nodes:[{id:"0",label:"[ROOT]"}],links:[]};return e.word.forEach((function(e){var n=e.$,a=n.id,r=n.form,o=n.head,l=n.relation,c=n.postag;t.nodes.push({id:a,label:r,postag:c}),a&&o&&t.links.push({source:o,target:a,label:l})})),t}(t),i=c.nodes,s=c.links;return Object(a.useEffect)((function(){o(null)}),[t]),r.a.createElement(X,{nodes:L(l,n,i),links:H(s),onClick:function(e){return o(function(e,t){return t.word.find((function(t){return t.$.id===e}))}(e,t))}})};I.defaultProps={active:null};var K=I,U=function(){return r.a.createElement(d.Consumer,null,(function(e){var t=e.sentence,n=e.active,a=e.toggleActive,o=e.config;return r.a.createElement(K,{sentence:t,active:n,toggleActive:a,config:o})}))},W=n(23),V=n.n(W),Y=function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{key:n,className:V.a.container},r.a.createElement("dt",{className:V.a.dt},n),r.a.createElement("dd",{className:V.a.dd},a))},q=function(e){var t=e.active,n=e.config;if(t){var a=t.$,o=a.postag,l=a.lemma;return r.a.createElement("div",{className:V.a.information},r.a.createElement("dl",{className:V.a.dl},function(e){return r.a.createElement("div",{className:V.a.container},r.a.createElement("dt",{className:V.a.dt},"Lemma"),r.a.createElement("dd",{className:V.a.dd},e))}(l),function(e,t){var n=[];if(t&&e.plugins&&e.plugins.morph){var a=e.plugins.morph,r=a.postagSchema,o=a.attributes;r.forEach((function(e,a){var r=o[e],l=r.long||r.short||e,i=Object.entries(r.values).find((function(e){return Object(c.a)(e,2)[1].postag===t[a]}));i&&n.push([l,i[1].long||i[1].short||i[0]])}))}return n}(n,o).map(Y)))}return r.a.createElement("div",null)};q.defaultProps={active:null};var z=q,Q=function(){return r.a.createElement(d.Consumer,null,(function(e){var t=e.active,n=e.config;return r.a.createElement(z,{active:t,config:n})}))},Z=n(210),ee=n.n(Z),te=function(e){var t=e.id,n=e.callback,o=e.json,l=e.config,i=e.children,s=Object(a.useState)(null),u=Object(c.a)(s,2),m=u[0],f=u[1],g=function(e,t){return e.treebank.sentence.find((function(e){var n=e.$;return n.id&&n.id===t}))}(o,t);return Object(a.useEffect)((function(){n&&n(g)}),[t,o]),r.a.createElement(d.Provider,{value:{sentence:g,config:l,active:m,toggleActive:function(e){e&&m&&e.$.id===m.$.id?f(null):f(e)}}},r.a.createElement("div",{className:ee.a.container},i))},ne=function(e){var t=e.id,n=e.callback,a=e.children;return r.a.createElement(b.Consumer,null,(function(e){var o=e.json,l=e.config;return r.a.createElement(te,{id:t,callback:n,json:o,config:l},a)}))};ne.defaultProps={callback:null,children:null};var ae=ne,re=n(211),oe=n(49),le=n.n(oe),ce=function(e){var t=e.$,n=t.id;return function(e){return e.padStart(4,"0")}(t.insertion_id||n)},ie=function(e,t){var n=ce(e),a=ce(t);return n<a?-1:a<n?1:0},se=function(e){var t=e.sentence,n=e.active,o=e.toggleActive,l=e.config,c=Object(re.a)(t.word).sort(ie).map((function(e){return function(e,t,n,o){var l=e.$,c=l.id,i=l.form,s=l.postag,u=l.artificial,d=M(t,s),m=[le.a.word];n&&n.$.id===c&&m.push(le.a.active),"elliptic"===u&&m.push(le.a.elliptic);var f=function(){o(e)};return r.a.createElement(a.Fragment,{key:c},r.a.createElement("span",{role:"button",tabIndex:"0",onClick:f,onKeyDown:function(e){"Enter"===e.key&&f()},className:m.join(" "),style:{color:d}},i)," ")}(e,l,n,o)}));return r.a.createElement("div",{className:le.a.text},r.a.createElement("p",null,c))};se.defaultProps={active:null,toggleActive:function(){}};var ue=se,de=function(){return r.a.createElement(d.Consumer,null,(function(e){var t=e.sentence,n=e.active,a=e.toggleActive,o=e.config;return r.a.createElement(ue,{sentence:t,active:n,toggleActive:a,config:o})}))},me=function(e,t){return function(e,t,a){var r="aldt"===e?"aldt2".concat(t):e,o=F[r]?r:"grc"===t?"aldt-misc-grc":"aldt-misc";n(499)("./".concat(o,".json")).then(a)}(e.treebank.$.format,e.treebank.$["xml:lang"],t)},fe=function(e){var t=e.treebank,n=e.children,o=Object(a.useState)(null),l=Object(c.a)(o,2),i=l[0],s=l[1],u=Object(a.useMemo)((function(){return function(e){var t;return Object(D.parseString)(e,(function(e,n){t=n})),t}(t)}),[t]);return Object(a.useMemo)((function(){return me(u,s)}),[t]),i?r.a.createElement(b.Provider,{value:{json:u,config:i}},n):r.a.createElement("div",null)};fe.defaultProps={children:null};var ge=fe,pe=n(7),he=n.n(pe),ve=function(e){return Object.entries(e).map((function(e){var t=Object(c.a)(e,2),n=t[0],o=t[1];return r.a.createElement(a.Fragment,{key:n}," ",r.a.createElement("span",{className:he.a.attribute},n,"="),r.a.createElement("span",{className:he.a.attributeText},'"',o,'"'))}))},_e=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return r.a.createElement(a.Fragment,{key:n},r.a.createElement("span",{className:he.a.bracket},l,"<"),r.a.createElement("span",{className:he.a.element},e),ve(t),o?" /":"",r.a.createElement("span",{className:he.a.bracket},">"),r.a.createElement("br",null))},be=function(e){var t,n,o=e.sentence,l=e.active,c=e.toggleActive;return r.a.createElement("div",{className:he.a.xml},_e("sentence",o.$,"sentence"),o.word.map((function(e){return function(e,t,n){var a=e.$.id,o=t&&t.$.id===a?[he.a.word,he.a.active].join(" "):he.a.word,l=function(){n(e)};return r.a.createElement("div",{key:a,role:"button",tabIndex:"0",className:o,onClick:l,onKeyDown:function(e){"Enter"===e.key&&l()}},_e("word",e.$,a,!0,r.a.createElement(r.a.Fragment,null,"\xa0\xa0\xa0\xa0")))}(e,l,c)})),(t="sentence",n="sentence-close",r.a.createElement(a.Fragment,{key:n},r.a.createElement("span",{className:he.a.bracket},"<"),r.a.createElement("span",{className:he.a.element},"/",t),r.a.createElement("span",{className:he.a.bracket},">"))))};be.defaultProps={active:null,toggleActive:function(){}};var je=be,Ee=function(){return r.a.createElement(d.Consumer,null,(function(e){var t=e.sentence,n=e.active,a=e.toggleActive;return r.a.createElement(je,{sentence:t,active:n,toggleActive:a})}))},we=function(){var e=Object(a.useState)('<treebank xml:lang="grc" format="aldt" version="1.5">\n   <date>Thu Aug 21 19:31:06 +0000 2014</date>\n   <annotator>\n     <short/>\n     <name/>\n     <address/>\n     <uri>http://services.perseids.org/llt/segtok</uri>\n   </annotator>\n   <annotator>\n     <short/>\n     <name/>\n     <address/>\n     <uri>http://github.com/latin-language-toolkit/arethusa</uri>\n   </annotator>\n   <annotator>\n     <short>Vanessa Gorman</short>\n     <name>Vanessa Gorman</name>\n     <address>vbgorman@gmail.com</address>\n     <uri>\n       http://data.perseus.org/sosol/users/Vanessa%20Gorman\n     </uri>\n   </annotator>\n   <sentence id="1" document_id="http://perseids.org/annotsrc/urn:cts:greekLit:tlg0540.tlg001.perseus-grc1" subdoc="1-50" span="">\n     <word id="1" form="\u03c0\u03b5\u03c1\u1f76" lemma="\u03c0\u03b5\u03c1\u03af" postag="r--------" relation="AuxP" head="4"/>\n     <word id="2" form="\u03c0\u03bf\u03bb\u03bb\u03bf\u1fe6" lemma="\u03c0\u03bf\u03bb\u03cd\u03c2" postag="a-s---mg-" relation="ADV" head="1"/>\n     <word id="3" form="\u1f02\u03bd" lemma="\u1f04\u03bd1" postag="d--------" relation="AuxY" head="4"/>\n     <word id="4" form="\u03c0\u03bf\u03b9\u03b7\u03c3\u03b1\u03af\u03bc\u03b7\u03bd" lemma="\u03c0\u03bf\u03b9\u03ad\u03c9" postag="v1saom---" relation="PRED" head="0"/>\n     <word id="5" form="," lemma="punc1" postag="u--------" relation="AuxX" head="7"/>\n     <word id="6" form="\u1f66" lemma="\u1f66" postag="i--------" relation="AuxZ" head="7"/>\n     <word id="7" form="\u1f04\u03bd\u03b4\u03c1\u03b5\u03c2" lemma="\u1f00\u03bd\u03ae\u03c1" postag="n-p---mv-" relation="ExD" head="4"/>\n     <word id="8" form="," lemma="punc1" postag="u--------" relation="AuxX" head="7"/>\n     <word id="9" form="\u03c4\u1f78" lemma="\u1f41" postag="l-s---na-" relation="ATR" head="18"/>\n     <word id="10" form="\u03c4\u03bf\u03b9\u03bf\u03cd\u03c4\u03bf\u03c5\u03c2" lemma="\u03c4\u03bf\u03b9\u03bf\u1fe6\u03c4\u03bf\u03c2" postag="a-p---ma_" relation="ATR" head="11"/>\n     <word id="11" form="\u1f51\u03bc\u1fb6\u03c2" lemma="\u03c3\u03cd" postag="p2p---ma-" relation="SBJ" head="18"/>\n     <word id="12" form="\u1f10\u03bc\u03bf\u1f76" lemma="\u1f10\u03b3\u03ce" postag="p1s---md-" relation="ATR" head="13"/>\n     <word id="13" form="\u03b4\u03b9\u03ba\u03b1\u03c3\u03c4\u1f70\u03c2" lemma="\u03b4\u03b9\u03ba\u03b1\u03c3\u03c4\u03ae\u03c2" postag="n-p---ma-" relation="PNOM" head="18"/>\n     <word id="14" form="\u03c0\u03b5\u03c1\u1f76" lemma="\u03c0\u03b5\u03c1\u03af" postag="r--------" relation="AuxP" head="13"/>\n     <word id="15" form="\u03c4\u03bf\u03cd\u03c4\u03bf\u03c5" lemma="\u03bf\u1f57\u03c4\u03bf\u03c2" postag="a-s---ng_" relation="ATR" head="17"/>\n     <word id="16" form="\u03c4\u03bf\u1fe6" lemma="\u1f41" postag="l-s---ng-" relation="ATR" head="17"/>\n     <word id="17" form="\u03c0\u03c1\u03ac\u03b3\u03bc\u03b1\u03c4\u03bf\u03c2" lemma="\u03c0\u03c1\u1fb6\u03b3\u03bc\u03b1" postag="n-s---ng-" relation="ATR" head="14"/>\n     <word id="18" form="\u03b3\u03b5\u03bd\u03ad\u03c3\u03b8\u03b1\u03b9" lemma="\u03b3\u03af\u03b3\u03bd\u03bf\u03bc\u03b1\u03b9" postag="v--anm---" relation="OBJ" head="4"/>\n     <word id="19" form="," lemma="punc1" postag="u--------" relation="AuxX" head="24"/>\n     <word id="20" form="\u03bf\u1f37\u03bf\u03af\u03c0\u03b5\u03c1" lemma="\u03bf\u1f37\u03bf\u03c2" postag="a-p---mn-" relation="PNOM" head="24"/>\n     <word id="21" form="\u1f02\u03bd" lemma="\u1f04\u03bd1" postag="d--------" relation="AuxY" head="24"/>\n     <word id="22" form="\u1f51\u03bc\u1fd6\u03bd" lemma="\u03c3\u03cd" postag="p2p---md-" relation="ATR" head="20"/>\n     <word id="23" form="\u03b1\u1f50\u03c4\u03bf\u1fd6\u03c2" lemma="\u03b1\u1f50\u03c4\u03cc\u03c2" postag="a-p---md_" relation="ATR" head="22"/>\n     <word id="24" form="\u03b5\u1f34\u03b7\u03c4\u03b5" lemma="\u03b5\u1f30\u03bc\u03af" postag="v2ppoa---" relation="ATR" head="10"/>\n     <word id="25" form="\u03c4\u03bf\u03b9\u03b1\u1fe6\u03c4\u03b1" lemma="\u03c4\u03bf\u03b9\u03bf\u1fe6\u03c4\u03bf\u03c2" postag="p-p---na-" relation="OBJ" head="26"/>\n     <word id="26" form="\u03c0\u03b5\u03c0\u03bf\u03bd\u03b8\u03cc\u03c4\u03b5\u03c2" lemma="\u03c0\u03ac\u03c3\u03c7\u03c9" postag="v-prpamn-" relation="ADV" head="24"/>\n     <word id="27" form="\xb7" lemma="punc1" postag="u--------" relation="AuxK" head="0"/>\n   </sentence>\n </treebank>'),t=Object(c.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:s.a.treebank},r.a.createElement(ge,{treebank:n},r.a.createElement(ae,{id:"1"},r.a.createElement(de,null),r.a.createElement("div",{className:s.a.graph},r.a.createElement(U,null)),r.a.createElement(Q,null),r.a.createElement(N,{title:"XML"},r.a.createElement(Ee,null)),r.a.createElement(N,{title:"Annotators"},r.a.createElement(A,null))),r.a.createElement("br",null),r.a.createElement("textarea",{rows:30,className:s.a.textarea,value:n,onChange:function(e){var t=e.target.value;o(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports={xml:"Xml_xml__rDBB1",word:"Xml_word__1KQsw",active:"Xml_active__2pHyq",bracket:"Xml_bracket__2jMk-",element:"Xml_element__2UAgq",attribute:"Xml_attribute__1yJWB",attributeText:"Xml_attributeText__s0Hws"}},75:function(e,t,n){e.exports={treebank:"App_treebank__1HXOr",graph:"App_graph__2vjHC",textarea:"App_textarea__3kHMA"}}},[[278,1,2]]])}));
//# sourceMappingURL=main.323e4906.chunk.js.map