(window.salesJsonp=window.salesJsonp||[]).push([[38],{"/ZH/":function(t,e,r){"use strict";var n=r("2Eek"),o=r.n(n),a=r("XoMD"),i=r.n(a),s=r("Jo+v"),c=r.n(s),u=r("4mXO"),l=r.n(u),h=r("pLtp"),f=r.n(h),p=r("TRZx"),d=r.n(p),v=r("Bhuq"),y=r.n(v),g=r("SqZg"),m=r.n(g),b=r("hfKm"),w=r.n(b),L=r("Z7t5"),k=r.n(L),x=r("pbKT"),E=r.n(x),O=r("eVuF"),j=r.n(O),R=r("0iUn"),T=r("sLSF"),_=r("AT/M"),M=r("Tit0"),S=r("MI3g"),C=r("a7VT"),F=r("vYYK"),N=r("q1tI"),W=r.n(N),G=r("M97/"),I=r("/MKj"),K=W.a.createElement;function D(t,e){var r=f()(t);if(l.a){var n=l()(t);e&&(n=n.filter((function(e){return c()(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){Object(F.a)(t,e,r[e])})):i.a?o()(t,i()(r)):D(Object(r)).forEach((function(e){w()(t,e,c()(r,e))}))}return t}function A(t){var e=function(){if("undefined"===typeof Reflect||!E.a)return!1;if(E.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(E()(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(C.a)(t);if(e){var o=Object(C.a)(this).constructor;r=E()(n,arguments,o)}else r=n.apply(this,arguments);return Object(S.a)(this,r)}}var B=function(t){Object(M.a)(r,t);var e=A(r);function r(t){return Object(R.a)(this,r),e.call(this,t)}return Object(T.a)(r,[{key:"render",value:function(){var t=this;function e(t){this.props.handleSearchClick(t.currentTarget.dataset.id,t.currentTarget.dataset.value)}var r=this.props.srchResults?this.props.srchResults.map((function(r,n){return K("li",{className:t.props.cursor===n?G.activeClass:null,onClick:e.bind(t),key:r.key,"data-id":r.key,"data-value":r.value,keyup:t.keyup,onKeyDown:t.keydown,dangerouslySetInnerHTML:{__html:r.value}})})):"";return K("ul",{id:"src","data-id":"foo",className:[this.props.srchResults&&this.props.srchResults.length>0?G.srchResult:G.srchResultHidden].join(" ")},r)}}]),r}(W.a.PureComponent),H=Object(I.b)((function(t,e){var r=t.srchResults;return P(P({},e),{},{results:r})}))(B),q=r("/qFQ"),U=r("a6RD"),Y=r.n(U),Z=r("rSkH");r.d(e,"a",(function(){return $}));var J=N.createElement;function Q(t,e){var r=f()(t);if(l.a){var n=l()(t);e&&(n=n.filter((function(e){return c()(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(){V=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof k.a?k.a:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return w()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(C){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=m()(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=O(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=c;var l={};function h(){}function f(){}function p(){}var v={};s(v,o,(function(){return this}));var g=y.a,b=g&&g(g(M([])));b&&b!==e&&r.call(b,o)&&(v=b);var L=p.prototype=h.prototype=m()(v);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function M(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,s(L,"constructor",p),s(p,"constructor",f),f.displayName=s(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return d.a?d()(t,p):(t.__proto__=p,s(t,i,"GeneratorFunction")),t.prototype=m()(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=j.a);var i=new E(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(L),s(L,i,"Generator"),s(L,o,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=M,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function X(t){var e=function(){if("undefined"===typeof Reflect||!E.a)return!1;if(E.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(E()(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(C.a)(t);if(e){var o=Object(C.a)(this).constructor;r=E()(n,arguments,o)}else r=n.apply(this,arguments);return Object(S.a)(this,r)}}var z=Y()((function(){return Promise.resolve().then(r.t.bind(null,"5kpU",7))}),{loadableGenerated:{webpack:function(){return["5kpU"]},modules:["@idp/duc/components/atoms/TextField"]}}),$=function(t){Object(M.a)(r,t);var e=X(r);function r(t){var n;return Object(R.a)(this,r),n=e.call(this,t),Object(F.a)(Object(_.a)(n),"searchWidget",void 0),Object(F.a)(Object(_.a)(n),"suggestionsList",void 0),Object(F.a)(Object(_.a)(n),"data",{input:"",placeHolder:n.props.labelList&&n.props.labelList[0]?n.props.labelList[0].compatibleInputBoxText:"What would you like?",name:n.props.name?"searchInput".concat(n.props.name):"searchInput",labelText:n.props.labelList&&n.props.labelList[0]?n.props.labelList[0].compatibleLabel:"Search for a device",hintText:""}),Object(F.a)(Object(_.a)(n),"handleTouch",(function(t){n.searchWidget.contains(t.target)?n.suggestionsList.style.display="block":(n.suggestionsList.style.display="none",n.data.input="",n.setResults([]))})),Object(F.a)(Object(_.a)(n),"searchAcc",(function(t){var e;return V().async((function(r){for(;;)switch(r.prev=r.next){case 0:return this.data.input=t,r.next=3,V().awrap(Z.a.searchAccWidget(t,this.props.selectedProducts));case 3:(e=r.sent)[0]&&"error"===e[0].key?(this.setResults([]),this.handleError(q.a.filterModal.backendErrorMesage)):this.setResults(e);case 5:case"end":return r.stop()}}),null,this,null,j.a)})),Object(F.a)(Object(_.a)(n),"handleKeyDown",(function(t,e){"Tab"===e.key?this.suggestionsList.style.display="none":this.suggestionsList.style.display="block";var r=this.state,n=r.cursor,o=r.srchResults;if(38===e.keyCode&&n>0?this.setState((function(t){return{cursor:t.cursor-1}})):40===e.keyCode&&n<o.length-1&&this.setState((function(t){return{cursor:t.cursor+1}})),"Enter"===e.key){var a=this.state.srchResults;if(a.length>0){var i=-1===n?0:n,s=a[i].key,c=a[i].value;this.handleClick(s,c)}else this.handleError(q.a.filterModal.noProductsMessage)}})),n.state={srchResults:[],cursor:-1},n}return Object(T.a)(r,[{key:"setResults",value:function(t){this.setState({srchResults:t,showErrMsg:!1,cursor:-1})}},{key:"componentWillMount",value:function(){"undefined"!==typeof document&&document.addEventListener("mousedown",this.handleTouch,!1)}},{key:"componentWillUnmount",value:function(){"undefined"!==typeof document&&document.removeEventListener("mousedown",this.handleTouch,!1)}},{key:"handleClick",value:function(t,e){this.data.input="",this.setResults([]),this.props.handleSearchClick(t,e)}},{key:"handleError",value:function(t){this.setState({showErrMsg:!0,errorMessage:t,cursor:0})}},{key:"onFocusSearch",value:function(){this.suggestionsList.style.display="block"}},{key:"populateOptions",value:function(){var t={type:"text",accessibility:this.props.labelList&&this.props.labelList[0]?this.props.labelList[0].compatibleLabel:"Search for a device"},e={type:"text",hint:this.state.showErrMsg,errorText:this.state.errorMessage,error:!0,accessibility:this.state.errorMessage};return this.state.showErrMsg?(this.data.hintText=this.state.errorMessage,t=e):this.data.hintText="",t}},{key:"render",value:function(){var t=this;return J("div",{className:G.searchWidget,ref:function(e){return t.searchWidget=e}},J("div",null,J(z,{id:this.data.name,events:{onChange:function(e){return t.searchAcc(e.target.value)},onKeyDown:function(e,r){return t.handleKeyDown(e,r)},onFocus:function(){return t.onFocusSearch()}},data:this.data,options:this.populateOptions()})),J("div",{className:G.srchOuter,ref:function(e){return t.suggestionsList=e}},J(H,{cursor:this.state.cursor,srchResults:this.state.srchResults,handleSearchClick:function(e,r){t.handleClick(e,r)}})))}}]),r}(N.Component);Object(I.b)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(r),!0).forEach((function(e){Object(F.a)(t,e,r[e])})):i.a?o()(t,i()(r)):Q(Object(r)).forEach((function(e){w()(t,e,c()(r,e))}))}return t}({},t)}))($)},"M97/":function(t,e,r){t.exports={searchWidget:"_1C68Q",srchOuter:"_3RDEL",srchResult:"_38dut",activeClass:"_uvw3W"}}}]);