(window.salesJsonp=window.salesJsonp||[]).push([[43],{"1lbt":function(t,o,e){"use strict";e.r(o);var s=e("pbKT"),n=e.n(s),i=e("0iUn"),r=e("sLSF"),a=e("AT/M"),l=e("Tit0"),p=e("MI3g"),d=e("a7VT"),c=e("vYYK"),u=e("q1tI"),h=e("dhew"),m=e.n(h),f=e("r3d+"),v=e.n(f),b=e("Tewe"),g=e("cq7Z"),C=e("n206"),M=e("9ONQ"),y=u.createElement;function N(t){var o=function(){if("undefined"===typeof Reflect||!n.a)return!1;if(n.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(n()(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=Object(d.a)(t);if(o){var i=Object(d.a)(this).constructor;e=n()(s,arguments,i)}else e=s.apply(this,arguments);return Object(p.a)(this,e)}}new M.a;var k=function(t){Object(l.a)(e,t);var o=N(e);function e(t){var s;return Object(i.a)(this,e),s=o.call(this,t),Object(c.a)(Object(a.a)(s),"reporting",void 0),Object(c.a)(Object(a.a)(s),"buttonHandler",(function(){if(s.props.buttonHandler(),s.state.firstNetUser){var t={linkDestinationUrl:window.location.href,linkName:"Close",linkPosition:"Body"};s.reporting.fireLinkClickEvent(t)}else{var o={linkDestinationUrl:window.location.href,linkName:"Retry",linkPosition:"Body"};s.reporting.fireLinkClickEvent(o)}})),s.state={firstNetUser:!1},s.reporting=new g.a,s}return Object(r.a)(e,[{key:"componentDidMount",value:function(){this.setState({firstNetUser:!0===Object(C.s)()}),this.props.isOpen&&void 0!==this.props.firePageLoadEvent&&this.props.firePageLoadEvent("CTO")}},{key:"shouldComponentUpdate",value:function(t,o){return o.firstNetUser!==this.state.firstNetUser}},{key:"render",value:function(){return y(u.Fragment,null,y(m.a,{show:this.props.isOpen,close:this.props.buttonHandler,focusFirstElement:!0,size:"medium",sizing:"normal",root:"rsg-root"},y("div",{className:"pad-md-lg pad-lg-md pad-t-xl-sm pad-l-lg-sm pad-r-lg-sm pad-b-lg-sm"},y("div",{className:"type-md font-medium mar-b-xxs color-ui-black"},y(b.IconSvg,{colorClass:"color-functional-dk-red color mar-r-xxs",size:24,svgNodeStr:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="svg-base" d="M16 1a15 15 0 1015 15A15 15 0 0016 1zm1 22h-2v-2h2zm0-4h-2V9h2z"/></svg>'}),this.state.firstNetUser?y("span",{style:{verticalAlign:"top"}},null!==this.props.ctoModalContent&&void 0!==this.props.ctoModalContent?this.props.ctoModalContent.firstNetHeadingText:this.props.firstNetHeader):y("span",{style:{verticalAlign:"top"}},null!==this.props.ctoModalContent&&void 0!==this.props.ctoModalContent?this.props.ctoModalContent.headingText:this.props.headerMessage)),this.state.firstNetUser?y("div",{className:"type-sm mar-b-sm-lg mar-b-md-md mar-b-lg-sm"},null!==this.props.ctoModalContent&&void 0!==this.props.ctoModalContent?this.props.ctoModalContent.firstNetModalContent:this.props.firstNetBody):y("div",{className:"type-sm mar-b-sm-lg mar-b-md-md mar-b-lg-sm"},null!==this.props.ctoModalContent&&void 0!==this.props.ctoModalContent?this.props.ctoModalContent.modalContent:this.props.bodyMessage),this.state.firstNetUser?y(v.a,{buttonType:"button",kind:"primaryBlack",size:"small",fullWidth:!0,onClick:this.buttonHandler},null!==this.props.ctoModalContent&&void 0!==this.props.ctoModalContent?this.props.ctoModalContent.firstNetButtonText:this.props.firstNetButtonText):y(v.a,{buttonType:"button",kind:"primaryBlack",size:"small",fullWidth:!0,onClick:this.buttonHandler},(null!==this.props.ctoModalContent&&this.props.ctoModalContent,this.props.buttonText)))))}}]),e}(u.Component);o.default=k}}]);