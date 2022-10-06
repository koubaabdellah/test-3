/*!*
 *
 * Page 2 2015 js
 *
 */
jQuery(function(a){"use strict";function b(){a(".side-full").each(function(){var b=a(this).innerHeight(),d=a(this).find(".csrpagetwoslideraspire .featured-content").parent();c>640?d.height(b):d.css("height","auto")})}var c=window.innerWidth;a("html").hasClass("lt-ie9");a(document).ready(function(){b()}),a(window).resize(function(){c=window.innerWidth,b()})});