
function DOMTokenListSupports(tokenList, token) {
    if (!tokenList || !tokenList.supports) {
        return;
    }
    try {
        return tokenList.supports(token);
    } catch (e) {
        if (e instanceof TypeError) {
            console.warn("The DOMTokenList doesn't have a supported tokens list");
        } else {
            console.error("That shouldn't have happened");
        }
    }
}

function execScript(scriptName) {
    let aScript = document.createElement("script");
    aScript.src = scriptName;
    aScript.async = true;
    //document.head.appendChild(aScript);
}

function loadStyle(fileName, id) {
    let link = document.createElement("link");
    link.href = fileName;
    link.rel = "stylesheet";
    link.id = id;
    link.media = "screen";
    document.head.appendChild(link);
}

function preloadScript(scriptName) {
    let link = document.createElement("link");
    link.href = scriptName;
    link.rel = "preload";
    link.as = "script";
    link.type = "text/javascript";
    link.onload = function () {
        execScript(scriptName);
        this.onload = null;
    };
    //document.head.appendChild(link);
}

function preloadStyle(cssFile, id) {
    let link = document.createElement("link");
    link.href = cssFile;
    link.rel = "preload";
    link.as = "style";
    link.id = id;
    link.media = "screen";
    link.crossOrigin = "anonymous";
    link.onload = function () {
        this.rel = 'stylesheet';
        this.onload = null;
    };
    document.head.appendChild(link);
}

function getPreloadArgs() {
    const thisScript = document.getElementById('preloadLinks');
    const queryParamsRegExp = /^[^\?]+\??/;
    const urlParams = new URLSearchParams('?' + thisScript.src.replace(queryParamsRegExp, ''));
    const preloadScriptNames = urlParams.has('preloadScript') ? urlParams.get('preloadScript').split(',') : '';
    const preloadStyleNames = urlParams.has('preloadStyle') ? urlParams.get('preloadStyle').split(',') : '';
    const preloadStyleIds = urlParams.has('preloadStyleId') ? urlParams.get('preloadStyleId').split(',') : '';
    return {
        scripts: preloadScriptNames,
        styles: preloadStyleNames,
        styleIds: preloadStyleIds
    }
}

function preloadLinkArgs() {
    const linkSupportsPreload = DOMTokenListSupports(document.createElement("link").relList, "preload");
    const createScript = linkSupportsPreload ? preloadScript : execScript;
    const createStyle = linkSupportsPreload ? preloadStyle : loadStyle;

    const args = getPreloadArgs();
    const defaultCssId = 'font';

    for (let p = 0; p < args.scripts.length; p++) {
        createScript(args.scripts[p]);
    }
    for (let p = 0; p < args.styles.length; p++) {
        createStyle(args.styles[p], args.styleIds[p] ? args.styleIds[p] : defaultCssId);
    }
}

preloadLinkArgs();


