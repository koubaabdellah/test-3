"use strict";!function(){$(document).ready(function(){$(".closeModalEvent")&&$(".closeModalEvent").click(function(){var e=$(".section-modal-legal-disclaimer"),s=$(".section-black-modal-BG");e.removeClass("show"),s.removeClass("show"),e.addClass("hide"),s.addClass("hide")});var e=$("#linkReadlySubpage");e&&e.click(function(){var e=$("#readly")[0],s=e.getElementsByClassName("section-modal-legal-disclaimer")[0],l=e.getElementsByClassName("section-black-modal-BG")[0];s.classList.remove("hide"),l.classList.remove("hide"),s.classList.add("show"),l.classList.add("show"),s.setAttribute("style","z-index: 99999"),l.setAttribute("style","z-index: 99998"),$(".mobile")[0]&&$("html, body").animate({scrollTop:0},"fast")});var s=$("#linkFullscreenSubpage");s&&s.click(function(){var e=$("#fullscreen")[0],s=e.getElementsByClassName("section-modal-legal-disclaimer")[0],l=e.getElementsByClassName("section-black-modal-BG")[0];s.classList.remove("hide"),l.classList.remove("hide"),s.classList.add("show"),l.classList.add("show"),s.setAttribute("style","z-index: 99999"),l.setAttribute("style","z-index: 99998"),$(".mobile")[0]&&$("html, body").animate({scrollTop:0},"fast")});var l=$("#linkEventAccessSubpage");l&&l.click(function(){var e=$("#eventaccess")[0],s=e.getElementsByClassName("section-modal-legal-disclaimer")[0],l=e.getElementsByClassName("section-black-modal-BG")[0];s.classList.remove("hide"),l.classList.remove("hide"),s.classList.add("show"),l.classList.add("show"),s.setAttribute("style","z-index: 99999"),l.setAttribute("style","z-index: 99998"),$(".mobile")[0]&&$("html, body").animate({scrollTop:0},"fast")})})}();