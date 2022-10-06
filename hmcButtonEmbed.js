(function(history) {
    function getCookie(name) {
        var cookieArr = document.cookie.split(";");
        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            if (name == cookiePair[0].trim()) {
                return cookieArr[i].trim()
            }
        }
        return null
    }
    var headSectionClass = function(action) {
        var headtag = document.getElementsByTagName("html")[0];
        if (action === "add") {
            headtag.classList.add("hmcHeadSection")
        } else {
            headtag.classList.remove("hmcHeadSection")
        }
    };
    var createHMCModalElements = function(type, data) {
        var element = document.createElement(type);
        if (data.id !== undefined) {
            element.id = data.id
        }
        if (data["class"] !== undefined) {
            element.setAttribute("class", data["class"])
        }
        if (data.innerHTML !== undefined) {
            element.innerHTML = data.innerHTML
        }
        if (data.title !== undefined) {
            element.title = data.title
        }
        if (data.tabindex !== undefined) {
            element.tabindex = data.tabindex
        }
        if (data["aria-label"] !== undefined) {
            element["aria-label"] = data["aria-label"]
        }
        if (data["aria-modal"] !== undefined) {
            element["aria-modal"] = data["aria-modal"]
        }
        if (data.role !== undefined) {
            element.role = data.role
        }
        return element
    };
    window.addEventListener("removeHMCModal", function(e) {
        if (document.getElementById("questionsmodal") && e.detail) {
            document.getElementById("questionsmodal").remove()
        }
        if (document.getElementById("blueBoxCon") && e.detail) {
            document.getElementById("blueBoxCon").style.display = "block"
        }
        headSectionClass("remove")
    });
    window.addEventListener("urlRedirection", function(e) {
        if (document.getElementById("questionsmodal") && e.detail) {
            document.getElementById("questionsmodal").remove()
        }
        if (e.detail && e.detail.url) {
            var loaderModal = createHMCModalElements("div", {
                class: "hmcLoaderModal",
                id: "loadermodal"
            });
            var redirectionLoaderdiv = createHMCModalElements("div", {
                class: "hmcRedirectionLoader",
                id: "redirectionPage"
            });
            document.createElement("div");
            loaderModal.appendChild(redirectionLoaderdiv);
            document.getElementsByTagName("body")[0].appendChild(loaderModal);
            setTimeout(function() {
                window.location.href = e.detail.url
            }, 1e3)
        }
    });
    var fireLinkClickEvent = function(linkName, linkPosition) {
        var additionalData = {
            linkDestinationUrl: window.location.protocol + "//" + window.location.hostname + "/helpmechoose",
            linkName: linkName,
            linkPosition: linkPosition
        };
        ddo.pushEvent("linkClick", "Link_Click", additionalData)
    };
    var createIframeSection = function(modalType, dialogflowDefaultIntent) {
        fireLinkClickEvent("I am new to AT&T", "Body");
        var imframBox = document.createElement("div");
        imframBox.id = "questionsmodal";
        imframBox.setAttribute("class", "hmcImframBox");
        imframBox.setAttribute("tabindex", "-1");
        imframBox.setAttribute("aria-modal", "true");
        imframBox.setAttribute("aria-label", "Help Me Choose Modal");
        imframBox.setAttribute("role", "dialog");
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("id", "hmcModal");
        ifrm.setAttribute("class", "hmcIfrmElem hmcIfrmElemBackground");
        ifrm.setAttribute("src", "/helpmechoose/" + modalType + "?dialogflowDefaultIntent=" + dialogflowDefaultIntent);
        ifrm.onload = function() {
            document.getElementById("hmcModal").focus()
        };
        imframBox.appendChild(ifrm);
        document.getElementsByTagName("body")[0].appendChild(imframBox)
    };

    // var hmcbuttonRender = function(staticLabels, modalType, dialogflowDefaultIntent, labelBubbleText) {
    //     var outerDiv = createHMCModalElements("div", {
    //         id: "buttonBox",
    //         class: "hmcOuterDiv"
    //     });
    //     var topBorder = createHMCModalElements("div", {
    //         class: "hmcTopBorder",
    //         innerHTML: " "
    //     });
    //     outerDiv.appendChild(topBorder);
    //     var closeButton = createHMCModalElements("button", {
    //         class: "icon-close color-ui-white",
    //         title: "Close"
    //     });
    //     closeButton.onclick = function() {
    //         fireLinkClickEvent("Help Me Choose ButtonBox Close", "Body");
    //         // document.getElementById("blueBoxCon").style.display = "block";
    //         // document.getElementById("buttonBox").style.display = "none"
    //     };
    //     outerDiv.appendChild(closeButton);
    //     var header = createHMCModalElements("div", {
    //         class: "hmcHeaderSection",
    //         innerHTML: staticLabels.labelPopupTitle
    //     });
    //     outerDiv.appendChild(header);
    //     var description = createHMCModalElements("div", {
    //         class: "hmcDescSection",
    //         innerHTML: staticLabels.labelPopupDescription
    //     });
    //     outerDiv.appendChild(description);
    //     // var hmcButton = createHMCModalElements("button", {
    //     //     tabindex: "1",
    //     //     id: "hmcNewButton",
    //     //     class: "hmcButton",
    //     //     innerHTML: staticLabels.labelPopupOption1
    //     // });
    //     // hmcButton.onclick = function() {
    //     //     fireLinkClickEvent("I am new to AT&T", "Body");
    //     //     headSectionClass("add");
    //     //     createIframeSection(modalType, dialogflowDefaultIntent);
    //     //     document.getElementById("buttonBox").style.display = "none"
    //     // };
    //     outerDiv.appendChild(hmcButton);
    //     var hmcButtonExisting = createHMCModalElements("button", {
    //         tabindex: "2",
    //         class: "hmcButton",
    //         innerHTML: staticLabels.labelPopupOption2
    //     });
    //     hmcButtonExisting.onclick = function() {
    //         fireLinkClickEvent("I have an AT&T plan", "Body");
    //         window.location.href = "/my/#/login"
    //     };
    //     outerDiv.appendChild(hmcButtonExisting);
    //     document.getElementsByTagName("body")[0].appendChild(outerDiv);
    //     var initialdiv = createHMCModalElements("div", {
    //         id: "blueBoxCon",
    //         class: "hmcBlueBoxContainer"
    //     });
    //     var blueBox = createHMCModalElements("div", {
    //         class: "hmcBlueBox"
    //     });
    //     initialdiv.appendChild(blueBox);
    //     var btnText = createHMCModalElements("button", {
    //         tabindex: "0",
    //         class: "hmcBtnText",
    //         innerHTML: labelBubbleText
    //     });
    //     btnText.onclick = function() {
    //         fireLinkClickEvent("Help Me Choose iFrame Open", "Body");
    //         document.getElementById("blueBoxCon").style.display = "none";
    //         headSectionClass("add");
    //         createIframeSection(modalType, dialogflowDefaultIntent)
    //     };
    //     blueBox.appendChild(btnText);
    //     var hmcContentBorder = createHMCModalElements("div", {
    //         class: "hmcContentBorder",
    //         innerHTML: " "
    //     });
    //     blueBox.appendChild(hmcContentBorder);
    //     document.getElementsByTagName("body")[0].appendChild(initialdiv)
    // };

    var hmcPages = function(filters, staticLabels) {
        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "/helpmechoose/_next/static/chunks/hmcButton.css";
        document.getElementsByTagName("head")[0].appendChild(css);
        // hmcbuttonRender(staticLabels, filters.originalPath, filters.dialogflowDefaultIntent, filters.productSelection)
        createIframeSection(filters.originalPath, filters.dialogflowDefaultIntent)
    };

    var initHMC = function() {
        var hmcFeed = window.sessionStorage.getItem("hmcCMSfeed");
        let response = JSON.parse(hmcFeed);
        if (response["idp-cms-feed"] && response["idp-cms-feed"].hmc && response["idp-cms-feed"].hmc.contentFragments && response["idp-cms-feed"].hmc.contentFragments.staticLabels && response["idp-cms-feed"].hmc.contentFragments.staticLabels.master) {
            staticLabels = response["idp-cms-feed"].hmc.contentFragments.staticLabels.master
        }
        if (response["idp-cms-feed"] && response["idp-cms-feed"].hmc && response["idp-cms-feed"].hmc.contentFragments && response["idp-cms-feed"].hmc.contentFragments.routes && response["idp-cms-feed"].hmc.contentFragments.routes.master && response["idp-cms-feed"].hmc.contentFragments.routes.master.filters) {
            if (window && window.sessionStorage) {
                window.sessionStorage.setItem("hmcCMSfeed", JSON.stringify(response));
            }
            var filters = [];

            function replaceItem(item, index) {
                if (item && item.path) {
                    filters.push({
                        originalPath: item.path,
                        path: item.path.replace(/[/]/g, ""),
                        dialogflowDefaultIntent: item.dialogflowDefaultIntent,
                        productSelection: item.productSelection
                    })
                }
            }
            response["idp-cms-feed"].hmc.contentFragments.routes.master.filters.forEach(replaceItem);
            var pathname = window.location.pathname.replace(/[/]/g, "");
            var i = 0;
            for (i = 0; i < filters.length; i++) {
                if (pathname.indexOf(filters[i].path) > -1) {
                    hmcPages(filters[i], staticLabels);
                    break
                }
            }
        }
    };

    initHMC();

})(window.history);