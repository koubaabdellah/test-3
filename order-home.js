var domain = window.location.host;
	var pathName = window.location.pathname;
	var targetPath = '/checkmyorder/orderSummary.rt';
	var response_code = '';
	if(location.search.split('response_code=')[1]!==undefined){
		response_code = location.search.split('response_code=')[1].split('&')[0];
	}
var LoginWidgetAdditionalAttr = {
		'LoginWidgetSetting' : { 
			'ApplicationName' : 'OPSS',
			 'ForgotPasswordLinkUrl' : 'https://www.att.com/olam/forgotPasswordAction.olamexecute?forgotPasswordActionEvent=forgotPasswordStep1',
             'ForgotIdLinkUrl' : 'https://www.att.com/olam/enterEmailForgotId.myworld',
             'RegisterLinkUrl' : 'https://www.att.com/olam/slidRegistrationAction.olamexecute',
			'DisplayTypeVertical' : true,
			'TGuardAuthPostUrl' : tGuardURL.tGuardAuthURL,
			'MyATTBrandLogoImg' : 'https://www.att.com/widget/unauth/login/images/myatt-logo.png',
			'WidgetErrorCode' : response_code, 
			'formSubmitParams': { 
				'loginURL'	: 'https://' + domain + pathName,
				'targetURL' : tGuardURL.tokenServiceURL + 'https://' + domain + targetPath,
				'vhname'    :  domain,
				'cancel_URL' : 'https://' + domain + pathName,
				'flow_ind' : 'LGN' 
			} 
		} 
	};
	function getSavedUserIdListCustom() {
                    var userIdArray = [];
					var name = 'authUsers';
					var ca = document.cookie.split(';');
					for (var i = 0; i < ca.length; i++) {
						var c = ca[i];
						while (c.charAt(0) === ' ') {
							c = c.substring(1);
						}
						if (c.indexOf(name) === 0) {
							var cookieValue = c.substring(name.length+1,c.length);
						}
					}
					if(cookieValue !== undefined) {
							$widgetJquery.each(cookieValue.split(','), function(index, value){
								userIdArray.push(value);
							});
						}
					return userIdArray;
				}
				function deleteUserIdListCustom(obj) {
					for (j = 0; j < obj.length; j++) {
					var name = 'authUsers';
						var ca = document.cookie.split(';');
						for (var i = 0; i < ca.length; i++) {
							var c = ca[i];
							while (c.charAt(0) === ' ') {
								c = c.substring(1);
							}
							if (c.indexOf(name) === 0) {
								var cookieValue = c.substring(name.length + 1,
										c.length);//a,b,c
							}
						}
						var savedUserIds = cookieValue.split(',');
						if (savedUserIds.length === 1){
							document.cookie = name
									+ '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
						}
						else {
							document.cookie = name
									+ '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
							for (var k = 0; k < savedUserIds.length; k++) {
								if (obj[j] === savedUserIds[k]) {
									var index = savedUserIds
											.indexOf(obj[j]);
									if (index > -1) {
										savedUserIds.splice(index, 1);
									}
								}
							}
							document.cookie = 'authUsers=' + savedUserIds;
						}
					}
				}
/* included default focus on orderid element */
$widgetJquery(document).ready(function () {
LoginWidgetView.initializeLoginWidgetView();
setTimeout(function(){$widgetJquery('#orderid').focus();}, 2000);
});