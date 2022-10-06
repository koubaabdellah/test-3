$(function () {
	$("#goButtonID").bind("click", function () {
		navigatePage();
	});

	$("#goButtonID").bind("touchstart", function () {
		navigatePage();
	});


	var goButtonHTML = $("#goButtonID").parent().html();

	var anchorTagStart = "<a href='";
	var anchorTagHrefEnd = "'>";
	var anchorTagEnd = "</a>";
	var navigatePages = {
		"phone": "phoneguide/en/",
		"simonly": "simguide/en/",
		"wirelesshp": "whpguide/en/",
		"wirelesshpint": "whpguide/en/",
		"tablet": "tabletguide/en/",
		"accessory": "accessoryguide/en/"
	};
	$("#select-ID").on("change", function () {
		$("#goButtonID").parent().empty().append(anchorTagStart + navigatePages[$("#select-ID option:selected").val()] + anchorTagHrefEnd + goButtonHTML + anchorTagEnd);
	});

	function navigatePage() {
		var dd = $(".awd-select-value", "#dropdown");
		if (dd.length == 0) dd = $(".awd-select", "#dropdown");
		var val = dd.val();
		var redir = "";

		if ($("#select-ID-value").val() != undefined) {
			switch (val) {
				case "phone":
					redir = 'phoneguide/en/';
					break;
				case "simonly":
					redir = 'simguide/en/';
					break;
				case "esim":
					redir = 'https://www.att.com/help/wireless/esim-get-started.html';
					break;
				case "wirelesshp":
					redir = 'whpguide/en/';
					break;
				case "wirelesshpint":
					redir = 'whpguide/en/';
					break;
				case "tablet":
					redir = 'tabletguide/en/';
					break;
				case "accessory":
					redir = 'accessoryguide/en/';
					break;
			}
			if (redir != "") window.location.href = redir;

		}
	}

});