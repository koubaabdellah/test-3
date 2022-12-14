
<!DOCTYPE html>
<html lang="en">
<head>
<!--**** META INFO ****-->
<meta http-equiv="X-UA-Compatible" content="IE=EDGE">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=auto">
<meta name="format-detection" content="telephone=no">
<title ng-bind="titleName"></title>
<meta name="robots" content="INDEX, FOLLOW"/>
<meta name="description" content="Login to manage your AT&T Wireless, DIRECTV, U-verse, Internet or Home Phone services. View or pay your bill, check usage, change plans or packages, manage devices & features, and more."/>
<meta name="keywords" content="account, att, check balance, billing, change, features, log in, login, manage, myatt, phone plans, sign in, signin, upgrade, usage, uverse, directv, internet, wireless, home phone, check usage, change plan, upgrade device, add device, view bill, pay bill, make payment, change package"/>
<link rel="canonical" href="https://www.att.com/my/#/login">
<link rel="alternate" media="only screen and (min-width: 640px)" href="https://m.att.com/my/#/login"/>
<meta NAME="DCSext.wtPN" CONTENT="Sandbox3.2.0-basic-article-layout">
<!--****
The TESLA Standalone page calls the JS/CSS files directly
and does not require the use of a Web Service to populate
the page dependencies.
NOTE: The paths to the JS/CSS files are absolute here. If your
environment is on a TST server, set these relative "/scripts/teslax.x/etc"
****-->
<!--**** CSS ****-->
<!--==== Start APPLICATION CSS files =============================================================-->
<!-- ==== NOTE this is an example on how an app will add their css -->
<style>
body {font-family: Arial, Helvetica, sans-serif;}
</style>
<!--==== End APPLICATION CSS files ===============================================================-->
<!--==== Change for Smart App Banner ==-->
<!--==== Web store for private browser ==-->
<script type="text/javascript" src="https://www.att.com/public/50a1ab6032aabc1ca8666233c9dc954522001624dcc5"  ></script><script src="/ui/services_co_myatt_common/1.0.0/scripts/libs/web-storage-x-1.1.js"></script>
<!--==== Intro JS - CBO Intro ==-->
<link href="/ui/services_co_myatt_overview/1.0.0/styles/introjs.css" rel="stylesheet">
<script src="/ui/services_co_myatt_overview/1.0.0/libs/intro.js"></script>
<script src="/ui/global_all_cms_common/libs/requirejs/2.1.9/require.js"></script>
<script>var detmScriptLoadType="async";
window.targetGlobalSettings = {bodyHidingEnabled: false};</script>
<script src="/scripts/adobe/virtual/detm-container-hdr.js" data-trigger.dtm="launch-dtm" data-trigger="launch-detm" data-restrictions="target"></script>
<script> 
try{
injectGoldenEyeMbox();
}
catch(excpt){
console.error('Index.html :: Exception in calling injectGoldenEyeMbox : '+ excpt);
}
</script>
<script src="/ui/services_co_myatt_common/1.0.0/scripts/libs/abTestUtil.js"></script>
<script src="/ui/services_co_myatt_common/1.0.0/scripts/libs/myattSessionUtils.js"></script>
<style>
.overviewModalBackdrop{
opacity: 0.7;
filter: alpha(opacity=70);
background-color: #000;
transition: opacity 0.3s linear 0s;
position: fixed;
height: 100%;
width: 100%;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index:1;
font-size: 16px;
font-family: "Omnes-ATT-W02", Arial !important;
}
.overviewLoaderWrap{
position: relative;
top: 41%;
text-align: center
}
@keyframes OverviewSpinnerAnimation {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(359deg);
}
}
.overviewSpinner {
width: 1em;
-webkit-animation: 1s linear infinite OverviewSpinnerAnimation;
animation: 1s linear infinite OverviewSpinnerAnimation;
background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9InN2Zy1zcGlubmVyIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgIDxwYXRoIGZpbGw9IiNGNUY1RjUiIGQ9Ik0xOCAzNkM4LjEgMzYgMCAyNy45IDAgMThTOC4xIDAgMTggMHMxOCA4LjEgMTggMTgtOC4xIDE4LTE4IDE4em0wLTMxLjVjLTcuNSAwLTEzLjUgNi0xMy41IDEzLjVTMTAuNiAzMS41IDE4IDMxLjVjNy41IDAgMTMuNS02LjEgMTMuNS0xMy41IDAtNy41LTYtMTMuNS0xMy41LTEzLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwNTY4QUUiIGlkPSJzcGlubmVyIiBkPSJNMzAuNyA1LjNsLTMuMSAzLjJjMi40IDIuNCAzLjkgNS44IDMuOSA5LjUgMCA3LjQtNi4xIDEzLjUtMTMuNSAxMy41UzQuNSAyNS40IDQuNSAxOCAxMC42IDQuNSAxOCA0LjVWMEM4LjEgMCAwIDguMSAwIDE4czguMSAxOCAxOCAxOCAxOC04LjEgMTgtMThjMC01LTItOS41LTUuMy0xMi43eiIgdHJhbnNmb3JtPSIiPiAgICAgIAogICA8L3BhdGg+Cjwvc3ZnPg==);
}
.overviewBtnSmall .overviewSpinner {
height: 50px !important;
width: 50px !important;
margin: 0 auto
}
.overviewLoaderText{
margin-top: 8px;
color: #fff
}
/* .iPhone5 */
@media (min-width:320px) and (max-width: 374px) {
.overviewLoaderText { font-size: 13px}
}
</style>
<style>
[ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {display: none !important;}
</style>

<script>(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"false","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"","rua.cook":"false","rua.ims":"false","rua.ufprl":"false","rua.cfprl":"false","rua.isuxp":"false","rua.texp":"norulematch"}]);</script>
<script>!function(){function o(n,i){if(n&&i)for(var r in i)i.hasOwnProperty(r)&&(void 0===n[r]?n[r]=i[r]:n[r].constructor===Object&&i[r].constructor===Object?o(n[r],i[r]):n[r]=i[r])}try{var n=decodeURIComponent("%7B%0A%20%20%20%22comment%22%3A%20%22Enable%20collection%20of%20Early%20Beacons%20-%20need%20both%20LOGN%20and%20Early%20items%22%2C%0A%20%20%20%22LOGN%22%3A%7B%20%22storeConfig%22%3A%20true%20%7D%2C%0A%20%20%20%22Early%22%3A%7B%20%22enabled%22%3A%20true%20%7D%0A%7D");if(n.length>0&&window.JSON&&"function"==typeof window.JSON.parse){var i=JSON.parse(n);void 0!==window.BOOMR_config?o(window.BOOMR_config,i):window.BOOMR_config=i}}catch(r){window.console&&"function"==typeof window.console.error&&console.error("mPulse: Could not parse configuration",r)}}();</script>
                              <script>!function(e){var n="https://s.go-mpulse.net/boomerang/";if("True"=="True")e.BOOMR_config=e.BOOMR_config||{},e.BOOMR_config.PageParams=e.BOOMR_config.PageParams||{},e.BOOMR_config.PageParams.pci=!0,n="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="WPDUB-APVCN-LTNDE-ZPC3E-YKMHC",function(){function e(){if(!o){var e=document.createElement("script");e.id="boomr-scr-as",e.src=window.BOOMR.url,e.async=!0,i.parentNode.appendChild(e),o=!0}}function t(e){o=!0;var n,t,a,r,d=document,O=window;if(window.BOOMR.snippetMethod=e?"if":"i",t=function(e,n){var t=d.createElement("script");t.id=n||"boomr-if-as",t.src=window.BOOMR.url,BOOMR_lstart=(new Date).getTime(),e=e||d.body,e.appendChild(t)},!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\./))return window.BOOMR.snippetMethod="s",void t(i.parentNode,"boomr-async");a=document.createElement("IFRAME"),a.src="about:blank",a.title="",a.role="presentation",a.loading="eager",r=(a.frameElement||a).style,r.width=0,r.height=0,r.border=0,r.display="none",i.parentNode.appendChild(a);try{O=a.contentWindow,d=O.document.open()}catch(_){n=document.domain,a.src="javascript:var d=document.open();d.domain='"+n+"';void(0);",O=a.contentWindow,d=O.document.open()}if(n)d._boomrl=function(){this.domain=n,t()},d.write("<bo"+"dy onload='document._boomrl();'>");else if(O._boomrl=function(){t()},O.addEventListener)O.addEventListener("load",O._boomrl,!1);else if(O.attachEvent)O.attachEvent("onload",O._boomrl);d.close()}function a(e){window.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version&&!window.BOOMR.snippetExecuted){window.BOOMR=window.BOOMR||{},window.BOOMR.snippetStart=(new Date).getTime(),window.BOOMR.snippetExecuted=!0,window.BOOMR.snippetVersion=12,window.BOOMR.url=n+"WPDUB-APVCN-LTNDE-ZPC3E-YKMHC";var i=document.currentScript||document.getElementsByTagName("script")[0],o=!1,r=document.createElement("link");if(r.relList&&"function"==typeof r.relList.supports&&r.relList.supports("preload")&&"as"in r)window.BOOMR.snippetMethod="p",r.href=window.BOOMR.url,r.rel="preload",r.as="script",r.addEventListener("load",e),r.addEventListener("error",function(){t(!0)}),setTimeout(function(){if(!o)t(!0)},3e3),BOOMR_lstart=(new Date).getTime(),i.parentNode.appendChild(r);else t(!1);if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a)}}(),"350".length>0)if(e&&"performance"in e&&e.performance&&"function"==typeof e.performance.setResourceTimingBufferSize)e.performance.setResourceTimingBufferSize(350);!function(){if(BOOMR=e.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var n=""=="true"?1:0,t="",a="skka65yxg5qyyyz6qeta-f-8de6a4d3f-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,o={"ak.v":"32","ak.cp":"455063","ak.ai":parseInt("245538",10),"ak.ol":"0","ak.cr":9,"ak.ipv":4,"ak.proto":"http/1.1","ak.rid":"2b200e7b","ak.r":39028,"ak.a2":n,"ak.m":"dscx","ak.n":"essl","ak.bpcip":"146.148.15.0","ak.cport":35072,"ak.gh":"88.221.83.222","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"bbr","ak.t":"1665040678","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==yvPmgBMrk1VOmnAF3gGJl9VGiL/8ga2Il3uqfQoexhnqCdwP16DEWBkQiXvL8W314hozO9e1ZKcz0cWfFV2wyu+BgrOY+DX8IDFVl1X26aQ6fStjHZ1Tn2fKBAlOXPWIhMw0Xodo883ezLJmr0d76G3iu0k8dMCEuM9ERHDAobk8nhO5OcDnzmyzKiNmfDDDrlYWwDect67NtNqSkbb+Zc5iYp5XGjngeJ50rjBQx8xkx+avUDRwUcIW/Ld+rVgrqRgRKdkwQA/l/P6xQbzBJcf1lvS80DWRn7B3rZmX2UUISMwzehPKZ7Ug30tHfPWQYG4N6sNgang+4+Vs6gdpUBxeTpEgukisVYOwOh2cVceS1i2OqOT4CzMc5Qx2qBeVjHcDewD5jEh/gZYKXA7l/5FvBQAdSK7JzehY1NzajIs=","ak.pv":"2735","ak.dpoabenc":"","ak.tf":i};if(""!==t)o["ak.ruds"]=t;var r={i:!1,av:function(n){var t="http.initiator";if(n&&(!n[t]||"spa_hard"===n[t]))o["ak.feo"]=void 0!==e.aFeoApplied?1:0,BOOMR.addVar(o)},rv:function(){var e=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(e)}};BOOMR.plugins.AK={akVars:o,akDNSPreFetchDomain:a,init:function(){if(!r.i){var e=BOOMR.subscribe;e("before_beacon",r.av,null,null),e("onbeacon",r.rv,null,null),r.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head>
<!--Check to add ng-clock condition only in publish instance-->
<body class="{{modulename}}">
<div id="intialSpinner" class="overviewModalBackdrop"> 
<div class="overviewLoaderWrap">
<div class="overviewBtnSmall ">
<div class="overviewSpinner overviewBtnSmall">&nbsp;</div>
</div>
<div class="overviewLoaderText">Please give us a moment. We&#039;re almost there!</div>
</div>
</div>
<span class="hidden-spoken" aria-live="polite" aria-label="{{titleName}}"></span>
<div class="main-container">
<div data-role="page">
<!--Start: Navigation header-->
<div class="ge5p_global_styles gn-ds2">
<nav id="ge5p_z1" class="ge5p_z1-navbar" role="navigation">
<script type="text/template" id="gnWidgetTemplateCache" data-src="/ecms/gn/consumer/header/_jcr_content/global-nav-container-parsys/globalheaderbar.template-cache.consumer.js"></script>
<header style="display:none">
<div id="gn-zone1" data-linkposition="GlobalNavTopBar" data-supmethod="OT">
<div class="skip-navigation-mask">
<a href="#skipGNnav" class="skip-navigation-link hideSkipNavLink btn btn-hollow btn-hollow-att-blue btn-small" role="link" aria-label="Skip Navigation">
Skip Navigation
</a>
</div> 
<nav id="navbar-zone1" class="container" name="globalnav" aria-label="Global Header">
<div class="row">
<div class="span12">
<div id="z1-navbar">
<div id="z1-leftNav" class="pull-left">
<!--Globe Icon Start-->
<div id="z1-globe" class="hide-xsm hide-sm">
<a class="brand" href="https://www.att.com" aria-label="AT&amp;T home" title="AT&amp;T home" target="_self" data-analytics-info="{'events.linkName':'AT&amp;T home','events.linkPosition':'', 'events.linkDestinationUrl':'https://www.att.com','events.linkPath':'AT&amp;T home','events.supmethod':' '}">
<i id="z1-globe-md" class="icon-att-globe" aria-label="AT&amp;T home" role="img">
<svg height="28" viewBox="0 0 36 36" width="28" aria-label="att globe icon"><path d="m7.1 32c3 2.3 6.8 3.7 10.9 3.7 4.5 0 8.6-1.7 11.7-4.4-1.4.9-5.4 3-11.7 3-5.5 0-9-1.2-10.9-2.3m12.1.9c4.4 0 9.2-1.2 12-3.6.8-.6 1.5-1.5 2.2-2.6.4-.7.8-1.5 1.1-2.2-2.7 3.9-10.4 6.4-18.4 6.4-5.6 0-11.7-1.8-14.1-5.3 2.2 4.8 8.9 7.3 17.2 7.3m-4.8-7.8c-9.1 0-13.4-4.2-14.1-7.1 0 1 .1 2.2.3 3.1.1.4.4 1 .9 1.6 2.2 2.3 7.7 5.5 17.2 5.5 12.9 0 15.9-4.3 16.5-5.7.4-1 .7-2.8.7-4.4v-1c-.9 3.4-11.9 8-21.5 8m-12.5-14.7c-.5 1-1.1 2.8-1.3 3.7-.1.4 0 .6.1.9 1.1 2.3 6.6 6 19.4 6 7.8 0 13.9-1.9 14.9-5.4.2-.6.2-1.3 0-2.2-.3-1-.7-2.2-1.2-3.1.1 4.6-12.7 7.6-19.2 7.6-7 0-12.9-2.8-12.9-6.3.1-.5.2-.9.2-1.2m27.8-5.7c.1.1.1.2.1.4 0 2-6 5.4-15.6 5.4-7.1 0-8.4-2.6-8.4-4.3 0-.6.2-1.2.7-1.8-.9.9-1.7 1.7-2.5 2.7-.3.4-.5.8-.5 1 0 3.5 8.7 5.9 16.7 5.9 8.6 0 12.5-2.8 12.5-5.3 0-.9-.3-1.4-1.2-2.4-.6-.6-1.2-1.1-1.8-1.6m-2.6-1.9c-2.7-1.6-5.7-2.5-9.1-2.5s-6.5.9-9.2 2.6c-.8.4-1.3.8-1.3 1.3 0 1.5 3.5 3.1 9.7 3.1 6.1 0 10.9-1.8 10.9-3.5.1-.3-.3-.6-1-1" fill="#009fdb"></path></svg>
</i>                                    
</a>
</div>
<!--Globe Icon End-->
<div data-path="/content/att/global/global-navigation/consumer/header/jcr:content/global-nav-container-parsys/globalheaderbar/leftParsys/genericicon" id="z1-pullMenu" class="has-sidenav has-dropdown dropdown-hover">
<a id="z1-pullMenu-open" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'pullMenu-open','events.linkPosition':'GlobalNavTopBar', 'events.linkDestinationUrl':'','events.linkPath':'pullMenu-open','events.supmethod':'OT'}" class="z1-link add-extra-small-space-desktop  " aria-label="Menu" data-unauth-label="Menu" data-auth-label="Menu" role="button" aria-haspopup="true" aria-controls="tab-desktop-menu" aria-expanded="false" data-slide-animation="from-left" title="Menu" tabindex="0">
<!-- Icon state markup for unauthenticated / authenticated state
hide class in below just for mock purpose only
this need to be handle from back end what element has to shown
at a time only one icon element should be present in the page.
-->
<!--RWD Globalnav - default markup-->
<!--Uber Globalnav markup-->
<!-- Default State -->
<i id="ge5p-menu-inactive" class="icon-hamburger show-unauth" ng-if="!globalNavConfig.isAuthenticated" aria-label="Menu" aria-hidden="true" role="img">
<svg id="ge5p-inactive-child1" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg><svg id="ge5p-inactive-child2" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg><svg id="ge5p-inactive-child3" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg>
</i>
<i id="ge5p-menu-active" class="icon-hamburger show-unauth" ng-if="!globalNavConfig.isAuthenticated" aria-label="Menu" aria-hidden="true" role="img">
<span id="ge5p-active-child1" class="ge5p_hamburger_bar">Menu</span>
<svg id="ge5p-active-child2" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg><svg id="ge5p-active-child3" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg>
</i>
<!-- Icon Authenticated State -->
<i id="ge5p-menu-inactive" class="icon-hamburger hide-auth" aria-label="Menu" aria-hidden="true" role="img">
<svg id="ge5p-inactive-child1" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg><svg id="ge5p-inactive-child2" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg><svg id="ge5p-inactive-child3" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg>
</i>
<i id="ge5p-menu-active" class="icon-hamburger hide-auth" aria-label="Menu" aria-hidden="true" role="img">
<span id="ge5p-active-child1" class="ge5p_hamburger_bar">Menu</span>
<svg id="ge5p-active-child2" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg><svg id="ge5p-active-child3" class="ge5p_hamburger_bar" width="32px" height="4px" viewBox="0 0 32 4" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g   transform="translate(-5.000000, -16.000000)" fill="#1D2329"><path d="M34,18 C34,18.5522847 33.4179702,19 32.7,19 L9.3,19 C8.58202983,19 8,18.5522847 8,18 C8,17.4477153 8.58202983,17 9.3,17 L32.7,17 C33.4179702,17 34,17.4477153 34,18 Z"  ></path></g></g></svg>
</i>
<!-- Desktop Label text Variant -->    
<!-- Tablet Label text Variant -->
<!-- Mobile Label text Variant hide-xsm and hide-sm class will decide whether label is to be shown or not-->
</a>
<div class="dropdown-menu" id="m-menu" aria-hidden="true" data-category-mapping="{
&#34;UverseWithIPTV&#34;: &#34;hasutvcons&#34;,
&#34;UverseWithHSIA&#34; : &#34;hasuincons&#34;,
&#34;WirelineWithInternet&#34; : &#34;hasdslcons&#34;,
&#34;ISPDSLDial&#34; : &#34;hasdslcons&#34;,
&#34;WirelineDryLoop&#34; : &#34;hasdslcons&#34;,
&#34;UverseWithVOIP&#34;  : &#34;hasupcons&#34;,
&#34;WirelineDSL&#34; : &#34;hasdslcons&#34;,
&#34;CEATTDTV&#34; : &#34;hasdtvcons&#34;,
&#34;DialUpInternet&#34; : &#34;hasdialupcons&#34;,
&#34;CEDirecTV&#34; : &#34;hasdtvcons&#34;,
&#34;CEWireline&#34;: &#34;haspotscons&#34;,
&#34;CEWireless&#34; : &#34;haswcons&#34;,
&#34;WLLDataPresent&#34;:&#34;hasuincons&#34;,
&#34;CEDirecTVnow&#34; : &#34;hasdtvnow&#34;,
&#34;CEWirelessSMB&#34; : &#34;haswsmb&#34;,
&#34;UverseWithIPTVSMB&#34; : &#34;hasutvsmb&#34;,
&#34;UverseWithHSIASMB&#34; : &#34;hasuinsmb&#34;,
&#34;WLLDataPresentSMB&#34; : &#34;hasuinsmb&#34;,
&#34;WirelineDSLSMB&#34; : &#34;hasdslsmb&#34;,
&#34;WirelineWithInternetSMB&#34; : &#34;hasdslsmb&#34;,
&#34;WirelineDryLoopSMB&#34; : &#34;hasdslsmb&#34;,
&#34;ISPDSLDialSMB&#34; : &#34;hasdslsmb&#34;,
&#34;DialUpInternetSMB&#34; : &#34;hasdialupsmb&#34;,
&#34;UverseWithVOIPSMB&#34; : &#34;hasupsmb&#34;,
&#34;CEWirelineSMB&#34; : &#34;haspotssmb&#34;,
&#34;G_FN_ADM&#34;:&#34;fnpseadminprem&#34;,
&#34;G_FN_ADM_NOPREM&#34;:&#34;fnpseadminnoprem&#34;,
&#34;G_FN_FED_AND_G_FN_ADM&#34;:&#34;fnfedpseadminprem&#34;,
&#34;G_FN_FED_AND_G_FN_ADM_NOPREM&#34;:&#34;fnfedpseadminnoprem&#34;,
&#34;G_FN_FED_AND_G_FN_SUB&#34;:&#34;fnfedfnpsememprem&#34;,
&#34;G_FN_FED_AND_G_FN_SUB_NOPREM&#34;:&#34;fnfedfnpsememnoprem&#34;,
&#34;G_FN_SUB&#34;:&#34;fnpsememprem&#34;,
&#34;G_FN_SUB_NOPREM&#34;:&#34;fnpsememnoprem&#34;,
&#34;G_FN_VOL_ADM&#34;:&#34;fnsubpdadminprem&#34;,
&#34;G_FN_VOL_ADM_NOPREM&#34;:&#34;fnsubpdadminprem&#34;,
&#34;G_FN_VOL&#34;:&#34;fnsubpdmemprem&#34;,
&#34;G_FN_VOL_NOPREM&#34;:&#34;fnsubpdmemprem&#34;,
&#34;G_FN_ADM_AND_G_FN_S_PTT_ADMIN&#34;:&#34;fnpsemcpttadminprem&#34;,
&#34;G_FN_AGT&#34;:&#34;fnagent&#34;,
&#34;G_FN_AGT_RS&#34;:&#34;fnrsagent&#34;
}">
<ul id="tab-desktop-menu" role="menu" aria-labelledby="z1-pullMenu-open">
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" data-category="*">
<!-- Primary link with child links - for both mobile & desktop view port -->
<!-- Primary link without child links - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=Manage" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Account overview','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=Manage','events.linkPath':'GlobalNavPullMenu|Account overview','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Account overview
</span>
</a>
<!-- Primary link without child links - for tablet view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=Manage" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Account overview','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=Manage','events.linkPath':'GlobalNavPullMenu|Account overview','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Account overview
</span>
</a>
<!-- Primary link without child links - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/Overview" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Account overview','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/Overview','events.linkPath':'GlobalNavPullMenu|Account overview','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Account overview
</span>
</a>
<!-- Secondary links - for standard & moreAtt type -->
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu " data-category="*">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Billing &amp; payments','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments','events.supmethod':'OT'}">
<span class="auth-pull-left">
Billing &amp; payments
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Billing &amp; payments">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Billing &amp; payments</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=ViewBillDetails" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View my bill','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=ViewBillDetails','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|View my bill','events.supmethod':'OT'}">
<span class="auth-pull-left">
View my bill
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/BillPayment" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View my bill','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/BillPayment','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|View my bill','events.supmethod':'OT'}">
<span class="auth-pull-left">
View my bill
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/BillPayment" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View my bill','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/BillPayment','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|View my bill','events.supmethod':'OT'}">
<span class="auth-pull-left">
View my bill
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=MakePayment" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Make a payment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=MakePayment','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|Make a payment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Make a payment
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=MakePayment" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Make a payment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=MakePayment','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|Make a payment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Make a payment
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/makePayment" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Make a payment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/makePayment','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|Make a payment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Make a payment
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=PaymentLander" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Payment activity &amp; options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=PaymentLander','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|Payment activity &amp; options','events.supmethod':'OT'}">
<span class="auth-pull-left">
Payment activity &amp; options
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=PaymentLander" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Payment activity &amp; options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=PaymentLander','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|Payment activity &amp; options','events.supmethod':'OT'}">
<span class="auth-pull-left">
Payment activity &amp; options
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/PaymentLander" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Payment activity &amp; options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/PaymentLander','events.linkPath':'GlobalNavPullMenu|Billing &amp; payments|Payment activity &amp; options','events.supmethod':'OT'}">
<span class="auth-pull-left">
Payment activity &amp; options
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="haswcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My wireless','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|My wireless','events.supmethod':'OT'}">
<span class="auth-pull-left">
My wireless
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="My wireless">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">My wireless</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=CurrentUsage" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Check usage','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=CurrentUsage','events.linkPath':'GlobalNavPullMenu|My wireless|Check usage','events.supmethod':'OT'}">
<span class="auth-pull-left">
Check usage
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/wirelessUsage" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Check usage','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/wirelessUsage','events.linkPath':'GlobalNavPullMenu|My wireless|Check usage','events.supmethod':'OT'}">
<span class="auth-pull-left">
Check usage
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/wirelessUsage" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Check usage','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/wirelessUsage','events.linkPath':'GlobalNavPullMenu|My wireless|Check usage','events.supmethod':'OT'}">
<span class="auth-pull-left">
Check usage
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/my/#/managemydata" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Manage data','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/managemydata','events.linkPath':'GlobalNavPullMenu|My wireless|Manage data','events.supmethod':'OT'}">
<span class="auth-pull-left">
Manage data
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/my/#/managemydata" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Manage data','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/my/#/managemydata','events.linkPath':'GlobalNavPullMenu|My wireless|Manage data','events.supmethod':'OT'}">
<span class="auth-pull-left">
Manage data
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/my/#/managemydata" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Manage data','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/my/#/managemydata','events.linkPath':'GlobalNavPullMenu|My wireless|Manage data','events.supmethod':'OT'}">
<span class="auth-pull-left">
Manage data
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=ChangeRatePlan" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change wireless plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=ChangeRatePlan','events.linkPath':'GlobalNavPullMenu|My wireless|Change wireless plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change wireless plan
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/ChangeRatePlan" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change wireless plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/ChangeRatePlan','events.linkPath':'GlobalNavPullMenu|My wireless|Change wireless plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change wireless plan
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/ChangeRatePlan" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change wireless plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/ChangeRatePlan','events.linkPath':'GlobalNavPullMenu|My wireless|Change wireless plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change wireless plan
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=ManagePromo&promoCode=IRRECPAVM&promoType=MC&source=IYKF2500000000MYL&wtExtndSource=IntlGN" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'International options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=ManagePromo&amp;promoCode=IRRECPAVM&amp;promoType=MC&amp;source=IYKF2500000000MYL&amp;wtExtndSource=IntlGN','events.linkPath':'GlobalNavPullMenu|My wireless|International options','events.supmethod':'OT'}">
<span class="auth-pull-left">
International options
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/internationalFeatures/international?source=IYKF2500000000MYL&wtExtndSource=IntlGN" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'International options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/internationalFeatures/international?source=IYKF2500000000MYL&amp;wtExtndSource=IntlGN','events.linkPath':'GlobalNavPullMenu|My wireless|International options','events.supmethod':'OT'}">
<span class="auth-pull-left">
International options
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/internationalFeatures/international?source=IYKF2500000000MYL&wtExtndSource=IntlGN" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'International options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/internationalFeatures/international?source=IYKF2500000000MYL&amp;wtExtndSource=IntlGN','events.linkPath':'GlobalNavPullMenu|My wireless|International options','events.supmethod':'OT'}">
<span class="auth-pull-left">
International options
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=MyPhoneDevice" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Manage devices &amp; features','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=MyPhoneDevice','events.linkPath':'GlobalNavPullMenu|My wireless|Manage devices &amp; features','events.supmethod':'OT'}">
<span class="auth-pull-left">
Manage devices &amp; features
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/BUYAFEATURE" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Manage devices &amp; features','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/BUYAFEATURE','events.linkPath':'GlobalNavPullMenu|My wireless|Manage devices &amp; features','events.supmethod':'OT'}">
<span class="auth-pull-left">
Manage devices &amp; features
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/BUYAFEATURE" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Manage devices &amp; features','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/BUYAFEATURE','events.linkPath':'GlobalNavPullMenu|My wireless|Manage devices &amp; features','events.supmethod':'OT'}">
<span class="auth-pull-left">
Manage devices &amp; features
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/plans/phone-upgrade" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Upgrade','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/phone-upgrade','events.linkPath':'GlobalNavPullMenu|My wireless|Upgrade','events.supmethod':'OT'}">
<span class="auth-pull-left">
Upgrade
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/plans/phone-upgrade" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Upgrade','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/phone-upgrade','events.linkPath':'GlobalNavPullMenu|My wireless|Upgrade','events.supmethod':'OT'}">
<span class="auth-pull-left">
Upgrade
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/plans/phone-upgrade" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Upgrade','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/phone-upgrade','events.linkPath':'GlobalNavPullMenu|My wireless|Upgrade','events.supmethod':'OT'}">
<span class="auth-pull-left">
Upgrade
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/plans/add-a-line" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Add a Line','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/add-a-line','events.linkPath':'GlobalNavPullMenu|My wireless|Add a Line','events.supmethod':'OT'}">
<span class="auth-pull-left">
Add a Line
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/plans/add-a-line" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Add a Line','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/add-a-line','events.linkPath':'GlobalNavPullMenu|My wireless|Add a Line','events.supmethod':'OT'}">
<span class="auth-pull-left">
Add a Line
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/plans/add-a-line" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Add a Line','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/add-a-line','events.linkPath':'GlobalNavPullMenu|My wireless|Add a Line','events.supmethod':'OT'}">
<span class="auth-pull-left">
Add a Line
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/accessories/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Buy accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/accessories/','events.linkPath':'GlobalNavPullMenu|My wireless|Buy accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Buy accessories
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/accessories/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Buy accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/accessories/','events.linkPath':'GlobalNavPullMenu|My wireless|Buy accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Buy accessories
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/accessories/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Buy accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/accessories/','events.linkPath':'GlobalNavPullMenu|My wireless|Buy accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Buy accessories
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="hasdtvcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My DIRECTV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|My DIRECTV','events.supmethod':'OT'}">
<span class="auth-pull-left">
My DIRECTV
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="My DIRECTV">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">My DIRECTV</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/my/#/passthrough/tvlanding" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View package details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/passthrough/tvlanding','events.linkPath':'GlobalNavPullMenu|My DIRECTV|View package details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View package details
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/my/#/passthrough/tvlanding" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View package details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/passthrough/tvlanding','events.linkPath':'GlobalNavPullMenu|My DIRECTV|View package details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View package details
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/my/#/passthrough/tvlanding" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View package details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/passthrough/tvlanding','events.linkPath':'GlobalNavPullMenu|My DIRECTV|View package details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View package details
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/tv/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/tv/','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Shop TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop TV
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/tv/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/tv/','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Shop TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop TV
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/tv/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/tv/','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Shop TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop TV
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/my/#/passthrough/overviewRedirect?action=dtv&urlKey=watchTVNow&selectBAN=251981352" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Watch TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/passthrough/overviewRedirect?action=dtv&amp;urlKey=watchTVNow&amp;selectBAN=251981352','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Watch TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Watch TV
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/my/#/passthrough/overviewRedirect?action=dtv&urlKey=watchTVNow&selectBAN=251981352" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Watch TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/passthrough/overviewRedirect?action=dtv&amp;urlKey=watchTVNow&amp;selectBAN=251981352','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Watch TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Watch TV
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/my/#/passthrough/overviewRedirect?action=dtv&urlKey=watchTVNow&selectBAN=251981352" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Watch TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/passthrough/overviewRedirect?action=dtv&amp;urlKey=watchTVNow&amp;selectBAN=251981352','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Watch TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Watch TV
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="http://www.directv.com/DTVAPP/content/movers2" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.directv.com/DTVAPP/content/movers2','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="http://www.directv.com/DTVAPP/content/movers2" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.directv.com/DTVAPP/content/movers2','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://m.att.com/shopmobile/movers.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://m.att.com/shopmobile/movers.html','events.linkPath':'GlobalNavPullMenu|My DIRECTV|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="hasutvcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My U-verse TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|My U-verse TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
My U-verse TV
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="My U-verse TV">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">My U-verse TV</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=UverseTVPlanDetailsRedirect" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View package details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=UverseTVPlanDetailsRedirect','events.linkPath':'GlobalNavPullMenu|My U-verse TV|View package details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View package details
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=UTV" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View package details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=UTV','events.linkPath':'GlobalNavPullMenu|My U-verse TV|View package details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View package details
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=UTV" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View package details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=UTV','events.linkPath':'GlobalNavPullMenu|My U-verse TV|View package details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View package details
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=ChangeTVRedirect" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change TV package','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=ChangeTVRedirect','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Change TV package','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change TV package
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=ChangeTVRedirect" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change TV package','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=ChangeTVRedirect','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Change TV package','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change TV package
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=ChangeTVRedirect" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change TV package','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=ChangeTVRedirect','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Change TV package','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change TV package
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/tv/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/tv/','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Shop TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop TV
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/tv/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/tv/','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Shop TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop TV
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/tv/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/tv/','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Shop TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop TV
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=AUTH_TV" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=AUTH_TV','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=AUTH_TV" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=AUTH_TV','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/shopmobile/movers.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/shopmobile/movers.html','events.linkPath':'GlobalNavPullMenu|My U-verse TV|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="hasuincons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|My Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
My Internet
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="My Internet">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">My Internet</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=InternetDetailsRedirect" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=InternetDetailsRedirect','events.linkPath':'GlobalNavPullMenu|My Internet|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=HSIA" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=HSIA','events.linkPath':'GlobalNavPullMenu|My Internet|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=HSIA" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=HSIA','events.linkPath':'GlobalNavPullMenu|My Internet|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&actionType=ChangeInternet" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change Internet plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&amp;actionType=ChangeInternet','events.linkPath':'GlobalNavPullMenu|My Internet|Change Internet plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change Internet plan
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&actionType=ChangeInternet" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change Internet plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&amp;actionType=ChangeInternet','events.linkPath':'GlobalNavPullMenu|My Internet|Change Internet plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change Internet plan
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&actionType=ChangeInternet" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change Internet plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&amp;actionType=ChangeInternet','events.linkPath':'GlobalNavPullMenu|My Internet|Change Internet plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change Internet plan
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/wireless/accessories/equipment.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/wireless/accessories/equipment.html','events.linkPath':'GlobalNavPullMenu|My Internet|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/wireless/accessories/equipment.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/wireless/accessories/equipment.html','events.linkPath':'GlobalNavPullMenu|My Internet|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/shopmobile/wireless/accessories/equipment.html?referrer=" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/shopmobile/wireless/accessories/equipment.html?referrer=','events.linkPath':'GlobalNavPullMenu|My Internet|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My Internet|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My Internet|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My Internet|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=MYATT_INT" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=MYATT_INT','events.linkPath':'GlobalNavPullMenu|My Internet|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=MYATT_INT" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=MYATT_INT','events.linkPath':'GlobalNavPullMenu|My Internet|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://m.att.com/shopmobile/movers.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://m.att.com/shopmobile/movers.html','events.linkPath':'GlobalNavPullMenu|My Internet|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="hasdslcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My DSL','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|My DSL','events.supmethod':'OT'}">
<span class="auth-pull-left">
My DSL
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="My DSL">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">My DSL</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=InternetDetailsRedirect" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=InternetDetailsRedirect','events.linkPath':'GlobalNavPullMenu|My DSL|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES','events.linkPath':'GlobalNavPullMenu|My DSL|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES','events.linkPath':'GlobalNavPullMenu|My DSL|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/myatt/update-service.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change Internet plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My DSL|Change Internet plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change Internet plan
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/myatt/update-service.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change Internet plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My DSL|Change Internet plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change Internet plan
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/shop/myatt/update-service.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change Internet plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My DSL|Change Internet plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change Internet plan
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/wireless/accessories/equipment.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/wireless/accessories/equipment.html','events.linkPath':'GlobalNavPullMenu|My DSL|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/wireless/accessories/equipment.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/wireless/accessories/equipment.html','events.linkPath':'GlobalNavPullMenu|My DSL|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/shopmobile/wireless/accessories/equipment.html?referrer=" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/shopmobile/wireless/accessories/equipment.html?referrer=','events.linkPath':'GlobalNavPullMenu|My DSL|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My DSL|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My DSL|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My DSL|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=MYATT_INT" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=MYATT_INT','events.linkPath':'GlobalNavPullMenu|My DSL|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=MYATT_INT" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=MYATT_INT','events.linkPath':'GlobalNavPullMenu|My DSL|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://m.att.com/shopmobile/movers.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://m.att.com/shopmobile/movers.html','events.linkPath':'GlobalNavPullMenu|My DSL|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="hasdialupcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My Dialup','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|My Dialup','events.supmethod':'OT'}">
<span class="auth-pull-left">
My Dialup
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="My Dialup">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">My Dialup</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=InternetDetailsRedirect" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=InternetDetailsRedirect','events.linkPath':'GlobalNavPullMenu|My Dialup|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES','events.linkPath':'GlobalNavPullMenu|My Dialup|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES','events.linkPath':'GlobalNavPullMenu|My Dialup|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/myatt/update-service.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My Dialup|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/myatt/update-service.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My Dialup|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/shop/myatt/update-service.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My Dialup|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/wireless/accessories/equipment.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/wireless/accessories/equipment.html','events.linkPath':'GlobalNavPullMenu|My Dialup|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/wireless/accessories/equipment.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/wireless/accessories/equipment.html','events.linkPath':'GlobalNavPullMenu|My Dialup|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/shopmobile/wireless/accessories/equipment.html?referrer=" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Get equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/shopmobile/wireless/accessories/equipment.html?referrer=','events.linkPath':'GlobalNavPullMenu|My Dialup|Get equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Get equipment
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My Dialup|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My Dialup|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|My Dialup|Shop Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Internet
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=AUTH_INT" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=AUTH_INT','events.linkPath':'GlobalNavPullMenu|My Dialup|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=AUTH_INT" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=AUTH_INT','events.linkPath':'GlobalNavPullMenu|My Dialup|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://m.att.com/shopmobile/movers.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://m.att.com/shopmobile/movers.html','events.linkPath':'GlobalNavPullMenu|My Dialup|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="hasupcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My digital home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|My digital home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
My digital home phone
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="My digital home phone">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">My digital home phone</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=VoiceDetailsRedirect" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=VoiceDetailsRedirect','events.linkPath':'GlobalNavPullMenu|My digital home phone|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=VOIP" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=VOIP','events.linkPath':'GlobalNavPullMenu|My digital home phone|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=VOIP" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/UVERSEFEATURES?serviceType=VOIP','events.linkPath':'GlobalNavPullMenu|My digital home phone|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&actionType=ChangeHomePhone" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&amp;actionType=ChangeHomePhone','events.linkPath':'GlobalNavPullMenu|My digital home phone|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&actionType=ChangeHomePhone" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&amp;actionType=ChangeHomePhone','events.linkPath':'GlobalNavPullMenu|My digital home phone|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&actionType=ChangeHomePhone" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myuverse/referrals.html?referral_app_id=myatt&amp;actionType=ChangeHomePhone','events.linkPath':'GlobalNavPullMenu|My digital home phone|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|My digital home phone|Shop Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Phone
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|My digital home phone|Shop Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Phone
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|My digital home phone|Shop Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Phone
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=AUTH_PHN" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=AUTH_PHN','events.linkPath':'GlobalNavPullMenu|My digital home phone|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&wtExtndSource=AUTH_PHN" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers/u-verse.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=AUTH_PHN','events.linkPath':'GlobalNavPullMenu|My digital home phone|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://m.att.com/shopmobile/movers.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://m.att.com/shopmobile/movers.html','events.linkPath':'GlobalNavPullMenu|My digital home phone|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="haspotscons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|My home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
My home phone
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="My home phone">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">My home phone</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/olam/passthroughAction.myworld?actionType=LocalPhoneDetailsRedirect" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/olam/passthroughAction.myworld?actionType=LocalPhoneDetailsRedirect','events.linkPath':'GlobalNavPullMenu|My home phone|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES','events.linkPath':'GlobalNavPullMenu|My home phone|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'View plan details','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/myatt/#/passthrough/WIRELINEFEATURES','events.linkPath':'GlobalNavPullMenu|My home phone|View plan details','events.supmethod':'OT'}">
<span class="auth-pull-left">
View plan details
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="http://www.att.com/shop/myatt/update-service.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My home phone|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="http://www.att.com/shop/myatt/update-service.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My home phone|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://www.att.com/shop/myatt/update-service.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Change my plan','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/shop/myatt/update-service.html','events.linkPath':'GlobalNavPullMenu|My home phone|Change my plan','events.supmethod':'OT'}">
<span class="auth-pull-left">
Change my plan
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|My home phone|Shop Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Phone
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|My home phone|Shop Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Phone
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Shop Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|My home phone|Shop Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Shop Phone
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/shop/movers.html?source=IMOVE0H0000MOVEGN&wtExtndSource=UNREC_PHN" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=UNREC_PHN','events.linkPath':'GlobalNavPullMenu|My home phone|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/shop/movers.html?source=IMOVE0H0000MOVEGN&wtExtndSource=UNREC_PHN" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/shop/movers.html?source=IMOVE0H0000MOVEGN&amp;wtExtndSource=UNREC_PHN','events.linkPath':'GlobalNavPullMenu|My home phone|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://m.att.com/shopmobile/movers.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Move my service','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://m.att.com/shopmobile/movers.html','events.linkPath':'GlobalNavPullMenu|My home phone|Move my service','events.supmethod':'OT'}">
<span class="auth-pull-left">
Move my service
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="auth" role="presentation" class="has-submenu hide" data-category="haswcons,hasdtvcons,hasutvcons,hasuincons,hasdslcons,hasupcons,haspotscons,hasdialupcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Rewards &amp; discounts','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts','events.supmethod':'OT'}">
<span class="auth-pull-left">
Rewards &amp; discounts
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Rewards &amp; discounts">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Earn &amp; save</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/deals/holiday-gift-guide.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/deals/holiday-gift-guide.html','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Deals
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/deals/holiday-gift-guide.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/deals/holiday-gift-guide.html','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Deals
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/deals/holiday-gift-guide.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/deals/holiday-gift-guide.html','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Deals
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/my/#/rewards" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AT&amp;T THANKS','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/rewards','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|AT&amp;T THANKS','events.supmethod':'OT'}">
<span class="auth-pull-left">
AT&amp;T THANKS
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/my/#/rewards" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AT&amp;T THANKS','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/rewards','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|AT&amp;T THANKS','events.supmethod':'OT'}">
<span class="auth-pull-left">
AT&amp;T THANKS
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/my/#/rewards" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AT&amp;T THANKS','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/rewards','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|AT&amp;T THANKS','events.supmethod':'OT'}">
<span class="auth-pull-left">
AT&amp;T THANKS
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business employee','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Business employee','events.supmethod':'OT'}">
<span class="auth-pull-left">
Business employee
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business employee','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Business employee','events.supmethod':'OT'}">
<span class="auth-pull-left">
Business employee
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business employee','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Business employee','events.supmethod':'OT'}">
<span class="auth-pull-left">
Business employee
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/aarp/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AARP','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/aarp/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|AARP','events.supmethod':'OT'}">
<span class="auth-pull-left">
AARP
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/aarp/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AARP','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/aarp/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|AARP','events.supmethod':'OT'}">
<span class="auth-pull-left">
AARP
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/aarp/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AARP','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/aarp/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|AARP','events.supmethod':'OT'}">
<span class="auth-pull-left">
AARP
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/military-discount/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Military','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/military-discount/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Military','events.supmethod':'OT'}">
<span class="auth-pull-left">
Military
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/military-discount/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Military','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/military-discount/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Military','events.supmethod':'OT'}">
<span class="auth-pull-left">
Military
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/military-discount/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Military','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/military-discount/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Military','events.supmethod':'OT'}">
<span class="auth-pull-left">
Military
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/firstresponders.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'First responders','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/firstresponders.html','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|First responders','events.supmethod':'OT'}">
<span class="auth-pull-left">
First responders
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/firstresponders.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'First responders','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/firstresponders.html','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|First responders','events.supmethod':'OT'}">
<span class="auth-pull-left">
First responders
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/firstresponders.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'First responders','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/firstresponders.html','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|First responders','events.supmethod':'OT'}">
<span class="auth-pull-left">
First responders
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/healthcare/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Nurses &amp; physicians','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/healthcare/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Nurses &amp; physicians','events.supmethod':'OT'}">
<span class="auth-pull-left">
Nurses &amp; physicians
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/healthcare/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Nurses &amp; physicians','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/healthcare/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Nurses &amp; physicians','events.supmethod':'OT'}">
<span class="auth-pull-left">
Nurses &amp; physicians
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/healthcare/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Nurses &amp; physicians','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/healthcare/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Nurses &amp; physicians','events.supmethod':'OT'}">
<span class="auth-pull-left">
Nurses &amp; physicians
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/teacher/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Teachers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/teacher/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Teachers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Teachers
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/teacher/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Teachers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/teacher/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Teachers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Teachers
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/teacher/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Teachers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/teacher/','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Teachers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Teachers
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="auth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/union-discount" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Union','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/union-discount','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Union','events.supmethod':'OT'}">
<span class="auth-pull-left">
Union
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/union-discount" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Union','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/union-discount','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Union','events.supmethod':'OT'}">
<span class="auth-pull-left">
Union
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/union-discount" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Union','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/union-discount','events.linkPath':'GlobalNavPullMenu|Rewards &amp; discounts|Union','events.supmethod':'OT'}">
<span class="auth-pull-left">
Union
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu hide" data-category="haswcons,hasdtvcons,hasutvcons,hasuincons,hasdslcons,hasupcons,haspotscons,hasdialupcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Deals &amp; discounts','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts','events.supmethod':'OT'}">
<span class="auth-pull-left">
Deals &amp; discounts
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Deals &amp; discounts">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Deals &amp; discounts</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/deals" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/deals','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Deals
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/deals" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/deals','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Deals
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/deals" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/deals','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Deals
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/gift-ideas/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Gift Ideas','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/gift-ideas/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Gift Ideas','events.supmethod':'OT'}">
<span class="auth-pull-left">
Gift Ideas
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/gift-ideas/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Gift Ideas','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/gift-ideas/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Gift Ideas','events.supmethod':'OT'}">
<span class="auth-pull-left">
Gift Ideas
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/gift-ideas/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Gift Ideas','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/gift-ideas/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Gift Ideas','events.supmethod':'OT'}">
<span class="auth-pull-left">
Gift Ideas
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/my/#/passthrough/rewards" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AT&amp;T THANKS','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/passthrough/rewards','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|AT&amp;T THANKS','events.supmethod':'OT'}">
<span class="auth-pull-left">
AT&amp;T THANKS
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/my/#/passthrough/rewards" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AT&amp;T THANKS','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/my/#/passthrough/rewards','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|AT&amp;T THANKS','events.supmethod':'OT'}">
<span class="auth-pull-left">
AT&amp;T THANKS
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://m.att.com/my/#/passthrough/rewards" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AT&amp;T THANKS','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/my/#/passthrough/rewards','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|AT&amp;T THANKS','events.supmethod':'OT'}">
<span class="auth-pull-left">
AT&amp;T THANKS
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business employee','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Business employee','events.supmethod':'OT'}">
<span class="auth-pull-left">
Business employee
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business employee','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Business employee','events.supmethod':'OT'}">
<span class="auth-pull-left">
Business employee
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business employee','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Business employee','events.supmethod':'OT'}">
<span class="auth-pull-left">
Business employee
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/aarp/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AARP','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/aarp/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|AARP','events.supmethod':'OT'}">
<span class="auth-pull-left">
AARP
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/aarp/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AARP','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/aarp/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|AARP','events.supmethod':'OT'}">
<span class="auth-pull-left">
AARP
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/aarp/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'AARP','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/aarp/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|AARP','events.supmethod':'OT'}">
<span class="auth-pull-left">
AARP
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/military-discount/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Military','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/military-discount/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Military','events.supmethod':'OT'}">
<span class="auth-pull-left">
Military
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/military-discount/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Military','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/military-discount/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Military','events.supmethod':'OT'}">
<span class="auth-pull-left">
Military
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/military-discount/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Military','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/military-discount/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Military','events.supmethod':'OT'}">
<span class="auth-pull-left">
Military
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/firstnetandfamily" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'First responders','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/firstnetandfamily','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|First responders','events.supmethod':'OT'}">
<span class="auth-pull-left">
First responders
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/firstnetandfamily" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'First responders','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/firstnetandfamily','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|First responders','events.supmethod':'OT'}">
<span class="auth-pull-left">
First responders
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/firstnetandfamily" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'First responders','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/firstnetandfamily','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|First responders','events.supmethod':'OT'}">
<span class="auth-pull-left">
First responders
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/healthcare/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Nurses &amp; physicians','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/healthcare/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Nurses &amp; physicians','events.supmethod':'OT'}">
<span class="auth-pull-left">
Nurses &amp; physicians
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/healthcare/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Nurses &amp; physicians','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/healthcare/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Nurses &amp; physicians','events.supmethod':'OT'}">
<span class="auth-pull-left">
Nurses &amp; physicians
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/healthcare/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Nurses &amp; physicians','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/healthcare/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Nurses &amp; physicians','events.supmethod':'OT'}">
<span class="auth-pull-left">
Nurses &amp; physicians
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/teacher/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Teachers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/teacher/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Teachers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Teachers
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/teacher/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Teachers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/teacher/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Teachers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Teachers
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/teacher/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Teachers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/teacher/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Teachers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Teachers
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/union-discount" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Union','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/union-discount','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Union','events.supmethod':'OT'}">
<span class="auth-pull-left">
Union
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/union-discount" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Union','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/union-discount','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Union','events.supmethod':'OT'}">
<span class="auth-pull-left">
Union
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/discount-program/union-discount" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Union','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/discount-program/union-discount','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Union','events.supmethod':'OT'}">
<span class="auth-pull-left">
Union
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/','events.linkPath':'GlobalNavPullMenu|Deals &amp; discounts|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu hide" data-category="haswcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Wireless','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Wireless','events.supmethod':'OT'}">
<span class="auth-pull-left">
Wireless
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Wireless">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Shop wireless</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/wireless/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore wireless','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wireless/','events.linkPath':'GlobalNavPullMenu|Wireless|Explore wireless','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore wireless
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/wireless/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore wireless','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wireless/','events.linkPath':'GlobalNavPullMenu|Wireless|Explore wireless','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore wireless
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/wireless/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore wireless','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wireless/','events.linkPath':'GlobalNavPullMenu|Wireless|Explore wireless','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore wireless
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/plans/wireless.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; prices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/wireless.html','events.linkPath':'GlobalNavPullMenu|Wireless|Plans &amp; prices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; prices
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/plans/wireless.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; prices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/wireless.html','events.linkPath':'GlobalNavPullMenu|Wireless|Plans &amp; prices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; prices
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/plans/wireless.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; prices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/wireless.html','events.linkPath':'GlobalNavPullMenu|Wireless|Plans &amp; prices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; prices
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones &amp; devices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/','events.linkPath':'GlobalNavPullMenu|Wireless|Phones &amp; devices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones &amp; devices
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones &amp; devices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/','events.linkPath':'GlobalNavPullMenu|Wireless|Phones &amp; devices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones &amp; devices
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones &amp; devices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/','events.linkPath':'GlobalNavPullMenu|Wireless|Phones &amp; devices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones &amp; devices
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/plans/phone-upgrade" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Upgrade','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/phone-upgrade','events.linkPath':'GlobalNavPullMenu|Wireless|Upgrade','events.supmethod':'OT'}">
<span class="auth-pull-left">
Upgrade
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/plans/phone-upgrade" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Upgrade','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/phone-upgrade','events.linkPath':'GlobalNavPullMenu|Wireless|Upgrade','events.supmethod':'OT'}">
<span class="auth-pull-left">
Upgrade
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/plans/phone-upgrade" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Upgrade','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/phone-upgrade','events.linkPath':'GlobalNavPullMenu|Wireless|Upgrade','events.supmethod':'OT'}">
<span class="auth-pull-left">
Upgrade
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/wireless/byod/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bring your own','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wireless/byod/','events.linkPath':'GlobalNavPullMenu|Wireless|Bring your own','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bring your own
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/wireless/byod/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bring your own','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wireless/byod/','events.linkPath':'GlobalNavPullMenu|Wireless|Bring your own','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bring your own
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/wireless/byod/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bring your own','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wireless/byod/','events.linkPath':'GlobalNavPullMenu|Wireless|Bring your own','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bring your own
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/plans/add-a-line" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Add a Line','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/add-a-line','events.linkPath':'GlobalNavPullMenu|Wireless|Add a Line','events.supmethod':'OT'}">
<span class="auth-pull-left">
Add a Line
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/plans/add-a-line" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Add a Line','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/add-a-line','events.linkPath':'GlobalNavPullMenu|Wireless|Add a Line','events.supmethod':'OT'}">
<span class="auth-pull-left">
Add a Line
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/plans/add-a-line" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Add a Line','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/add-a-line','events.linkPath':'GlobalNavPullMenu|Wireless|Add a Line','events.supmethod':'OT'}">
<span class="auth-pull-left">
Add a Line
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://tradein.att.com/#/start-a-trade/discover-device-value" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Trade in your device','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://tradein.att.com/#/start-a-trade/discover-device-value','events.linkPath':'GlobalNavPullMenu|Wireless|Trade in your device','events.supmethod':'OT'}">
<span class="auth-pull-left">
Trade in your device
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://tradein.att.com/#/start-a-trade/discover-device-value" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Trade in your device','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://tradein.att.com/#/start-a-trade/discover-device-value','events.linkPath':'GlobalNavPullMenu|Wireless|Trade in your device','events.supmethod':'OT'}">
<span class="auth-pull-left">
Trade in your device
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://tradein.att.com/#/start-a-trade/discover-device-value" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Trade in your device','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://tradein.att.com/#/start-a-trade/discover-device-value','events.linkPath':'GlobalNavPullMenu|Wireless|Trade in your device','events.supmethod':'OT'}">
<span class="auth-pull-left">
Trade in your device
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/offers/international.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'International options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/international.html','events.linkPath':'GlobalNavPullMenu|Wireless|International options','events.supmethod':'OT'}">
<span class="auth-pull-left">
International options
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/offers/international.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'International options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/international.html','events.linkPath':'GlobalNavPullMenu|Wireless|International options','events.supmethod':'OT'}">
<span class="auth-pull-left">
International options
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/offers/international.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'International options','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/offers/international.html','events.linkPath':'GlobalNavPullMenu|Wireless|International options','events.supmethod':'OT'}">
<span class="auth-pull-left">
International options
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all','events.linkPath':'GlobalNavPullMenu|Wireless|Accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Accessories
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all','events.linkPath':'GlobalNavPullMenu|Wireless|Accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Accessories
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all','events.linkPath':'GlobalNavPullMenu|Wireless|Accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Accessories
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/apple-iphone-14.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'iPhone 14 ','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/apple-iphone-14.html','events.linkPath':'GlobalNavPullMenu|Wireless|iPhone 14 ','events.supmethod':'OT'}">
<span class="auth-pull-left">
iPhone 14 
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/apple-iphone-14.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'iPhone 14 ','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/apple-iphone-14.html','events.linkPath':'GlobalNavPullMenu|Wireless|iPhone 14 ','events.supmethod':'OT'}">
<span class="auth-pull-left">
iPhone 14 
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/apple-iphone-14.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'iPhone 14 ','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/apple-iphone-14.html','events.linkPath':'GlobalNavPullMenu|Wireless|iPhone 14 ','events.supmethod':'OT'}">
<span class="auth-pull-left">
iPhone 14 
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/why-att/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Why AT&amp;T','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/why-att/','events.linkPath':'GlobalNavPullMenu|Wireless|Why AT&amp;T','events.supmethod':'OT'}">
<span class="auth-pull-left">
Why AT&amp;T
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/why-att/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Why AT&amp;T','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/why-att/','events.linkPath':'GlobalNavPullMenu|Wireless|Why AT&amp;T','events.supmethod':'OT'}">
<span class="auth-pull-left">
Why AT&amp;T
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/why-att/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Why AT&amp;T','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/why-att/','events.linkPath':'GlobalNavPullMenu|Wireless|Why AT&amp;T','events.supmethod':'OT'}">
<span class="auth-pull-left">
Why AT&amp;T
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/support/topic/wireless" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Wireless help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/wireless','events.linkPath':'GlobalNavPullMenu|Wireless|Wireless help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Wireless help
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/support/topic/wireless" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Wireless help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/wireless','events.linkPath':'GlobalNavPullMenu|Wireless|Wireless help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Wireless help
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/support/topic/wireless" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Wireless help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/wireless','events.linkPath':'GlobalNavPullMenu|Wireless|Wireless help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Wireless help
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu hide" data-category="hasuincons,hasdialupcons,hasdslcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Internet">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Shop Internet</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Explore Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore Internet
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Explore Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore Internet
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/internet/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore Internet','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Explore Internet','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore Internet
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/internet/internet-services/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; prices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/internet-services/','events.linkPath':'GlobalNavPullMenu|Internet|Plans &amp; prices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; prices
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/internet/internet-services/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; prices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/internet-services/','events.linkPath':'GlobalNavPullMenu|Internet|Plans &amp; prices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; prices
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/internet/internet-services/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; prices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/internet-services/','events.linkPath':'GlobalNavPullMenu|Internet|Plans &amp; prices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; prices
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/internet/fiber/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Fiber','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/fiber/','events.linkPath':'GlobalNavPullMenu|Internet|Fiber','events.supmethod':'OT'}">
<span class="auth-pull-left">
Fiber
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/internet/fiber/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Fiber','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/fiber/','events.linkPath':'GlobalNavPullMenu|Internet|Fiber','events.supmethod':'OT'}">
<span class="auth-pull-left">
Fiber
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/internet/fiber/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Fiber','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/fiber/','events.linkPath':'GlobalNavPullMenu|Internet|Fiber','events.supmethod':'OT'}">
<span class="auth-pull-left">
Fiber
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/broadband/?product_suite=NBB&fiber_intent=true" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Check availability','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/broadband/?product_suite=NBB&amp;fiber_intent=true','events.linkPath':'GlobalNavPullMenu|Internet|Check availability','events.supmethod':'OT'}">
<span class="auth-pull-left">
Check availability
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/broadband/?product_suite=NBB&fiber_intent=true" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Check availability','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/broadband/?product_suite=NBB&amp;fiber_intent=true','events.linkPath':'GlobalNavPullMenu|Internet|Check availability','events.supmethod':'OT'}">
<span class="auth-pull-left">
Check availability
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/broadband/?product_suite=NBB&fiber_intent=true" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Check availability','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/broadband/?product_suite=NBB&amp;fiber_intent=true','events.linkPath':'GlobalNavPullMenu|Internet|Check availability','events.supmethod':'OT'}">
<span class="auth-pull-left">
Check availability
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/moving" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Moving services','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/moving','events.linkPath':'GlobalNavPullMenu|Internet|Moving services','events.supmethod':'OT'}">
<span class="auth-pull-left">
Moving services
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/moving" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Moving services','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/moving','events.linkPath':'GlobalNavPullMenu|Internet|Moving services','events.supmethod':'OT'}">
<span class="auth-pull-left">
Moving services
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/moving" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Moving services','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/moving','events.linkPath':'GlobalNavPullMenu|Internet|Moving services','events.supmethod':'OT'}">
<span class="auth-pull-left">
Moving services
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/wi-fi/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wi-fi/','events.linkPath':'GlobalNavPullMenu|Internet|Equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Equipment
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/wi-fi/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wi-fi/','events.linkPath':'GlobalNavPullMenu|Internet|Equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Equipment
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/wi-fi/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/wi-fi/','events.linkPath':'GlobalNavPullMenu|Internet|Equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Equipment
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bundles','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|Internet|Bundles','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bundles
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bundles','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|Internet|Bundles','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bundles
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bundles','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|Internet|Bundles','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bundles
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/internet/access/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Access from AT&amp;T','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/access/','events.linkPath':'GlobalNavPullMenu|Internet|Access from AT&amp;T','events.supmethod':'OT'}">
<span class="auth-pull-left">
Access from AT&amp;T
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/internet/access/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Access from AT&amp;T','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/access/','events.linkPath':'GlobalNavPullMenu|Internet|Access from AT&amp;T','events.supmethod':'OT'}">
<span class="auth-pull-left">
Access from AT&amp;T
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/internet/access/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Access from AT&amp;T','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/internet/access/','events.linkPath':'GlobalNavPullMenu|Internet|Access from AT&amp;T','events.supmethod':'OT'}">
<span class="auth-pull-left">
Access from AT&amp;T
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/support/internet/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Internet help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet help
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/support/internet/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Internet help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet help
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/support/internet/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Internet help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet help
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/internet/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/internet/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/internet/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/internet/','events.linkPath':'GlobalNavPullMenu|Internet|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu hide" data-category="hasdtvcons,hasutvcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|TV','events.supmethod':'OT'}">
<span class="auth-pull-left">
TV
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="TV">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">TV</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.directv.com/" class="hide-sm hide-xsm hide-md " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore DIRECTV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/','events.linkPath':'GlobalNavPullMenu|TV|Explore DIRECTV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore DIRECTV
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.directv.com/" class="hide-lg hide-xsm hide-sm " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore DIRECTV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/','events.linkPath':'GlobalNavPullMenu|TV|Explore DIRECTV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore DIRECTV
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.directv.com/" class="hide-lg hide-md " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore DIRECTV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/','events.linkPath':'GlobalNavPullMenu|TV|Explore DIRECTV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore DIRECTV
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.directv.com/stream/" class="hide-sm hide-xsm hide-md " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV STREAM','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/stream/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV STREAM','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV STREAM
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.directv.com/stream/" class="hide-lg hide-xsm hide-sm " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV STREAM','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/stream/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV STREAM','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV STREAM
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.directv.com/stream/" class="hide-lg hide-md " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV STREAM','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/stream/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV STREAM','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV STREAM
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.directv.com/satellite/" class="hide-sm hide-xsm hide-md " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV satellite','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/satellite/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV satellite','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV satellite
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.directv.com/satellite/" class="hide-lg hide-xsm hide-sm " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV satellite','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/satellite/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV satellite','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV satellite
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.directv.com/satellite/" class="hide-lg hide-md " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV satellite','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/satellite/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV satellite','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV satellite
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TV bundles','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|TV|TV bundles','events.supmethod':'OT'}">
<span class="auth-pull-left">
TV bundles
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TV bundles','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|TV|TV bundles','events.supmethod':'OT'}">
<span class="auth-pull-left">
TV bundles
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TV bundles','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|TV|TV bundles','events.supmethod':'OT'}">
<span class="auth-pull-left">
TV bundles
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.directv.com/support/" class="hide-sm hide-xsm hide-md " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/support/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV help','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV help
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.directv.com/support/" class="hide-lg hide-xsm hide-sm " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/support/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV help','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV help
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.directv.com/support/" class="hide-lg hide-md " target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'DIRECTV help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.directv.com/support/','events.linkPath':'GlobalNavPullMenu|TV|DIRECTV help','events.supmethod':'OT'}">
<span class="auth-pull-left">
DIRECTV help
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/support/topic/u-verse-tv/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'U-verse help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/u-verse-tv/','events.linkPath':'GlobalNavPullMenu|TV|U-verse help','events.supmethod':'OT'}">
<span class="auth-pull-left">
U-verse help
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/support/topic/u-verse-tv/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'U-verse help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/u-verse-tv/','events.linkPath':'GlobalNavPullMenu|TV|U-verse help','events.supmethod':'OT'}">
<span class="auth-pull-left">
U-verse help
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/support/topic/u-verse-tv/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'U-verse help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/u-verse-tv/','events.linkPath':'GlobalNavPullMenu|TV|U-verse help','events.supmethod':'OT'}">
<span class="auth-pull-left">
U-verse help
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu hide" data-category="haswcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Prepaid','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Prepaid">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Shop prepaid </span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/prepaid/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore AT&amp;T PREPAID','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/','events.linkPath':'GlobalNavPullMenu|Prepaid|Explore AT&amp;T PREPAID','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore AT&amp;T PREPAID
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/prepaid/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore AT&amp;T PREPAID','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/','events.linkPath':'GlobalNavPullMenu|Prepaid|Explore AT&amp;T PREPAID','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore AT&amp;T PREPAID
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/prepaid/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore AT&amp;T PREPAID','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/','events.linkPath':'GlobalNavPullMenu|Prepaid|Explore AT&amp;T PREPAID','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore AT&amp;T PREPAID
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/prepaid/plans.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid plans','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/plans.html','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid plans','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid plans
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/prepaid/plans.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid plans','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/plans.html','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid plans','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid plans
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/prepaid/plans.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid plans','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/plans.html','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid plans','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid plans
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/browse/prepaid/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/browse/prepaid/','events.linkPath':'GlobalNavPullMenu|Prepaid|Phones','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/browse/prepaid/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/browse/prepaid/','events.linkPath':'GlobalNavPullMenu|Prepaid|Phones','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/phones/browse/prepaid/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/phones/browse/prepaid/','events.linkPath':'GlobalNavPullMenu|Prepaid|Phones','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/prepaid/byod/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bring your own phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/byod/','events.linkPath':'GlobalNavPullMenu|Prepaid|Bring your own phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bring your own phone
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/prepaid/byod/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bring your own phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/byod/','events.linkPath':'GlobalNavPullMenu|Prepaid|Bring your own phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bring your own phone
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/prepaid/byod/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bring your own phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/byod/','events.linkPath':'GlobalNavPullMenu|Prepaid|Bring your own phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bring your own phone
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/prepaid/deals/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/deals/','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid deals
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/prepaid/deals/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/deals/','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid deals
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/prepaid/deals/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/prepaid/deals/','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid deals
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.paygonline.com/websc/loginPage.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid account','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.paygonline.com/websc/loginPage.html','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid account','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid account
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.paygonline.com/websc/loginPage.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid account','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.paygonline.com/websc/loginPage.html','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid account','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid account
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.paygonline.com/websc/loginPage.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Prepaid account','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.paygonline.com/websc/loginPage.html','events.linkPath':'GlobalNavPullMenu|Prepaid|Prepaid account','events.supmethod':'OT'}">
<span class="auth-pull-left">
Prepaid account
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/prepaid-wireless/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/prepaid-wireless/','events.linkPath':'GlobalNavPullMenu|Prepaid|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/prepaid-wireless/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/prepaid-wireless/','events.linkPath':'GlobalNavPullMenu|Prepaid|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/help/affordable-connectivity-program/prepaid-wireless/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Affordable Connectivity','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/help/affordable-connectivity-program/prepaid-wireless/','events.linkPath':'GlobalNavPullMenu|Prepaid|Affordable Connectivity','events.supmethod':'OT'}">
<span class="auth-pull-left">
Affordable Connectivity
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu hide" data-category="haspotscons,hasupcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Home phone
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Home phone">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Shop home phone</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|Home phone|Explore home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore home phone
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|Home phone|Explore home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore home phone
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/home-phone/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Explore home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/','events.linkPath':'GlobalNavPullMenu|Home phone|Explore home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore home phone
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/home-phone/plans.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; availability','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/plans.html','events.linkPath':'GlobalNavPullMenu|Home phone|Plans &amp; availability','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; availability
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/home-phone/plans.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; availability','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/plans.html','events.linkPath':'GlobalNavPullMenu|Home phone|Plans &amp; availability','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; availability
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/home-phone/plans.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Plans &amp; availability','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/plans.html','events.linkPath':'GlobalNavPullMenu|Home phone|Plans &amp; availability','events.supmethod':'OT'}">
<span class="auth-pull-left">
Plans &amp; availability
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="http://www.att.com/home-phone/landline.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Traditional home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/home-phone/landline.html','events.linkPath':'GlobalNavPullMenu|Home phone|Traditional home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Traditional home phone
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="http://www.att.com/home-phone/landline.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Traditional home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/home-phone/landline.html','events.linkPath':'GlobalNavPullMenu|Home phone|Traditional home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Traditional home phone
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://www.att.com/home-phone/landline.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Traditional home phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/home-phone/landline.html','events.linkPath':'GlobalNavPullMenu|Home phone|Traditional home phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
Traditional home phone
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="http://www.att.com/gen/general?pid=22888" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Lifeline','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/gen/general?pid=22888','events.linkPath':'GlobalNavPullMenu|Home phone|Lifeline','events.supmethod':'OT'}">
<span class="auth-pull-left">
Lifeline
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="http://www.att.com/gen/general?pid=22888" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Lifeline','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/gen/general?pid=22888','events.linkPath':'GlobalNavPullMenu|Home phone|Lifeline','events.supmethod':'OT'}">
<span class="auth-pull-left">
Lifeline
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://www.att.com/gen/general?pid=22888" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Lifeline','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://www.att.com/gen/general?pid=22888','events.linkPath':'GlobalNavPullMenu|Home phone|Lifeline','events.supmethod':'OT'}">
<span class="auth-pull-left">
Lifeline
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="http://telephones.att.com/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones &amp; accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://telephones.att.com/','events.linkPath':'GlobalNavPullMenu|Home phone|Phones &amp; accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones &amp; accessories
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="http://telephones.att.com/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones &amp; accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://telephones.att.com/','events.linkPath':'GlobalNavPullMenu|Home phone|Phones &amp; accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones &amp; accessories
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="http://telephones.att.com/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Phones &amp; accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'http://telephones.att.com/','events.linkPath':'GlobalNavPullMenu|Home phone|Phones &amp; accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Phones &amp; accessories
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li class="menu-divider" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/support/topic/u-verse-voice" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Digital phone help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/u-verse-voice','events.linkPath':'GlobalNavPullMenu|Home phone|Digital phone help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Digital phone help
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/support/topic/u-verse-voice" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Digital phone help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/u-verse-voice','events.linkPath':'GlobalNavPullMenu|Home phone|Digital phone help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Digital phone help
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/support/topic/u-verse-voice" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Digital phone help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/u-verse-voice','events.linkPath':'GlobalNavPullMenu|Home phone|Digital phone help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Digital phone help
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/support/topic/local-long-distance" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Landline phone help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/local-long-distance','events.linkPath':'GlobalNavPullMenu|Home phone|Landline phone help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Landline phone help
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/support/topic/local-long-distance" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Landline phone help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/local-long-distance','events.linkPath':'GlobalNavPullMenu|Home phone|Landline phone help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Landline phone help
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/support/topic/local-long-distance" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Landline phone help','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/topic/local-long-distance','events.linkPath':'GlobalNavPullMenu|Home phone|Landline phone help','events.supmethod':'OT'}">
<span class="auth-pull-left">
Landline phone help
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu hide" data-category="haswcons,hasdtvcons,hasutvcons,hasuincons,hasdslcons,hasupcons,haspotscons,hasdialupcons">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Bundles','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Bundles','events.supmethod':'OT'}">
<span class="auth-pull-left">
Bundles
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Bundles">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Shop bundles</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + DIRECTV STREAM','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + DIRECTV STREAM','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + DIRECTV STREAM
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + DIRECTV STREAM','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + DIRECTV STREAM','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + DIRECTV STREAM
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/bundles/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + DIRECTV STREAM','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + DIRECTV STREAM','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + DIRECTV STREAM
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/bundles/directv-internet/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + DIRECTV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/directv-internet/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + DIRECTV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + DIRECTV
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/bundles/directv-internet/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + DIRECTV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/directv-internet/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + DIRECTV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + DIRECTV
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/bundles/directv-internet/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + DIRECTV','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/directv-internet/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + DIRECTV','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + DIRECTV
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/bundles/internet-wireless/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + Wireless','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/internet-wireless/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + Wireless','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + Wireless
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/bundles/internet-wireless/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + Wireless','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/internet-wireless/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + Wireless','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + Wireless
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/bundles/internet-wireless/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet + Wireless','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/bundles/internet-wireless/','events.linkPath':'GlobalNavPullMenu|Bundles|Internet + Wireless','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet + Wireless
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/home-phone/plans/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TV + Internet + Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/plans/','events.linkPath':'GlobalNavPullMenu|Bundles|TV + Internet + Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
TV + Internet + Phone
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/home-phone/plans/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TV + Internet + Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/plans/','events.linkPath':'GlobalNavPullMenu|Bundles|TV + Internet + Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
TV + Internet + Phone
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/home-phone/plans/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TV + Internet + Phone','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/home-phone/plans/','events.linkPath':'GlobalNavPullMenu|Bundles|TV + Internet + Phone','events.supmethod':'OT'}">
<span class="auth-pull-left">
TV + Internet + Phone
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/bundles" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Build my own bundle','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/bundles','events.linkPath':'GlobalNavPullMenu|Bundles|Build my own bundle','events.supmethod':'OT'}">
<span class="auth-pull-left">
Build my own bundle
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/bundles" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Build my own bundle','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/bundles','events.linkPath':'GlobalNavPullMenu|Bundles|Build my own bundle','events.supmethod':'OT'}">
<span class="auth-pull-left">
Build my own bundle
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/bundles" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Build my own bundle','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/bundles','events.linkPath':'GlobalNavPullMenu|Bundles|Build my own bundle','events.supmethod':'OT'}">
<span class="auth-pull-left">
Build my own bundle
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu " data-category="*">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Smart technology','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Smart technology','events.supmethod':'OT'}">
<span class="auth-pull-left">
Smart technology
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Smart technology">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Shop smart technology</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/productivity/remote-work/work-from-home-essentials/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Home office','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/productivity/remote-work/work-from-home-essentials/','events.linkPath':'GlobalNavPullMenu|Smart technology|Home office','events.supmethod':'OT'}">
<span class="auth-pull-left">
Home office
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/productivity/remote-work/work-from-home-essentials/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Home office','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/productivity/remote-work/work-from-home-essentials/','events.linkPath':'GlobalNavPullMenu|Smart technology|Home office','events.supmethod':'OT'}">
<span class="auth-pull-left">
Home office
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/productivity/remote-work/work-from-home-essentials/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Home office','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/productivity/remote-work/work-from-home-essentials/','events.linkPath':'GlobalNavPullMenu|Smart technology|Home office','events.supmethod':'OT'}">
<span class="auth-pull-left">
Home office
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/wearables/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Smart watches &amp; devices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/wearables/','events.linkPath':'GlobalNavPullMenu|Smart technology|Smart watches &amp; devices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Smart watches &amp; devices
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/wearables/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Smart watches &amp; devices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/wearables/','events.linkPath':'GlobalNavPullMenu|Smart technology|Smart watches &amp; devices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Smart watches &amp; devices
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/wearables/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Smart watches &amp; devices','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/wearables/','events.linkPath':'GlobalNavPullMenu|Smart technology|Smart watches &amp; devices','events.supmethod':'OT'}">
<span class="auth-pull-left">
Smart watches &amp; devices
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/smart-home" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Smart home','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/smart-home','events.linkPath':'GlobalNavPullMenu|Smart technology|Smart home','events.supmethod':'OT'}">
<span class="auth-pull-left">
Smart home
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/smart-home" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Smart home','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/smart-home','events.linkPath':'GlobalNavPullMenu|Smart technology|Smart home','events.supmethod':'OT'}">
<span class="auth-pull-left">
Smart home
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/smart-home" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Smart home','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/smart-home','events.linkPath':'GlobalNavPullMenu|Smart technology|Smart home','events.supmethod':'OT'}">
<span class="auth-pull-left">
Smart home
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/plans/connected-car.html" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'In-car Wi-Fi','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/connected-car.html','events.linkPath':'GlobalNavPullMenu|Smart technology|In-car Wi-Fi','events.supmethod':'OT'}">
<span class="auth-pull-left">
In-car Wi-Fi
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/plans/connected-car.html" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'In-car Wi-Fi','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/connected-car.html','events.linkPath':'GlobalNavPullMenu|Smart technology|In-car Wi-Fi','events.supmethod':'OT'}">
<span class="auth-pull-left">
In-car Wi-Fi
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/plans/connected-car.html" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'In-car Wi-Fi','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/plans/connected-car.html','events.linkPath':'GlobalNavPullMenu|Smart technology|In-car Wi-Fi','events.supmethod':'OT'}">
<span class="auth-pull-left">
In-car Wi-Fi
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" class="has-submenu " data-category="*">
<!-- Primary link with child links - for both mobile & desktop view port -->
<a href="#" role="menuitem" class="slideout-toggle " aria-expanded="false" aria-haspopup="true" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'','events.linkPath':'GlobalNavPullMenu|Accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Accessories
</span>
<span class="pull-right">
<i class="icon-right">
<svg width="14px" height="25px" viewBox="0 0 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i>
</span>
</a>
<!-- Primary link without child links - for desktop view port -->
<!-- Primary link without child links - for tablet view port -->
<!-- Primary link without child links - for mobile view port -->
<!-- Secondary links - for standard & moreAtt type -->
<ul class="lg-submenu " role="menu" aria-hidden="true" aria-label="Accessories">
<li class="hide-lg hide-md" role="presentation">
<a href="#" class="back-button" role="button" aria-label="Back to main menu">
<i class="icon-left" role="img">
<svg width="14px" height="25px" viewBox="0 -5 10 53">
<title>menu arrow</title>
<g fill="#767676" fill-rule="nonzero">
<path d="M2.69325,23.6935385 C1.84553905,23.6912657 1.0822536,23.151533 0.75814002,22.3251878 C0.434026439,21.4988427 0.612652687,20.5479549 1.211,19.9144615 L8.715875,12.0092308 L1.19,4.08830769 C0.647902559,3.5322956 0.431282068,2.71160626 0.622967078,1.9400443 C0.814652088,1.16848235 1.38499608,0.565379619 2.11591826,0.361342772 C2.84684045,0.157305926 3.62529443,0.38389185 4.153625,0.954461538 L12.571125,9.81230769 C13.1145,10.3818462 13.425125,11.1812308 13.425125,12.0055385 C13.4272868,12.826957 13.1215748,13.6159768 12.574625,14.2006154 L4.176375,23.0473846 C3.7831129,23.4622499 3.24940224,23.6947719 2.69325,23.6935385">
</path>
</g>
</svg>
</i> Back
</a>
</li>
<span class="hide-lg hide-md menu-subtitle" role="presentation">Shop accessories</span>
<li class="menu-divider hide-md hide-lg" aria-hidden="true"><span>&nbsp;</span></li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/accessories" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':' Explore Accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/accessories','events.linkPath':'GlobalNavPullMenu|Accessories| Explore Accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore Accessories
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/accessories" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':' Explore Accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/accessories','events.linkPath':'GlobalNavPullMenu|Accessories| Explore Accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore Accessories
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/accessories" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':' Explore Accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/accessories','events.linkPath':'GlobalNavPullMenu|Accessories| Explore Accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
Explore Accessories
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'All accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all','events.linkPath':'GlobalNavPullMenu|Accessories|All accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
All accessories
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'All accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all','events.linkPath':'GlobalNavPullMenu|Accessories|All accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
All accessories
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'All accessories','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all','events.linkPath':'GlobalNavPullMenu|Accessories|All accessories','events.supmethod':'OT'}">
<span class="auth-pull-left">
All accessories
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/headphones" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Headphones','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/headphones','events.linkPath':'GlobalNavPullMenu|Accessories|Headphones','events.supmethod':'OT'}">
<span class="auth-pull-left">
Headphones
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/headphones" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Headphones','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/headphones','events.linkPath':'GlobalNavPullMenu|Accessories|Headphones','events.supmethod':'OT'}">
<span class="auth-pull-left">
Headphones
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/headphones" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Headphones','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/headphones','events.linkPath':'GlobalNavPullMenu|Accessories|Headphones','events.supmethod':'OT'}">
<span class="auth-pull-left">
Headphones
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/cases" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Cases','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/cases','events.linkPath':'GlobalNavPullMenu|Accessories|Cases','events.supmethod':'OT'}">
<span class="auth-pull-left">
Cases
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/cases" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Cases','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/cases','events.linkPath':'GlobalNavPullMenu|Accessories|Cases','events.supmethod':'OT'}">
<span class="auth-pull-left">
Cases
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/cases" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Cases','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/cases','events.linkPath':'GlobalNavPullMenu|Accessories|Cases','events.supmethod':'OT'}">
<span class="auth-pull-left">
Cases
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/chargers" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Chargers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/chargers','events.linkPath':'GlobalNavPullMenu|Accessories|Chargers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Chargers
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/chargers" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Chargers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/chargers','events.linkPath':'GlobalNavPullMenu|Accessories|Chargers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Chargers
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/chargers" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Chargers','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/chargers','events.linkPath':'GlobalNavPullMenu|Accessories|Chargers','events.supmethod':'OT'}">
<span class="auth-pull-left">
Chargers
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/screen-protectors" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Screen protectors','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/screen-protectors','events.linkPath':'GlobalNavPullMenu|Accessories|Screen protectors','events.supmethod':'OT'}">
<span class="auth-pull-left">
Screen protectors
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/screen-protectors" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Screen protectors','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/screen-protectors','events.linkPath':'GlobalNavPullMenu|Accessories|Screen protectors','events.supmethod':'OT'}">
<span class="auth-pull-left">
Screen protectors
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/screen-protectors" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Screen protectors','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/screen-protectors','events.linkPath':'GlobalNavPullMenu|Accessories|Screen protectors','events.supmethod':'OT'}">
<span class="auth-pull-left">
Screen protectors
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/speakers-smart-home" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Speakers &amp; smart home','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/speakers-smart-home','events.linkPath':'GlobalNavPullMenu|Accessories|Speakers &amp; smart home','events.supmethod':'OT'}">
<span class="auth-pull-left">
Speakers &amp; smart home
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/speakers-smart-home" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Speakers &amp; smart home','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/speakers-smart-home','events.linkPath':'GlobalNavPullMenu|Accessories|Speakers &amp; smart home','events.supmethod':'OT'}">
<span class="auth-pull-left">
Speakers &amp; smart home
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/speakers-smart-home" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Speakers &amp; smart home','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/speakers-smart-home','events.linkPath':'GlobalNavPullMenu|Accessories|Speakers &amp; smart home','events.supmethod':'OT'}">
<span class="auth-pull-left">
Speakers &amp; smart home
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/internet-tv-equipment" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet &amp; TV equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/internet-tv-equipment','events.linkPath':'GlobalNavPullMenu|Accessories|Internet &amp; TV equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet &amp; TV equipment
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/internet-tv-equipment" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet &amp; TV equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/internet-tv-equipment','events.linkPath':'GlobalNavPullMenu|Accessories|Internet &amp; TV equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet &amp; TV equipment
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/internet-tv-equipment" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Internet &amp; TV equipment','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/internet-tv-equipment','events.linkPath':'GlobalNavPullMenu|Accessories|Internet &amp; TV equipment','events.supmethod':'OT'}">
<span class="auth-pull-left">
Internet &amp; TV equipment
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/phone-grips" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'PopSockets &amp; more','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/phone-grips','events.linkPath':'GlobalNavPullMenu|Accessories|PopSockets &amp; more','events.supmethod':'OT'}">
<span class="auth-pull-left">
PopSockets &amp; more
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/phone-grips" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'PopSockets &amp; more','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/phone-grips','events.linkPath':'GlobalNavPullMenu|Accessories|PopSockets &amp; more','events.supmethod':'OT'}">
<span class="auth-pull-left">
PopSockets &amp; more
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/phone-grips" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'PopSockets &amp; more','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/phone-grips','events.linkPath':'GlobalNavPullMenu|Accessories|PopSockets &amp; more','events.supmethod':'OT'}">
<span class="auth-pull-left">
PopSockets &amp; more
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/gadgets-gaming" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Gadgets &amp; gaming','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/gadgets-gaming','events.linkPath':'GlobalNavPullMenu|Accessories|Gadgets &amp; gaming','events.supmethod':'OT'}">
<span class="auth-pull-left">
Gadgets &amp; gaming
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/gadgets-gaming" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Gadgets &amp; gaming','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/gadgets-gaming','events.linkPath':'GlobalNavPullMenu|Accessories|Gadgets &amp; gaming','events.supmethod':'OT'}">
<span class="auth-pull-left">
Gadgets &amp; gaming
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/gadgets-gaming" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Gadgets &amp; gaming','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/gadgets-gaming','events.linkPath':'GlobalNavPullMenu|Accessories|Gadgets &amp; gaming','events.supmethod':'OT'}">
<span class="auth-pull-left">
Gadgets &amp; gaming
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
<li role="presentation" data-subcategory="*" data-type="unauth">
<!-- Standard secondary link - for desktop view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all/deals" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessory deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all/deals','events.linkPath':'GlobalNavPullMenu|Accessories|Accessory deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Accessory deals
</span>
</a>
<!-- Standard secondary link - for tablet view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all/deals" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessory deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all/deals','events.linkPath':'GlobalNavPullMenu|Accessories|Accessory deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Accessory deals
</span>
</a>
<!-- Standard secondary link - for mobile view port -->
<a role="menuitem" href="https://www.att.com/buy/accessories/browse/all/deals" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessory deals','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/buy/accessories/browse/all/deals','events.linkPath':'GlobalNavPullMenu|Accessories|Accessory deals','events.supmethod':'OT'}">
<span class="auth-pull-left">
Accessory deals
</span>
</a>
<!-- MoreAtt secondary link - for desktop view port -->
<!-- MoreAtt secondary link - for tablet view port -->
<!-- MoreAtt secondary link - for mobile view port -->
</li>
</ul>
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li class="menu-divider" aria-hidden="true" data-category="*"><span>&nbsp;</span></li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" data-category="*">
<!-- Primary link with child links - for both mobile & desktop view port -->
<!-- Primary link without child links - for desktop view port -->
<a role="menuitem" href="https://www.business.att.com/business-classification.html?bref=IBBz250012babsbzL" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.business.att.com/business-classification.html?bref=IBBz250012babsbzL','events.linkPath':'GlobalNavPullMenu|Business','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Business
</span>
</a>
<!-- Primary link without child links - for tablet view port -->
<a role="menuitem" href="https://www.business.att.com/business-classification.html?bref=IBBz250012babsbzL" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.business.att.com/business-classification.html?bref=IBBz250012babsbzL','events.linkPath':'GlobalNavPullMenu|Business','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Business
</span>
</a>
<!-- Primary link without child links - for mobile view port -->
<a role="menuitem" href="https://www.business.att.com/business-classification.html?bref=IBBz250012babsbzL" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.business.att.com/business-classification.html?bref=IBBz250012babsbzL','events.linkPath':'GlobalNavPullMenu|Business','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Business
</span>
</a>
<!-- Secondary links - for standard & moreAtt type -->
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" class="menu-divider" aria-hidden="true" data-category="*"><span>&nbsp;</span></li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" data-category="*">
<!-- Primary link with child links - for both mobile & desktop view port -->
<!-- Primary link without child links - for desktop view port -->
<a role="menuitem" href="https://www.att.com/support/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Support','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/','events.linkPath':'GlobalNavPullMenu|Support','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Support
</span>
</a>
<!-- Primary link without child links - for tablet view port -->
<a role="menuitem" href="https://www.att.com/support/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Support','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/','events.linkPath':'GlobalNavPullMenu|Support','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Support
</span>
</a>
<!-- Primary link without child links - for mobile view port -->
<a role="menuitem" href="https://www.att.com/support/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Support','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/support/','events.linkPath':'GlobalNavPullMenu|Support','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Support
</span>
</a>
<!-- Secondary links - for standard & moreAtt type -->
</li>
<!-- Profile type link - for mobile view port -->
<!-- Watch now type link - for mobile view port -->
<!-- Standard & moreAtt type link -->
<li data-type="unauth" role="presentation" data-category="*">
<!-- Primary link with child links - for both mobile & desktop view port -->
<!-- Primary link without child links - for desktop view port -->
<a role="menuitem" href="https://www.att.com/stores/" class="hide-sm hide-xsm hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Find a store','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://www.att.com/stores/','events.linkPath':'GlobalNavPullMenu|Find a store','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Find a store
</span>
</a>
<!-- Primary link without child links - for tablet view port -->
<a role="menuitem" href="https://m.att.com/stores/" class="hide-lg hide-xsm hide-sm " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Find a store','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/stores/','events.linkPath':'GlobalNavPullMenu|Find a store','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Find a store
</span>
</a>
<!-- Primary link without child links - for mobile view port -->
<a role="menuitem" href="https://m.att.com/stores/" class="hide-lg hide-md " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Find a store','events.linkPosition':'GlobalNavPullMenu', 'events.linkDestinationUrl':'https://m.att.com/stores/','events.linkPath':'GlobalNavPullMenu|Find a store','events.supmethod':'OT'}">
<span class="auth-pull-left"> 
Find a store
</span>
</a>
<!-- Secondary links - for standard & moreAtt type -->
</li>
</ul>
</div>
<!-- Mobile close button -->
<div class="btn-container hide-md hide-lg">
<a id="z1-pull-close" href="#" class="z1-link hide" aria-label="Close Menu">
<i id="z1-close-icon" class="icon-close hide-md hide-lg">
<svg width="16px" height="16px" viewBox="0 0 22 22" version="1.1">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g fill="#ffffff" fill-rule="nonzero">
<path d="M20.518,17.682 C21.0379132,18.1841489 21.2464252,18.9277558 21.0633943,19.6270146 C20.8803634,20.3262735 20.3342735,20.8723634 19.6350146,21.0553943 C18.9357558,21.2384252 18.1921489,21.0299132 17.69,20.51 L11.004,13.824 L4.309,20.519 C3.93451501,20.8948468 3.42556502,21.1057695 2.895,21.105 C2.0862082,21.1048273 1.3571319,20.617545 1.04764404,19.8703091 C0.738156188,19.1230732 0.909184169,18.2629885 1.481,17.691 L8.176,10.997 L1.49,4.31 C0.970086831,3.80785106 0.761574806,3.06424422 0.944605687,2.36498535 C1.12763657,1.66572649 1.67372649,1.11963657 2.37298535,0.936605687 C3.07224422,0.753574806 3.81585106,0.962086831 4.318,1.482 L11.004,8.168 L17.69,1.482 C18.1921489,0.962086831 18.9357558,0.753574806 19.6350146,0.936605687 C20.3342735,1.11963657 20.8803634,1.66572649 21.0633943,2.36498535 C21.2464252,3.06424422 21.0379132,3.80785106 20.518,4.31 L13.832,10.996 L20.518,17.682 L20.518,17.682 Z">
</path>
</g>
</g>
</svg>
</i>
</a>
</div>
<!-- Mobile close button -->
</div>
<!--  --> 
</div>
<!-- Mobile Globe ICON Start -->
<div id="z1-horizontalNav">
<div id="z1-mobile-identity" class="span4-xsm span4-sm hide-md hide-lg">
<a class="brand" href="https://www.att.com" title="My ATT" target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'My ATT','events.linkPosition':'GlobalNavTopBar', 'events.linkDestinationUrl':'https://www.att.com','events.linkPath':'My ATT','events.supmethod':' OT'}">
<i id="z1-mobile-globe" class="icon-att-globe" aria-label="AT&amp;T home" role="img">
<svg height="28" viewBox="0 0 36 36" width="28" aria-label="att globe icon"><path d="m7.1 32c3 2.3 6.8 3.7 10.9 3.7 4.5 0 8.6-1.7 11.7-4.4-1.4.9-5.4 3-11.7 3-5.5 0-9-1.2-10.9-2.3m12.1.9c4.4 0 9.2-1.2 12-3.6.8-.6 1.5-1.5 2.2-2.6.4-.7.8-1.5 1.1-2.2-2.7 3.9-10.4 6.4-18.4 6.4-5.6 0-11.7-1.8-14.1-5.3 2.2 4.8 8.9 7.3 17.2 7.3m-4.8-7.8c-9.1 0-13.4-4.2-14.1-7.1 0 1 .1 2.2.3 3.1.1.4.4 1 .9 1.6 2.2 2.3 7.7 5.5 17.2 5.5 12.9 0 15.9-4.3 16.5-5.7.4-1 .7-2.8.7-4.4v-1c-.9 3.4-11.9 8-21.5 8m-12.5-14.7c-.5 1-1.1 2.8-1.3 3.7-.1.4 0 .6.1.9 1.1 2.3 6.6 6 19.4 6 7.8 0 13.9-1.9 14.9-5.4.2-.6.2-1.3 0-2.2-.3-1-.7-2.2-1.2-3.1.1 4.6-12.7 7.6-19.2 7.6-7 0-12.9-2.8-12.9-6.3.1-.5.2-.9.2-1.2m27.8-5.7c.1.1.1.2.1.4 0 2-6 5.4-15.6 5.4-7.1 0-8.4-2.6-8.4-4.3 0-.6.2-1.2.7-1.8-.9.9-1.7 1.7-2.5 2.7-.3.4-.5.8-.5 1 0 3.5 8.7 5.9 16.7 5.9 8.6 0 12.5-2.8 12.5-5.3 0-.9-.3-1.4-1.2-2.4-.6-.6-1.2-1.1-1.8-1.6m-2.6-1.9c-2.7-1.6-5.7-2.5-9.1-2.5s-6.5.9-9.2 2.6c-.8.4-1.3.8-1.3 1.3 0 1.5 3.5 3.1 9.7 3.1 6.1 0 10.9-1.8 10.9-3.5.1-.3-.3-.6-1-1" fill="#009fdb"></path></svg>
</i>
<!--
<img id="z1-mobile-myATT" src="/content/dam/att/globalnav/myatt_logo.png" class="hide-unauth" aria-label="My ATT" aria-hidden="true" 
alt="My ATT" height="29" width="82">
-->
</a>
</div>
</div>
<!-- Mobile Globe ICON End -->
<!--Header Right Section cart profile watch tv now Start-->
<div id="z1-rightNav" class="pull-right">
<div data-path="/content/att/global/global-navigation/consumer/header/jcr:content/global-nav-container-parsys/globalheaderbar/rightParsys/widgetview_1614366287" class="widget-view">
<widget-view wid="widgetview_1614366287" widget-name="searchWidget" widget-templates="{&#34;activeSearch&#34;:&#34;/templates/search.html&#34;}" widget-library="/ui/global_all_cms_globalnav/assets/$$version$$/js/widgets/att.gn.widgets.min.js"></widget-view>
</div>
<div class="parbase supportlink section">
<div data-path="/content/att/global/global-navigation/consumer/header/jcr:content/global-nav-container-parsys/globalheaderbar/rightParsys/supportlink" id="z1-support">
<a class="z1-support-link" target="_self" tabindex="0" title="Support" aria-label="Support" href="https://www.att.com/support/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkDestinationUrl':'https://www.att.com/support/','events.linkName':'Support','events.linkPath':'Support','events.linkPosition':'GlobalNavTopBar','events.supmethod':'OT'}">
<span class="z1-support-text">Support</span>
</a>
</div></div>
<div data-path="/content/att/global/global-navigation/consumer/header/jcr:content/global-nav-container-parsys/globalheaderbar/rightParsys/widgetview" class="widget-view">
<widget-view wid="widgetview" widget-name="cartWidget" widget-templates="{&#34;activeCart&#34;:&#34;/templates/cart.html&#34;}" widget-library="/ui/global_all_cms_globalnav/assets/$$version$$/js/widgets/att.gn.widgets.min.js"></widget-view>
</div>
<div data-path="/content/att/global/global-navigation/consumer/header/jcr:content/global-nav-container-parsys/globalheaderbar/rightParsys/widgetview_1218596936" class="widget-view">
<widget-view wid="widgetview_1218596936" widget-name="profileWidget" widget-templates="{&#34;auth&#34;:&#34;/templates/sign-out.html&#34;,&#34;unauth&#34;:&#34;/templates/sign-in.html&#34;}" widget-library="/ui/global_all_cms_globalnav/assets/$$version$$/js/widgets/att.gn.widgets.min.js" dependencies="globalNavCoreModule"></widget-view>
</div>
<div class="parbase watchNowIcon section">
<div data-path="/content/att/global/global-navigation/consumer/header/jcr:content/global-nav-container-parsys/globalheaderbar/rightParsys/watchnowicon" id="z1-watch-tv" class="hide-xsm hide-sm">
<div id="z1-watch-text">
<a class="watch-tv-link" href="https://www.business.att.com/business-classification.html" aria-label="Business " target="_self" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Business','events.linkPosition':'GlobalNavTopBar', 'events.linkDestinationUrl':'https://www.business.att.com/business-classification.html','events.linkPath':'Business','events.supmethod':'OT'}" title="Business" data-hasdtv="/#">
<!-- Authenticated user icon -->
<!-- Un-Authenticated user icon -->
Business
<i class="icon-right-arrow" aria-hidden="true"></i>
</a>
</div>
</div></div>
<!--  --> 
</div>
<!--Header Right Section cart profile watch tv now End-->
</div>
</div>
<div id="skipGNnav" class="hidden-spoken">
<span class="hidden-spoken">Start of main content</span>
</div>
</nav>
</div>
</header>
<div id="c-mask" class="c-mask"></div>
</nav>
</div>
<!--End: Navigation header-->
<!--==== Start Main Content Wrapper ============================================================================-->
<div id="wrapper" class="container">
<div class="commonSpinner"> </div>
<!-- Start Application Page code -->
<div ng-view class="myATTiphoneXspecific"></div>
<!-- End Application Page code -->
</div>
<!--==== End Main Content Wrapper =============================================================================-->
</div>   
</div>
<div class="ui parsys"> 
<!--check for myATT--> 
<script> 
var jspath= '/my/index'; 
/* this is used by mGlobalnav.js, can remove once GN team fixed there */ 
var elementTolistenFor; 
var entries= []; 
entries.push('require'); 
entries.push('/ui/global_all_cms_common/2.0.0/common-main.js?r=210822'); 
entries.push('/ui/services_co_myatt_common/1.0.0/myattcommon-main.js?rel=210822'); 
requirejs(entries, function(require) { 
require(["myatt-bootstrap"], function() { 
}); 
}); 
sessionStorage.setItem('releaseDate', '210822');
</script> 
</div>
<!--analytics tab logic goes here-->  
<script>
function analyticsPageLoad() {
var contextFromLS = unescape(window.localStorage.getItem("ClientSidePersistence"));
var uzipIndex = contextFromLS.indexOf("uZip=");
var zipCode = contextFromLS.substring(uzipIndex+5,uzipIndex+10);
var pageLanguage="EN";
if(window.location.href.indexOf("es-us") > -1) {
pageLanguage='ES';
}
var brdcrumbdata = "";               
$(".breadcrumbs a").each(function(){
brdcrumbdata += $(this).text() + " > ";
});
brdcrumbdata += $(".breadcrumbs p").text();
var pageFriendlyName = '';
var pageOwnership = 'Consumer';
if(pageOwnership != undefined && pageOwnership == 'Business') {
var additionaldata = {};
additionaldata = {
'page.pageInfo.friendlyPageName' : getfriendlyName(pageFriendlyName),                              
'page.pageInfo.flowCode' : 'HRUUN~UF',
'page.pageInfo.language' :  pageLanguage,
'page.pageInfo.lineOfBusiness' : 'General',
'page.pageInfo.viewedUIExperience' : AttApp.Utils.getDevice() == 'Mobile' ? 'Smartphone' : AttApp.Utils.getDevice(),
'page.pageInfo.responsiveWebDesignFlag' : '1',
'page.pageInfo.zipCode' : zipCode,
'page.category.pageFunction' : 'Home Page',
'page.category.applicationName' : '',
'page.category.pageOwnership' : 'Consumer',
'page.pageInfo.breadcrumbs' : brdcrumbdata,
'page.category.siteSection' : '',
'page.category.siteSubSection1' : '',
'page.category.siteSubSection2' : '',
'user.customerType' : '',
'user.login.id':getLoginId() 
};
} else {
var additionaldata = {};
additionaldata = {
'page.pageInfo.friendlyPageName' : getfriendlyName(pageFriendlyName),                              
'page.pageInfo.flowCode' : 'HRUUN~UF',
'page.pageInfo.language' :  pageLanguage,
'page.pageInfo.lineOfBusiness' : 'General',
'page.pageInfo.viewedUIExperience' : AttApp.Utils.getDevice() == 'Mobile' ? 'Smartphone' : AttApp.Utils.getDevice(),
'page.pageInfo.responsiveWebDesignFlag' : '1',
'page.pageInfo.zipCode' : zipCode,
'page.category.pageFunction' : 'Home Page',
'page.category.applicationName' : '',
'page.category.pageOwnership' : 'Consumer',
'page.pageInfo.breadcrumbs' : brdcrumbdata,
'user.customerType' : '',
'user.login.id':getLoginId() 
};
}
var iruPageFlag = '';
if(iruPageFlag != null  && iruPageFlag != ''){
additionaldata['user.account.fan'] = getFANId();
additionaldata['user.account.liabilityType'] = 'IRU';
}
window.pageLoadFired = true;
window.ufLoadCompleted = true;
if(document.readyState === 'complete' && AttApp !== 'undefined' && AttApp.analytics !== 'undefined') {
AttApp.analytics.sendAnalyticsEvent('pageLoad','Page_Load', additionaldata);
AttApp.analytics.sendDelayedAnalytics();
} else {
$att(window).load(function(){
AttApp.analytics.sendAnalyticsEvent('pageLoad','Page_Load', additionaldata);
AttApp.analytics.sendDelayedAnalytics();
});
}				
}
var url=window.location.href;
if((window.teaserCount == undefined || window.teaserCount == 0) && !window.pageLoadFired) {
if(url.includes("international-plans")){
analyticsPageLoad();
}
}
function getColamCookie(name) { 
var value = "; " + document.cookie; 
var parts = value.split("; " + name + "="); 
if (parts.length == 2) 
return parts.pop().split(";").shift(); 
}
function getLoginId(){
var cookieData = decodeURIComponent(getColamCookie("colam_ctn"));
if(cookieData != undefined){
cookieData = cookieData.split(";")[0].split("=")[1];
}
return cookieData;
}			
function getfriendlyName(dta){
if(sessionStorage.getItem('Tesla_IRU_benefits_Info') != null  && sessionStorage.getItem('Tesla_IRU_benefits_Info') != ''){
return "IRU Auth Discount Landing Pg";
}else if(typeof cookieData == "undefined" && sessionStorage.getItem('Tesla_IRU_benefits_Info') != null){
return "IRU UnAuth Discount Landing Pg";
}
return dta;
}
</script>
<!--Start Navigation footer-->
<div class="ge5p_global_styles gn-ds2">
<div id="ge5p_z7">
<footer style="display:none;">
<div id="gn-zone5">
<div id="z5-footer-content" class="container" data-link-position="Footer" data-event-action="linkClick" data-event-code="Link_Click">
<div class="row">
<div id="z5-footer-links" class="span12">
<div id="z5-ftr-col1" class="span12-sm span3 span4-md">
<div><div class="parbase linkContainer section">
<ul class="no-bullet ">
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/stores/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Find a store','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/stores/'}" aria-label="Find a store " target="_self">
<i class="icon-location-pinpoint" aria-hidden="true"></i>
Find a store
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/stores/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Find a store','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/stores/'}" aria-label="Find a store " target="_self">
<i class="icon-location-pinpoint" aria-hidden="true"></i>
Find a store
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/storeappointment/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Make a store appointment','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/storeappointment/'}" aria-label="Make a store appointment " target="_self">
<i class="icon-misc-datetime" aria-hidden="true"></i>
Make a store appointment
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://m.att.com/mRAS/start.rt" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Make a store appointment','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://m.att.com/mRAS/start.rt'}" aria-label="Make a store appointment " target="_self">
<i class="icon-misc-datetime" aria-hidden="true"></i>
Make a store appointment
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/coverage/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Coverage maps','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/coverage/'}" aria-label="Coverage maps " target="_self">
<i class="icon-location-unitedstates" aria-hidden="true"></i>
Coverage maps
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/coverage/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Coverage maps','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/coverage/'}" aria-label="Coverage maps " target="_self">
<i class="icon-location-unitedstates" aria-hidden="true"></i>
Coverage maps
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/support" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Help &amp; info','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/support'}" aria-label="Help &amp; info " target="_self">
<i class="icon-location-unitedstates" aria-hidden="true"></i>
Help &amp; info
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/support" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Help &amp; info','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/support'}" aria-label="Help &amp; info " target="_self">
<i class="icon-location-unitedstates" aria-hidden="true"></i>
Help &amp; info
</a>
</li>
<!-- Language link Motion Point Integration -->
</ul>
</div>
</div>
</div>
<div id="z5-ftr-col2" class="span12-sm span6 span4-md">
<div><div class="parbase linkContainer section">
<ul class="no-bullet ">
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://about.att.com/category/all_news.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'About AT&amp;T','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://about.att.com/category/all_news.html'}" aria-label="About AT&amp;T " target="_self">
About AT&amp;T
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://about.att.com/category/all_news.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'About AT&amp;T','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://about.att.com/category/all_news.html'}" aria-label="About AT&amp;T " target="_self">
<i aria-hidden="true"></i>
About AT&amp;T
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/support/contact-us/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Contact us','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/support/contact-us/'}" aria-label="Contact us " target="_self">
Contact us
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/support/contact-us/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Contact us','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/support/contact-us/'}" aria-label="Contact us " target="_self">
<i aria-hidden="true"></i>
Contact us
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://secure.opinionlab.com/ccc01/o.asp?id=fXJtjaWr" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Feedback','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://secure.opinionlab.com/ccc01/o.asp?id=fXJtjaWr'}" aria-label="Feedback (new window)" target="_blank">
Feedback
<i class="icon-datanetwork-link" aria-hidden="true" aria-label="External Link"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath d='M20.5 17c-.5.6-1.4.7-2 .2-1.1-.9-2.6-.8-3.6.2l-5.8 5.8c-.5.5-.8 1.2-.8 1.9s.3 1.4.8 1.9c1.1 1.1 2.8 1.1 3.8 0l3.2-3.2c.5-.5 1.5-.5 2.1 0s.5 1.5 0 2.1L15 29c-1.1 1.1-2.6 1.7-4 1.7s-2.8-.5-4-1.7c-1.1-1.1-1.7-2.5-1.7-4S6 22.1 7 21l5.6-5.7c2-2 5.3-2.2 7.6-.4.7.6.8 1.5.3 2.1zM29 7c-2.2-2.2-5.8-2.2-8 0l-3.1 3.1c-.5.6-.5 1.5 0 2 .4.4 1 .5 1.4.4.1 0 .1 0 .2-.1 0 0 .1 0 .1-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2l3.3-2.9C24.3 8 26 8 26.9 9.1c1.1 1.1 1.1 2.8 0 3.8l-5.7 5.7c-1 1-2.6 1.1-3.6.2-.6-.5-1.6-.4-2 .2-.5.6-.4 1.6.2 2 1.1.9 2.3 1.3 3.6 1.3 1.4 0 2.9-.5 4-1.6l5.7-5.7c2.1-2.3 2.1-5.8-.1-8z'/%3E%3C/svg%3E"></i>
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://secure.opinionlab.com/ccc01/o.asp?id=fXJtjaWr" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Feedback','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://secure.opinionlab.com/ccc01/o.asp?id=fXJtjaWr'}" aria-label="Feedback (new window)" target="_blank">
<i aria-hidden="true"></i>
Feedback
<i class="icon-datanetwork-link" aria-hidden="true" aria-label="External Link"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath d='M20.5 17c-.5.6-1.4.7-2 .2-1.1-.9-2.6-.8-3.6.2l-5.8 5.8c-.5.5-.8 1.2-.8 1.9s.3 1.4.8 1.9c1.1 1.1 2.8 1.1 3.8 0l3.2-3.2c.5-.5 1.5-.5 2.1 0s.5 1.5 0 2.1L15 29c-1.1 1.1-2.6 1.7-4 1.7s-2.8-.5-4-1.7c-1.1-1.1-1.7-2.5-1.7-4S6 22.1 7 21l5.6-5.7c2-2 5.3-2.2 7.6-.4.7.6.8 1.5.3 2.1zM29 7c-2.2-2.2-5.8-2.2-8 0l-3.1 3.1c-.5.6-.5 1.5 0 2 .4.4 1 .5 1.4.4.1 0 .1 0 .2-.1 0 0 .1 0 .1-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2l3.3-2.9C24.3 8 26 8 26.9 9.1c1.1 1.1 1.1 2.8 0 3.8l-5.7 5.7c-1 1-2.6 1.1-3.6.2-.6-.5-1.6-.4-2 .2-.5.6-.4 1.6.2 2 1.1.9 2.3 1.3 3.6 1.3 1.4 0 2.9-.5 4-1.6l5.7-5.7c2.1-2.3 2.1-5.8-.1-8z'/%3E%3C/svg%3E"></i>
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<!-- Mobile - No language link -->
<!-- Language link Motion Point Integration -->
<li>
<a class="langLink" id="ge5p_z1-change-language" href="javascript:void(0)" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Ver en espa??ol','events.linkPosition':'Footer', 'events.linkDestinationUrl':'javascript:void(0)'}" mporgnav="" data-lang="es" data-href="javascript:void(0)">Ver en espa??ol</a> 
</li>
</ul>
</div>
<div class="parbase linkContainer section">
</div>
</div>
</div>
<div id="z5-ftr-col3" class="span12-sm span3 span4-md">
<div><div class="parbase linkContainer section">
<ul class="ftr-social-links ">
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://twitter.com/att" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Follow us on Twitter','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://twitter.com/att'}" aria-label="Follow us on Twitter (new window)" target="_blank">
<i class="icon-social-twitterL" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="width: 30px;height: 30px;"><style>.st0{fill:#1d2329}</style><g><path class="st0" d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c-.1-8.3-6.8-15-15-15zm0 29C7.3 29 1 22.7 1 15S7.3 1 15 1s14 6.3 14 14-6.3 14-14 14z"/><path class="st0" d="M22.3 9.8c-.6.4-1.2.6-1.9.7-1.1-1.1-2.7-1.2-4.1-.3-.7.5-1.2 1.4-1.2 2.3 0 .2 0 .4.1.6-2.3-.1-4.6-1.3-6.1-3.1-.3.5-.4 1-.4 1.6 0 1 .5 1.9 1.3 2.4-.5 0-.9-.2-1.3-.4 0 1.4 1 2.6 2.3 2.9-.3 0-.5.1-.8.1-.2 0-.4 0-.5-.1.4 1.2 1.5 2 2.8 2-1 .8-2.3 1.3-3.8 1.3h-.4c1.3.8 2.9 1.3 4.6 1.3 4.7 0 8.4-3.8 8.4-8.3v-.5c.6-.4 1.1-.9 1.4-1.5-.5.2-1.1.4-1.7.4.7-.1 1.1-.7 1.3-1.4z"/></g></svg>
</i>
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://twitter.com/att" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Follow us on Twitter','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://twitter.com/att'}" aria-label="Follow us on Twitter (new window)" target="_blank">
<i class="icon-social-twitterL" aria-hidden="true">
<svg height="30" width="30"><path fill="#1d2329" d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c-.1-8.3-6.8-15-15-15zm0 29C7.3 29 1 22.7 1 15S7.3 1 15 1s14 6.3 14 14-6.3 14-14 14z M22.3 9.8c-.6.4-1.2.6-1.9.7-1.1-1.1-2.7-1.2-4.1-.3-.7.5-1.2 1.4-1.2 2.3 0 .2 0 .4.1.6-2.3-.1-4.6-1.3-6.1-3.1-.3.5-.4 1-.4 1.6 0 1 .5 1.9 1.3 2.4-.5 0-.9-.2-1.3-.4 0 1.4 1 2.6 2.3 2.9-.3 0-.5.1-.8.1-.2 0-.4 0-.5-.1.4 1.2 1.5 2 2.8 2-1 .8-2.3 1.3-3.8 1.3h-.4c1.3.8 2.9 1.3 4.6 1.3 4.7 0 8.4-3.8 8.4-8.3v-.5c.6-.4 1.1-.9 1.4-1.5-.5.2-1.1.4-1.7.4.7-.1 1.1-.7 1.3-1.4z"></path></svg>
</i>
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.facebook.com/ATT" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Follow us on Facebook','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.facebook.com/ATT'}" aria-label="Follow us on Facebook (new window)" target="_blank">
<i class="icon-social-facebookL" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="width: 30px;height: 30px;"><path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c-.1-8.3-6.8-15-15-15zm0 29C7.3 29 1 22.7 1 15S7.2.9 15 .9s14 6.3 14 14C29 22.7 22.7 29 15 29z"/><path d="M15.9 10.9c0-.6.3-.7.6-.7h1.6V7.8h-2.2c-1.6-.1-2.9 1.1-3 2.7v2h-1.5V15h1.5v7.2h3V15h2l.2-2.5h-2.2v-1.6z"/></svg>
</i>
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.facebook.com/ATT" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Follow us on Facebook','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.facebook.com/ATT'}" aria-label="Follow us on Facebook (new window)" target="_blank">
<i class="icon-social-facebookL" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="width: 30px;height: 30px;"><path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c-.1-8.3-6.8-15-15-15zm0 29C7.3 29 1 22.7 1 15S7.2.9 15 .9s14 6.3 14 14C29 22.7 22.7 29 15 29z"/><path d="M15.9 10.9c0-.6.3-.7.6-.7h1.6V7.8h-2.2c-1.6-.1-2.9 1.1-3 2.7v2h-1.5V15h1.5v7.2h3V15h2l.2-2.5h-2.2v-1.6z"/></svg>
</i>
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.instagram.com/att/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Follow us on Instagram','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.instagram.com/att/'}" aria-label="Follow us on Instagram (new window)" target="_blank">
<i class="icon-social-instagramL" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="width: 30px;height: 30px;"><path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c-.1-8.3-6.8-15-15-15zm0 29C7.3 29 1 22.7 1 15S7.2.9 15 .9s14 6.3 14 14C29 22.7 22.7 29 15 29zm0-19.8h2.8c.4 0 .9.1 1.3.2.6.2 1.1.7 1.3 1.3.2.4.2.9.2 1.3v5.6c0 .4-.1.9-.2 1.3-.2.6-.7 1.1-1.3 1.3-.4.2-.9.2-1.3.2h-5.6c-.4 0-.9-.1-1.3-.2-.6-.2-1.1-.7-1.3-1.3-.2-.4-.2-.9-.2-1.3v-2.8V12c0-.4.1-.9.2-1.3.2-.6.7-1.1 1.3-1.3.4-.2.9-.2 1.3-.2H15m0-1.3h-2.9c-.6 0-1.2.1-1.7.3-.9.4-1.7 1.1-2.1 2.1-.1.6-.3 1.2-.3 1.8v5.8c0 .6.1 1.2.3 1.7.4.9 1.1 1.7 2.1 2.1.5.2 1.1.3 1.7.3h5.8c.6 0 1.2-.1 1.7-.3.9-.4 1.7-1.1 2.1-2.1.2-.5.3-1.1.3-1.7V15v-2.9c0-.6-.1-1.2-.3-1.7-.4-.9-1.1-1.7-2.1-2.1-.4-.2-1.1-.3-1.7-.3-.7-.1-1-.1-2.9-.1zm0 3.5c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6c0-1.9-1.6-3.6-3.6-3.6zm0 6c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3c.1 1.2-1 2.3-2.3 2.3zm4.7-6.2c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8s.8.3.8.8z"/></svg>
</i>
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.instagram.com/att/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Follow us on Instagram','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.instagram.com/att/'}" aria-label="Follow us on Instagram (new window)" target="_blank">
<i class="icon-social-instagramL" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="width: 30px;height: 30px;"><path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c-.1-8.3-6.8-15-15-15zm0 29C7.3 29 1 22.7 1 15S7.2.9 15 .9s14 6.3 14 14C29 22.7 22.7 29 15 29zm0-19.8h2.8c.4 0 .9.1 1.3.2.6.2 1.1.7 1.3 1.3.2.4.2.9.2 1.3v5.6c0 .4-.1.9-.2 1.3-.2.6-.7 1.1-1.3 1.3-.4.2-.9.2-1.3.2h-5.6c-.4 0-.9-.1-1.3-.2-.6-.2-1.1-.7-1.3-1.3-.2-.4-.2-.9-.2-1.3v-2.8V12c0-.4.1-.9.2-1.3.2-.6.7-1.1 1.3-1.3.4-.2.9-.2 1.3-.2H15m0-1.3h-2.9c-.6 0-1.2.1-1.7.3-.9.4-1.7 1.1-2.1 2.1-.1.6-.3 1.2-.3 1.8v5.8c0 .6.1 1.2.3 1.7.4.9 1.1 1.7 2.1 2.1.5.2 1.1.3 1.7.3h5.8c.6 0 1.2-.1 1.7-.3.9-.4 1.7-1.1 2.1-2.1.2-.5.3-1.1.3-1.7V15v-2.9c0-.6-.1-1.2-.3-1.7-.4-.9-1.1-1.7-2.1-2.1-.4-.2-1.1-.3-1.7-.3-.7-.1-1-.1-2.9-.1zm0 3.5c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6c0-1.9-1.6-3.6-3.6-3.6zm0 6c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3c.1 1.2-1 2.3-2.3 2.3zm4.7-6.2c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8s.8.3.8.8z"/></svg>
</i>
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.linkedin.com/company/att/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Follow us on Linkedin','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.linkedin.com/company/att/'}" aria-label="Follow us on Linkedin (new window)" target="_blank">
<i class="icon-social-linkedinL" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="width: 30px;height: 30px;"><path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c-.1-8.3-6.8-15-15-15zm0 29C7.3 29 1 22.7 1 15S7.2.9 15 .9s14 6.3 14 14C29 22.7 22.7 29 15 29z"></path><path d="M9 11.8h3v8.8H9v-8.8zm1.4-4.3c-.8-.1-1.5.5-1.5 1.3V9c-.1.8.6 1.5 1.4 1.6h.2c.8.1 1.5-.6 1.6-1.4V9c.1-.8-.5-1.5-1.3-1.6-.2.1-.3.1-.4.1zm8.6 4.1c-1.1 0-2.1.5-2.6 1.4v-1.2h-2.9v8.8h2.9v-4.9c0-.2 0-.4.1-.7.2-.7.9-1.1 1.6-1.1 1 0 1.4.7 1.4 2v4.8h2.8v-5.1c.1-2.8-1.3-4-3.3-4z"></path></svg>
</i>
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.linkedin.com/company/att/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Follow us on Linkedin','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.linkedin.com/company/att/'}" aria-label="Follow us on Linkedin (new window)" target="_blank">
<i class="icon-social-linkedinL" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="width: 30px;height: 30px;"><path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c-.1-8.3-6.8-15-15-15zm0 29C7.3 29 1 22.7 1 15S7.2.9 15 .9s14 6.3 14 14C29 22.7 22.7 29 15 29z"></path><path d="M9 11.8h3v8.8H9v-8.8zm1.4-4.3c-.8-.1-1.5.5-1.5 1.3V9c-.1.8.6 1.5 1.4 1.6h.2c.8.1 1.5-.6 1.6-1.4V9c.1-.8-.5-1.5-1.3-1.6-.2.1-.3.1-.4.1zm8.6 4.1c-1.1 0-2.1.5-2.6 1.4v-1.2h-2.9v8.8h2.9v-4.9c0-.2 0-.4.1-.7.2-.7.9-1.1 1.6-1.1 1 0 1.4.7 1.4 2v4.8h2.8v-5.1c.1-2.8-1.3-4-3.3-4z"></path></svg>
</i>
</a>
</li>
<!-- Language link Motion Point Integration -->
</ul>
</div>
<div class="parbase linkContainer section">
<ul class="no-bullet ">
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/techbuzz/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TechBuzz blog','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/techbuzz/'}" aria-label="TechBuzz blog " target="_self">
<i class="icon-bubble-speech" aria-hidden="true"></i>
TechBuzz blog
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/techbuzz/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'TechBuzz blog','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/techbuzz/'}" aria-label="TechBuzz blog " target="_self">
<i class="icon-bubble-speech" aria-hidden="true"></i>
TechBuzz blog
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://forums.att.com/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Community forums','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://forums.att.com/'}" aria-label="Community forums " target="_self">
<i class="icon-bubble-forums" aria-hidden="true"></i>
Community forums
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://forums.att.com/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Community forums','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://forums.att.com/'}" aria-label="Community forums " target="_self">
<i class="icon-bubble-forums" aria-hidden="true"></i>
Community forums
</a>
</li>
<!-- Language link Motion Point Integration -->
</ul>
</div>
<div class="parbase linkContainer section">
</div>
</div>           
</div>
<div class="clearfix"></div>
</div>
</div>
<div id="z5-footer-legal" class="row">
<div class="span12">
<div><div class="parbase linkContainer section">
<ul class="ftr-legal-links clear-fix">
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/sitemap/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Site map','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/sitemap/'}" aria-label="Site map " target="_self">
Site map
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/sitemap/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Site map','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/sitemap/'}" aria-label="Site map " target="_self">
<i aria-hidden="true"></i>
Site map
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://att.jobs/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Careers','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://att.jobs/'}" aria-label="Careers " target="_self">
Careers
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://att.jobs/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Careers','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://att.jobs/'}" aria-label="Careers " target="_self">
<i aria-hidden="true"></i>
Careers
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/legal/terms.attWebsiteTermsOfUse.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Terms of use','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/legal/terms.attWebsiteTermsOfUse.html'}" aria-label="Terms of use " target="_self">
Terms of use
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/gen-mobile/general?pid=11561" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Terms of use','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/gen-mobile/general?pid=11561'}" aria-label="Terms of use " target="_self">
<i aria-hidden="true"></i>
Terms of use
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/accessibility" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessibility','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/accessibility'}" aria-label="Accessibility " target="_self">
Accessibility
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/accessibility" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Accessibility','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/accessibility'}" aria-label="Accessibility " target="_self">
<i aria-hidden="true"></i>
Accessibility
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/gen/public-affairs?pid=20879" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Broadband details','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/gen/public-affairs?pid=20879'}" aria-label="Broadband details " target="_self">
Broadband details
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/gen/public-affairs?pid=20879" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Broadband details','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/gen/public-affairs?pid=20879'}" aria-label="Broadband details " target="_self">
<i aria-hidden="true"></i>
Broadband details
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://www.att.com/legal/legal-policy-center.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Legal policy center','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/legal/legal-policy-center.html'}" aria-label="Legal policy center " target="_self">
Legal policy center
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://m.att.com/shopmobile/legal/legal-policy-center.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Legal policy center','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://m.att.com/shopmobile/legal/legal-policy-center.html'}" aria-label="Legal policy center " target="_self">
<i aria-hidden="true"></i>
Legal policy center
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://about.att.com/csr/home/privacy/full_privacy_policy.html#choice" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Advertising choices','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://about.att.com/csr/home/privacy/full_privacy_policy.html#choice'}" aria-label="Advertising choices (new window)" target="_blank">
Advertising choices
<i class="icon-datanetwork-link" aria-hidden="true" aria-label="External Link"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath d='M20.5 17c-.5.6-1.4.7-2 .2-1.1-.9-2.6-.8-3.6.2l-5.8 5.8c-.5.5-.8 1.2-.8 1.9s.3 1.4.8 1.9c1.1 1.1 2.8 1.1 3.8 0l3.2-3.2c.5-.5 1.5-.5 2.1 0s.5 1.5 0 2.1L15 29c-1.1 1.1-2.6 1.7-4 1.7s-2.8-.5-4-1.7c-1.1-1.1-1.7-2.5-1.7-4S6 22.1 7 21l5.6-5.7c2-2 5.3-2.2 7.6-.4.7.6.8 1.5.3 2.1zM29 7c-2.2-2.2-5.8-2.2-8 0l-3.1 3.1c-.5.6-.5 1.5 0 2 .4.4 1 .5 1.4.4.1 0 .1 0 .2-.1 0 0 .1 0 .1-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2l3.3-2.9C24.3 8 26 8 26.9 9.1c1.1 1.1 1.1 2.8 0 3.8l-5.7 5.7c-1 1-2.6 1.1-3.6.2-.6-.5-1.6-.4-2 .2-.5.6-.4 1.6.2 2 1.1.9 2.3 1.3 3.6 1.3 1.4 0 2.9-.5 4-1.6l5.7-5.7c2.1-2.3 2.1-5.8-.1-8z'/%3E%3C/svg%3E"></i>
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://about.att.com/csr/home/privacy/full_privacy_policy.html#choice" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Advertising choices','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://about.att.com/csr/home/privacy/full_privacy_policy.html#choice'}" aria-label="Advertising choices (new window)" target="_blank">
<i aria-hidden="true"></i>
Advertising choices
<i class="icon-datanetwork-link" aria-hidden="true" aria-label="External Link"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath d='M20.5 17c-.5.6-1.4.7-2 .2-1.1-.9-2.6-.8-3.6.2l-5.8 5.8c-.5.5-.8 1.2-.8 1.9s.3 1.4.8 1.9c1.1 1.1 2.8 1.1 3.8 0l3.2-3.2c.5-.5 1.5-.5 2.1 0s.5 1.5 0 2.1L15 29c-1.1 1.1-2.6 1.7-4 1.7s-2.8-.5-4-1.7c-1.1-1.1-1.7-2.5-1.7-4S6 22.1 7 21l5.6-5.7c2-2 5.3-2.2 7.6-.4.7.6.8 1.5.3 2.1zM29 7c-2.2-2.2-5.8-2.2-8 0l-3.1 3.1c-.5.6-.5 1.5 0 2 .4.4 1 .5 1.4.4.1 0 .1 0 .2-.1 0 0 .1 0 .1-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2l3.3-2.9C24.3 8 26 8 26.9 9.1c1.1 1.1 1.1 2.8 0 3.8l-5.7 5.7c-1 1-2.6 1.1-3.6.2-.6-.5-1.6-.4-2 .2-.5.6-.4 1.6.2 2 1.1.9 2.3 1.3 3.6 1.3 1.4 0 2.9-.5 4-1.6l5.7-5.7c2.1-2.3 2.1-5.8-.1-8z'/%3E%3C/svg%3E"></i>
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="http://about.att.com/sites/privacy_policy" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Privacy center (updated)','events.linkPosition':'Footer', 'events.linkDestinationUrl':'http://about.att.com/sites/privacy_policy'}" aria-label="Privacy center (updated) " target="_self">
Privacy center (updated)
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://www.att.com/gen-mobile/privacy-policy?pid=2506" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Privacy center (updated)','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://www.att.com/gen-mobile/privacy-policy?pid=2506'}" aria-label="Privacy center (updated) " target="_self">
<i aria-hidden="true"></i>
Privacy center (updated)
</a>
</li>
<!-- Language link Motion Point Integration -->
<!-- Desktop - No language link -->
<li class="hide-sm hide-xsm">
<a href="https://about.att.com/csr/home/privacy/rights_choices.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Do Not Sell My Personal Information','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://about.att.com/csr/home/privacy/rights_choices.html'}" aria-label="Do Not Sell My Personal Information " target="_self">
Do Not Sell My Personal Information
</a>
</li>
<!-- Mobile - No language link -->
<li class="hide-lg hide-md">
<a href="https://about.att.com/csr/home/privacy/rights_choices.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{'events.linkName':'Do Not Sell My Personal Information','events.linkPosition':'Footer', 'events.linkDestinationUrl':'https://about.att.com/csr/home/privacy/rights_choices.html'}" aria-label="Do Not Sell My Personal Information " target="_self">
<i aria-hidden="true"></i>
Do Not Sell My Personal Information
</a>
</li>
<!-- Language link Motion Point Integration -->
</ul>
</div>
</div>
</div>
</div>
<div id="z5-footer-copyright" class="row">
<div class="span12">
<div class="span9 span12-xsm span12-sm span9-md pull-left">
<div><div class="text parbase section">
<div>
<p>??2020 AT&amp;T Intellectual Property. All rights reserved.</p>
</div>
</div>
</div>
</div>                  
</div>
</div>
</div>
</div>
</footer>
</div>
</div>
<script type="text/javascript">
/* TouchCommerce script starts */
var isTouchCommerceChatLoaded = false;
var isTouchCommerceChatInitRequired = false;
var touchCommerceChatLandingListener = {
onPageLanding: function (evt) {
isTouchCommerceChatLoaded = true;
if (isTouchCommerceChatInitRequired && typeof Inq !== "undefined" && Inq !== null) {
try{
Inq.reinitChat();
}catch(e){
console.error("Error while calling TC chat"+e);
}
isTouchCommerceChatInitRequired = false;
}
}
};
var InqRegistry = {chatListeners: [touchCommerceChatLandingListener]};
/* TouchCommerce script ends */
</script>
<script src="/scripts/adobe/virtual/detm-container-ftr.js"></script>
<!--End: Navigation footer-->
<script type="text/javascript"  src="/udDDNRJ7x/y/N/SiZk_utWGUW4-HIE/DEw16VhzOiu1/O0lncRp8PRA/CBt8H0/smEgcC"></script><link rel="stylesheet" type="text/css"  href="/_sec/cp_challenge/sec-3-8.css">
          <script  src="/_sec/cp_challenge/sec-cpt-3-8.js" async defer></script>
          <div id="sec-overlay" style="display:none;">
          <div id="sec-container">
          </div>
        </div></body>
</html>