"use strict";
! function() {
	$(document).ready(function() {
		function e(e) {
			$("body").css("overflow", "hidden"), $(".thx-desktop-scroll").css("perspective", "none"), $(".thx-desktop-scroll").css("transform-style", "unset"), $(".top-container").removeClass("parallax-container"), $(".full-container").removeClass("parallax-container");
			var s = e.getElementsByClassName("section-modal-legal-disclaimer")[0],
				l = e.getElementsByClassName("section-black-modal-BG")[0];
			s.classList.remove("hide"), l.classList.remove("hide"), s.classList.add("show"), l.classList.add("show"), s.setAttribute("style", "z-index: 99999"), l.setAttribute("style", "z-index: 99998"), $(".mobile")[0] && $("html, body").animate({
				scrollTop: 0
			}, "fast")
		}
		var s = $("#learn-more-button");
		s && s.click(function(s) {
			s.preventDefault(), e($("#legal-modal-tiers")[0])
		});
		var s = $("#redeem-tickets-link");
		s && s.click(function(s) {
			s.preventDefault(), e($("#app-modal")[0])
		}), $(".closeModalEvent") && $(".closeModalEvent").click(function(e) {
			$("body").css("overflow", "inherit");
			var s = $(".section-modal-legal-disclaimer"),
				l = $(".section-black-modal-BG");
			s.removeClass("show"), l.removeClass("show"), s.addClass("hide"), l.addClass("hide"), $(".thx-desktop-scroll").css("perspective", "1px"), $(".thx-desktop-scroll").css("transform-style", "preserve-3d"), $(".top-container").addClass("parallax-container"), $(".full-container").addClass("parallax-container"), e.preventDefault()
		})
	})
}();
