(function () {
    'use strict';


    /**
     * Extract unique files to be prefetched from JSON object provided.
     * @param {Object} json Contains files to prefetch.
     * @returns {Array<string>} Array of the unique files that need prefetching. 
     */
    var getFilesToPrefetch = function (json) {
        // the prefix to be added to any path that will be prefetched
        var pathPrefix = "/buy/pdpetc/_next/";

        var pagesToPrefetch = [
            "/ProductDetailsPage",
        ];
        var files = [];
        var uniqueFiles = [];

        // concatenate the arrays for each page we want to prefetch for
        pagesToPrefetch.map(function (page) {
            // undefined check to avoid 404s when prefetch pages are not in json file
            if (json.pages.hasOwnProperty(page)) {
                files = files.concat(json.pages[page]);
            }
        })

        // create an array with only unique prefetch paths
        files.filter(function (file) {
            file = pathPrefix + file;

            if (uniqueFiles.indexOf(file) > -1) {
                // do nothing, item is already in array
            } else {
              uniqueFiles.push(file);
              return file;
            }
        })

        return uniqueFiles;
    };


    /**
     * Request any file and return a promise on success/error.
     * @param {string} url URL to request.
     * @returns {Promise} Promise of the file contents (or an error)
     */
    var get = function get(url) {
        return new Promise(function (succeed, fail) {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.addEventListener("load", function () {
                if (req.status < 400)
                    succeed(req.responseText);
                else
                    fail(new Error("Request failed: " + req.statusText));
            });
            req.addEventListener("error", function () {
                fail(new Error("Network error"));
            });
            req.send(null);
        });
    };


    /**
     * Creates link objects dynamically and appends them to the document head
     *  causing the browser to load them. Ex:
     *  <link rel="prefetch" href="[url]" />
     * @param {Array<string>} files Array of files that need prefetching.
     */
    var createLinkElements = function createLinkElements(files) {
        var head = document.head;

        for (var i = 0, len = files.length; i < len; i++) {
            var link = document.createElement('link');

            link.rel = 'prefetch';

            if (files[i]) {
                link.href = files[i];
                head.appendChild(link);
            }
        }
    };


    /**
     * Prefetches the given files using browser based logic 
     * @param {Array<string>} files URLs / files to be prefetched
     */
    var prefetchURLs = function (files) {
        var isSafari =
            // check if user agent is from safari. Excludes chrome or android browsers that might append safari 
            // cannot check  Safari 3.0+ window.HTMLElement === "[object HTMLElementConstructor]" 
            // attwc-globalnav extends that class with "constructor" so it is always truthy
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||

            // Or if safari.pushNotification stringified is a SafariRemoteNotification object
            (function (p) {
                return p.toString() === "[object SafariRemoteNotification]";
            })(!window['safari'] || safari.pushNotification);

        // Internet Explorer
        var isIE = !!document.documentMode;

        if (isSafari || isIE) {
            files.forEach(function (file) {
                get(file);
            });
        }
        else {
            createLinkElements(files);
        }
    }


    /**
     * Gets a JSON file and executes logic on it once it has been received.
     * @function getPrefetchFile
     * @param {string} url URL of the JSON file.
     */
    var getPrefetchFile = function getPrefetchFile(url) {
        get(url).then(
            function (result) {
                var files = getFilesToPrefetch(JSON.parse(result));

                if (files !== undefined && files.length !== 0 ) {
                    prefetchURLs(files);
                } else {
                    console.log('Unable to find files in JSON prefetch file', url)
                }
            },
            function (error) {
                console.log('Unable to load prefetch JSON file: ' + error.message);
            }
        );
    };

    // location of JSON file to use for prefetching
    var prefetchJsonUrl = '/buy/pdpetc/_next/static/json/prefetch/prefetch.json';

    getPrefetchFile(prefetchJsonUrl);
})();