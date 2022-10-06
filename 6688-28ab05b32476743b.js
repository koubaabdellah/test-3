"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6688],{66688:function(e,t,n){n.d(t,{gN:function(){return k},l0:function(){return h},lP:function(){return S},U$:function(){return C},cI:function(){return y},i8:function(){return v}});var r=n(87462),i=n(63366),u=n(67294),a=n(95142);function o(e,t,n){var r=e.render,a=e.children,o=e.component,c=(0,i.Z)(e,["render","children","component"]);if(o)return(0,u.createElement)(o,Object.assign(t,c,{children:a,render:r}));if(r)return r(void 0===a?Object.assign(t,c):Object.assign(t,c,{children:a}));if("function"!==typeof a)throw new Error("Must specify either a render prop, a render function as children, or a component prop to "+n);return a(Object.assign(t,c))}function c(e,t,n){void 0===n&&(n=function(e,t){return e===t});var r=u.useRef(e);u.useEffect((function(){n(e,r.current)||(t(),r.current=e)}))}var l=function(e,t){if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<n.length;u++){var a=n[u];if(!i(a)||e[a]!==t[a])return!1}return!0},f=function(e){return!(!e||"function"!==typeof e.stopPropagation)},s=(0,u.createContext)();function d(e){var t=u.useRef(e);return u.useEffect((function(){t.current=e})),t}var v="6.5.1",m=function(e,t,n){n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},enumerable:!0})}))},p=function(e,t){return m(e,t,["active","dirty","dirtyFields","dirtySinceLastSubmit","dirtyFieldsSinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitError","submitErrors","submitFailed","submitSucceeded","submitting","touched","valid","validating","values","visited"])},b={"final-form":a.i8,"react-final-form":v},g=a._R.reduce((function(e,t){return e[t]=!0,e}),{});function h(e){var t=e.debug,n=e.decorators,v=e.destroyOnUnregister,m=e.form,h=e.initialValues,y=e.initialValuesEqual,S=e.keepDirtyOnReinitialize,E=e.mutators,O=e.onSubmit,w=e.subscription,F=void 0===w?g:w,V=e.validate,C=e.validateOnBlur,k=(0,i.Z)(e,["debug","decorators","destroyOnUnregister","form","initialValues","initialValuesEqual","keepDirtyOnReinitialize","mutators","onSubmit","subscription","validate","validateOnBlur"]),R={debug:t,destroyOnUnregister:v,initialValues:h,keepDirtyOnReinitialize:S,mutators:E,onSubmit:O,validate:V,validateOnBlur:C},Z=function(e){var t=u.useRef();return t.current||(t.current=e()),t.current}((function(){var e=m||(0,a.Np)(R);return e.pauseValidation(),e})),j=(0,u.useState)((function(){var e={};return Z.subscribe((function(t){e=t}),F)(),e})),x=j[0],B=j[1],N=d(x);(0,u.useEffect)((function(){Z.isValidationPaused()&&Z.resumeValidation();var e=[Z.subscribe((function(e){l(e,N.current)||B(e)}),F)].concat(n?n.map((function(e){return e(Z)})):[]);return function(){Z.pauseValidation(),e.reverse().forEach((function(e){return e()}))}}),[n]),c(t,(function(){Z.setConfig("debug",t)})),c(v,(function(){Z.destroyOnUnregister=!!v})),c(S,(function(){Z.setConfig("keepDirtyOnReinitialize",S)})),c(h,(function(){Z.setConfig("initialValues",h)}),y||l),c(E,(function(){Z.setConfig("mutators",E)})),c(O,(function(){Z.setConfig("onSubmit",O)})),c(V,(function(){Z.setConfig("validate",V)})),c(C,(function(){Z.setConfig("validateOnBlur",C)}));var P={form:(0,r.Z)({},Z,{reset:function(e){f(e)?Z.reset():Z.reset(e)}}),handleSubmit:function(e){return e&&("function"===typeof e.preventDefault&&e.preventDefault(),"function"===typeof e.stopPropagation&&e.stopPropagation()),Z.submit()}};return p(P,x),(0,u.createElement)(s.Provider,{value:Z},o((0,r.Z)({},k,{__versions:b}),P,"ReactFinalForm"))}function y(e){var t=(0,u.useContext)(s);if(!t)throw new Error((e||"useForm")+" must be used inside of a <Form> component");return t}function S(e){var t=e.onChange,n=e.subscription,a=(0,i.Z)(e,["onChange","subscription"]),c=y("FormSpy"),l=function(e){var t=void 0===e?{}:e,n=t.onChange,r=t.subscription,i=void 0===r?g:r,a=y("useFormState"),o=(0,u.useRef)(!0),c=(0,u.useRef)(n);c.current=n;var l=(0,u.useState)((function(){var e={};return a.subscribe((function(t){e=t}),i)(),n&&n(e),e})),f=l[0],s=l[1];(0,u.useEffect)((function(){return a.subscribe((function(e){o.current?o.current=!1:(s(e),c.current&&c.current(e))}),i)}),[]);var d={};return p(d,f),d}({onChange:t,subscription:n});if(t)return null;var s={form:(0,r.Z)({},c,{reset:function(e){f(e)?c.reset():c.reset(e)}})};return o((0,r.Z)({},a,s),l,"FormSpy")}var E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,O=a.bP.reduce((function(e,t){return e[t]=!0,e}),{}),w=function(e,t){return void 0===e?"":e},F=function(e,t){return""===e?void 0:e},V=function(e,t){return e===t};function C(e,t){void 0===t&&(t={});var n=t,i=n.afterSubmit,a=n.allowNull,o=n.component,c=n.data,l=n.defaultValue,f=n.format,s=void 0===f?w:f,v=n.formatOnBlur,p=n.initialValue,b=n.multiple,g=n.parse,h=void 0===g?F:g,S=n.subscription,C=void 0===S?O:S,k=n.type,R=n.validateFields,Z=n.value,j=y("useField"),x=d(t),B=function(t,n){return j.registerField(e,t,C,{afterSubmit:i,beforeSubmit:function(){var t=x.current,n=t.beforeSubmit,r=t.formatOnBlur,i=t.format,u=void 0===i?w:i;if(r){var a=j.getFieldState(e).value,o=u(a,e);o!==a&&j.change(e,o)}return n&&n()},data:c,defaultValue:l,getValidator:function(){return x.current.validate},initialValue:p,isEqual:function(e,t){return(x.current.isEqual||V)(e,t)},silent:n,validateFields:R})},N=(0,u.useRef)(!0),P=(0,u.useState)((function(){var e={},t=j.destroyOnUnregister;return j.destroyOnUnregister=!1,B((function(t){e=t}),!0)(),j.destroyOnUnregister=t,e})),U=P[0],q=P[1];(0,u.useEffect)((function(){return B((function(e){N.current?N.current=!1:q(e)}),!1)}),[e,c,l,p]);var _={onBlur:(0,u.useCallback)((function(e){if(U.blur(),v){var t=j.getFieldState(U.name);U.change(s(t.value,U.name))}}),[U.blur,U.name,s,v]),onChange:(0,u.useCallback)((function(t){var n=t&&t.target?function(e,t,n,r){if(!r&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(r&&e.nativeEvent)return e.nativeEvent.text;var i=e.target,u=i.type,a=i.value,o=i.checked;switch(u){case"checkbox":if(void 0!==n){if(o)return Array.isArray(t)?t.concat(n):[n];if(!Array.isArray(t))return t;var c=t.indexOf(n);return c<0?t:t.slice(0,c).concat(t.slice(c+1))}return!!o;case"select-multiple":return function(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r=e[n];r.selected&&t.push(r.value)}return t}(e.target.options);default:return a}}(t,U.value,Z,E):t;U.change(h(n,e))}),[Z,e,h,U.change,U.value,k]),onFocus:(0,u.useCallback)((function(e){U.focus()}),[U.focus])},A={};!function(e,t){m(e,t,["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","validating","visited"])}(A,U);var D=(0,r.Z)({name:e,get value(){var t=U.value;return v?"input"===o&&(t=w(t)):t=s(t,e),null!==t||a||(t=""),"checkbox"===k||"radio"===k?Z:"select"===o&&b?t||[]:t},get checked(){return"checkbox"===k?void 0===Z?!!U.value:!(!Array.isArray(U.value)||!~U.value.indexOf(Z)):"radio"===k?U.value===Z:void 0}},_);return b&&(D.multiple=b),void 0!==k&&(D.type=k),{input:D,meta:A}}var k=(0,u.forwardRef)((function(e,t){var n=e.afterSubmit,a=e.allowNull,c=e.beforeSubmit,l=e.children,f=e.component,s=e.data,d=e.defaultValue,v=e.format,m=e.formatOnBlur,p=e.initialValue,b=e.isEqual,g=e.multiple,h=e.name,y=e.parse,S=e.subscription,E=e.type,O=e.validate,w=e.validateFields,F=e.value,V=(0,i.Z)(e,["afterSubmit","allowNull","beforeSubmit","children","component","data","defaultValue","format","formatOnBlur","initialValue","isEqual","multiple","name","parse","subscription","type","validate","validateFields","value"]),k=C(h,{afterSubmit:n,allowNull:a,beforeSubmit:c,children:l,component:f,data:s,defaultValue:d,format:v,formatOnBlur:m,initialValue:p,isEqual:b,multiple:g,parse:y,subscription:S,type:E,validate:O,validateFields:w,value:F});if("function"===typeof l)return l((0,r.Z)({},k,V));if("string"===typeof f)return(0,u.createElement)(f,(0,r.Z)({},k.input,{children:l,ref:t},V));if(!h)throw new Error("prop name cannot be undefined in <Field> component");return o((0,r.Z)({children:l,component:f,ref:t},V),k,"Field("+h+")")}))}}]);