(function(t){function A(A){for(var n,o,c=A[0],s=A[1],a=A[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(A);while(d.length)d.shift()();return r.push.apply(r,a||[]),e()}function e(){for(var t,A=0;A<r.length;A++){for(var e=r[A],n=!0,c=1;c<e.length;c++){var s=e[c];0!==i[s]&&(n=!1)}n&&(r.splice(A--,1),t=o(o.s=e[0]))}return t}var n={},i={app:0},r=[];function o(A){if(n[A])return n[A].exports;var e=n[A]={i:A,l:!1,exports:{}};return t[A].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,A,e){o.o(t,A)||Object.defineProperty(t,A,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,A){if(1&A&&(t=o(t)),8&A)return t;if(4&A&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&A&&"string"!=typeof t)for(var n in t)o.d(e,n,function(A){return t[A]}.bind(null,n));return e},o.n=function(t){var A=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(A,"a",A),A},o.o=function(t,A){return Object.prototype.hasOwnProperty.call(t,A)},o.p="/richText/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=A,c=c.slice();for(var a=0;a<c.length;a++)A(c[a]);var l=s;r.push([0,"chunk-vendors"]),e()})({0:function(t,A,e){t.exports=e("56d7")},"010a":function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7ZTBDcIwDEW/2w7SEWADugmkgzQM0pYNWIEROkJG4IpQapyKQxSlQio5VfmXOPbPS6xIJjVyRwyNBGKCpnZgRkIVSKzK3/SKKDSonrVkOxdLL9ehJR16/C4Licxi/q5b5DOKmdC4m+cXGmyUz6huFzKS0/hDPiP5p2RgBmbgPoAUS55HrkvGXcLDyjljCUeZMs+wEH1haRfQGsypFs8pVogCbYnHjwk+2TemWOEDLOM9039umqkAAAAASUVORK5CYII="},"034f":function(t,A,e){"use strict";e("85ec")},"4d15":function(t,A,e){"use strict";e("b3c0")},"54aa":function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC3SURBVHgB1ZLLDcJADETHTgpICZRAByQdQAcJoQCoAFFBxJnfUgkpgRK2DqSs8R5AuxEKnxsj+eCneZIPpnovU2E0BIzwPteOUDAY6w8FnzE7lCyEDN8lYxLYAGx1zmFDBJU/K0CW9UYPW5U3hzkttdSG0rEmo53Zo+P31FRkFRQYSL/D+CH/JJUnyYgxidhO8kEpARoIyogluCx6YiQJkONFHMc8DRfqsPK/qPLztfQvrbvBhL07ytk1/mx/edUAAAAASUVORK5CYII="},"56d7":function(t,A,e){"use strict";e.r(A);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],o=function(){var t=this,A=t.$createElement,n=t._self._c||A;return n("div",{staticClass:"hello"},[n("div",{class:["btn-section"]},[n("div",{class:["btn"],on:{click:function(A){return t.btnClick("undo")}}},[n("img",{attrs:{src:e("6d23"),alt:""}})]),n("div",{class:["btn"],on:{click:function(A){return t.btnClick("redo")}}},[n("img",{attrs:{src:e("c2fb"),alt:""}})]),n("div",{class:["btn"],on:{click:function(A){return t.btnClick("heading")}}},[n("img",{attrs:{src:e("010a"),alt:""}})]),n("div",{class:["btn"],on:{click:function(A){return t.btnClick("insertParagraph")}}},[n("div",{class:["icon"]},[n("img",{attrs:{src:e("54aa"),alt:""}}),n("img",{attrs:{src:e("54aa"),alt:""}})])]),n("div",{class:["btn"],on:{click:function(A){return t.btnClick("insertImage")}}},[n("img",{attrs:{src:e("c5c4"),alt:""}})]),n("div",{class:["copyHTML"],on:{click:function(A){return t.btnClick("copy")}}},[n("span",[t._v("Скопировать HTML")])]),t.iscopied?n("div",[t._v("скопировано")]):t._e()]),n("iframe",{ref:"textField",class:["border"],attrs:{id:"output"}}),n("iframe",{ref:"output",attrs:{id:"display",frameborder:"0",name:"display"}})])},c=[],s=(e("4160"),e("159b"),{name:"HelloWorld",props:{msg:String},data:function(){return{iscopied:!1,isTitle:!1}},watch:{isTitle:function(){return this.isTitle?this.$refs.textField.contentDocument.execCommand("formatBlock",!1,"<h1>"):this.$refs.textField.contentDocument.execCommand("formatBlock",!1,"<div>")}},methods:{fitImage:function(t){var A=t.querySelectorAll("img");A.forEach((function(t){t.style.maxWidth="100%",t.style.height="70%"}))},insertImg:function(t,A){var e=prompt("Введите ссылку","");e&&(t.execCommand(A,!1,e),this.fitImage(t))},copyHTML:function(t){var A=this;""!==t.body.innerHTML&&(t.execCommand("selectAll",!1,null),t.execCommand("copy",!1,null),t.getSelection().removeAllRanges(),t.designMode="off",this.iscopied=!0,setTimeout((function(){A.iscopied=!1,t.designMode="on"}),500))},btnClick:function(t){var A=this.$refs.textField.contentDocument;if("insertImage"===t)this.insertImg(A,t);else if("copy"===t)this.copyHTML(A);else if("heading"===t){var e=this.isTitle;this.isTitle=!e}else A.execCommand(t,!1);this.fitImage(A)}},mounted:function(){this.$refs.textField.contentDocument.body.style.color="#EAEAEA",this.$refs.textField.contentDocument.body.style.wordBreak="break-word",this.$refs.textField.contentDocument.designMode="On"}}),a=s,l=(e("4d15"),e("2877")),u=Object(l["a"])(a,o,c,!1,null,"ef4dffc8",null),d=u.exports,f={name:"App",components:{HelloWorld:d}},p=f,g=(e("034f"),Object(l["a"])(p,i,r,!1,null,null,null)),m=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(m)}}).$mount("#app")},"6d23":function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVVdUsIwEP62YcZXjsAR9AZwAvEElh+d8Qk5gXoC8Vmg5QZwAuoJ5Ab2CH1VIXG3pBA7/Dw030wnu5vsl81mN0U3Mq+9qTHdiXmER9TIICckwoCHUTERRqYeaIRsv2b1kr+6ncr4WxmDmf5BEj9QepC4bMgJgUG+Ie3IXIityRs21QVSPnE87dBLeRFJGqycbggtZbBkueEuMtsos9yhNLfz/UbLjd4lLpz3joSY1piN7yhxWfrvpmkUQhZvj5G7xG6EqV7jJr6nFU5ANtAKkXOKZNKl1jHijC1DrZEWhrgUsQu+kwan7xP2csV32qNRcGBtnS8mUgrL4uNSDI8Rxx0+ukan0Nn3SUYhzlARkz7NeUiKwCRFNa6EK6nXE36ZDjDHGXAKFlKCIm8U2gRPsLn+surCG7HA7YkAniAd66j+iPH7vyO9EQdqe3ECTsiHN2L7OuaQKvJCzC+cNEVDZHkOuGlWNVREb2zazPZc6KQxlLF6xME+BYw324XViaXjrDjjl233e/sDRvqhMdyu3pcAAAAASUVORK5CYII="},"85ec":function(t,A,e){},b3c0:function(t,A,e){},c2fb:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgBtVTdUcJAEP72guNr7AA7oASsQKjAAPLgE1IBQwXqqwJJCVKBWIFYgenAvOKYW/dCzmTC3zic38zlbjd73+3t7i3BIboh3xHjlhnD2i6jIGRfAQMxbIrYkOEbPQOx6JYyz/UXFtENxXaPIc1mkn07CEfW6ABiJkSzDo2N0JuJr7meKqR1j/Eiy3pZL9YJ1gNU+Zdjma7Q9k7xsUGck77ZK+d4oBTPkz4tyizXT9xkD4Esr8relxxaE1c9NXHUK1yU47cN3SkHcoXRllvEWfI8ielfSINHbgihrzVipTCWdVi1odxbGxtIrM73kdqSwn7IgRqt4hhEh66/I3kbxDWpuUsrpZKsQzvEZqgY7/tspL4jktr7xLoSkmmXzuAICkV5JXAIhX+CkicZ5+u6ec5wBCVZXlqh9p01GzfErPFqBXmmIziC0goRisQ1exNuwQFU1KFEmt240CDsmyd7LLH5zHp0L9Mi1/n6BAMcid9ySwlt04Cy3ptijiPxA8vLl46dQ45hAAAAAElFTkSuQmCC"},c5c4:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEWSURBVHgB1ZTfbcJADMY/k0h97Qh0hG7QbtANuCZ9KFMQpgAJQsIGbMAKbEBGYAEwttBFF3Lhb/LAJ1lnRZdfvnPsoyjjERgGbYqQU7xgRgfqoSOFTl6kEX3gCUlZt8Toa96Z44fBZsZfUcqmVbB2UhBgTYQsTjlrBaxQqWNSPiAYHzzEHapBq3DwNbCZcF/XfEhFE1Tysa5MGFk4OeRaKWRgBsEbthqaN0HnMSUa9gO1QziTV0joy3llB2Mlbn7Ooe6Wv5ST0rnH8XsNejriRajK5/wcbLWU2FT4DVAXLq4LH7iEymibPeHbwq9BfQp9UE3yX9rJ8vkvHTJ1uuNWuY53FurqEajqBe9j/TEHwgAtqsdYHgFJgHvg18zyFwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.e862b3fd.js.map