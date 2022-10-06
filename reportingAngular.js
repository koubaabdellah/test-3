var reportingDirectivesAngular = angular.module('reporting.directives', []);
reportingDirectivesAngular.directive('contentLinkPosition', function($timeout) {
    return {
    restrict: 'A',
    priority: 80,
    controller : ['$scope', '$element', '$attrs', '$transclude', '$compile', function attContentCtrl($scope, $element, $attrs, $transclude, $compile) {   
            // this timeout is used to make angular directives in sync, $apply
            // no delay is given for this timeout.         
            $timeout(function() {
                $element = $($element).find('a');
                $element.attr('link-position', $attrs.contentLinkPosition);
                $compile($element)($scope);
            });
        }]
    };
});
reportingDirectivesAngular.directive('linkPosition', ['$timeout', 'ReportInterfaceAngular', function($timeout, ReportInterfaceAngular) {
    return {
        restrict : 'A',
        link: function(scope, elm, attrs, modelCtrl) {
        	var linkClickClasses = {
      			  'rBody': 'Body',
      			  'rRightNav': 'RightNav',
      			  'rFooter': 'Footer',
      			  'rHeader': 'Header',
      			  'rGlobalNav': 'GlobalNav',
      			  'rSubNav': 'SubNav',
      			  'rLeftNav': 'LeftNav',
      			  'rMarquee': 'Marquee',
      			  'rCarousel': 'Carousel',
      			  'rTab': 'Tab',
      			  'rLinkFarm': 'LinkFarm'
      			};
            elm.on('click', function(event) {
            	var elementEvent = event.currentTarget || event.srcElement;
            	var target = elementEvent.target;
				if(target != null && (target == '' || target == '_self')){
					event.preventDefault();
				}
            	var linkPosition = attrs.linkPosition;
            	if(linkPosition != null && linkPosition != ''){
					    try{
							if((elm[0].nodeName === 'A') || (elm[0].nodeName === 'a')){
								if(!!linkClickClasses[linkPosition]){
									scope.linkClickReporting(elm[0], linkPosition);
								}
								else {
									console.error('linkPosition: '+ linkPosition + ' passed does not have valid value');
								}
								if(target != null && (target == '' || target == '_self')){
									var url = elementEvent.href;
								    setTimeout(function () {
								        location.href = url;
								    }, 1000);
								}
							}
						}
						catch(exception){
							console.error('Error Occured while associating click event with links'+ exception);
						}
            	}
	        });
	        scope.linkClickReporting = function (elementEvent, linkPosition) {
	        	var linkName = scope.getLinkName(elementEvent);
	        	if(scope.isValidLinkName(linkName)) {
	        		var additionalAttrs = scope.getLinkClickAdditionalAttrs(elementEvent);
	        		var linkPosition = scope.getLinkPosition(linkPosition);
	        		var linkUrl = scope.getLinkUrl(elementEvent);
	        		ReportInterfaceAngular.setLinkTrack(linkName, linkPosition, linkUrl);
	        	}
	        };
	        scope.getLinkPosition = function(className) {
				var classLinkLoc = null;
				if(!!linkClickClasses[className]) {
					classLinkLoc = linkClickClasses[className];
				}
				else {
					console.error('className: '+ className + ' passed does not have valid value from list.');
				}
				return classLinkLoc;
			};
			scope.getLinkUrl = function(elementEvent) {
				var linkUrl = null;
				if(jQuery(elementEvent).attr('linkUrl') !=null) {
					linkUrl = jQuery(elementEvent).attr('linkUrl');			
				}
				else {
					linkUrl = jQuery(elementEvent).attr('href');
				}
				return linkUrl;
			};	
			scope.getLinkPositionByClassName = function(elementEvent) {
				var className =  null;
				className = jQuery(elementEvent).attr('class');
				if(className !=null && className != undefined){
					var position = scope.getLinkPosition(className);
					if(position != null) {
						return position;
					}
				}
				return null;
			};
			scope.getLinkName = function(elementEvent) {
				var linkName = null;
				if(jQuery(elementEvent).attr('linkName') !=null) {
					linkName = jQuery(elementEvent).attr('linkName');			
				}else if(jQuery(elementEvent) !=null
						 && jQuery(elementEvent).has('img').length 
						 && jQuery(elementEvent).children('img') !=null) {
					linkName = jQuery.trim(jQuery(elementEvent).find('img:first').attr('alt'));
				}
				else {
					linkName = jQuery.trim(jQuery(elementEvent).text());	
				}
				return linkName;
			};
			scope.isValidLinkName = function(linkName) {
				return true;
			};
			scope.getLinkClickAdditionalAttrs = function(elementEvent) {
			};
	    }
    };
}]);
var ReportingServices = angular.module('reporting.services', ['ngCookies']);
ReportingServices.constant('ReportInterfaceAngularConfig', {
     defaults: {
        global: {},
        single: {}
     },
     breakpoints : [],  // the length of sizes and views need to be identical.
      retry : {
         wait : 1000,
         times : 10
     },
     wtPnKey : 'page.pageInfo.friendlyPageName',
     locationUrlKey: 'page.location.url',
     locationUrlType: '__BREAKPOINT__',
     mobilePrefix : 'Mbl-',
     deferredKey : 'navMenuClickStream'
       
});
/*
 *
 * @param $rootScope
 * @param $log
 * @param $window
 * @param $resource
 * @param ReportInterfaceAngularConfig
 * @param Language
 * @param $timeout
 * @param $cookies
*/
ReportingServices.interface = function($rootScope, $log, $window, ReportInterfaceAngularConfig, $timeout, $cookies) {
    this.pagename = '';
    this.locationUrl = '';
    this.scope = $rootScope;
    this.log = $log;
    this.global = ReportInterfaceAngularConfig.defaults.global;
    this.single = ReportInterfaceAngularConfig.defaults.single;
    this.window = $window;
    this.timeout = $timeout;
    this.retry = ReportInterfaceAngularConfig.retry;
    this.wtPnKey = ReportInterfaceAngularConfig.wtPnKey;
    this.locationUrlKey = ReportInterfaceAngularConfig.locationUrlKey;
    this.locationUrlType = ReportInterfaceAngularConfig.locationUrlType;
    this.mobilePrefix = ReportInterfaceAngularConfig.mobilePrefix;
    this.deferredKey = ReportInterfaceAngularConfig.deferredKey;
    this.language = window.location.href.indexOf('/es-us/') != -1 ? 'ES' : 'EN';
    var self = this;
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        self.log.log(event);
        self.log.log(current);
        if (self.hasEvent()){
        	self.single['eventAction'] = 'formResponse';
        	self.add({'successFlag':'1', 'statusCode': '0'}).fireEvent();
        }
        if (current) {
            var report = (current.$route)?current.$route.report:current.report;
            if(report)
            {
	            self.log.log('report', report);
	            self.add(report, false).fire();
            }
        }
    });
    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
        $log.error(rejection);
        self.single['eventAction'] = 'formResponse';
        if (rejection && rejection.code){
            self.add({'successFlag':'0', 'statusCode': rejection.code});
        }
        else {
            self.add({'successFlag':'-2', 'statusMessage': 'An unknown error occurred', 'statusCode': -3});
        }
        self.fireEvent();
    });
    this.getBreakpoint = function() {
        var w = $window.innerWidth; // or window.innerWidth with plain JS
        var bps = angular.copy(ReportInterfaceAngularConfig.breakpoints);
        var bp = {breakpoint: {}};
        angular.forEach(bps, function(val, key) {
            if (val) {
                if ( w > val.min && w <= val.max) {
                    this.breakpoint = angular.copy(val);
                }
            }
        }, bp);
        return bp.breakpoint;
    };
    this.fireDeferred(); // on bootstrap, check
};
ReportingServices.service('ReportInterfaceAngular', ['$rootScope', '$log', '$window', 'ReportInterfaceAngularConfig', '$timeout', '$cookies', ReportingServices.interface]);
/*
 * @param {object} trackedItems
 * @param {boolean} singleUse if false, then the trackedItems will search on the global items
 * @returns {object} this
 *
*/
ReportingServices.interface.prototype.add = function(trackedItems, singleUse) {
    var flush = (typeof(singleUse)!='undefined')?singleUse:true;
   if (angular.isDefined(trackedItems)) {
        var wtPn = trackedItems[this.wtPnKey];
        var locationUrl = trackedItems[this.locationUrlKey];
        if (angular.isDefined(locationUrl)) {
            this.locationUrl = locationUrl;
        }
        if (angular.isDefined(wtPn)) {
            this.pagename = wtPn;
        }
        if (flush){
        	angular.extend(this.single, trackedItems);
        }
        else{
           	angular.extend(this.global, trackedItems);
        }
    }
    this.log.log('this.single', this.single);
    this.log.log('this.global', this.global);
    return this;
};
ReportingServices.interface.prototype.addBrowserId = function (cookies, global) {
     var todayDate = new Date();
     var currentTimeAsText=todayDate.getTime().toString();
     var randomNum = Math.floor(Math.random() * 90000) + 10000;
     var lengthValue=20;
     if(currentTimeAsText.length < lengthValue){
         var dayOffset = 365;
         todayDate.setDate(todayDate.getDate() + dayOffset);
         var modifiedTimeValue = 'NG' + randomNum + currentTimeAsText;
         if(modifiedTimeValue.length > lengthValue){
             modifiedTimeValue = modifiedTimeValue.split('').reverse().join('');
             modifiedTimeValue = modifiedTimeValue.substring(0,18) +
                 modifiedTimeValue.substring(modifiedTimeValue.length -2, modifiedTimeValue.length);
             document.cookie='browserid='+modifiedTimeValue.split('').reverse().join('')+';path=/;expires='+todayDate.toUTCString()+';host=.att.com';
             angular.extend(global, {'browserid': getCookie('browserid')});
         } else {
             document.cookie='browserid='+modifiedTimeValue+';path=/;expires='+todayDate.toUTCString()+';host=.att.com';
             angular.extend(global, {'browserid': getCookie('browserid')});
         }
     }
     function getCookie(name){
         var re = new RegExp(name + "=([^;]+)");
         var value = re.exec(document.cookie);
         return (value != null) ? unescape(value[1]) : null;
     }
};
/*
  * Setter/getter for pagename. Returns the pagename if no value is passed.
  * @param [string] value
  * @returns {value?returns ReportInterface : returns pagename}
  * @constructor
*/
ReportingServices.interface.prototype.PageName = function(value) {
     if (angular.isDefined(value)) {
         this.pagename = value;
         this.global[this.wtPnKey] = value;
         return this;
     } else {
         return this.pagename;
     }
};
/*
 * Setter/getter for locationUrl. Returns the url if no value is passed.
 * @param [string] value
 * @returns {value?returns ReportInterface : returns locationUrl}
 * @constructor
*/
ReportingServices.interface.prototype.LocationUrl = function(value) {
    if (angular.isDefined(value)) {
        this.locationUrl = value;
        this.global[this.locationUrlKey] = value;
        return this;
    } else {
        return this.locationUrl;
    }
};
/*
 *
 * @param {object} resetTo
 * @returns {object} this
 *
*/
ReportingServices.interface.prototype.fire = function(resetTo, deferred) {
    var combined = angular.copy(this.global);
    combined = angular.extend(combined, this.single);
    var wtPn = this.pagename ? angular.copy(this.pagename) : combined[this.wtPnKey];
    var locationUrl = this.locationUrl ? angular.copy(this.locationUrl) : combined[this.locationUrlKey];
    var self = this;
    var breakpoint = this.getBreakpoint();
    if (angular.isDefined(breakpoint)) {
    	var rwd = combined['page.pageInfo.responsiveWebDesignFlag'];
        if (breakpoint.isMobile && (angular.isDefined(wtPn) && wtPn.substring(0,4) !== this.mobilePrefix) && ((angular.isDefined(rwd) && rwd == '0') || (!angular.isDefined(rwd)))) {
            wtPn = this.mobilePrefix + wtPn;
        }
        var index = 0;
        if (angular.isDefined(locationUrl)){
        	index = locationUrl.indexOf(this.locationUrlType);
        }
        if (angular.isDefined(locationUrl) && index !== -1) {
        	var length = this.locationUrlType.length;
            var before = locationUrl.substring(0, index);
            var after = locationUrl.substring(index+length);
            locationUrl = before + breakpoint.rwd + after;
        }
        combined['page.pageInfo.viewedUIExperience'] = breakpoint.rwd;
        combined['page.pageInfo.responsiveExperience'] = breakpoint.rwd;
    }
	if (angular.isDefined(wtPn)) {
    	combined[this.wtPnKey] = wtPn;
    }
    if (angular.isDefined(locationUrl)) {
    	combined[this.locationUrlKey] = locationUrl;
    }
    combined['page.pageInfo.language'] = this.language;
    if (deferred) {
            try {
                localStorage.setItem(this.deferredKey, angular.toJson(combined));
            }
            catch (e)
            {
                this.log.error(e);
                this.fireObject(combined);
            }
    } else {
        this.fireObject(combined);
    }
    this.flush(resetTo);
    return this;
};
ReportingServices.interface.prototype.fireObject = function(metricsObj) {
     var sendMetricsObj = angular.copy(metricsObj);
     var retries = this.retry.times;
     var self = this;
     var poll = function() {
         try {
             retries--;
            if(DataMappingInterface !== undefined){
          		DataMappingInterface.customEventNotification(sendMetricsObj, self.scope);
           	 }
              else {
                  console.error('DataMappingFramework:: error - mapping failed for broadcasted event as framework is missing');
              }
         }
         catch (e) {
             self.log.warn('missing WebTrends interface and unable to track. trying again.');
             self.log.error(e);
             if (retries > 0) self.timeout(poll, self.retry.wait);
         }
     };
     poll();
};
ReportingServices.interface.prototype.hasEvent = function() {
    var event = this.single['eventAction'];
    if(event == 'formSubmit'){
    	return (angular.isString(event) && event.length>0);
    }
    return false;
};
ReportingServices.interface.prototype.get = function(key) {
     var singleKey = this.single[key];
     var globalKey = this.global[key];
     return globalKey || singleKey;
};
/*
 * fireEvent simply adds wtNoHit to the single queue and then fires the wt tag
 * @param resetTo
*/
ReportingServices.interface.prototype.fireEvent = function(resetTo) {
    this.fire(resetTo);
    return this;
};
/*
 *
 * @param  {object} resetTo
 * @returns {object} this
 *
 * Flushes the Singe-Use parameters and replaces with resetTo (optional)
*/
ReportingServices.interface.prototype.flush = function(resetTo) {
    this.single = {};
    this.add(resetTo, true);
    return this;
};
/*
 *
*/
ReportingServices.interface.prototype.reset = function(resetGlobalTo) {
    this.global = {};
    this.single = {};
    this.pagename = '';
    this.add(resetGlobalTo, false);
    return this;
};
/*
 * setPageTrack(pageName, url, additionalData)
 * pageName
 * url
 * additionalData
*/
ReportingServices.interface.prototype.setPageTrack = function(pageName, url, additionalData){
	return this.add({
		'eventAction':'pageLoad',
		'eventCode':'Page_Load',
		'page.pageInfo.friendlyPageName': pageName,
		'page.location.url':url,
		'additionaldata': additionalData
		}).fire();
};
/*
 * setLinkTrack(linkName, linkPosition, linkUrl, additionalData)
 * linkName
 * linkPosition
 * linkUrl
 * additionalData
*/
ReportingServices.interface.prototype.setLinkTrack = function(linkName, linkPosition, linkUrl, additionalData){
	var slotFriendlyName = linkPosition;
	if(additionalData !== undefined && 'slotFriendlyName' in additionalData) {
		slotFriendlyName = additionalData['slotFriendlyName'];
		additionalData['slotFriendlyName'] = '';
	}
	return this.add({
		'eventAction':'linkClick',
		'eventCode':'Link_Click',
		'linkName':linkName,
		'contentFriendlyName':linkName,
		'linkPosition':linkPosition,
		'slotFriendlyName':slotFriendlyName,
		'linkDestinationUrl':linkUrl,
		'additionaldata': additionalData
	}).fire();
};
/*
 * setEventTrackSubmit(event, linkName, linkPosition, linkUrl, additionalData)
 * event
 * linkName
 * linkPosition
 * linkUrl
 * additionalData
*/
ReportingServices.interface.prototype.setEventTrackSubmit = function(event, linkName, linkPosition, linkUrl, additionalData){
	var metricsObj = {
		'eventAction':'formSubmit',
		'eventCode':event,
		'statusCode': '-2',
		'successFlag': '-2',
		'linkName':linkName,
		'contentFriendlyName':linkName,
		'linkPosition':linkPosition,
		'slotFriendlyName':linkPosition,
		'linkDestinationUrl':linkUrl,
		'additionaldata': additionalData
	};
	if (sessionStorage) {
        try {
            sessionStorage.setItem('formSubmitObject', JSON.stringify(metricsObj));
        } catch (e) {
            console.error(e);
        }
    }else{
    	console.error('formSubmitObject did not save to Session.');
    }
	this.add(metricsObj).fire();
};
/*
 * setEventTrackResponse(event, statusCode, successFlag, additionalData)
 * event
 * statusCode
 * successFlag
 * additionalData
*/
ReportingServices.interface.prototype.setEventTrackResponse = function(event, statusCode, successFlag, additionalData){
	var formSubmitObject = null;
	if (sessionStorage && sessionStorage.getItem('formSubmitObject')) {
        var val = sessionStorage.getItem('formSubmitObject');
        if (val && val != 'undefined') {
        	formSubmitObject = JSON.parse(val);
        }
    }
	var linkName = '';
	var linkPosition = '';
	var linkUrl = '';
	if(formSubmitObject && formSubmitObject.eventCode === event && formSubmitObject.eventAction === 'formSubmit'){
		linkName = formSubmitObject.linkName;
		linkPosition = formSubmitObject.linkPosition;
		linkUrl = formSubmitObject.linkDestinationUrl;
	}
	if(additionalData !== undefined && 'linkDestinationUrl' in additionalData){
		linkUrl = additionalData['linkDestinationUrl'];
		additionalData['linkDestinationUrl'] = '';
	}
	var metricsObject = {
			'eventAction':'formResponse',
			'eventCode': event,
			'statusCode': statusCode,
			'successFlag': successFlag,
			'additionaldata': additionalData
		};
	if(linkName) {
		metricsObject['linkName'] = linkName;
		metricsObject['contentFriendlyName'] = linkName;
	}
	if(linkPosition) {
		metricsObject['linkPosition'] = linkPosition;
		metricsObject['slotFriendlyName'] = linkPosition;
	}
	if(linkUrl) {
		metricsObject['linkDestinationUrl'] = linkUrl;
	}
	this.add(metricsObject).fire();
	sessionStorage.removeItem('formSubmitObject');
};
/*
 * setSystemEventTrack(event, statusCode, successFlag, additionalData)
 * event
 * statusCode
 * successFlag
 * additionalData
*/
ReportingServices.interface.prototype.setSystemEventTrack = function(event, statusCode, successFlag, additionalData){
	return this.add({
		'eventAction':'systemEvent',
		'eventCode': event,
		'statusCode': statusCode,
		'successFlag': successFlag,
		'additionaldata': additionalData
	}).fire();
};
ReportingServices.interface.prototype.getStoredEvent = function(){
	var formSubmitObject = null;
	if (sessionStorage && sessionStorage.getItem('formSubmitObject')) {
        var val = sessionStorage.getItem('formSubmitObject');
        if (val && val != 'undefined') {
        	formSubmitObject = JSON.parse(val);
        }
    }
	var event = '';
	if(formSubmitObject && formSubmitObject.eventAction === 'formSubmit'){
		event = formSubmitObject.eventCode;
	}
	return event;
};
/*
 * setModalLoad(pageName, url, linkName, linkPosition, linkUrl, additionalData)
 * pageName
 * url
 * linkName
 * linkPosition
 * linkUrl
 * additionalData
*/
ReportingServices.interface.prototype.setModalLoad = function(pageName, url, linkName, linkPosition, linkUrl, additionalData) {
	return this.add({
		'eventAction':'modalLoad',
		'eventCode':'Modal_Load',
		'page.pageInfo.friendlyPageName': pageName,
		'page.location.url':url,
		'contentFriendlyName':linkName,
		'linkPosition':linkPosition,
		'slotFriendlyName':linkPosition,
		'linkDestinationUrl':linkUrl,
		'additionaldata': additionalData
	}).fire();
};
/*
 * setModalClose(pageName, url, linkName, linkPosition, linkUrl, additionalData)
 * pageName
 * url
 * linkName
 * linkPosition
 * linkUrl
 * additionalData
*/
ReportingServices.interface.prototype.setModalClose = function(pageName, url, linkName, linkPosition, linkUrl, additionalData) {
	return this.add({
		'eventAction':'modalClose',
		'eventCode':'Modal_Close',
		'page.pageInfo.friendlyPageName': pageName,
		'page.location.url':url,
		'contentFriendlyName':linkName,
		'linkPosition':linkPosition,
		'slotFriendlyName':linkPosition,
		'linkDestinationUrl':linkUrl,
		'additionaldata': additionalData
	}).fire();
};
/*
 * getQueryString()
 * returns queryString
*/
ReportingServices.interface.prototype.getQueryString = function(url) {
	var queryString = '';
	var queryStringIndex = url.indexOf('?');

	if(queryStringIndex != -1){
		queryString = url.substring(queryStringIndex);
	}
	return queryString;
};
//adding a sleep function for external links
ReportingServices.interface.prototype.sleep = function(milliseconds) {
    var e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {};
    return this;
};
ReportingServices.interface.prototype.fireDeferred = function() {
    var deferredMetrics;
    try {
        deferredMetrics = angular.fromJson(localStorage.getItem(this.deferredKey));
        if (angular.isObject(deferredMetrics)) {
            this.fireObject(deferredMetrics);
            localStorage.removeItem(this.deferredKey);
        }
    }
    catch (e) {
        this.log.error(e);
    }
};
ReportingServices.interface.prototype.deferFire = function(resetTo) {
    return this.fire(resetTo, true);
};
