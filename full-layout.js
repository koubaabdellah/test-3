/*!*
 *
 * Full layout js - 171001
 *
 */
jQuery(function(a){"use strict";var b=(window.outerWidth,a("html").hasClass("lt-ie9"));b&&a('[class*="bg-img-"]').css({backgroundSize:"cover"}),a(document).ready(function(){a(".page-2-2015 .slick-regular").closest(".csrpagetwoslideraspire").css("position","relative"),a(window).scroll(function(){a(this).scrollTop()>100?a(".scroll-top").fadeIn():a(".scroll-top").fadeOut()}),a(".scroll-top a").click(function(b){b.preventDefault(),a("body,html").animate({scrollTop:0},800)}),a(".twitter-follow-button").length>0&&!function(a,b,c){var d,e=a.getElementsByTagName(b)[0],f=/^http:/.test(a.location)?"http":"https";a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src=f+"://platform.twitter.com/widgets.js",e.parentNode.insertBefore(d,e))}(document,"script","twitter-wjs")})});