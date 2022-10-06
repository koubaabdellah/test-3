/*!*
 *
 * Easy Responsive Tabs Plugin
 * https://github.com/samsono/Easy-Responsive-Tabs-to-Accordion
 * Author: Samson.Onna <Email : samson3d@gmail.com> 
 *
 */
!function(a){a.fn.extend({easyResponsiveTabs:function(b){var c={type:"default",width:"auto",fit:!0,closed:!1,tabidentify:"",activetab_bg:"white",inactive_bg:"#F5F5F5",active_border_color:"#c1c1c1",active_content_border_color:"#c1c1c1",activate:function(){}},b=a.extend(c,b),d=b,e=d.type,f=d.fit,g=d.width,h="vertical",i="accordion",j=window.location.hash,k=!(!window.history||!history.replaceState);a(this).bind("tabactivate",function(a,c){"function"==typeof b.activate&&b.activate.call(c,a)}),this.each(function(){function c(){e==h&&d.addClass("resp-vtabs").addClass(b.tabidentify),1==f&&d.css({width:"100%",margin:"0px"}),e==i&&(d.addClass("resp-easy-accordion").addClass(b.tabidentify),d.find(".resp-tabs-list").css("display","none"))}var d=a(this),l=d.find("ul.resp-tabs-list."+b.tabidentify),m=d.attr("id");d.find("ul.resp-tabs-list."+b.tabidentify+" li").addClass("resp-tab-item").addClass(b.tabidentify),d.css({display:"block",width:g}),"vertical"==b.type&&l.css("margin-top","3px"),d.find(".resp-tabs-container."+b.tabidentify).css("border-color",b.active_content_border_color),d.find(".resp-tabs-container."+b.tabidentify+" > div").addClass("resp-tab-content").addClass(b.tabidentify),c();var n;d.find(".resp-tab-content."+b.tabidentify).before("<h2 class='resp-accordion "+b.tabidentify+"' role='tab'><span class='resp-arrow'></span></h2>"),d.find(".resp-tab-content."+b.tabidentify).prev("h2").css({"background-color":b.inactive_bg,"border-color":b.active_border_color});var o=0;d.find(".resp-accordion").each(function(){n=a(this);var c=d.find(".resp-tab-item:eq("+o+")"),e=d.find(".resp-accordion:eq("+o+")");e.append(c.html()),e.data(c.data()),n.attr("aria-controls",b.tabidentify+"_tab_item-"+o),o++});var p,q=0;d.find(".resp-tab-item").each(function(){$tabItem=a(this),$tabItem.attr("aria-controls",b.tabidentify+"_tab_item-"+q),$tabItem.attr("role","tab"),$tabItem.css({"background-color":b.inactive_bg,"border-color":"none"});var c=0;d.find(".resp-tab-content."+b.tabidentify).each(function(){p=a(this),p.attr("aria-labelledby",b.tabidentify+"_tab_item-"+c).css({"border-color":b.active_border_color}),c++}),q++});var r=0;if(""!=j){var s=j.match(new RegExp(m+"([0-9]+)"));null!==s&&2===s.length&&(r=parseInt(s[1],10)-1,r>q&&(r=0))}a(d.find(".resp-tab-item."+b.tabidentify)[r]).addClass("resp-tab-active").css({"background-color":b.activetab_bg,"border-color":b.active_border_color}),b.closed===!0||"accordion"===b.closed&&!l.is(":visible")||"tabs"===b.closed&&l.is(":visible")||(a(d.find(".resp-accordion."+b.tabidentify)[r]).addClass("resp-tab-active").css({"background-color":b.activetab_bg+" !important","border-color":b.active_border_color,background:"none"}),a(d.find(".resp-tab-content."+b.tabidentify)[r]).addClass("resp-tab-content-active").addClass(b.tabidentify).attr("style","display:block")),d.find("[role=tab]").each(function(){var c=a(this);c.click(function(){var c=a(this),e=c.attr("aria-controls");if(c.hasClass("resp-accordion")&&c.hasClass("resp-tab-active"))return d.find(".resp-tab-content-active."+b.tabidentify).slideUp("",function(){a(this).addClass("resp-accordion-closed")}),c.removeClass("resp-tab-active").css({"background-color":b.inactive_bg,"border-color":"none"}),!1;if(!c.hasClass("resp-tab-active")&&c.hasClass("resp-accordion")?(d.find(".resp-tab-active."+b.tabidentify).removeClass("resp-tab-active").css({"background-color":b.inactive_bg,"border-color":"none"}),d.find(".resp-tab-content-active."+b.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"),d.find("[aria-controls="+e+"]").addClass("resp-tab-active").css({"background-color":b.activetab_bg,"border-color":b.active_border_color}),d.find(".resp-tab-content[aria-labelledby = "+e+"]."+b.tabidentify).slideDown().addClass("resp-tab-content-active")):(d.find(".resp-tab-active."+b.tabidentify).removeClass("resp-tab-active").css({"background-color":b.inactive_bg,"border-color":"none"}),d.find(".resp-tab-content-active."+b.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"),d.find("[aria-controls="+e+"]").addClass("resp-tab-active").css({"background-color":b.activetab_bg,"border-color":b.active_border_color}),d.find(".resp-tab-content[aria-labelledby = "+e+"]."+b.tabidentify).addClass("resp-tab-content-active").attr("style","display:block")),c.trigger("tabactivate",c),k){var f=window.location.hash,g=e.split("tab_item-"),h=m+(parseInt(g[1],10)+1).toString();if(""!=f){var i=new RegExp(m+"[0-9]+");h=null!=f.match(i)?f.replace(i,h):f+"|"+h}else h="#"+h;history.replaceState(null,null,h)}})}),a(window).resize(function(){d.find(".resp-accordion-closed").removeAttr("style")})})}})}(jQuery),/*!*
 *
 * Accelerator js 171001
 *
 */
jQuery(function(a){"use strict";var b=window.outerWidth,c=a("html").hasClass("lt-ie9");a(document).ready(function(){c&&a(".benefits, .advisors").css({backgroundSize:"cover"}),(b>995||c)&&a("div.callout-wrapper").click(function(b){var c=a(this);c.hasClass("open")?c.animate({height:"40px"},500,function(){c.removeClass("open")}):(b.preventDefault(),c.animate({height:"320px"},500,function(){c.addClass("open")}))}),a(window).scroll(function(){a(this).scrollTop()>100?a(".scroll-top").fadeIn():a(".scroll-top").fadeOut()}),a(".scroll-top a").click(function(b){b.preventDefault(),a("body,html").animate({scrollTop:0},800)}),a(".timelinetabs").easyResponsiveTabs({type:"default",width:"auto",fit:!0,tabidentify:"timeline_tab"}),a(".twitter-follow-button").length>0&&!function(a,b,c){var d,e=a.getElementsByTagName(b)[0],f=/^http:/.test(a.location)?"http":"https";a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src=f+"://platform.twitter.com/widgets.js",e.parentNode.insertBefore(d,e))}(document,"script","twitter-wjs")})});