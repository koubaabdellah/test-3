var data;
var isMobile = false;

if (location.search.indexOf('nomobile') === -1) {
	(function(a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) isMobile = true
	})(navigator.userAgent || navigator.vendor || window.opera);
}

$(document).ready(function() {

	var mydata = [];
	$.ajax({
		url: 'benefits-table-data.json',
		async: false,
		dataType: 'json',
		success: function(json) {
			mydata = json;
		}
	})
	var json = mydata;
	data = json;
	var tr;

	//if (isMobile) {
	//MOBILE TABLE
	for (var key in json) {
		var idKey = key.replace(/ /g, "_");
		idKey = idKey.replace('&', '');
		tr = $('<tr/>');
		tr.append("<td colspan='6' class='section-header'>" + key + "</td>");
		$('#mobile-table').append(tr);
		tr = $('<tr/>');

		for (var i = 0; i < json[key].length; i++) {
			tr = $('<tr/>');
			tr.append("<td colspan='6' class='feature'><span>" + json[key][i].User_Name + "</span><button id='" + idKey + '-' + i + "' class='tooltip-mobile collapsed gray-arrow' data-toggle='collapse' data-target='#tooltip-" + idKey + '-' + i + "'></button><div id='tooltip-" + idKey + '-' + i + "' class='collapse tooltip-container'>" + json[key][i].tooltip + "</div></td>");
			//tr.append("<td colspan='3' class='feature'>" + json[key][i].User_Name + "</td>");
			$('#mobile-table').append(tr);

			tr = $('<tr/>');
			var appends = [];
			var selectors = '';

			if (json[key][i].blue == "true") {
				selectors += " blue-selected"
				if (json[key][i].circleText == "true") {
					appends.push("<td colspan='2' class='blue activeblue'><div class='small-circle selected' id='blue-circle'></div>" + "<p>" + json[key][i].blueText + "</p></td>");
				} else {
					appends.push("<td colspan='2' class='blue activeblue'><div class='small-circle selected' id='blue-circle'></div></td>");
				}
			} else {
				appends.push("<td colspan='2' class='blue'><div></div></td>");
			}

			if (json[key][i].gold == "true") {
				selectors += " gold-selected"
				if (json[key][i].circleText == "true") {
					appends.push("<td colspan='2' class='gold activegold'><div class='small-circle selected' id='gold-circle'></div>" + "<p>" + json[key][i].goldText + "</p></td>");
				} else {
					appends.push("<td colspan='2' class='gold activegold'><div class='small-circle selected' id='gold-circle'></div></td>");
				}
			} else {
				appends.push("<td colspan='2' class='gold'><div></div></td>");
			}

			if (json[key][i].platinum == "true") {
				selectors += " platinum-selected"
				if (json[key][i].circleText == "true") {
					appends.push("<td colspan='2' class='platinum activeplatinum'><div class='small-circle selected' id='platinum-circle'></div>" + "<p>" + json[key][i].platinumText + "</p></td>");
				} else {
					appends.push("<td colspan='2' class='platinum activeplatinum'><div class='small-circle selected' id='platinum-circle'></div></td>");
				}
			} else {
				appends.push("<td colspan='2' class='platinum'><div></div></td>");
			}

			appends.forEach(function(pSelector) {
				tr.append(pSelector);
			});

			$('#mobile-table').append(tr);
		}
	}
	//}
	//else {  //DESKTOP TABLE

	for (var key in json) {
		var idKey = key.replace(/ /g, "_");
		idKey = idKey.replace('&', '');
		tr = $('<tr/>');
		tr.append("<td colspan='6' id='" + idKey + " ' class='section-header'>" + key);
		//tr.append("<td></td><td></td><td></td><td></td>");
		//var newtr = "<div id='"+ idKey +"' class='section-header'><span>" + key + "</span></div>";
		$('#desktop-table').append(tr);

		for (var i = 0; i < json[key].length; i++) {
			tr = $('<tr/>');
			var appends = [];
			var selectors = '';

			if (json[key][i].blue == "true") {
				selectors += " blue-selected"
				if (json[key][i].circleText == "true") {
					appends.push("<td class='blue activeblue'><div class='small-circle selected' id='blue-circle'></div>" + "<p>" + json[key][i].blueText + "</p></td>");
				} else {
					appends.push("<td class='blue activeblue'><div class='small-circle selected' id='blue-circle'></div></td>");
				}
			} else {
				appends.push("<td class='blue'><div></div></td>");
			}

			if (json[key][i].gold == "true") {
				selectors += " gold-selected"
				if (json[key][i].circleText == "true") {
					appends.push("<td class='gold activegold'><div class='small-circle selected' id='gold-circle'></div>" + "<p>" + json[key][i].goldText + "</p></td>");
				} else {
					appends.push("<td class='gold activegold'><div class='small-circle selected' id='gold-circle'></div></td>");
				}
			} else {
				appends.push("<td class='gold'><div></div></td>");
			}

			if (json[key][i].platinum == "true") {
				selectors += " platinum-selected"
				if (json[key][i].circleText == "true") {
					appends.push("<td class='platinum activeplatinum'><div class='small-circle selected' id='platinum-circle'></div>" + "<p>" + json[key][i].platinumText + "</p></td>");
				} else {
					appends.push("<td class='platinum activeplatinum'><div class='small-circle selected' id='platinum-circle'></div></td>");
				}
			} else {
				appends.push("<td class='platinum'><div></div></td>");
			}

			tr.append("<td  colspan='3' class='feature " + selectors + "'><div class='innerWrap innerWrap-" + idKey + '-' + i + "'><div class='description'>" + json[key][i].User_Name + "</div><div id=" + idKey + '-' + i + " class='advice' data-advice-id=" + idKey + '-' + i + ">?</div><div class='tooltip tooltip-" + idKey + '-' + i + "'>" + json[key][i].tooltip + "</div></div></td>");
			appends.forEach(function(pSelector) {
				tr.append(pSelector);
			});

			$('#desktop-table').append(tr);
		}

	}
	//}
	//change item ATT-MORE name to

	/**
	 * Begin FAQ animation code
	 */
	$('.faq-container .tooltip').on("click",
		function() {
			let $this = $(this),
				$answerElement = $this.next(),
				$visibleAnswer = $('.faq-answer:visible'),
				$visibleTooltip = $visibleAnswer.prev();

			$visibleAnswer.slideUp('fast', function() {
				$visibleTooltip.rotate({
					endDeg: 0,
					duration: 0.3,
					persist: true
				});
				$visibleTooltip.text('+').addClass('collapsed');
			});

			if ($this.hasClass('collapsed')) {
				$(this).rotate({
					endDeg: 45,
					duration: 0.3,
					persist: true
				});
				$answerElement.slideDown("fast", function() {
					$this.removeClass('collapsed');
				});
			} else {
				$answerElement.slideUp("fast", function() {
					$this.text('+').addClass('collapsed');
				});
			}
		}
	);
	/**
	 * End FAQ animation code
	 */

	getSettings("blue");

	function resetbenefits() {
		$(".activeblue").removeClass("active-benefit");
		$(".activegold").removeClass("active-benefit");
		$(".activeplatinum").removeClass("active-benefit");
	}

	function getSettings(benefit_type) {
		if (benefit_type == "blue") {
			if ($(".blue").hasClass("activeblue")) {
				$(".activeblue").addClass("active-benefit");
			}
		}
		if (benefit_type == "gold") {
			if ($(".gold").hasClass("activegold")) {

				$(".activegold").addClass("active-benefit");
			}
		}
		if (benefit_type == "platinum") {
			if ($(".platinum").hasClass("activeplatinum")) {
				$(".activeplatinum").addClass("active-benefit");
			}
		}

		$(".feature").removeClass("active");
		//$("."+benefit_type+"-selected").addClass("active");
	}

	function setActiveHeader(pSelector) {
		$(".header-option").removeClass("active");
		$(pSelector).addClass("active");
	}

	function closeTooltips() {
		$(".tooltip").removeClass("active");
	}

	function setTooltipPosition(pId) {
		var tooltipHeight, innerWrapHeight, topPosition;
		tooltipHeight = $(".tooltip-" + pId).outerHeight();
		innerWrapHeight = $(".innerWrap-" + pId).outerHeight();
		topPosition = -(tooltipHeight / 2) + (innerWrapHeight / 2);
		$(".tooltip-" + pId).css("top", function() {
			return topPosition + "px"
		});
	}

	//$( "#blue" ).click(function() {
	//setActiveHeader("#blue");
	getSettings("blue");
	//});
	//$( "#gold" ).click(function() {
	//setActiveHeader("#gold");
	getSettings("gold");
	//});
	//$( "#platinum" ).click(function() {
	//setActiveHeader("#platinum");
	getSettings("platinum");
	//});


	//Actions to change Tier eligibility on the screen

	var buttonWLS = $('#buttonWLS');
	var buttonTV = $('#buttonTV');
	var buttonBB = $('#buttonBB');
	var buttonWLS15 = $('#buttonWLS15');
	var buttonTV240 = $('#buttonTV240');

	var eligibleBaseText = 'Based on your selection, you may be eligible for ';
	var defaultEligibleText = 'As you select services and features above, tier eligibility will appear here.';
	var defaultEligibleTextSub = '';
	var blueEligibleText = eligibleBaseText + 'Blue tier benefits';
	var blueEligibleTextSub = 'Any one core AT&T service qualifies for Blue tier. Select additional services or features above to see Gold or Platinum benefits.'
	var goldEligibleText = eligibleBaseText + 'Gold tier benefits';
	var goldEligibleTextSub = 'A minimum of two core AT&T services or a minimum of one core service plus one premium feature qualifies for Gold tier. Select additional services or features above to see Platinum benefits.';
	var platinumEligibleText = eligibleBaseText + 'Platinum tier benefits';
	var platinumEligibleTextSub = 'A total of four combined AT&T services and premium features qualifies for Platinum tier.';


	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return (((elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)));
	}

	function checkMatrix() {
		var result = '';
		if (buttonWLS.hasClass('selected')) {
			result = result + '1';
		} else result = result + '0';
		if (buttonTV.hasClass('selected')) {
			result = result + '1';
		} else result = result + '0';
		if (buttonBB.hasClass('selected')) {
			result = result + '1';
		} else result = result + '0';
		if (buttonWLS15.hasClass('selected')) {
			result = result + '1';
		} else result = result + '0';
		if (buttonTV240.hasClass('selected')) {
			result = result + '1';
		} else result = result + '0';
		return result;
	}

	function paintThumbs(color) {
		var borderColor = '2px solid ' + color;
		if (buttonWLS.hasClass('selected')) {
			buttonWLS.closest('.box-container').css('border', borderColor);
			buttonWLS15.removeClass('disabled'); //enables Wireless Premium
		} else {
			buttonWLS15.addClass('disabled');
		}
		if (buttonTV.hasClass('selected')) {
			buttonTV.closest('.box-container').css('border', borderColor);
			buttonTV240.removeClass('disabled'); //enables Wireless Premium
		} else {
			buttonTV240.addClass('disabled');
		}
		if (buttonBB.hasClass('selected')) {
			buttonBB.closest('.box-container').css('border', borderColor);
		}
		if (buttonWLS15.hasClass('selected')) {
			buttonWLS15.closest('.box-container').css('border', borderColor);
		}
		if (buttonTV240.hasClass('selected')) {
			buttonTV240.closest('.box-container').css('border', borderColor);
		}
	}

	function getTier() {
		if (checkMatrix() == '00000') {
			makeDefaultState();
			return 1;
		}
		if (checkMatrix() == '10000' || checkMatrix() == '01000' || checkMatrix() == '00100') {
			makeBlueTier();
			return 1;
		}
		if (checkMatrix() == '10100' || checkMatrix() == '01001' ||
			checkMatrix() == '01100' || checkMatrix() == '10010' || checkMatrix() == '11001' ||
			checkMatrix() == '10110' || checkMatrix() == '11010' ||
			checkMatrix() == '01101' || checkMatrix() == '11000' || checkMatrix() == '11100') {
			makeGoldTier();
			return 1;
		}
		if (checkMatrix() == '11011' || checkMatrix() == '11110' || checkMatrix() == '11111' ||
			checkMatrix() == '11101') {
			makePlatinumTier();
			return 1;
		}
		return 0;
	}


	function stickInfoBar() {
		if ($('.thx-smthng').length) {
			$('.eligibilityInfo').addClass('sticky');
		}

	}

	function unstickInfoBar() {
		$('.eligibilityInfo').removeClass('sticky');
	}

	function makeDefaultState() {
		cleanElements();
		$('.eligibilityText').text(defaultEligibleText);
		$('.eligibilityTextSub').text(defaultEligibleTextSub);
		$('.eligibilityDivider').css('border-bottom', '5px solid #ddd');

		buttonWLS15.addClass('disabled');
		buttonTV240.addClass('disabled');

		unstickInfoBar();
	}

	function makeBlueTier() {
		cleanElements();
		paintThumbs('#0153a7');
		$(".blue").css("background-color", "#e5eff6");
		$('.eligibilityDivider').css('border-bottom', '5px solid #0153a7');
		$('.eligibilityText').text(blueEligibleText);
		$('.eligibilityTextSub').text(blueEligibleTextSub);

		if (!isScrolledIntoView('.eligibilityText')) {
			stickInfoBar();
		}
	}

	function makeGoldTier() {
		cleanElements();
		paintThumbs('#ffb60f');
		$(".gold").css("background-color", "#fff8ea");
		$('.eligibilityDivider').css('border-bottom', '5px solid #ffb60f');
		$('.eligibilityText').text(goldEligibleText);
		$('.eligibilityTextSub').text(goldEligibleTextSub);

		if (!isScrolledIntoView('.eligibilityText')) {
			stickInfoBar();
		}
	}

	function makePlatinumTier() {
		cleanElements();
		paintThumbs('#5a5a5a');
		$(".platinum").css("background-color", "#ddd");
		$('.eligibilityDivider').css('border-bottom', '5px solid #5a5a5a');
		$('.eligibilityText').text(platinumEligibleText);
		$('.eligibilityTextSub').text(platinumEligibleTextSub);

		if (!isScrolledIntoView('.eligibilityText')) {
			stickInfoBar();
		}
	}

	function cleanElements() {
		$('.box-container').closest('.box-container').css('border', '2px solid #e2e2e2');
		$(".blue").css("background-color", "#fff");
		$(".gold").css("background-color", "#fff");
		$(".platinum").css("background-color", "#fff");
	}

	function buttonsSelected() {
		return checkMatrix() != '00000';
	}


	$('.box-container').click(function() {
		if ($(this).hasClass('selected')) { //we're unselecting the button
			$(this).removeClass('selected');
			if (getTier() == 0) {
				$(this).addClass('selected');
			}
			return;
		} else { //we're selecting the button
			$(this).addClass('selected');
			if (getTier() == 0) {
				$(this).removeClass('selected');
			}
			return;
		}
	});


	$(function() {
		var lastScrollTop = 0,
			delta = 5;
		var infoBar = $('.eligibilityInfo');
		$(window).scroll(function(event) {
			var st = $(this).scrollTop();

			if (Math.abs(lastScrollTop - st) <= delta)
				return;

			if (st > lastScrollTop) { //downscrolling
				if (buttonsSelected()) {
					if (isScrolledIntoView('#buttonWLS')) {
						stickInfoBar();
						return;
					}
					if (isScrolledIntoView('.benetfits-table')) {
						unstickInfoBar();
						return;
					}
				}
			} else { //upscrolling
				if (buttonsSelected()) {
					if (!isScrolledIntoView('#buttonTV')) {
						unstickInfoBar();
						return;
					}
					if (!isScrolledIntoView('.benetfits-table')) {
						stickInfoBar();
						return;
					}
				}
			}
			lastScrollTop = st;
		});
	});



	if (!isMobile) {
		$("body").click(function() {
			closeTooltips();
		});
	}

	$(".advice").click(function(event) {
		var id;

		closeTooltips();
		id = $(this).data('adviceId');
		setTooltipPosition(id);
		$(".tooltip-" + id).addClass("active");

		event.stopPropagation();
	});
});


/*
jQuery-Rotate-Plugin v0.2 by anatol.at
http://jsfiddle.net/Anatol/T6kDR/
*/
$.fn.rotate = function(options) {
	var $this = $(this),
		prefixes, opts, wait4css = 0;
	prefixes = ['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
	opts = $.extend({
		startDeg: false,
		endDeg: 360,
		duration: 1,
		count: 1,
		easing: 'linear',
		animate: {},
		forceJS: false
	}, options);

	function supports(prop) {
		var can = false,
			style = document.createElement('div').style;
		$.each(prefixes, function(i, prefix) {
			if (style[prefix.replace(/\-/g, '') + prop] === '') {
				can = true;
			}
		});
		return can;
	}

	function prefixed(prop, value) {
		var css = {};
		if (!supports.transform) {
			return css;
		}
		$.each(prefixes, function(i, prefix) {
			css[prefix.toLowerCase() + prop] = value || '';
		});
		return css;
	}

	function generateFilter(deg) {
		var rot, cos, sin, matrix;
		if (supports.transform) {
			return '';
		}
		rot = deg >= 0 ? Math.PI * deg / 180 : Math.PI * (360 + deg) / 180;
		cos = Math.cos(rot);
		sin = Math.sin(rot);
		matrix = 'M11=' + cos + ',M12=' + (-sin) + ',M21=' + sin + ',M22=' + cos + ',SizingMethod="auto expand"';
		return 'progid:DXImageTransform.Microsoft.Matrix(' + matrix + ')';
	}

	supports.transform = supports('Transform');
	supports.transition = supports('Transition');

	opts.endDeg *= opts.count;
	opts.duration *= opts.count;

	if (supports.transition && !opts.forceJS) { // CSS-Transition
		if ((/Firefox/).test(navigator.userAgent)) {
			wait4css = (!options || !options.animate) && (opts.startDeg === false || opts.startDeg >= 0) ? 0 : 25;
		}
		$this.queue(function(next) {
			if (opts.startDeg !== false) {
				$this.css(prefixed('transform', 'rotate(' + opts.startDeg + 'deg)'));
			}
			setTimeout(function() {
				$this
					.css(prefixed('transition', 'all ' + opts.duration + 's ' + opts.easing))
					.css(prefixed('transform', 'rotate(' + opts.endDeg + 'deg)'))
					.css(opts.animate);
			}, wait4css);

			setTimeout(function() {
				$this.css(prefixed('transition'));
				if (!opts.persist) {
					$this.css(prefixed('transform'));
				}
				next();
			}, (opts.duration * 1000) - wait4css);
		});

	} else { // JavaScript-Animation + filter
		if (opts.startDeg === false) {
			opts.startDeg = $this.data('rotated') || 0;
		}
		opts.animate.perc = 100;

		$this.animate(opts.animate, {
			duration: opts.duration * 1000,
			easing: $.easing[opts.easing] ? opts.easing : '',
			step: function(perc, fx) {
				var deg;
				if (fx.prop === 'perc') {
					deg = opts.startDeg + (opts.endDeg - opts.startDeg) * perc / 100;
					$this
						.css(prefixed('transform', 'rotate(' + deg + 'deg)'))
						.css('filter', generateFilter(deg));
				}
			},
			complete: function() {
				if (opts.persist) {
					while (opts.endDeg >= 360) {
						opts.endDeg -= 360;
					}
				} else {
					opts.endDeg = 0;
					$this.css(prefixed('transform'));
				}
				$this.css('perc', 0).data('rotated', opts.endDeg);
			}
		});
	}

	return $this;
};
