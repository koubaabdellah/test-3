(window.salesJsonp=window.salesJsonp||[]).push([[40],{fw99:function(o,e,t){"use strict";t("hfKm")(e,"__esModule",{value:!0});var a=t("qTIY");e.default=a.default},qTIY:function(o,e,t){"use strict";var a=t("hfKm"),s=t("Qetd"),r=t("SqZg"),p=t("TRZx"),n=this&&this.__extends||function(){var o=function(e,t){return(o=p||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t])})(e,t)};return function(e,t){function a(){this.constructor=e}o(e,t),e.prototype=null===t?r(t):(a.prototype=t.prototype,new a)}}(),i=this&&this.__assign||function(){return(i=s||function(o){for(var e,t=1,a=arguments.length;t<a;t++)for(var s in e=arguments[t])Object.prototype.hasOwnProperty.call(e,s)&&(o[s]=e[s]);return o}).apply(this,arguments)};a(e,"__esModule",{value:!0});var l=t("q1tI"),m=t("oAY1"),d=t("mFDS"),u=function(o){function e(e){var t=o.call(this,e)||this;return t.imageWrapper=function(){var o=t.props.options&&t.props.options.imageParentCustomClass?t.props.options.imageParentCustomClass:" ";return t.props.imageZoomable?l.createElement("div",{className:"zoom-on-hover "+o},l.createElement("div",{className:"zoomable-wrapper"},t.getImage())):l.createElement("div",{className:o},t.getImage())},t.getImage=function(){var o=t.props.options&&t.props.options.imageCustomClass?t.props.options.imageCustomClass:" ",e=t.props.options&&t.props.options.imageCustomOptions?t.props.options.imageCustomOptions:{};return l.createElement("img",i({src:t.props.data.imageUrl,alt:t.props.data.imageAlt?t.props.data.imageAlt:"image",role:"img",className:t.props.imageZoomable?"zoomable "+o:""+o,onClick:t.props.events&&t.props.events.onImageClick?t.props.events.onImageClick:void 0},e))},t.legalSection=function(){var o,e,a=null===(o=t.props.data.legalProps)||void 0===o?void 0:o.data;if(void 0!==a){var s=null===(e=t.props.data.legalProps)||void 0===e?void 0:e.options;return l.createElement("div",{className:"mar-t-xxs"},l.createElement(m.default,{data:a,options:s}))}},t.linkSection=function(){var o,e,a,s,r,p=null===(o=t.props.data)||void 0===o?void 0:o.linkText,n=null===(e=t.props.data.linkProps)||void 0===e?void 0:e.onClick,i=(null===(a=t.props.data.linkProps)||void 0===a?void 0:a.url)?null===(s=t.props.data.linkProps)||void 0===s?void 0:s.url:"#",m=null===(r=t.props.data.linkProps)||void 0===r?void 0:r.kind;return l.createElement(d.default,{kind:m,className:"solo mar-t-xs mar-t-xxs-sm",url:i,onClick:n},p)},t.paragraphSection=function(){var o=t.props.data.paragraph,e=t.props.options&&t.props.options.typeSize?t.props.options.typeSize:"base",a=t.props.options&&t.props.options.paragraphClass?t.props.options.paragraphClass:" ";if(o&&""!==o)return l.createElement("div",{dangerouslySetInnerHTML:{__html:o},className:"type-"+e+" color-ui-dark-gray "+a})},t.render=function(){var o=t.props.options&&t.props.options.contentParentCustomClass?t.props.options.contentParentCustomClass:"pad-t-xs pad-b-xs",e=t.props.options&&t.props.options.eyebrowHeadingSize?t.props.options.eyebrowHeadingSize:"md",a=t.props.options&&t.props.options.parentClass?t.props.options.parentClass:" ";return l.createElement("div",{"data-testid":t.props.testId,className:a},t.imageWrapper(),l.createElement("div",{className:o},t.props.data.eyebrow&&l.createElement("h2",{className:"type-eyebrow-"+e+" color-ui-medium-gray"},t.props.data.eyebrow),l.createElement("h2",{className:"heading-"+e+" mar-b-xxxs"},t.props.data.heading),t.paragraphSection(),t.props.data.legalProps&&t.legalSection(),t.linkSection()))},t}return n(e,o),e.defaultProps={imageZoomable:!0},e}(l.Component);e.default=u}}]);