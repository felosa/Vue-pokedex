(function(n){function e(e){for(var o,i,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)i=u[l],r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,u=1;u<t.length;u++){var s=t[u];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/Vue-pokedex/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=s;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var o=t("64a9"),r=t.n(o);r.a},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{staticClass:"img",attrs:{alt:"Vue logo",src:t("5f8b")}}),o("ListPokemon")],1)},a=[],i=t("bc3a"),u=t.n(i),s=function(){var n=this,e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("div",{staticClass:"list"},[o("h2",[e._v("How many pokemon do you want to see?")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"number",placeholder:"Seleccione el numero de pokemon a mostrar"},domProps:{value:e.number},on:{change:function(n){this.number=e.number},input:function(n){n.target.composing||(e.number=n.target.value)}}}),o("button",{attrs:{type:"button"},on:{click:function(){return n.getPokemons()}}},[e._v("Show")]),e._l(e.pokemons.results,function(n,t){return o("div",{key:t,staticClass:"pokemon"},[o("a",{attrs:{href:"#"},on:{click:function(){return e.getonePokemon(t+1)}}},[e._v(e._s(n.name.toUpperCase()))]),o("span",[e._v("---#"+e._s(t+1))]),o("br")])})],2),o("div",{staticClass:"one"},[o("onePokemon",{attrs:{pokemon:this.pokemon}})],1)])},c=[],p=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("img",{attrs:{src:this.pokemon.sprites.back_default,alt:""}}),t("img",{attrs:{src:this.pokemon.sprites.front_default,alt:""}}),t("h2",[n._v("#"+n._s(this.pokemon.id))]),t("h2",[n._v(n._s(this.pokemon.name))]),t("h3",[n._v(n._s(this.pokemon.weight/10)+" KG")])])},l=[],f={props:["pokemon"],data:function(){return{}},mounted:function(){},methods:{}},m=f,d=t("2877"),h=Object(d["a"])(m,p,l,!1,null,null,null),v=h.exports,b={name:"app",components:{onePokemon:v},data:function(){return{pokemons:"",number:964,pokemonId:0,pokemon:{}}},mounted:function(){},methods:{getPokemons:function(){var n=this;u.a.get("https://pokeapi.co/api/v2/pokemon",{params:{limit:this.number}}).then(function(e){n.pokemons=e.data}).catch(function(n){return console.log(n)})},getonePokemon:function(n){var e=this;u.a.get("https://pokeapi.co/api/v2/pokemon/"+n).then(function(n){e.pokemon=n.data}).catch(function(n){return console.log(n)})}}},k=b,g=(t("e978"),Object(d["a"])(k,s,c,!1,null,null,null)),_=g.exports,y={name:"app",components:{ListPokemon:_},data:function(){return{}},mounted:function(){},methods:{}},w=y,P=(t("034f"),Object(d["a"])(w,r,a,!1,null,null,null)),x=P.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(n){return n(x)}}).$mount("#app")},"5f8b":function(n,e,t){n.exports=t.p+"img/pokemon.49255cb2.png"},"64a9":function(n,e,t){},e978:function(n,e,t){"use strict";var o=t("fd80"),r=t.n(o);r.a},fd80:function(n,e,t){}});
//# sourceMappingURL=app.c11e08b8.js.map