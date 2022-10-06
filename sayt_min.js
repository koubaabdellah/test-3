var timeoutID, saytRwd = 205,
    saytRwo = -205;
var searchAsYouTypeConfiguration = {
    resourcesPath: "//www.corp.att.com/attsearch/sayt/",
    ajaxResponderUrl: "//www.corp.att.com/responder",
    helpPageUrl: "",
    showTips: false,
    maxFullResults: 5,
    keystrokeDelay: 20,
    showResultsDelay: 10,
    bottomPageMargin: 10,
    resultTopOffset: 4,
    resultWidthDelta: function() {
        if (window.screen.width <= 1000 && saytRwd != 0) {
            saytRwd = 55;
        }
        return saytRwd;
    },
    resultWidthOffset: function() {
        if (window.screen.width <= 1000 && saytRwo != 0) {
            saytRwo = -55;
        }
        return saytRwo;
    },
    autocompleteOffset: 0,
    prompt: "Search AT&T Business for...",
    showPrompt: true
};

function SearchAsYouType() {}

function ClearTimeIntvl() {
    clearTimeout(timeoutID);
}
SearchAsYouType.prototype.initialize = function(inputFieldEl, focus, showPrompt) {
    this.initializeVariables_(inputFieldEl);
    this.detectBrowser_();
    this.createDomElements_();
    this.restoreInputField_();
    this.addEventHandlers_();
    this.prepareRandomTip_();
    this.updateDimensionsAndShadow_(null);
    searchAsYouTypeConfiguration.showPrompt = (showPrompt == null) ? searchAsYouTypeConfiguration.showPrompt : showPrompt;
    if (this.debugMode) {
        this.activateDebugConsole_();
    }
    if (focus) {
        this.focusInputField_();
    } else {
        this.handleInputBlur(this);
    }
    this.initialized = true;
}
SearchAsYouType.prototype.initializeVariables_ = function(inputFieldEl) {
    this.location = "" + window.location;
    this.protocol = this.location.substr(0, this.location.indexOf("://") + 3);
    this.resourcesPath = searchAsYouTypeConfiguration.resourcesPath;
    this.ajaxObject = null;
    this.results = {};
    this.searchCache = [];
    this.initialized = false;
    this.waitingForSearchResults = false;
    this.resultsWindowHidden = true;
    this.inputFieldEl = inputFieldEl;
    this.typedQuery = this.getInputFieldValue_();
    this.searchResultsEl = 0;
    this.alternateSearchResultsEl = 0;
    this.inputFieldHasFocus = 0;
    this.activeResult = -1;
    this.resultsWindowHiddenByClicking = false;
    this.arrowKeyProcessed = false;
    this.lastKeyPressed = 0;
    this.showResultsTimeoutId = -1;
    this.keystrokeTimeoutId = -1;
    this.autocomplete = '';
    this.autocompleteJustCollapsed = false;
    this.tipText = '';
    this.debugMode = this.location.indexOf("debugSearchAsYouType") > -1;
}
SearchAsYouType.prototype.detectBrowser_ = function() {
    this.browserIE = false;
    this.browserFirefox = false;
    this.browserSafari = false;
    if (navigator.userAgent.indexOf("MSIE") > -1) {
        this.browserIE = true;
    } else if ((navigator.userAgent.indexOf("Firefox/") > -1)) {
        this.browserFirefox = true;
        if ((navigator.userAgent.indexOf("Firefox/1.0.") > -1)) {
            this.browserFirefox10 = true;
        } else {
            this.browserFirefox10 = false;
        }
    } else if (navigator.userAgent.indexOf("Safari") > -1) {
        this.browserSafari = true;
        if (navigator.userAgent.indexOf("Version/") > -1) {
            this.browserSafari3OrHigher = true;
        }
    }
}

function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
SearchAsYouType.prototype.attachStylesheets_ = function() {
    this.attachStylesheet_('generic.css');
    this.attachStylesheet_('customized.css');
    if (this.browserIE && getInternetExplorerVersion() <= 6) {
        this.attachStylesheet_('ie.css');
    } else
    if (this.browserSafari) {
        this.attachStylesheet_('safari.css');
    }
}
SearchAsYouType.prototype.attachStylesheet_ = function(filename) {
    var el = document.createElement('link');
    el.href = this.resourcesPath + "styles/" + filename;
    el.type = 'text/css';
    el.rel = 'stylesheet';
    document.getElementsByTagName('head').item(0).appendChild(el);
}
SearchAsYouType.prototype.createDomElements_ = function() {
    var el = document.createElement("input");
    el.id = 'searchAsYouTypeBackupSearchField';
    el.style.display = 'none';
    document.body.appendChild(el);
    this.searchResultsEl = document.createElement("div");
    this.searchResultsEl.id = 'searchAsYouTypeResults1';
    this.searchResultsEl.className = 'searchResults';
    this.searchResultsEl.style.display = 'none';
    this.searchResultsEl.style.position = 'absolute';
    this.searchResultsEl.onclick = 'event.cancelBubble = true;';
    this.searchResultsEl.tabIndex = -1;
    this.alternateSearchResultsEl = document.createElement("div");
    this.alternateSearchResultsEl.id = 'searchAsYouTypeResults2';
    this.alternateSearchResultsEl.className = 'searchResults';
    this.alternateSearchResultsEl.style.display = 'none';
    this.alternateSearchResultsEl.style.position = 'absolute';
    this.alternateSearchResultsEl.onclick = 'event.cancelBubble = true;';
    this.alternateSearchResultsEl.tabIndex = -1;
    this.searchResultsShadowEl = document.createElement("div");
    this.searchResultsShadowEl.id = 'searchAsYouTypeResultsShadow';
    this.searchResultsShadowEl.style.visibility = 'hidden';
    this.searchResultsShadowEl.style.display = 'none';
    this.searchResultsShadowEl.style.left = 0;
    this.searchResultsShadowEl.style.top = 0;
    this.searchResultsShadowEl.style.width = 0;
    this.searchResultsShadowEl.style.height = 0;
    var el = document.createElement("searchAsYouType");
    el.id = 'searchAsYouType';
    el.appendChild(this.searchResultsEl);
    el.appendChild(this.alternateSearchResultsEl);
    el.appendChild(this.searchResultsShadowEl);
    document.body.appendChild(el);
    this.waitingForSearchResultsEl = document.createElement("img");
    this.waitingForSearchResultsEl.style.visibility = 'hidden';
    this.waitingForSearchResultsEl.style.position = 'absolute';
    document.body.appendChild(this.waitingForSearchResultsEl);
    this.autocompleteEl = document.createElement("div");
    this.autocompleteEl.id = 'searchAsYouTypeAutocomplete';
    this.autocompleteEl.className = 'searchAsYouTypeAutocompleteInputMatch';
    document.body.appendChild(this.autocompleteEl);
    this.autocompleteEl.onmousedown = searchAsYouTypeBind(this.handleAutocompleteMouseDown, this);
    this.autocompleteEl.style.zIndex = 5000;
    this.autocompleteEl.style.display = 'none';
    this.autocompleteHelperEl = document.createElement("div");
    this.autocompleteHelperEl.id = 'searchAsYouTypeAutocompleteHelper';
    this.autocompleteHelperEl.visibility = 'hidden';
    this.autocompleteHelperEl.className = 'searchAsYouTypeAutocompleteInputMatch';
    document.body.appendChild(this.autocompleteHelperEl);
}
SearchAsYouType.prototype.getInputFieldValue_ = function() {
    return this.inputFieldEl.value.toLowerCase().replace(/^\s+/g, '').replace(/\s+$/g, '');
}
SearchAsYouType.prototype.focusInputField_ = function() {
    this.inputFieldEl.focus();
    if (this.inputFieldEl.createTextRange && window.document.selection) {
        var sel = this.inputFieldEl.createTextRange();
        sel.collapse(true);
        sel.move("character", this.inputFieldEl.value.length);
        sel.select();
    }
}
SearchAsYouType.prototype.clearInputField_ = function() {
    this.inputFieldEl.value = '';
    this.clearAutocomplete_(true);
    this.prepareRandomTip_();
}
SearchAsYouType.prototype.saveInputField = function(e) {
    document.getElementById('searchAsYouTypeBackupSearchField').value = this.inputFieldEl.value;
    document.getElementById('searchAsYouTypeBackupSearchField').setAttribute("active", 1);
}
SearchAsYouType.prototype.restoreInputField_ = function() {
    if (document.getElementById('searchAsYouTypeBackupSearchField').getAttribute("active")) {
        this.inputFieldEl.value = document.getElementById('searchAsYouTypeBackupSearchField').value;
        this.typedQuery = this.getInputFieldValue_();
    }
}
SearchAsYouType.prototype.addEventHandlers_ = function() {
    this.inputFieldEl.onkeyup = searchAsYouTypeBind(this.handleInputKeyUp, this);
    this.inputFieldEl.onkeypress = searchAsYouTypeBind(this.handleInputKeyPress, this);
    this.inputFieldEl.onkeydown = searchAsYouTypeBind(this.handleInputKeyDown, this);
    this.inputFieldEl.onfocus = searchAsYouTypeBind(this.handleInputFocus, this);
    this.inputFieldEl.onblur = searchAsYouTypeBind(this.handleInputBlur, this);
    this.inputFieldEl.onclick = searchAsYouTypeBind(this.handleInputClick, this);
    this.inputFieldEl.onmousedown = searchAsYouTypeBind(this.handleInputMouseDown, this);
    this.inputFieldEl.setAttribute('autocomplete', 'off');
    if (window.addEventListener) {
        document.body.addEventListener('click', searchAsYouTypeBind(this.handleBodyClick, this), false);
        document.addEventListener('keyup', searchAsYouTypeBind(this.handleBodyKeyUp, this), false);
        document.addEventListener('keydown', searchAsYouTypeBind(this.handleBodyKeyDown, this), false);
        document.addEventListener('keypress', searchAsYouTypeBind(this.handleBodyKeyPress, this), false);
        window.addEventListener('resize', searchAsYouTypeBind(this.handleBodyResize, this), false);
    } else {
        document.body.attachEvent('onclick', searchAsYouTypeBind(this.handleBodyClick, this));
        document.body.attachEvent('onkeyup', searchAsYouTypeBind(this.handleBodyKeyUp, this));
        document.body.attachEvent('onkeydown', searchAsYouTypeBind(this.handleBodyKeyDown, this));
        document.onkeypress = searchAsYouTypeBind(this.handleBodyKeyPress, this);
        window.attachEvent('onresize', searchAsYouTypeBind(this.handleBodyResize, this));
    }
    try {
        window.onpageshow = function(event) {
            if (event.persisted) {
                searchAsYouType.restoreInputField_();
            }
        };
    } catch (e) {}
    if ((this.browserFirefox) && (!this.browserFirefox10)) {
        window.onpagehide = searchAsYouTypeBind(this.saveInputField, this);
    } else {
        window.onunload = searchAsYouTypeBind(this.saveInputField, this);
    }
}
SearchAsYouType.prototype.prepareRandomTip_ = function() {
    var tips = ['You can use arrow keys to navigate these results.', 'Press Tab, space or right arrow to auto-complete.', 'Press Esc or up arrow to hide this pop-up. ' + 'Press Esc again to quickly clear the search field.', 'Click outside this pop-up to hide it. ' + 'Click on the search bar twice to show it again.'];
    if (searchAsYouTypeConfiguration.showTips && Math.random() < 0.05) {
        this.tipText = tips[Math.floor(Math.random() * tips.length)];
    } else {
        this.tipText = '';
    }
}
SearchAsYouType.prototype.updateDimensionsAndShadow_ = function(searchResultsEl) {
    var el = this.inputFieldEl;
    var x = 0;
    var y = 0;
    var obj = el;
    do {
        x += obj.offsetLeft;
        y += obj.offsetTop;
        obj = obj.offsetParent;
    } while (obj);
    this.waitingForSearchResultsEl.style.left = (x + this.inputFieldEl.offsetWidth - 19) + 'px';
    this.waitingForSearchResultsEl.style.top = (y + 3) + 'px';
    this.autocompleteEl.setAttribute("originalLeft", x);
    this.autocompleteEl.style.top = y + 'px';
    if (this.inputFieldEl.clientHeight == 0) {
        this.autocompleteEl.style.height = this.inputFieldEl.style.height;
    } else {
        this.autocompleteEl.style.height = (this.inputFieldEl.clientHeight - 1) + 'px';
    }
    if (searchResultsEl) {
        y += el.offsetHeight - 2;
        var rto = searchAsYouTypeConfiguration.resultTopOffset;
        if (this.browserIE) {
            rto -= 1;
        }
        var w = el.offsetWidth - 2 + searchAsYouTypeConfiguration.resultWidthDelta();
        searchResultsEl.style.left = (x + 46 + searchAsYouTypeConfiguration.resultWidthOffset()) + "px";
        searchResultsEl.style.top = (y + rto) + "px";
        searchResultsEl.style.width = w + "px";
        x = searchResultsEl.offsetLeft;
        y = searchResultsEl.offsetTop;
        w = searchResultsEl.offsetWidth;
        var ch = searchResultsEl.scrollHeight;
        if (self.innerHeight) {
            var screenHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) {
            var screenHeight = document.documentElement.clientHeight;
        } else if (document.body) {
            var screenHeight = document.body.clientHeight;
        }
        if (document.documentElement.scrollTop) {
            var scrollTop = document.documentElement.scrollTop;
        } else {
            var scrollTop = document.body.scrollTop;
        }
        var documentContentHeight = screenHeight - scrollTop;
        var maxSearchResultsHeight = documentContentHeight - y - searchAsYouTypeConfiguration.bottomPageMargin;
        if (ch > maxSearchResultsHeight) {
            searchResultsEl.style.height = maxSearchResultsHeight + "px";
        } else {
            searchResultsEl.style.height = "auto";
        }
        var h = searchResultsEl.offsetHeight;
        if (this.browserIE) {
            h = searchResultsEl.offsetHeight;
        }
        this.resizeShadowEl_("", x, y, w + 4, h + 6);
        this.resizeShadowEl_("L", -2, 5, 2, h - 5);
        this.resizeShadowEl_("TL", -2, 0, 2, 5);
        this.resizeShadowEl_("TR", w, 0, 2, 5);
        this.resizeShadowEl_("R", w, 5, 2, h - 5);
        this.resizeShadowEl_("B", 4, h, w - 8, 6);
        this.resizeShadowEl_("BL", -2, h, 6, 6);
        this.resizeShadowEl_("BR", w - 4, h, 6, 6);
    }
}
SearchAsYouType.prototype.resizeShadowEl_ = function(id, x, y, w, h) {
    var el = document.getElementById('searchAsYouTypeResultsShadow' + id);
    try {
        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.width = w + "px";
        el.style.height = h + "px";
    } catch (e) {}
}
SearchAsYouType.prototype.search_ = function(dontDelayShowResults) {
    if (dontDelayShowResults === true) {
        this.delayShowResults = false;
    } else {
        this.delayShowResults = true;
    }
    if (this.typedQuery.length == 0) {
        this.changeWaitingForSearchResults_(false);
        return;
    }
    URL = searchAsYouTypeConfiguration.ajaxResponderUrl;
    URL += "?query=" + encodeURIComponent(this.typedQuery);
    URL += "&mode=sayt";
    URL += "&jsonp=searchAsYouType.handleAjaxResponse";
    URL += "&sourl=" + this.location;
    if (this.debugMode) {
        URL += "&debug=1";
    }
    if (this.waitingForSearchResults) {
        this.cancelCurrentSearch_();
    }
    if (this.debugMode) {
        this.addToDebugConsoleTimesNewLine_("<td>" + this.typedQuery + "</td>");
        var date = new Date();
        this.debugQueryStartTime = date.getTime();
    }
    this.changeWaitingForSearchResults_(true);
    if (this.searchCache["_" + this.typedQuery]) {
        this.ajaxRequestStartTime = -1;
        this.processResults_(this.searchCache["_" + this.typedQuery].results, true);
    } else {
        var date = new Date();
        this.ajaxRequestStartTime = date.getTime();
        this.ajaxObject = document.createElement('script');
        this.ajaxObject.src = URL;
        this.ajaxObject.type = "text/javascript";
        this.ajaxObject.charset = "utf-8";
        document.getElementsByTagName('head').item(0).appendChild(this.ajaxObject);
    }
}
SearchAsYouType.prototype.cancelCurrentSearch_ = function() {
    if (this.ajaxObject) {
        try {
            document.getElementsByTagName('head').item(0).removeChild(this.ajaxObject);
        } catch (e) {}
    }
}
SearchAsYouType.prototype.changeWaitingForSearchResults_ = function(value) {
    if (this.waitingForSearchResults != value) {
        if (value) {
            this.waitingForSearchResultsEl.style.visibility = 'visible';
        } else {
            this.waitingForSearchResultsEl.style.visibility = 'hidden';
            this.cancelCurrentSearch_();
        }
    }
    this.waitingForSearchResults = value;
}
SearchAsYouType.prototype.handleAjaxResponse = function(results) {
    if (results.results.length && this.tipText) {
        var moreDetailsUrl = searchAsYouTypeConfiguration.helpPageUrl;
        var content = '<p> ' + this.tipText;
        if (moreDetailsUrl) {
            content += ' <a' + ' unselectable="on" class="unselectable moreDetails"' + ' href="' + moreDetailsUrl + '">Learn more</a>';
        }
        content += '</p>';
        results.results.push({
            "type": "Tip",
            "name": "",
            "content": content,
            "style": "compact",
            "moreDetailsUrl": moreDetailsUrl
        });
    }
    this.processResults_(results, false);
}
SearchAsYouType.prototype.processResults_ = function(results, cached) {
    if (this.lastKeyPressed == 8) {
        var dontDoAutocomplete = true;
    } else {
        var dontDoAutocomplete = false;
    }
    if (!results.autocompletedQuery) {
        results.autocompletedQuery = results.query;
    }
    results.countNotCompact = 0;
    results.countExpanded = 0;
    for (var i in results.results) {
        if (results.results[i].style == 'expanded') {
            results.countExpanded++;
            results.countNotCompact++;
        } else if (results.results[i].style == 'normal') {
            results.countNotCompact++;
        }
    }
    this.results = searchAsYouTypeCloneObject(results);
    this.searchCache["_" + this.results.query] = {};
    this.searchCache["_" + this.results.query].results = searchAsYouTypeCloneObject(results);
    this.resultsWindowHiddenByClicking = false;
    if (results.query == this.typedQuery) {
        if (this.debugMode) {
            var date = new Date();
            var debugQueryEndTime = date.getTime();
            this.addToDebugConsoleTimesCurrentLine_("<td>" + results.autocompletedQuery + "</td>");
            this.addToDebugConsoleTimesCurrentLine_("<td>" + results.results.length + "</td>");
            this.addToDebugConsoleTimesCurrentLine_("<td>" + searchAsYouTypeConfiguration.showResultsDelay + " ms</td>");
            if (cached) {
                this.addToDebugConsoleTimesCurrentLine_("<td colspan='4'>(from cache)</td>");
            } else {
                this.addToDebugConsoleTimesCurrentLine_("<td class='no'>" + (debugQueryEndTime - this.debugQueryStartTime) + " ms</td>");
                this.addToDebugConsoleTimesCurrentLine_("<td class='no'>" + this.results.debugInfo.globalTime + " ms</td>");
            }
        }
        if ((cached) && (dontDoAutocomplete)) {
            if (this.searchCache["_" + this.results.query].autocompleted) {
                this.hideResultsWindow_();
                this.changeWaitingForSearchResults_(false);
                return;
            }
        }
        if (!this.results.results.length) {
            this.hideResultsWindow_();
            this.changeWaitingForSearchResults_(false);
        } else {
            this.prepareResultsWindow_();
            if (!dontDoAutocomplete) {
                this.addAutocompleteTextIfPossible_();
            }
        }
    }
}
SearchAsYouType.prototype.getResultTypeDescriptionHtml_ = function(type) {
    return '<h1>' + type + ": " + "</h1>";
}
SearchAsYouType.prototype.getResultTypeClassName_ = function(type) {
    return type.replace(/\ /g, "");
}
SearchAsYouType.prototype.getResultsHtml_ = function(resultId) {
    var currentResultId = 0;
    var html = '';
    var lastType = null;
    var openDiv = false;
    var sayCnt = 0;
    var styles = ['expandedPriority', 'expanded', 'normal', 'compact'];
    for (var styleNo in styles) {
        for (var i = 0; i < this.results.results.length; i++) {
            if (this.results.results[i].style != styles[styleNo]) {
                continue;
            }
            if ((resultId == -1) || (resultId == currentResultId)) {
                if (resultId > -1) {
                    var style = 'expandedPriority';
                } else {
                    var style = styles[styleNo];
                }
                if ((style != 'normal') || (lastType != this.results.results[i].type)) {
                    if (openDiv) {
                        html += '</div>';
                    }
                    var className = "searchResult " +
                        this.getResultTypeClassName_(this.results.results[i].type);
                    if (currentResultId == 0) {
                        className += " first";
                    }
                    if (style == 'normal') {
                        html += '<div class="' + className + ' summary" ';
                        html += 'onclick="event.cancelBubble = true;" ';
                        html += '>';
                        lastType = this.results.results[i].type;
                        html += this.getResultTypeDescriptionHtml_(this.results.results[i].type);
                        openDiv = true;
                    }
                } else if (style == 'normal') {
                    html += "&nbsp;&middot; ";
                }
                var recommendedSchResults = "";
                var saytContent;
                if (style != 'normal') {
                    saytContent = this.results.results[i].content;
                    if (this.results.results[i].type == '')
                        sayCnt++;
                    if (saytContent.match("^<P>"))
                        recommendedSchResults = this.results.results[i].content;
                    html += '<div id="searchResult' + currentResultId + '" ' + 'class="' + className + '" ' + 'originalId="' + i + '" ' + 'moreDetailsUrl="' + this.results.results[i].moreDetailsUrl + '" ' + 'onclick="searchAsYouType.handleSearchResultClick(event);ddoTrackingSayt(this);"; ' + 'onmouseover="searchAsYouType.handleMouseOverInIE6(this)"; ' + 'onmouseout="searchAsYouType.handleMouseOutInIE6(this)"; ' + '>' + this.results.results[i].content + '</div>';
                } else {
                    html += '<a ' + ' id="searchResult' + currentResultId + '"' + ' originalId="' + i + '" ' + ' onclick="return ' + ' searchAsYouType.expandSummaryResult(event, ' +
                        currentResultId + ')" ' + ' class="command nowrap summarized" href="' +
                        this.results.results[i].moreDetailsUrl + '">' + this.results.results[i].name + '</a>';
                }
            }
            currentResultId++;
        }
    }
    var maxLen = this.getMaxLenOfHyperlinks_(recommendedSchResults);
    if (sayCnt == 0)
        if (maxLen > 85) {
            saytRwd = maxLen - 85;
            saytRwo = -(maxLen - 85);
        }
    else {
        saytRwd = 0;
        saytRwo = 0;
    } else {
        saytRwd = 205;
        saytRwo = -205;
    }
    if (this.inputFieldEl.value.length >= 0) {
        timeoutID = setTimeout("ClearTimeIntvl()", 600);
        this.attachStylesheets_();
        this.waitingForSearchResultsEl.src = this.resourcesPath + "images/loading.gif";
        var el = document.createElement("div");
        el.id = 'searchAsYouTypeResultsShadowL';
        this.searchResultsShadowEl.appendChild(el);
        var el = document.createElement("div");
        el.id = 'searchAsYouTypeResultsShadowR';
        this.searchResultsShadowEl.appendChild(el);
        var el = document.createElement("div");
        el.id = 'searchAsYouTypeResultsShadowB';
        this.searchResultsShadowEl.appendChild(el);
        var el = document.createElement("div");
        el.id = 'searchAsYouTypeResultsShadowBL';
        this.searchResultsShadowEl.appendChild(el);
        var el = document.createElement("div");
        el.id = 'searchAsYouTypeResultsShadowBR';
        this.searchResultsShadowEl.appendChild(el);
        var el = document.createElement("div");
        el.id = 'searchAsYouTypeResultsShadowTL';
        this.searchResultsShadowEl.appendChild(el);
        var el = document.createElement("div");
        el.id = 'searchAsYouTypeResultsShadowTR';
        this.searchResultsShadowEl.appendChild(el);
    }
    return html;
}
SearchAsYouType.prototype.handleMouseOverInIE6 = function(e) {
    e.className += " srhover";
}
SearchAsYouType.prototype.handleMouseOutInIE6 = function(e) {
    if (e.className.indexOf("srhover") > 0) {
        e.className = e.className.replace("srhover", '');
    }
}
SearchAsYouType.prototype.getMaxLenOfHyperlinks_ = function(inStr) {
    var MaxLen = 0;
    var MaxContent = new String();
    var regEx = new RegExp("<a.+href=\".*\">(.*)</a>", i);
    var strArry = new Array();
    strArry = inStr.split("<br />");
    var hyperLnk = new String();
    var matches = new Array();
    try {
        for (var i = 0; i < strArry.length - 1; i++) {
            matches = regEx.exec(strArry[i]);
            hyperLnk = matches[1];
            if (hyperLnk != null && hyperLnk.length > MaxLen) {
                MaxLen = hyperLnk.length;
                MaxContent = hyperLnk;
            }
        }
        var e1 = document.createElement("Div");
        e1.Id = 'widthTest';
        e1.width = 'auto';
        e1.style.whiteSpace = "nowrap";
        e1.style.size = '11px';
        e1.style.visibility = 'hidden';
        e1.style.position = 'absolute';
        e1.style.fontFamily = 'Verdana, Arial, san-serif';
        e1.innerHTML = MaxContent;
        document.body.appendChild(e1);
        MaxLen = e1.clientWidth;
    } catch (e) {}
    return MaxLen;
}
SearchAsYouType.prototype.prepareResultsWindow_ = function() {
    var showExpanded;
    this.activeResult = -1;
  this.activeSubResult = -1;

    if (this.results.countNotCompact <= searchAsYouTypeConfiguration.maxFullResults) {
        for (var i = 0; i < this.results.results.length; i++) {
            if (this.results.results[i].style == 'expanded') {
                this.results.results[i].style = 'expandedPriority';
            } else if (this.results.results[i].style == 'normal') {
                this.results.results[i].style = 'expanded';
            }
        }
    }
    this.resultsHtml = this.getResultsHtml_(-1);
    if (this.showResultsTimeoutId > -1) {
        clearTimeout(this.showResultsTimeoutId);
    }
    var time;
    if (this.delayShowResults) {
        if (this.ajaxRequestStartTime == -1) {
            time = 0;
        } else {
            var date = new Date();
            time = date.getTime() - this.ajaxRequestStartTime;
        }
        var time = searchAsYouTypeConfiguration.showResultsDelay - time;
        if (time <= 1) {
            time = 1;
        }
    } else {
        time = 1;
    }
    this.showResultsTimeoutId = setTimeout(searchAsYouTypeBind(this.showResultsWindow_, this), time);
}
SearchAsYouType.prototype.showResultsWindow_ = function() {
    this.showResultsTimeoutId = -1;
    this.changeWaitingForSearchResults_(false);
    clearInterval(this.hideTimeout);
    this.resultsWindowHiddenByClicking = false;
    this.resultsWindowHidden = false;
    var i = 0;
  var j = 0;
    var el;
    while (el = document.getElementById('searchResult' + i)) {
    if(el.id == 'searchResult'+(this.results.results.length-1)){
		var numLinks = document.getElementById('searchResult'+(this.results.results.length-1)).getElementsByTagName("a");
		for (j=0;j<numLinks.length;j++) {
			numLinks[j].id = ''
		}
	}
        el.id = '';
        i++;
    }
    this.alternateSearchResultsEl.style.height = '1px';
    this.alternateSearchResultsEl.style.visibility = 'hidden';
    this.alternateSearchResultsEl.style.display = 'block';
    this.alternateSearchResultsEl.innerHTML = this.resultsHtml;
    this.alternateSearchResultsEl.style.opacity = 0.99;
    var els = this.alternateSearchResultsEl.getElementsByTagName('a');
    for (var i = 0, j = els.length; i < j; i++) {
    els.item(i).tabIndex = 0;
        els.item(i).target = "_top";
	els.item(i).id = "sugessions"+i;
  }  
    var els = this.alternateSearchResultsEl.getElementsByTagName('img');
    for (var i = 0, j = els.length; i < j; i++) {
        els.item(i).style.display = 'none';
        els.item(i).onload = searchAsYouTypeBind(this.handleImageOnLoad, this, els.item(i));
    }
    this.updateDimensionsAndShadow_(this.alternateSearchResultsEl);
    this.searchResultsEl.style.visibility = 'hidden';
    this.searchResultsEl.style.display = 'none';
    this.searchResultsShadowEl.style.display = 'block';
    this.searchResultsShadowEl.style.visibility = 'visible';
    this.searchResultsShadowEl.style.opacity = 1;
    this.alternateSearchResultsEl.style.visibility = 'visible';
    var el = this.searchResultsEl;
    this.searchResultsEl = this.alternateSearchResultsEl;
    this.alternateSearchResultsEl = el;
}
SearchAsYouType.prototype.handleImageOnLoad = function(el) {
    if (el) {
        el.style.display = 'inline';
        this.updateDimensionsAndShadow_(this.searchResultsEl);
    }
    return false;
}
SearchAsYouType.prototype.hideResultsWindow_ = function() {
    if (this.resultsWindowHidden) {
        return;
    }
    this.clearAutocomplete_(true);
    this.hideOpacity = this.searchResultsEl.style.opacity;
    clearInterval(this.hideTimeout);
    this.fadeLastTime = new Date().getTime();
    this.hideTimeout = setInterval(searchAsYouTypeBind(this.fadeResultsWindow_, this), 20);
    this.resultsWindowHidden = true;
    this.activeResult = -1;
  this.activeSubResult = -1;
}
SearchAsYouType.prototype.fadeResultsWindow_ = function() {
    var newTime = new Date().getTime();
    this.hideOpacity -= (newTime - this.fadeLastTime) * 0.005;
    this.fadeLastTime = newTime;
    if (this.hideOpacity <= 0) {
        clearInterval(this.hideTimeout);
        this.searchResultsEl.style.display = 'none';
        this.searchResultsShadowEl.style.visibility = 'hidden';
    } else {
        this.searchResultsEl.style.opacity = this.hideOpacity;
        this.searchResultsShadowEl.style.opacity = this.hideOpacity;
    }
}
/**
 * Activate (highlight) a result. Used for keyboard navigation
 * between search results.
 * @param {int} no The number of the result to activate
 */
 
 /**/
SearchAsYouType.prototype.highlightNextSubSearchResult_ = function() {

	var numLinks = document.getElementById('searchResult'+(this.results.results.length-1)).getElementsByTagName("a");
	
		if(numLinks.length){
			if (this.activeSubResult == -1) {
			  this.activeSubResult = 0;
			  this.highlightSubSearchResult_(this.activeSubResult);
			}else if (this.activeSubResult < numLinks.length) {
			  this.unhighlightSubSearchResult_(this.activeSubResult);
			  this.activeSubResult++;
			  this.highlightSubSearchResult_(this.activeSubResult);
			}
		}
	
}
 

SearchAsYouType.prototype.highlightPrevSubSearchResult_ = function() {
	var numLinks = document.getElementById('searchResult'+(this.results.results.length-1)).getElementsByTagName("a");
	if (numLinks.length) {
		if (this.activeSubResult == 0) {
		  // Going up from the first result will get us back in the input field
		  this.unhighlightSubSearchResult_(this.activeSubResult);
		  this.activeSubResult = -1;
		 
		} else if (this.activeSubResult > 0) {
		  this.unhighlightSubSearchResult_(this.activeSubResult);
		  this.activeSubResult--;
		  this.highlightSubSearchResult_(this.activeSubResult);
		}
	}
}

SearchAsYouType.prototype.unhighlightSubSearchResult_ = function(no) {
	document.getElementById('sugessions' + this.activeSubResult).className = document.getElementById('sugessions' + this.activeSubResult).className.replace(/ highlighted/, "");
}
SearchAsYouType.prototype.highlightSubSearchResult_ = function(no) {
	document.getElementById('sugessions' + this.activeSubResult).className += " highlighted";
}
 
 /**/
SearchAsYouType.prototype.highlightSearchResult_ = function(no) {
    document.getElementById('searchResult' + no).className += " highlighted";
}
SearchAsYouType.prototype.unhighlightSearchResult_ = function(no) {
    document.getElementById('searchResult' + no).className = document.getElementById('searchResult' + no).className.replace(/ highlighted/, "");
}
SearchAsYouType.prototype.highlightNextSearchResult_ = function() {
  if (this.results.results.length) {
    if (this.activeResult == -1) {
      this.activeResult = 0;
      if (this.inputFieldHasFocus) {
        this.inputFieldEl.blur();
      }
      this.highlightSearchResult_(this.activeResult);
    } else if (this.activeResult < this.results.results.length - 1) {
      this.unhighlightSearchResult_(this.activeResult);
      this.activeResult++;
      this.highlightSearchResult_(this.activeResult);
    }
  }
}
SearchAsYouType.prototype.highlightPrevSearchResult_ = function() {
    if (this.results.results.length) {
        if (this.activeResult == 0) {
            this.unhighlightSearchResult_(this.activeResult);
            this.activeResult = -1;
	  this.activeSubResult = -1;
            this.inputFieldEl.focus();
        } else if (this.activeResult > 0) {
            this.unhighlightSearchResult_(this.activeResult);
            this.activeResult--;
            this.highlightSearchResult_(this.activeResult);
        }
    }
}
SearchAsYouType.prototype.expandSummaryResult_ = function(e, id) {
    e = e || window.event;
    if (e) {
        e.cancelBubble = true;
    }
    var dividerEl = document.createElement("divider");
    var el = document.getElementById('searchResult' + id);
    var result = this.results.results[el.getAttribute('originalId')];
    var elParent = el.parentNode;
    elParent.insertBefore(dividerEl, el);
    elParent.removeChild(el);
    elParent.parentNode.innerHTML = elParent.parentNode.innerHTML.replace(/<divider>/, "</div>" + this.getResultsHtml_(id) + "<div class='searchResult summary " +
        this.getResultTypeClassName_(result.type) + "'>");
    var el = document.getElementById('searchResult' + id);
    var newEl = document.createElement("span");
    newEl.innerHTML = '&nbsp;&middot; ';
    var elPrev = el.previousSibling;
    if (elPrev) {
        if (!elPrev.getElementsByTagName('a').length) {
            elPrev.parentNode.removeChild(elPrev);
        } else {
            elPrev.innerHTML = elPrev.innerHTML.replace(new RegExp(newEl.innerHTML + "$"), "");
        }
    }
    var elNext = el.nextSibling;
    if (elNext) {
        if (!elNext.getElementsByTagName('a').length) {
            elNext.parentNode.removeChild(elNext);
        } else {
            elNext.innerHTML = elNext.innerHTML.replace(new RegExp("^" + newEl.innerHTML), this.getResultTypeDescriptionHtml_(result.type));
        }
    }
    this.updateDimensionsAndShadow_(this.searchResultsEl);
    return false;
}
SearchAsYouType.prototype.addAutocompleteTextIfPossible_ = function() {
    var results = this.results;
    if (!results.query) {
        return;
    }
    var inputFieldValue = this.getInputFieldValue_().toLowerCase();
    if ((results.query.toLowerCase() == inputFieldValue.substr(0, results.query.length)) && (inputFieldValue == results.autocompletedQuery.substr(0, inputFieldValue.length).toLowerCase())) {
        this.autocomplete = results.autocompletedQuery.substring(inputFieldValue.length);
        if (this.autocomplete) {
            var noAutocomplete = this.inputFieldEl.value.replace(/\ /, "&nbsp;");
            this.autocompleteHelperEl.style.display = 'block';
            this.autocompleteHelperEl.innerHTML = noAutocomplete;
            var noAutocompleteWidth = this.autocompleteHelperEl.offsetWidth;
            this.autocompleteHelperEl.innerHTML = this.autocomplete;
            var autocompleteWidth = this.autocompleteHelperEl.offsetWidth;
            this.autocompleteHelperEl.style.display = 'none';
            this.autocompleteEl.innerHTML = this.autocomplete.replace(/\ /, "&nbsp;");
            this.autocompleteEl.style.left = (parseInt(this.autocompleteEl.getAttribute("originalLeft")) +
                noAutocompleteWidth + searchAsYouTypeConfiguration.autocompleteOffset) + "px";
            this.autocompleteEl.style.display = 'block';
        } else {
            this.autocompleteEl.style.display = 'none';
        }
        return true;
    }
    this.clearAutocomplete_(true);
    return false;
}
SearchAsYouType.prototype.collapseAutocomplete_ = function() {
    if (this.autocomplete) {
        this.inputFieldEl.value += this.autocomplete + " ";
        this.inputFieldEl.selectionStart = this.inputFieldEl.value.length;
        this.inputFieldEl.selectionEnd = this.inputFieldEl.value.length;
        this.clearAutocomplete_(false);
    }
}
SearchAsYouType.prototype.clearAutocomplete_ = function(hideResultsWindow) {
    if (this.autocomplete != '') {
        this.autocomplete = '';
        this.autocompleteEl.innerHTML = '';
        this.autocompleteEl.style.display = 'none';
        if (hideResultsWindow) {
            this.hideResultsWindow_();
        }
    }
}
SearchAsYouType.prototype.handleInputKeyPress = function(e) {
    if (!this.initialized) {
        return;
    }
    var valueToReturn = true;
    e = e || window.event;
    var whichKey = (e.which) ? e.which : e.keyCode;
    switch (whichKey) {
        case 9:
            if (this.autocompleteJustCollapsed) {
                valueToReturn = false;
            }
            break;
    }
    return valueToReturn;
}
SearchAsYouType.prototype.handleInputKeyDown = function(e) {
    if (!this.initialized) {
        return;
    }
    e = e || window.event;
    var whichKey = (e.which) ? e.which : e.keyCode;
    if ((whichKey == 8) || (whichKey == 46)) {
        this.clearAutocomplete_(false);
    }
}
SearchAsYouType.prototype.handleInputKeyUp = function(e) {
    if (!this.initialized) return;
    e = e || window.event;
    var whichKey = (e.which) ? e.which : e.keyCode;
    this.lastKeyPressed = whichKey;
    if (this.autocompleteJustCollapsed) {
        this.typedQuery = this.lastTypedQuery = this.getInputFieldValue_();
        this.autocompleteJustCollapsed = false;
        return;
    }
    var query = this.getInputFieldValue_();
    if (query != this.typedQuery) {
        if (this.showResultsTimeoutId > -1) {
            clearTimeout(this.showResultsTimeoutId);
        }
        this.lastTypedQuery = this.typedQuery;
        if (whichKey != 8) {
            if (this.addAutocompleteTextIfPossible_()) {
                this.typedQuery = this.lastTypedQuery = this.getInputFieldValue_();
                this.search_();
            }
        }
        this.typedQuery = this.getInputFieldValue_();
        if (this.lastTypedQuery != this.typedQuery) {
            if (this.keystrokeTimeoutId != -1) {
                clearTimeout(this.keystrokeTimeoutId);
                this.keystrokeTimeoutId = -1;
            }
            if (!this.typedQuery) {
                this.hideResultsWindow_();
                this.clearInputField_();
            }
            if (whichKey == 8) {
                this.clearAutocomplete_(true);
            }
            this.keystrokeTimeoutId = setTimeout(searchAsYouTypeBind(this.search_, this), searchAsYouTypeConfiguration.keystrokeDelay);
        }
    }
    return true;
}
SearchAsYouType.prototype.handleBodyKeyDown = function(e) {
    var valueToReturn = true;
    if (!this.initialized) {
        return;
    }
    e = e || window.event;
    var whichKey = (e.which) ? e.which : e.keyCode;
    var targetElement = (e.target) ? e.target : e.srcElement;
    switch (whichKey) {
        case 13:
        case 32:
            if ((!this.resultsWindowHidden) && (this.activeResult >= 0)) {
                if (document.getElementById('searchResult' + this.activeResult).className.indexOf('summarized') == -1) {
                    var el = document.getElementById('searchResult' + this.activeResult);
                    if (el.href) {
                        var url = el.href;
                    } else if (el.getAttribute("moreDetailsUrl")) {
                        var url = el.getAttribute("moreDetailsUrl");
                    }
                    if (url) {
                        this.hideResultsWindow_();
                        this.goToUrl_(url);
                    }
                } else {
                    this.expandSummaryResult_(null, this.activeResult);
                    this.highlightSearchResult_(this.activeResult);
                }
                valueToReturn = false;
            }
            break;
        case 27:
            if (this.inputFieldHasFocus) {
                if (this.browserSafari && !this.browserSafari3OrHigher) {
                    if (this.escapeKeyJustPressed) {
                        this.escapeKeyJustPressed = false;
                        break;
                    } else {
                        this.escapeKeyJustPressed = true;
                    }
                }
                if (!this.resultsWindowHidden) {
                    this.hideResultsWindow_();
                    valueToReturn = false;
                    this.inputFieldEl.focus();
                    this.inputFieldHasFocus = 1;
                } else {
                    this.clearInputField_();
                    valueToReturn = false;
                }
            }
            break;
        case 35:
            if ((this.inputFieldHasFocus) && (this.autocomplete != '')) {
                this.collapseAutocomplete_();
                this.autocompleteJustCollapsed = true;
            }
            break;
        case 40:
        case 63233:
  //  case 39: // right arrow
     /* if (whichKey == 39) {
        if ((this.inputFieldHasFocus) && (this.autocomplete != '')) {
          this.collapseAutocomplete_();
          this.autocompleteJustCollapsed = true;
        }
      }*/
      // If we press down arrow in the input field, we can force the 
      // re-query 
      if ((this.resultsWindowHidden) && (this.inputFieldHasFocus) && 
          (whichKey != 39)) {
        this.search_(true);
        valueToReturn = false;
      } else if ((!this.resultsWindowHidden) && 
                 ((this.activeResult >= 0) || 
                  ((whichKey != 39) && (this.inputFieldHasFocus)))) {
      // If not, right or down arrow activate the next result
        
		if(this.activeResult == this.results.results.length-2 && this.activeSubResult <= 2 || this.activeResult == this.results.results.length-1 && this.activeSubResult <= 2){
			if(this.activeSubResult == -1){
				this.highlightNextSearchResult_();
				this.highlightNextSubSearchResult_();
				valueToReturn = false;
				this.arrowKeyProcessed = true;
			}
			else{
				this.highlightNextSubSearchResult_();
				valueToReturn = false;
				this.arrowKeyProcessed = true;
			}
		}else if(this.activeResult == this.results.results.length-1 && this.activeSubResult == 3){
			valueToReturn = false;
			this.arrowKeyProcessed = true;
			
			//alert("greater than list");
			this.unhighlightSubSearchResult_(this.activeSubResult);
			this.activeResult = -1;
			this.activeSubResult = -1;
			
			this.highlightNextSearchResult_();
			
		}
		else{
			this.highlightNextSearchResult_();
			valueToReturn = false;
			this.arrowKeyProcessed = true;
		}
		
	  }

      break;
        case 38:
        case 63235:
    //case 37: // left arrow
     /* if (whichKey == 37) {
        this.clearAutocomplete_(true);
      }*/

      // If we press up arrow in the input field, we hide the pop-down
      if ((!this.resultsWindowHidden) && (this.inputFieldHasFocus) && 
          (whichKey != 37)) {
        this.hideResultsWindow_();
        valueToReturn = false;
        this.arrowKeyProcessed = true;
      } else if ((!this.resultsWindowHidden) && (this.activeResult >= 0)) {
        // If not, left or up arrow activate the previous result
        
		if(this.activeResult == this.results.results.length-2 && this.activeSubResult <= 3 || this.activeResult == this.results.results.length-1 && this.activeSubResult <= 3){
			if(this.activeSubResult == -1 || this.activeSubResult == 0){
				this.highlightPrevSearchResult_();
				valueToReturn = false;
				this.arrowKeyProcessed = true;
			}
			this.highlightPrevSubSearchResult_();
			//alert(this.activeSubResult);
			valueToReturn = false;
			this.arrowKeyProcessed = true;
		}else {
			if(this.activeSubResult == 0){
				this.unhighlightSubSearchResult_(this.activeSubResult);
				this.activeSubResult = -1;
				//alert(this.activeSubResult);
			}
			this.highlightPrevSearchResult_();
			valueToReturn = false;
			this.arrowKeyProcessed = true;
		}
		
      }
      break;
        case 9:
            if (this.inputFieldHasFocus && (this.autocomplete != '')) {
                this.collapseAutocomplete_();
                this.autocompleteJustCollapsed = true;
                valueToReturn = false;
            }
            break;
    }
    if (!this.resultsWindowHidden && valueToReturn) {
        if (((!this.inputFieldHasFocus) && ((whichKey < 37) || (whichKey > 40))) || ((whichKey == 9) && (!this.autocompleteJustCollapsed))) {
            this.hideResultsWindow_();
        }
    }
    if (!valueToReturn) {
        e.returnValue = false;
        if (e.preventDefault) {
            e.preventDefault();
        }
    }
}
SearchAsYouType.prototype.handleBodyKeyPress = function(e) {
    var valueToReturn = true;
    if (this.initialized) {
        e = e || window.event;
        var whichKey = (e.which) ? e.which : e.keyCode;
        if ((this.arrowKeyProcessed) && (whichKey >= 37) && (whichKey <= 40)) {
            this.arrowKeyProcessed = false;
            valueToReturn = false;
        }
        if (!valueToReturn) {
            e.returnValue = false;
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    }
}
SearchAsYouType.prototype.handleBodyKeyUp = function(e) {
    var valueToReturn = true;
    e = e || window.event;
    var whichKey = (e.which) ? e.which : e.keyCode;
    var targetElement = (e.target) ? e.target : e.srcElement;
    this.arrowKeyProcessed = false;
    switch (whichKey) {
        case 32:
            if (this.inputFieldHasFocus && (this.autocomplete != '')) {
                this.clearAutocomplete_(true);
                valueToReturn = false;
            }
            break;
    }
    if (!valueToReturn) {
        e.returnValue = false;
        if (e.preventDefault) {
            e.preventDefault();
        }
    }
}
SearchAsYouType.prototype.handleBodyResize = function(e) {
    this.updateDimensionsAndShadow_(this.searchResultsEl);
}
SearchAsYouType.prototype.handleInputBlur = function(e) {
    this.inputFieldHasFocus = 0;
    if (searchAsYouTypeConfiguration.showPrompt && this.inputFieldEl.value == '') {
        this.inputFieldEl.value = searchAsYouTypeConfiguration.prompt;
    }
}
SearchAsYouType.prototype.handleInputFocus = function(e) {
    this.inputFieldHasFocus = 0.5;
    if (searchAsYouTypeConfiguration.showPrompt && this.inputFieldEl.value == searchAsYouTypeConfiguration.prompt) {
        this.inputFieldEl.value = '';
    }
}
SearchAsYouType.prototype.handleInputMouseDown = function(e) {
    if (this.autocomplete) {
        this.collapseAutocomplete_();
    }
}
SearchAsYouType.prototype.handleAutocompleteMouseDown = function(e) {
    if (this.autocomplete) {
        this.collapseAutocomplete_();
    }
}
SearchAsYouType.prototype.handleInputClick = function(e) {
    e = e || window.event;
    e.cancelBubble = true;
    if (this.inputFieldHasFocus == 1) {
        if (this.resultsWindowHidden) {
            this.search_(true);
        }
    } else {
        this.inputFieldHasFocus = 1;
    }
}
SearchAsYouType.prototype.handleSearchResultClick = function(e) {
    e = e || window.event;
    var el = (e.target) ? e.target : e.srcElement;
    while ((el.tagName != 'DIV') || (el.className.indexOf('searchResult') == -1)) {
        el = el.parentNode;
    }
    if (el.getAttribute("moreDetailsUrl")) {
        this.goToUrl_(el.getAttribute("moreDetailsUrl"));
    }
}
SearchAsYouType.prototype.handleBodyClick = function(e) {
    e = e || window.event;
    var targetElement = (e.target) ? e.target : e.srcElement;
    this.clearAutocomplete_();
    this.hideResultsWindow_();
    this.resultsWindowHiddenByClicking = true;
}
SearchAsYouType.prototype.goToUrl_ = function(url) {
    try {
        if (top.location != location) {
            top.location.href = url;
        } else {
            location.href = url;
        }
    } catch (e) {
        location.href = url;
    }
}
SearchAsYouType.prototype.activateDebugConsole_ = function() {
    document.write("<div onclick='event.cancelBubble = true;' " + "id='searchAsYouTypeDebugConsole' class='expanded'>" + "<div style='float: right'>" + "<button onclick='searchAsYouType.clearDebugConsoleTimes()'>Clear " + "console</button>" + "<button onclick='searchAsYouType.clearCache()'>Clear cache</button>" + "<button onclick='searchAsYouType.toggleDebugConsole(event)'>Show/hide" + "</button>" + "</div><h1>Search-as-you-type debug console</h1>" + "<br />" + "<table id='searchAsYouTypeDebugTimes'>" + "</table>" + "</div>");
    this.debugConsoleTimesHeader = '<tr><th>Query</th>' + '<th>Auto-completed</th>' + '<th>No. of results</th>' + '<th>Delay before<br />displaying:<br />(fixed)</th>' + '<th title="JS: Time from launching a query to displaying it">' + 'Total turn-around<br />client+server</th>' + '<th title="Ajax: Total time spent on the server">' + 'Server:<br />Total time</th>' + '</tr>';
    this.clearDebugConsoleTimes();
}
SearchAsYouType.prototype.toggleDebugConsole = function(e) {
    var debugConsoleEl = document.getElementById('searchAsYouTypeDebugConsole');
    if (debugConsoleEl.className.indexOf('expanded') != -1) {
        debugConsoleEl.className = debugConsoleEl.className.replace(/expanded/, 'contracted');
    } else {
        debugConsoleEl.className = debugConsoleEl.className.replace(/contracted/, 'expanded');
    }
    e = e || window.event;
    e.cancelBubble = true;
    this.inputFieldEl.focus();
}
SearchAsYouType.prototype.addToDebugConsoleTimesNewLine_ = function(line) {
    this.debugConsoleTimesContents = this.debugConsoleTimesCurrentLine + this.debugConsoleTimesContents;
    this.debugConsoleTimesCurrentLine = "<tr>" + line;
    document.getElementById("searchAsYouTypeDebugTimes").innerHTML = this.debugConsoleTimesHeader + this.debugConsoleTimesCurrentLine +
        this.debugConsoleTimesContents;
}
SearchAsYouType.prototype.addToDebugConsoleTimesCurrentLine_ = function(line) {
    this.debugConsoleTimesCurrentLine += line;
    document.getElementById("searchAsYouTypeDebugTimes").innerHTML = this.debugConsoleTimesHeader + this.debugConsoleTimesCurrentLine +
        this.debugConsoleTimesContents;
}
SearchAsYouType.prototype.clearDebugConsoleTimes = function() {
    this.debugConsoleTimesContents = '';
    this.debugConsoleTimesCurrentLine = '';
    document.getElementById("searchAsYouTypeDebugTimes").innerHTML = this.debugConsoleTimesHeader;
    this.inputFieldEl.focus();
}
SearchAsYouType.prototype.clearCache = function() {
    this.searchCache = [];
    this.inputFieldEl.focus();
}

function searchAsYouTypeBind(fn, self, var_args) {
    var boundargs = fn.boundArgs_ || [];
    boundargs = boundargs.concat(Array.prototype.slice.call(arguments, 2));
    if (typeof fn.boundSelf_ != "undefined") {
        self = fn.boundSelf_;
    }
    if (typeof fn.foundFn_ != "undefined") {
        fn = fn.boundFn_;
    }
    var newfn = function() {
        var args = boundargs.concat(Array.prototype.slice.call(arguments));
        return fn.apply(self, args);
    }
    newfn.boundArgs_ = boundargs;
    newfn.boundSelf_ = self;
    newfn.boundFn_ = fn;
    return newfn;
}

function searchAsYouTypeCloneObject(obj) {
    if (obj instanceof Array) {
        var newObj = [];
    } else {
        var newObj = {};
    }
    for (var i in obj) {
        if (obj[i].constructor.toString().indexOf("Array") != -1) {
            newObj[i] = searchAsYouTypeCloneObject(obj[i]);
        } else if (typeof obj[i] == 'object') {
            newObj[i] = searchAsYouTypeCloneObject(obj[i]);
        } else {
            newObj[i] = obj[i];
        }
    }
    return newObj;
}
var searchAsYouType = new SearchAsYouType();