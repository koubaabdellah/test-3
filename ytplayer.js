(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Namespacer"] = factory();
	else
		root["Namespacer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	Namespacer
	https://github.com/sporto/namespacer.js
	*/

	module.exports = function (string, obj) {
		var parts = string.split('.');
		var current = null;
		var container = global;

		while(parts.length > 0) {
			current = parts.shift();
			if (parts.length === 0) {
				// last part
				// if object is given then add that object
				// if there is already something there don't do anything
				// otherwise just create an empty object
				container[current] = obj || container[current] || {};
				return container[current];
			} else {
				container[current] = container[current] || {};
			}
			container = container[current];
		}

		return obj;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;


 /*************************************************************
 * 
 * AT&T CONFIDENTIAL
 * __________________
 * 
 * AT&T Inc. 
 * All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of AT&T Inc. and its suppliers, if any. The
 * intellectual and technical concepts contained herein are 
 * proprietary to AT&T Inc. and its suppliers and may be covered 
 * by U.S. and Foreign Patents, patents in process, and are 
 * protected by trade secret or copyright law. Dissemination of 
 * this information or reproduction of this material is strictly 
 * forbidden unless prior written permission is obtained
 * from AT&T Inc.
 */

/**
 * Utilities methhods for AT&T
 * @required Namespace.js  
 * @namespace att.util
 * @author kv760r@att.com - Kanakaraj Venkataswamy
 */
;(function(){

    var module = { 

        /**
         * Loads javascript file in async manner
         * @name loadScript
         * @param  {String}   url      valid, accessible web address
         * @param  {Function} callback function to be called after script load
         */
        loadScript: function (url, callback) {

            var script = document.createElement("script")
            script.type = "text/javascript";

            // for Internet Explorer
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } 
            // Rest of the browsers
            else {
                script.onload = function () {
                    if(typeof callback !== 'undefined') callback();
                };
            }

            script.src = url;
            document.getElementsByTagName("body")[0].appendChild(script);
        },

        /**
         * Detect mobile devices
         * @return {Object} returns isMobile object
         * @example
         * att.util.detectMobile.isAndroid();  // returns boolean (true / false)
         * att.util.detectMobile.any(); // returns boolean (true / false)
         */
        detectMobile : function () {

            var isMobile = {

                Android: function () {
                    return navigator.userAgent.match(/Android/i);   
                },

                iOS: function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },

                Opera: function () {
                    return navigator.userAgent.match(/Opera Mini/i);
                },

                Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i);
                },

                iPhone: function () {
                    return navigator.userAgent.match(/iPhone/i);
                },

                any: function () {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }

            };

            return isMobile;
        }
    };

    Namespacer('att.util', module);

})();


/**
 * Site tracking
 * @requires jQuery
 * @requires namespace.js (size: 3kb)
 * @requires att.lib.js (size: 4kb)
 * @return {Object} att.entbus.track.dcs
 */
;(function($){

    var module = {},
        url = {
            dcs: 'http://www.wireless.att.com/webtrends/scripts/dcs_tag.js',
            ddoEdmDataManagerPrestage: 'https://prestage.att.com/scripts/adobe/edmDataManager.js',
            ddoEdmDataManagerProduction: 'https://www.att.com/scripts/adobe/edmDataManager.js',
            ddoEdmDataManagerLocal: '/library/javascript/edmDataManager.js'
        };

    /**
     * multiTrack
     * @example
     * att.entbus.track.dcs.multiTract('param1', 'param2', 'param3')
     */
    var multiTrack = function(param) {

        if(typeof param === 'undefined' || param === '') {
            console.log('dcsMultiTrack method not received correct parameters');
            return;
        }
        if(typeof dcsMultiTrack === 'undefined') {
            att.util.loadScript(url.dcs, trackMe);
            
        }

        function trackMe() {
            dcsMultiTrack(param);
        }

    }
    pushEvent = function(param){

        if(typeof param === 'undefined' || param === '') {
            console.log('ddo.pushEvent not received correct parameters');
            return;
        }
        if(typeof ddo === 'undefined') {
            att.util.loadScript(url.ddoEdmDataManagerProduction, trackMe);
            
        }

        function trackMe() {
            ddo.pushEvent(param);
        }

        
    };

    module.dcs = {
        multiTrack: multiTrack
    };

    module.ddo = {
        pushEvent: pushEvent
    }

    Namespacer('att.entbus.track.dcs', module.dcs);
    Namespacer('att.entbus.track.ddo', module.ddo);

})(jQuery.noConflict());




/**
 * Youtube player implementation
 * @author kv760r 
 * @requires namespace.js (size: 3kb)
 * @requires att.lib.js (size: 4kb)
 * @return {Object} att.entbus.ytPlayer
 * @example
 * // script html tag structure like below
 * // NOTE: youtube player library will replace 
 * // the div with youtube-player class with an iframe;
 * // So make sure this change will not break the layout
 * <div class="youtube-player"
 *    data-width="640" data-height="360"
 *    data-src="DROXZ04BNNc"
 *    frameborder="0">
 * </div>
 * // In case of overlay youtube player use following
 * 
 * att.entbus.ytPlayer.setPlayers('overlay-youtube-player');
 */
;(function($){
    var progress = {
		isTenSeconds: false,
		isQuarter: false,
		isHalf: false,
		isThreeForth: false
	};
	var isStartVideo = false;
    var module,
        selector = {
            playerContainers: '.youtube-player'
        },
        /**
         * Environment setting
         * @default PROD
         * @type {String} DEV|PROD
         */
        environment = 'PROD',
        librarySourceUrl = {
            local: '/library/javascript/iframe_api',
            production: 'https://www.youtube.com/iframe_api'
        },
        defaults = {
            width: 510,
            height: 324,
            autoRun: false
        },
        PLAYER_TYPE = {
            ytPlayer: 'ytPlayer',
            jwPlayer: 'jwPlayer'
        },
        PLAYER_POSITION = {
            IN_PAGE: 'In Page Player',
            OVERLAY: 'Overlay Player'
        },
        players = [];

    var logEnvironmentSelected = function() {
        if(environment === 'DEV')
            console.log('iframe_api loaded from ' + environment + 'environment');
    },

    /**
     * @name onYouTubeIframeAPIReady 
     * @description This method will be called after Youtube library loaded
     */
    onYouTubeIframeAPIReady = function () { 

        createPlayers({
            players: $(selector.playerContainers)
        });
        
    }, 

    onPlayerReady = function (event) {

        if(defaults.autoRun)
            event.target.playVideo();

    },

    onPlayerStateChange = function (event) {
        var pollingReference;
        switch(event.data) {
            /** unstarted */
            case -1:
                //console.log('unstarted');
                break;
            case YT.PlayerState.ENDED:
                trackOnEnd(event);
                if(pollingReference) 
                    clearInterval(pollingReference);
                break;
            case YT.PlayerState.PLAYING:
                players.map(function(el, index){
                    if(players[index].getVideoUrl() !== event.target.getVideoUrl())
                        players[index].stopVideo();
                });
                trackOnPlay(event);
                pollingReference = setInterval(function() { poll(event, progress) }, 500);
                break;
            case YT.PlayerState.PAUSED:
                break;
            case YT.PlayerState.BUFFERING:
                break;
            case YT.PlayerState.CUED:
                break;
            default:
            // left intentionally blank
        }
    },

    poll = function(event, progress) {

        currentDuration = Math.round(event.target.getDuration()*10)/10;
        currentTime = event.target.getCurrentTime();
        var milestone1 = Math.round(currentDuration/4) ;
        //var midpoint = Math.round(currentDuration/2) ;
        var midpoint = Math.round(milestone1*2) ;
        var milestone3 = Math.round(milestone1*3) ;

        var pDivId = event.target.a.id,
            pURL   = event.target.getVideoUrl(),
            autoStart = (isOverlayPlayer(event) === PLAYER_POSITION.OVERLAY) ? "1" : "0",
            videoLengthTotal = Math.round(event.target.getDuration()),
            currentLengthViewed = event.target.getCurrentTime();

        videoLengthTotal = getMinutesSeconds(videoLengthTotal);
        if(currentTime >= 10.0 && currentTime < midpoint && !progress.isTenSeconds) {
            progress.isTenSeconds = true;
        }
        else if(currentTime >= milestone1 && currentTime < currentDuration && !progress.isQuarter) {
            progress.isQuarter = true;
            ddo.pushEvent(
                'video','MCOM_Video_Progress',
                {
                    'successFlag'            : '1',
                    'linkName'               : pDivId,
                    'videoPlayerName'        : 'YouTube',
                    'videoFriendlyName'      : pDivId,
                    'fileName'               : pDivId,
                    'videoAutoPlayFlag'      : autoStart,
                    'linkDestinationUrl'     : pURL,
                    'videoLocation'          : 'Body',
                    'videoLengthTotal'       : videoLengthTotal,
                    'videoLengthViewed'      : getMinutesSeconds(currentLengthViewed),
                    'videoWatchedPercent'    : '25%',
                    'videoProgressionPercent': '25%',
                    'videoProgressionType'   : 'Milestone'
                }
            );
        }
        else if(currentTime >= midpoint && currentTime < currentDuration && !progress.isHalf) {
            progress.isHalf = true;
            ddo.pushEvent(
                'video','MCOM_Video_Progress',
                {
                    'successFlag'            : '1',
                    'linkName'               : pDivId,
                    'videoPlayerName'        : 'YouTube',
                    'videoFriendlyName'      : pDivId,
                    'fileName'               : pDivId,
                    'videoAutoPlayFlag'      : autoStart,
                    'linkDestinationUrl'     : pURL,
                    'videoLocation'          : 'Body',
                    'videoLengthTotal'       : videoLengthTotal,
                    'videoLengthViewed'      : getMinutesSeconds(currentLengthViewed),
                    'videoWatchedPercent'    : '50%',
                    'videoProgressionPercent': '50%',
                    'videoProgressionType'   : 'Milestone'
                }
            );
        }
        else if(currentTime >= milestone3 && currentTime < currentDuration && !progress.isThreeForth) {
            progress.isThreeForth = true;
            ddo.pushEvent(
                'video','MCOM_Video_Progress',
                {
                    'successFlag'            : '1',
                    'linkName'               : pDivId,
                    'videoPlayerName'        : 'YouTube',
                    'videoFriendlyName'      : pDivId,
                    'fileName'               : pDivId,
                    'videoAutoPlayFlag'      : autoStart,
                    'linkDestinationUrl'     : pURL,
                    'videoLocation'          : 'Body',
                    'videoLengthTotal'       : videoLengthTotal,
                    'videoLengthViewed'      : getMinutesSeconds(currentLengthViewed),
                    'videoWatchedPercent'    : '75%',
                    'videoProgressionPercent': '75%',
                    'videoProgressionType'   : 'Milestone'
                }
            );
        }
    },

    /** dependency: ddo object */
    trackOnEnd = function(event) {
        var pDivId           = event.target.a.id,
            pURL             = event.target.getVideoUrl(),
            autoStart        = (isOverlayPlayer(event) === PLAYER_POSITION.OVERLAY) ? "1" : "0",
            videoLengthTotal = Math.round(event.target.getDuration());
            
        videoLengthTotal     = getMinutesSeconds(videoLengthTotal);
        // is it required?
        // flashTrack('end_video');
        ddo.pushEvent(
            'video','MCOM_Video_Complete',
            {
                'successFlag'            : '1',
                'linkName'               : pDivId,
                'videoPlayerName'        : 'YouTube',
                'videoFriendlyName'      : pDivId,
                'fileName'               : pDivId,
                'videoAutoPlayFlag'      : autoStart,
                'linkDestinationUrl'     : pURL,
                'videoLocation'          : 'Body',
                'videoLengthTotal'       : videoLengthTotal,
                'videoLengthViewed'      : videoLengthTotal,
                'videoWatchedPercent'    : '100%',
                'videoProgressionPercent': '100%',
                'videoProgressionType'   : 'Milestone'
            }
        );
    },

    /**
     * @dependency ddo object
     */
    trackOnPlay = function(event) {
        var pDivId       = event.target.a.id,
            pURL         = event.target.getVideoUrl(),
            autoStart    = (isOverlayPlayer(event) === PLAYER_POSITION.OVERLAY) ? "1" : "0",
            videoLengthTotal,
            player;

        if (!isStartVideo) {
            isStartVideo = true ;
            player = event.target;
            player.durationCheck = setInterval(function() {
                /** Until player ready getDuration value will be 0 */
                if (player.getDuration() !== 0) {
                    videoLengthTotal = Math.round(player.getDuration());
                    videoLengthTotal = getMinutesSeconds(videoLengthTotal);
                    ddo.pushEvent(
                        'video', 'MCOM_Video_Start',
                        {
                            'successFlag'       : '1',
                            'linkName'          : pDivId,
                            'videoPlayerName'   : 'YouTube',
                            'videoFriendlyName' : pDivId,
                            'fileName'          : pDivId,
                            'videoAutoPlayFlag' : autoStart,
                            'linkDestinationUrl': pURL,
                            'videoLocation'     : 'Body',
                            'videoLengthTotal'  : videoLengthTotal
                        }
                    );
                    clearTimeout(player.durationCheck);
                }
            }, 250);
        }
        // is it required?
        //flashTrack('track_start_video');
    },

    /**
     * isOverlayPlayer Determine in page or overlay player 
     * @todo This logic based on html structure; May need to refine further
     * @param  {Object}  event current player - passed by youtube library
     * @return {const PLAYER_POSITION}       IN_PAGE | OVERLAY
     */
    isOverlayPlayer = function(event) {

        var playerType = PLAYER_POSITION.IN_PAGE;

        if($(event.target.a).parents('#vidlightbox').length) 
            playerType = PLAYER_POSITION.OVERLAY;

        return playerType;

    },

    getMinutesSeconds = function(videoDuration) { 

        var videoLengthTotal = "0",
            videoTimes,
            videoLengthMinutes,
            videoLengthSeconds;

        try {
            videoLengthTotal   = videoDuration / 60;
            videoTimes         = videoLengthTotal.toString().split(".");
            videoLengthMinutes = videoTimes[0];
            videoLengthSeconds = "." + videoTimes[1];
            videoLengthSeconds = Math.round(60*videoLengthSeconds);
            videoLengthTotal   = videoLengthMinutes + "m" + videoLengthSeconds + "s";
        } catch (err) {
            // left intentionall blank
        }

        return videoLengthTotal;

    },
    getPlayerType = function(player) {

        var playerType;
        if(player.data('src') !== undefined) {
            playerType = PLAYER_TYPE.ytPlayer;
        } else if(player.data('path') !== undefined) {
            playerType = PLAYER_TYPE.jwPlayer
        }
        return playerType;
    },

    /**
     * @name createPlayers 
     * @param  {[type]} options options.players should contain DOM element of player's containers
     * @example
     * options.players DOM element must contains data attribute for width, height, src
     * <div class="youtube-player"
     *    data-width="640" data-height="360"
     *    data-src="M7lc1UVf-VE"
     *    frameborder="0">
     * </div>
     */
    createPlayers = function(options) {

        var videoId,
            $currentPlayer,
            playerType;

        if(options.players.length) {

            options.players.map(function(index, el) {

                $currentPlayer = $(options.players[index]);

                switch(getPlayerType($currentPlayer)) {
                    case PLAYER_TYPE.ytPlayer:
                        videoId = $currentPlayer.data('src');
                        break;
                    case PLAYER_TYPE.jwPlayer:
                        videoId = $currentPlayer.data('path').split('=')[1];
                        break;
                }

                players.push(new YT.Player(el, {
                    width: $currentPlayer.data('width') || defaults.width,
                    height: $currentPlayer.data('height') || defaults.height,
                    videoId: videoId,
                    playerVars: {
                        'rel': 0,
                        'showinfo': 0
                    },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                }));

            });

        }

    },

    getPlayers = function() {

        return players;

    },

    /**
     * setPlayers used to set youtube player on the fly
     * @param {String} eleClass className of the DOM element (omit .) eg overlay-youtube-player
     * @param {Object} options  eg. {autoRun : true | false}
     */
    setPlayers = function(eleClass, options) {
        defaults.autoRun = options.autoRun || false;
        createPlayers({
            players: $('.'+eleClass)
        });
    },

    /**
     * stopAll Stops all the videos playing
     * @example
     * $('.close-button').on('click', function(){ 
     *     att.entbus.ytPlayer.stopAll();
     * })
     * 
     */
    stopAll = function() {
        var players = getPlayers();
        if(players.length) {
            players.map(function(el, index){
                players[index].stopVideo();
            });
        }
    };

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    att.util.loadScript(environment === 'PROD' ? librarySourceUrl.production : librarySourceUrl.local, logEnvironmentSelected);

    /**
     * Public method
     * @type {Object}
     * @example
     * att.entbus.ytPlayer.getPlayers()[0].playVideo();
     * att.entbus.ytPlayer.getPlayers()[0].pauseVideo();
     * @returns {Array} Reference to initialised Youtube players
     */
    module = {

        getPlayers: getPlayers,
        setPlayers: setPlayers,
        stopAll   : stopAll

    };

    Namespacer('att.entbus.ytPlayer', module);

})(jQuery.noConflict());


'use strict';

(function($) {  
    $.fn.videoBox = function(options) {
        var mediaTitle;
        $(this).click(function(e) {
            var id = $(this).attr("id");
            var href = $(this).attr("href");
            mediaTitle = $(this).attr("data-mediatitle");
            var mediaId   = $(this).attr("data-mediaid");
            var pageid    = $(this).attr("data-pageid");
            var videosource = $(this).attr("data-video-source");
            var mediaImage = $(this).attr("data-image");
            var mediaPath = $(this).attr("data-path");
            var mediaSrc = (videosource == "youtube")? ($(this).attr("data-youtubeid")) : "";
            var mediaccFile = $(this).attr("data-cc-file");
            var wtattr = $(this).attr("data-wtattr");
            var showMedia = "showVideo";
            href = (videosource == "youtube")? "media.mp4" : href;
            e.preventDefault();
            if ($('#vidlightbox').length > 0) { 
                $('#vidcontent').html('<div id="mediaContent" data-src="' + mediaSrc + '" class="mediaWrap overlay-youtube-player" style="position:relative;"></div><div class="vid-meta"><p class="vid-title">' + mediaTitle + '</div><a class="vid-close">Close</a>');                
                $('#vidlightbox').show();
            } else{
                var lightbox = 
                '<div id="vidlightbox">' +
                    '<div id="vidcontent">' + 
                        '<div id="' + mediaTitle + '" data-src="' + mediaSrc + '" class="mediaWrap overlay-youtube-player" style="position:relative;"></div>' +
                        '<div class="vid-meta"><p class="vid-title">' + mediaTitle + '</div><a class="vid-close">Close</a>' +
                    '</div>' +  
                '</div>';
                $('body').append(lightbox);
                if((window.innerWidth || document.documentElement.clientWidth) < 768) {
                    $('#vidcontent').css('width','320px');
                    // vid_url param  width = mobile view
                }
                // code for changing the title wrapping for firefox and IE
                // code for mp3 player change the margin-top
            }

            if(videosource === 'youtube') {
                att.entbus.ytPlayer.setPlayers('overlay-youtube-player', {autoRun: true});
            } else {
				$("#overlayfid").attr("src", "/mediaplayer_overlay.jsp?" + "&overlay=true&tracking=true&mediaid=" + mediaId + "&mediatitle=" + escape(mediaTitle) 
											+ "&pageid=" + pageid + "&wtattr=" + wtattr + "&" + showMedia + "=true");
				var vid_url = "/mediaplayer_overlay.jsp?file=" + href + "&mediaid=" + mediaId + "&overlay=";
				vid_url += (videosource == "youtube") ? ("iotyt" + "&mediaImage=" + mediaImage + "&mediaPath=" + mediaPath + "&mediaccFile=" + mediaccFile) : "iot";
                $('.mediaWrap').load(vid_url);
            }

			$(document).on('click', '.vid-close', function () {
				$('#vidlightbox').hide();
				if (videosource == "youtube") {
					$('#vidcontent').empty();
					att.entbus.ytPlayer.stopAll();
				} else {
					if (jwplayer('jwPlayer') != null) {
						try {
						jwplayer('jwPlayer').remove();
						} catch(err) {}
					}
				}
			});

        });
    };
}(jQuery));

