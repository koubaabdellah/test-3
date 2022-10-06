"use strict";

(function (App, $, undefined) {
    var routeTable = [
		"/index.html"
	];

    (function () 
     {        
        if (getMobileDetection().isPhone) 
        {
            if (location.href.indexOf("/m/") == -1) 
            {
                location.href = "m/index.html";
            }
        }        
        // else if(getMobileDetection().isDesktop)
        // {
            // if (location.href.indexOf("m/") != -1) 
            // {
                // location.href = "/";
            // }
        // }
	})();

	function getMobileDetection() {
		// Requires the 'viewport' meta tag be set such that width=device-width.
	    var isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|Windows Phone/i) ? true : false;
	    var isSmall = document.body.clientWidth < 400 || document.body.clientHeight < 400;            //account for landscape or portrait
		var isPhone = (navigator.userAgent.match(/iPhone|iPod|Windows Phone/i) ||
					  (navigator.userAgent.match(/Android|BlackBerry|Opera Mini/i) && 
                       navigator.userAgent.match(/Mobile/i))) ? true : false;
		var isTablet = isMobile && !isPhone;      //Won’t catch Windows 8 tablets.
		var isDesktop = !isMobile;

	    return {
	        isMobile: isMobile,
	        isPhone: isPhone,
	        isTablet: isTablet,
	        isDesktop: isDesktop
	    };
	}

	function getMobileUrl () {
		var redirectTo = null;
		for (var i = 0; i < routeTable.length; i++) {
			if (location.href.indexOf(routeTable[i]) >= 0) {
				redirectTo = location.href.replace(routeTable[i], "/m");
			}
		}

		if (!redirectTo) {
		    redirectTo = location.href.replace(/\/$/, "") + "/m";
		}

		return redirectTo;
	}

}(
    window.App = window.App || {},
    jQuery
));