<!DOCTYPE html>
<html lang="en-US" >
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="distribution" content="global" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.xandr.com/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.xandr.com/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.xandr.com/favicon-16x16.png">
        <link rel="manifest" href="https://www.xandr.com/site.webmanifest">
        <link rel="mask-icon" href="https://www.xandr.com/safari-pinned-tab.svg" color="#FC5047s">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">

                <script>

    var languageInfo = {
    "en": "https:\/\/www.xandr.com\/",
    "ja": "https:\/\/www.xandr.com\/ja\/"
};
    var supportedLangs = [
    "en",
    "ja"
];

    function filterDuplicates(arr) {
        return arr.filter(function (el, index, self) {
            return self.indexOf(el) === index;
        });
    }

    function fixLowercaseProperties(arr) {
        return arr.map(function (el) {
            if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
                return el;
            }

            var splitEl = el.split('-');
            return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
        });
    }

    var languageList = [];

    if (typeof window !== 'undefined') {
        if (window.navigator.languages) {
            languageList = languageList.concat(window.navigator.languages);
        }

        if (window.navigator.language) {
            languageList.push(window.navigator.language);
        }

        if (window.navigator.userLanguage) {
            languageList.push(window.navigator.userLanguage);
        }

        if (window.navigator.browserLanguage) {
            languageList.push(window.navigator.browserLanguage);
        }

        if (window.navigator.systemLanguage) {
            languageList.push(window.navigator.systemLanguage);
        }
    }

    languageList.push('en-US'); // Fallback
    languageList = fixLowercaseProperties(filterDuplicates(languageList));

    var defaultLangCode = languageList[0];
    var defaultLangParts = defaultLangCode.split('-');
    var defaultLang = defaultLangParts[0];

    var jar = {};

    function decodeCookie(s) {
        return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }

    function getCookie(key) {
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var i = 0;

        for (; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var cookie = parts.slice(1).join('=');

            if (cookie.charAt(0) === '"') {
                cookie = cookie.slice(1, -1);
            }

            try {
                var name = decodeCookie(parts[0]);
                cookie = decodeCookie(cookie);

                jar[name] = cookie;

                if (key === name) {
                    break;
                }
            } catch (e) {}
        }

        return key ? jar[key] : jar;
    }

    var postPage = "";
    var currentLang = getCookie('xandr-lang');
    if (currentLang != null) {
        if (languageInfo.hasOwnProperty(currentLang) && (document.location.href != languageInfo[currentLang]) && postPage == "") {
            document.location.href = languageInfo[currentLang];
        }
    } else {
        if ((supportedLangs.indexOf(defaultLang) != -1) && languageInfo.hasOwnProperty(defaultLang) && (document.location.href != languageInfo[defaultLang]) && postPage == "") {
            document.location.href = languageInfo[defaultLang];
        }
    }
</script>
        
        
        <title>Xandr</title>
	        <script>var STEM_BUILD = "1639432653";</script>
	        
<!-- The SEO Framework by Sybre Waaijer -->
<meta property="og:image" content="https://xandr.imgix.net/2018/09/xandr-social.png?auto=compress%2Cformat&amp;ixlib=php-1.2.1&amp;s=522606ab4149462cff800a575ad8ef09" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Xandr" />
<meta property="og:url" content="https://www.xandr.com/" />
<meta property="og:site_name" content="Xandr" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Xandr" />
<meta name="twitter:image" content="https://xandr.imgix.net/2018/09/xandr-social.png?auto=compress%2Cformat&amp;ixlib=php-1.2.1&amp;s=522606ab4149462cff800a575ad8ef09" />
<link rel="canonical" href="https://www.xandr.com/" />
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","url":"https://www.xandr.com/","name":"Xandr","potentialAction":{"@type":"SearchAction","target":"https://www.xandr.com/search/{search_term_string}","query-input":"required name=search_term_string"}}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","url":"https://www.xandr.com/","name":"Xandr"}</script>
<!-- / The SEO Framework by Sybre Waaijer | 2.88ms meta | 0.58ms boot -->

<link rel='preconnect' href='//s.w.org'/>
<link rel='dns-prefetch' href='//s.w.org' />
<link data-handle="wp-block-library" rel='stylesheet' id='wp-block-library-css'  href='https://www.xandr.com/wp/wp-includes/css/dist/block-library/style.min.css?ver=5.2.2' type='text/css' media='all' />
<link data-handle="xandr.min.css" rel='stylesheet' id='xandr.min.css-css'  href='https://www.xandr.com/app/themes/xandr-theme/public/css/xandr.min.css?ver=1639432653' type='text/css' media='all' />
<script data-handle="jquery-core" type='text/javascript' defer src='https://www.xandr.com/wp/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp'></script>
<script data-handle="jquery-migrate" type='text/javascript' defer src='https://www.xandr.com/wp/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
<link rel="alternate" type="application/json+oembed" href="https://www.xandr.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fhttps://www.xandr.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.xandr.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fhttps://www.xandr.com%2F&#038;format=xml" />
<!-- OneTrust Cookies Consent Notice start -->
<script src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="0b48931e-9214-4700-96ed-45d0b5ef5ed0"></script>
<script type="text/javascript">
function OptanonWrapper() { }
</script>
<!-- OneTrust Cookies Consent Notice end --><link rel="alternate" href="https://www.xandr.com/" hreflang="en" />
<link rel="alternate" href="https://www.xandr.com/ja/" hreflang="ja" />
<style type="text/css">
hr {
margin-right: auto;
margin-bottom: 2.5em;
border: 0;
height: 6px;
width: 90px;
background-color: #fc5047;
}
.content-hero-primary .text-container .text-block p {
    font-size: 1.3125em;
}
.content-text-block.content-text-block-simple .text-block-right {
    padding:0;
}
.content-item:nth-child(2) hr {
    display:none;
}
.content-item:nth-child(3) .info-bg {
    /*height:33%;*/
}
.content-item:nth-child(4) .info-bg {
    /*height:30%;*/
    /*background: #feeae9;*/
}
.content-item:nth-child(4) .info-header h2 {
    /*color: #fc5046;*/
}
.content-item:nth-child(4) .info-header-text {
    /*color: #000;*/
}
.content-item:nth-child(2) {
    background-color:#f6f0f0;
}
.content-callout-information.content-callout-direction-right .text-container .text-block p, .content-callout-information.content-callout-direction-right .text-container .text-block h2 {
    /*color:#000;*/
}
.content-info-panel.content-info-style-alt .info-bg, .content-callout-information.content-callout-direction-right .content-callout-bg {
    background-color: inherit;
}
.content-text-block.content-text-block-simple .text-block-right h2, .content-two-column-text-block h2, .content-hero-primary .text-container .text-block h1 {
font-size: 3.125em;
margin: 0;
margin-bottom: 0px;
margin-bottom: 2.5rem;
padding: 0;
}
p {
font-size:1.3125em
}
@media (max-width:25.9275em) {
.content-text-block.content-text-block-simple .text-block-right h2, .content-two-column-text-block h2. .content-hero-primary .text-container .text-block h1 {
    font-size: 2.1666666667em;
    margin: 0;
    margin-bottom: 0px;
    margin-bottom: 1.5rem;
    padding: 0;
}
p {
font-size:1.5em;
}
}
.content-two-column-text-block div {
    font-size: inherit;
}
</style>

        
        
        
            </head>
    <body class="snap">
        <div id="breakpoints"></div>
        
        <div id="breakpoint-debug"></div>
                <div id="nav-zone"></div>
        <style>
            #alert-banner {
                display:none;
        }
                </style>

        <header>
            <div id="alert-banner" style="">What Xandr is doing in response to COVID-19. <a href="https://www.xandr.com/covid-19">Learn More.</a></div>
            <a class="home-link" href="https://www.xandr.com/">
                <img src="https://www.xandr.com/app/themes/xandr-theme/public/img/xandr-logo.svg" alt="xandr">
                
            </a>
            <nav class="primary">
                
                				<a href='https://www.xandr.com/about/'  data-menu-id='84'  rel='nofollow noopener' class=''>About Us</a>
				<a href='https://www.xandr.com/news/'  data-menu-id='86'  rel='nofollow noopener' class=''>News</a>
				<a href='https://www.xandr.com/insights/'  data-menu-id='2032'  rel='nofollow noopener' class=''>Insights</a>
				<a href='https://www.xandr.com/solutions/'  data-menu-id='87'  rel='nofollow noopener' class=''>Solutions</a>
            </nav>
            <nav class="secondary">
                
                				<a href='https://www.xandr.com/contact-us/'  data-menu-id='287'  rel='nofollow noopener' class=''>Contact</a>
				<a href='https://www.xandr.jobs/' target='_blank' data-menu-id='36'  rel='nofollow noopener' class=''>Careers</a>
            </nav>
                    </header>

        <div id="main">
            
                
            <div class="content-item content-carousel content-first-item" data-autoplay="true" data-delay="3">
            <div class="slide-header">
            <div class="content">
                <div class="header">Xandr has been Acquired by Microsoft</div>
                <div class="text">Read the blog post to learn more.</div>
                                    <div class="button-container">
                        <a href='https://about.ads.microsoft.com/en-us/blog/post/december-2021/microsoft-to-acquire-xandr-to-accelerate-its-digital-advertising-and-retail-media-solutions' class='button carousel-button'>Read More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-header hidden">
            <div class="content">
                <div class="header">We are Xandr</div>
                <div class="text">Xandr is a data-enabled technology platform powering a global marketplace for premium advertising.</div>
                                    <div class="button-container">
                        <a href='https://www.xandr.com/about/' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-header hidden">
            <div class="content">
                <div class="header">Xandr’s Interactive Guide to Political Advertising </div>
                <div class="text">Discover Invest DSP for Political </div>
                                    <div class="button-container">
                        <a href='https://view.ceros.com/xandr/xandr-the-road-to-campaign-victory/p/1?mkt_tok=MjA0LUtaRy02ODUAAAGFeJPZM_X0A5lp-vzOH-dm0HDup8AarmwLmO_RZPGKCVe3rlYfkg7HyI3eKxqcyM4l3yLXtJREpq0dmkM5_1p17Rgx2xND_DtM5swZHlkyCWd4_w' class='button carousel-button'>Let's Go</a>
                    </div>
                            </div>
        </div>
            <div class="slide-header hidden">
            <div class="content">
                <div class="header">The Split Screen: A Guide to Digital Video</div>
                <div class="text">Get global advice on key trends and the steps that both buyers and sellers can take to fully embrace digital video.</div>
                                    <div class="button-container">
                        <a href='https://view.ceros.com/xandr/digital-video-guide-2022/p/1' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-header hidden">
            <div class="content">
                <div class="header">2021 Relevance Report</div>
                <div class="text">Learn how advertisers are using data and automation to bring video into the future with our State of Convergence and Advanced TV report.</div>
                                    <div class="button-container">
                        <a href='https://www.xandr.com/relevance/' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-header hidden">
            <div class="content">
                <div class="header">Xandr’s Premium Video Catalog</div>
                <div class="text">Always-on video and CTV deals from hundreds of top media owners and distributors.</div>
                                    <div class="button-container">
                        <a href='https://www.xandr.com/news/xandr-introduces-the-premium-video-catalog/' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-header hidden">
            <div class="content">
                <div class="header">Xandr Adopts OpenAP’s OpenID</div>
                <div class="text">Xandr +OpenAP Alliance Expands Premium Networks Available on Invest TV.</div>
                                    <div class="button-container">
                        <a href='https://www.xandr.com/news/xandr-adopts-openaps-openid-to-streamline-audience-based-buying-in-national-tv/' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-header hidden">
            <div class="content">
                <div class="header">Captify Uses Xandr Curate </div>
                <div class="text">Captify Uses Xandr Curate to Provide Advertisers with Real-Time, Search-Powered Audiences At-Scale across CTV and Video.</div>
                                    <div class="button-container">
                        <a href='https://www.mediapost.com/publications/article/361289/' class='button carousel-button' target='_blank'>Learn More</a>
                    </div>
                            </div>
        </div>
                <div class="slide-text">
            <div class="content">
                <div class="header">Xandr has been Acquired by Microsoft</div>
                <div class="text">Read the blog post to learn more.</div>
                                    <div class="button-container">
                        <a href='https://about.ads.microsoft.com/en-us/blog/post/december-2021/microsoft-to-acquire-xandr-to-accelerate-its-digital-advertising-and-retail-media-solutions' class='button carousel-button'>Read More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-text hidden">
            <div class="content">
                <div class="header">We are Xandr</div>
                <div class="text">Xandr is a data-enabled technology platform powering a global marketplace for premium advertising.</div>
                                    <div class="button-container">
                        <a href='https://www.xandr.com/about/' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-text hidden">
            <div class="content">
                <div class="header">Xandr’s Interactive Guide to Political Advertising </div>
                <div class="text">Discover Invest DSP for Political </div>
                                    <div class="button-container">
                        <a href='https://view.ceros.com/xandr/xandr-the-road-to-campaign-victory/p/1?mkt_tok=MjA0LUtaRy02ODUAAAGFeJPZM_X0A5lp-vzOH-dm0HDup8AarmwLmO_RZPGKCVe3rlYfkg7HyI3eKxqcyM4l3yLXtJREpq0dmkM5_1p17Rgx2xND_DtM5swZHlkyCWd4_w' class='button carousel-button'>Let's Go</a>
                    </div>
                            </div>
        </div>
            <div class="slide-text hidden">
            <div class="content">
                <div class="header">The Split Screen: A Guide to Digital Video</div>
                <div class="text">Get global advice on key trends and the steps that both buyers and sellers can take to fully embrace digital video.</div>
                                    <div class="button-container">
                        <a href='https://view.ceros.com/xandr/digital-video-guide-2022/p/1' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-text hidden">
            <div class="content">
                <div class="header">2021 Relevance Report</div>
                <div class="text">Learn how advertisers are using data and automation to bring video into the future with our State of Convergence and Advanced TV report.</div>
                                    <div class="button-container">
                        <a href='https://www.xandr.com/relevance/' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-text hidden">
            <div class="content">
                <div class="header">Xandr’s Premium Video Catalog</div>
                <div class="text">Always-on video and CTV deals from hundreds of top media owners and distributors.</div>
                                    <div class="button-container">
                        <a href='https://www.xandr.com/news/xandr-introduces-the-premium-video-catalog/' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-text hidden">
            <div class="content">
                <div class="header">Xandr Adopts OpenAP’s OpenID</div>
                <div class="text">Xandr +OpenAP Alliance Expands Premium Networks Available on Invest TV.</div>
                                    <div class="button-container">
                        <a href='https://www.xandr.com/news/xandr-adopts-openaps-openid-to-streamline-audience-based-buying-in-national-tv/' class='button carousel-button'>Learn More</a>
                    </div>
                            </div>
        </div>
            <div class="slide-text hidden">
            <div class="content">
                <div class="header">Captify Uses Xandr Curate </div>
                <div class="text">Captify Uses Xandr Curate to Provide Advertisers with Real-Time, Search-Powered Audiences At-Scale across CTV and Video.</div>
                                    <div class="button-container">
                        <a href='https://www.mediapost.com/publications/article/361289/' class='button carousel-button' target='_blank'>Learn More</a>
                    </div>
                            </div>
        </div>
        <div class="image-container">
                    <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image-background">
                <polygon id="Mask" fill="#F7F0F0" fill-rule="nonzero" points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
            </svg>
            <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image">
                <defs>
                    <clippath id="carousel-big-clip">
                        <polygon points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
                    </clippath>
                    <clippath id="carousel-responsive-clip">
                        <polygon points="989.250714 2.93709604e-12 1472.55892 826 187.341265 826 -283.5 0"></polygon>
                    </clippath>
                </defs>
                <style>
                    #carousel-svg-image { opacity: 1; }
                    #carousel-responsive-image { opacity : 0; }

                    @media  all and (max-width: 414px) {
                        #carousel-svg-image { opacity: 0; }
                        #carousel-responsive-image { opacity : 1; }
                    }
                </style>
                <image id="carousel-svg-image" style="clip-path: url(#carousel-big-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/12/Website-Carousel.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=63ab6a72ad78652bf3c35a54790b1c69"></image>
                <image id="carousel-responsive-image" style="clip-path: url(#carousel-responsive-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/12/Website-Carousel.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=63ab6a72ad78652bf3c35a54790b1c69"></image>
            </svg>
                    <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image-background">
                <polygon id="Mask" fill="#F7F0F0" fill-rule="nonzero" points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
            </svg>
            <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image  hidden">
                <defs>
                    <clippath id="carousel-big-clip">
                        <polygon points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
                    </clippath>
                    <clippath id="carousel-responsive-clip">
                        <polygon points="989.250714 2.93709604e-12 1472.55892 826 187.341265 826 -283.5 0"></polygon>
                    </clippath>
                </defs>
                <style>
                    #carousel-svg-image { opacity: 1; }
                    #carousel-responsive-image { opacity : 0; }

                    @media  all and (max-width: 414px) {
                        #carousel-svg-image { opacity: 0; }
                        #carousel-responsive-image { opacity : 1; }
                    }
                </style>
                <image id="carousel-svg-image" style="clip-path: url(#carousel-big-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2020/06/We-Are-Xandr.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=7ea5cc1166ba95b6ca85870e9d254304"></image>
                <image id="carousel-responsive-image" style="clip-path: url(#carousel-responsive-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2020/06/We-Are-Xandr.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=7ea5cc1166ba95b6ca85870e9d254304"></image>
            </svg>
                    <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image-background">
                <polygon id="Mask" fill="#F7F0F0" fill-rule="nonzero" points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
            </svg>
            <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image  hidden">
                <defs>
                    <clippath id="carousel-big-clip">
                        <polygon points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
                    </clippath>
                    <clippath id="carousel-responsive-clip">
                        <polygon points="989.250714 2.93709604e-12 1472.55892 826 187.341265 826 -283.5 0"></polygon>
                    </clippath>
                </defs>
                <style>
                    #carousel-svg-image { opacity: 1; }
                    #carousel-responsive-image { opacity : 0; }

                    @media  all and (max-width: 414px) {
                        #carousel-svg-image { opacity: 0; }
                        #carousel-responsive-image { opacity : 1; }
                    }
                </style>
                <image id="carousel-svg-image" style="clip-path: url(#carousel-big-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2022/08/XDR-2748-Political-Guide-Carousel-Card-HB-C1-03.jpeg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=af82aef0e2c74e7878c58cce154a6e69"></image>
                <image id="carousel-responsive-image" style="clip-path: url(#carousel-responsive-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2022/08/XDR-2748-Political-Guide-Carousel-Card-HB-C1-03.jpeg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=af82aef0e2c74e7878c58cce154a6e69"></image>
            </svg>
                    <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image-background">
                <polygon id="Mask" fill="#F7F0F0" fill-rule="nonzero" points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
            </svg>
            <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image  hidden">
                <defs>
                    <clippath id="carousel-big-clip">
                        <polygon points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
                    </clippath>
                    <clippath id="carousel-responsive-clip">
                        <polygon points="989.250714 2.93709604e-12 1472.55892 826 187.341265 826 -283.5 0"></polygon>
                    </clippath>
                </defs>
                <style>
                    #carousel-svg-image { opacity: 1; }
                    #carousel-responsive-image { opacity : 0; }

                    @media  all and (max-width: 414px) {
                        #carousel-svg-image { opacity: 0; }
                        #carousel-responsive-image { opacity : 1; }
                    }
                </style>
                <image id="carousel-svg-image" style="clip-path: url(#carousel-big-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2022/03/XDR-2422-Digital-Video-Guide-Carousel-Image-ZF-C1.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=37a2f0f20a2b4818a6a56a06c0b62ad6"></image>
                <image id="carousel-responsive-image" style="clip-path: url(#carousel-responsive-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2022/03/XDR-2422-Digital-Video-Guide-Carousel-Image-ZF-C1.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=37a2f0f20a2b4818a6a56a06c0b62ad6"></image>
            </svg>
                    <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image-background">
                <polygon id="Mask" fill="#F7F0F0" fill-rule="nonzero" points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
            </svg>
            <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image  hidden">
                <defs>
                    <clippath id="carousel-big-clip">
                        <polygon points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
                    </clippath>
                    <clippath id="carousel-responsive-clip">
                        <polygon points="989.250714 2.93709604e-12 1472.55892 826 187.341265 826 -283.5 0"></polygon>
                    </clippath>
                </defs>
                <style>
                    #carousel-svg-image { opacity: 1; }
                    #carousel-responsive-image { opacity : 0; }

                    @media  all and (max-width: 414px) {
                        #carousel-svg-image { opacity: 0; }
                        #carousel-responsive-image { opacity : 1; }
                    }
                </style>
                <image id="carousel-svg-image" style="clip-path: url(#carousel-big-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/09/XDR-2133-Relevance-Report-Website-Thumbnails-Asset2-HB-C2.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=a49212e689cb299ed372e21b5092f0ca"></image>
                <image id="carousel-responsive-image" style="clip-path: url(#carousel-responsive-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/09/XDR-2133-Relevance-Report-Website-Thumbnails-Asset2-HB-C2.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=a49212e689cb299ed372e21b5092f0ca"></image>
            </svg>
                    <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image-background">
                <polygon id="Mask" fill="#F7F0F0" fill-rule="nonzero" points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
            </svg>
            <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image  hidden">
                <defs>
                    <clippath id="carousel-big-clip">
                        <polygon points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
                    </clippath>
                    <clippath id="carousel-responsive-clip">
                        <polygon points="989.250714 2.93709604e-12 1472.55892 826 187.341265 826 -283.5 0"></polygon>
                    </clippath>
                </defs>
                <style>
                    #carousel-svg-image { opacity: 1; }
                    #carousel-responsive-image { opacity : 0; }

                    @media  all and (max-width: 414px) {
                        #carousel-svg-image { opacity: 0; }
                        #carousel-responsive-image { opacity : 1; }
                    }
                </style>
                <image id="carousel-svg-image" style="clip-path: url(#carousel-big-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/09/Premium-Video-Catalog-Press-Release-Website-Carousel.png?auto=compress&amp;fit=crop&amp;fm=png&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=5788ed497f3955bf8e8352ccd8496f95"></image>
                <image id="carousel-responsive-image" style="clip-path: url(#carousel-responsive-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/09/Premium-Video-Catalog-Press-Release-Website-Carousel.png?auto=compress&amp;fit=crop&amp;fm=png&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=5788ed497f3955bf8e8352ccd8496f95"></image>
            </svg>
                    <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image-background">
                <polygon id="Mask" fill="#F7F0F0" fill-rule="nonzero" points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
            </svg>
            <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image  hidden">
                <defs>
                    <clippath id="carousel-big-clip">
                        <polygon points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
                    </clippath>
                    <clippath id="carousel-responsive-clip">
                        <polygon points="989.250714 2.93709604e-12 1472.55892 826 187.341265 826 -283.5 0"></polygon>
                    </clippath>
                </defs>
                <style>
                    #carousel-svg-image { opacity: 1; }
                    #carousel-responsive-image { opacity : 0; }

                    @media  all and (max-width: 414px) {
                        #carousel-svg-image { opacity: 0; }
                        #carousel-responsive-image { opacity : 1; }
                    }
                </style>
                <image id="carousel-svg-image" style="clip-path: url(#carousel-big-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/08/XDR-2060-Website-Carousel-Images-OpenAP-ZF-C2.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=4fd8ed180c1e37a5449bb1a8212a3cc4"></image>
                <image id="carousel-responsive-image" style="clip-path: url(#carousel-responsive-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/08/XDR-2060-Website-Carousel-Images-OpenAP-ZF-C2.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=4fd8ed180c1e37a5449bb1a8212a3cc4"></image>
            </svg>
                    <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image-background">
                <polygon id="Mask" fill="#F7F0F0" fill-rule="nonzero" points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
            </svg>
            <svg width="1189px" height="826px" viewbox="0 0 1189 826" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image  hidden">
                <defs>
                    <clippath id="carousel-big-clip">
                        <polygon points="716.878906 0 1188.80911 826 479.870295 826 0 0"></polygon>
                    </clippath>
                    <clippath id="carousel-responsive-clip">
                        <polygon points="989.250714 2.93709604e-12 1472.55892 826 187.341265 826 -283.5 0"></polygon>
                    </clippath>
                </defs>
                <style>
                    #carousel-svg-image { opacity: 1; }
                    #carousel-responsive-image { opacity : 0; }

                    @media  all and (max-width: 414px) {
                        #carousel-svg-image { opacity: 0; }
                        #carousel-responsive-image { opacity : 1; }
                    }
                </style>
                <image id="carousel-svg-image" style="clip-path: url(#carousel-big-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/08/XDR-2060-Website-Carousel-Images-Captify-ZF-C2.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=587b81dec5b0fe8d4c547c2a9a606f9e"></image>
                <image id="carousel-responsive-image" style="clip-path: url(#carousel-responsive-clip)" x="-46" y="-13" width="1280" height="853" xlink:href="https://i.xandr.com/2021/08/XDR-2060-Website-Carousel-Images-Captify-ZF-C2.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=810&amp;ixlib=php-1.2.1&amp;w=1186&amp;wpsize=slide&amp;s=587b81dec5b0fe8d4c547c2a9a606f9e"></image>
            </svg>
            </div>
    <div class="pager-container">
        <a class="previous">&lt;</a>
        <ul class="pager">
                        <li class="current"></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                    </ul>
        <a class="next">&gt;</a>
    </div>
    <div class="scroll-more">
        <span class="down-arrow"></span>Scroll to explore
    </div>
</div>

            <div class="content-item content-hero content-hero-primary" style="">
            <svg viewbox="0 0 854 683" preserveaspectratio="xMidYMid meet" class="hero-image-svg">
            <defs>
                <clippath id="hero-primary-clip"><polygon points="0,0 854,0 854,683 396,683"></polygon></clippath>
            </defs>
            <image id="hero-primary-image" style="clip-path: url(#hero-primary-clip)" x="0" y="0" width="854" height="683" xlink:href="https://i.xandr.com/2021/07/HomePage1.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=683&amp;ixlib=php-1.2.1&amp;w=854&amp;wpsize=hero-image&amp;s=7c34dfc0265ab9f251b1e738c52886fc"></image>
        </svg>
            <div class="text-container">
        <div class="text-block">
                        <h1> </h1>
                <hr>
                                <style>
</style>
<h2>Xandr is a data-enabled technology platform powering a global marketplace for premium advertising.</h2>
<div class="page" title="Page 1">
<div class="section">
<div class="layoutArea">
<div class="column">
<p>In a category of our own, Xandr is the innovator at the intersection of digital and TV. Championing partnership, we offer an open, end-to-end platform for scaled, sophisticated campaigns on premium inventory across screens from CTV to Data Driven Linear and much more.</p>
<p>Our combined assets including trusted partnerships, powerful technology and automation, and data and identity solutions enable us to power one of the world’s largest marketplaces for premium advertising.</p>
<p><a href="https://www.xandr.com/about/#our-story">Read More</a></p>
</div>
</div>
</div>
</div>

                        </div>
    </div>
    </div>

            <div class="content-item content-video">
    <iframe title="Xandr Brand Sizzle 2022" width="640" height="360" src="https://www.youtube-nocookie.com/embed/N-_F7cqJiwU?feature=oembed&modestbranding=1&playsinline=1&rel=0&showinfo=0&autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
            <div class="content-item content-info-panel content-info-panel-vertical content-info-style-primary   content-last-item">
        <div class="info-header">
        <h2>Solutions</h2>
                    <div class="info-header-text">
                                    <p>An open, end-to-end platform, we are innovators at the intersection of TV and digital. ​</p>
<p><a href="https://www.xandr.com/solutions/">Learn More</a></p>

                                            </div>
            </div>
    <div class="info-items">
                    <div class="info-item">
                                <img src="https://i.xandr.com/2020/07/home-img-xandr-invest-%402x.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=309&amp;ixlib=php-1.2.1&amp;w=633&amp;wpsize=info-item-vertical&amp;s=a996c837f63db064247661eca226e4e5" class="info-image" alt="" />
                                <div class="info-item-details">
                    <h3>Xandr Invest</h3>
                    <p>The strategic buying platform with powerful consumer insights, access to premium supply across digital and advanced TV formats, and flexible ways to transact. Xandr Invest enables advertisers to connect with engaged consumers and drive business results.</p>

                                            <a href='https://www.xandr.com/solutions/invest/' class='info-item-button'><i class='fa xandr-arrow'></i>Learn More</a>
                                    </div>
            </div>
                    <div class="info-item">
                                <img src="https://i.xandr.com/2019/09/man-coffee-cup-pen.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=309&amp;ixlib=php-1.2.1&amp;w=633&amp;wpsize=info-item-vertical&amp;s=0b5c7992ada405c9d974813138dab255" class="info-image" alt="" />
                                <div class="info-item-details">
                    <h3>Xandr Curate</h3>
                    <p>The powerful, self-serve platform opening new revenue streams and creating competitive advantage through strategic, curated marketplaces.</p>

                                            <a href='https://www.xandr.com/solutions/curate/' class='info-item-button'><i class='fa xandr-arrow'></i>Learn More</a>
                                    </div>
            </div>
                    <div class="info-item">
                                <img src="https://i.xandr.com/2021/07/HomePage2.jpg?auto=compress&amp;fit=crop&amp;fm=pjpg&amp;h=309&amp;ixlib=php-1.2.1&amp;w=633&amp;wpsize=info-item-vertical&amp;s=806ed1ce91b2bd6d8cb316ec5b67b1dd" class="info-image" alt="" />
                                <div class="info-item-details">
                    <h3>Xandr Monetize</h3>
                    <p>The strategic selling platform with holistic inventory management controls, unique data, and differentiated buyer demand. Xandr Monetize enables media companies to unlock the full value of their inventory and improve the experience for consumers.</p>

                                            <a href='https://www.xandr.com/solutions/monetize/' class='info-item-button'><i class='fa xandr-arrow'></i>Learn More</a>
                                    </div>
            </div>
                    <div class="info-item">
                                <img src="https://i.xandr.com/2018/09/PPTelevision2.png?auto=compress&amp;fit=crop&amp;fm=png&amp;h=309&amp;ixlib=php-1.2.1&amp;w=633&amp;wpsize=info-item-vertical&amp;s=4b62b639094c3ca3e562031c4de3bb92" class="info-image" alt="" />
                                <div class="info-item-details">
                    <h3>Xandr Marketplace​ </h3>
                    <p>One of the world’s largest programmatic marketplaces, enabling scaled, sophisticated campaigns on premium inventory on all screens.</p>

                                            <a href='https://www.xandr.com/solutions/marketplace/' class='info-item-button'><i class='fa xandr-arrow'></i>Learn More</a>
                                    </div>
            </div>
            </div>
</div>
    
            </div>

        <div id="mobile-menu" class="removed hidden">
            <div class="menu-bg"></div>
            <div class="menu-container">
                <a class="home-link" href="https://www.xandr.com/">
                    
                </a>
                <nav class="primary">
                    <ul id="menu-primary" class="menu"><li id="menu-item-84" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-84"><a href="https://www.xandr.com/about/">About Us</a></li>
<li id="menu-item-86" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86"><a href="https://www.xandr.com/news/">News</a></li>
<li id="menu-item-2032" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2032"><a href="https://www.xandr.com/insights/">Insights</a></li>
<li id="menu-item-87" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-87"><a href="https://www.xandr.com/solutions/">Solutions</a></li>
</ul>                </nav>
                <nav class="secondary">
                    <ul id="menu-secondary" class="menu"><li id="menu-item-287" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-287"><a href="https://www.xandr.com/contact-us/">Contact</a></li>
<li id="menu-item-36" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36"><a target="_blank" rel="noopener noreferrer" href="https://www.xandr.jobs/">Careers</a></li>
</ul>                </nav>
            </div>
        </div>

        <a class="hamburger">
            <span></span>
            <span></span>
        </a>

        
        <script>

var p = OnetrustActiveGroups;

if ( p.indexOf(',2,') > -1 || p.indexOf(',C0002,' ) > -1)
{
	
	var gaProperty = '';
	var disableStr = 'ga-disable-' + gaProperty;

	function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 UTC;';
}

		delete_cookie('ga-disable-' + gaProperty);
		window[disableStr] = false; 
	
}


else
{
	
	// Set to the same value as the web property used on the site
	var gaProperty = '';


	// Disable tracking if the opt-out cookie exists.
	var disableStr = 'ga-disable-' + gaProperty;
	if (document.cookie.indexOf(disableStr + '=true') > -1) {
	  window[disableStr] = true;
	}

	// Opt-out function
	function gaOptout() {
	  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
	  window[disableStr] = true;
	} 
      gaOptout();
	

}


var group = OnetrustActiveGroups;   
    if (typeof googletag !== "undefined" && googletag.apiReady) {
        googletag.pubads().disableInitialLoad();
        if( group.indexOf(',4,') > -1 || group.indexOf(',C0004,') > -1 ){
            googletag.pubads().setRequestNonPersonalizedAds(0);
            googletag.pubads().refresh();
            (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 0
        } else {
            googletag.pubads().setRequestNonPersonalizedAds(1);
            googletag.pubads().refresh();
            (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1
        }
    }


</script><script data-handle="xandr.min.js" type='text/javascript' defer src='https://www.xandr.com/app/themes/xandr-theme/public/js/xandr.min.js?ver=1639432653'></script>
<script data-handle="wp-embed" type='text/javascript' defer src='https://www.xandr.com/wp/wp-includes/js/wp-embed.min.js?ver=5.2.2'></script>
        <footer>
            <div class="interior">
                <div class="navigation">
                    <nav class="footer">
                        <ul id="menu-footer" class="menu"><li id="menu-item-320" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-320"><a href="https://www.xandr.com/contact-us/">Contact Us</a></li>
<li id="menu-item-38" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"><a target="_blank" rel="noopener noreferrer" href="https://www.xandr.jobs/">Careers</a></li>
<li id="menu-item-313" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-313"><a href="https://www.xandr.com/legal/">Legal Notice</a></li>
<li id="menu-item-312" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-312"><a href="https://www.xandr.com/privacy/">Privacy Policy</a></li>
<li id="menu-item-1318" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1318"><a href="https://www.xandr.com/privacy/cookie-policy/">Digital Platform Cookie Policy</a></li>
<li id="menu-item-1422" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1422"><a href="https://www.xandr.com/privacy/platform-privacy-policy/">Platform Privacy Policy</a></li>
<li id="menu-item-1423" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1423"><a target="_blank" rel="noopener noreferrer" href="https://privacycenter.xandr.com/">Privacy Center</a></li>
<li id="menu-item-1447" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1447"><a target="_blank" rel="noopener noreferrer" href="https://privacycenter.xandr.com/">Do Not Sell My Personal Information</a></li>
<li id="menu-item-1271" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1271"><a href="https://www.xandr.com/social-responsibility/">Social Responsibility</a></li>
<li id="menu-item-1274" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1274"><a href="https://www.xandr.com/about/office-locations/">Office Locations</a></li>
<li id="menu-item-1275" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1275"><a target="_blank" rel="noopener noreferrer" href="https://docs.xandr.com/">Documentation Center</a></li>
<li id="menu-item-168215" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-168215"><a href="https://www.xandr.com/learning/">Learning</a></li>
</ul>                    </nav>
                </div>
                <img class="logo" title="Microsoft" src="https://www.xandr.com/app/themes/xandr-theme/public/img/microsoft.svg" style="width: auto !important;">
            </div>
            <div class="bottom-nav">
                <nav class="social">
                    				<a href='https://twitter.com/xandr' target='_blank' data-menu-id='460'  rel='nofollow noopener' class='social social-twitter'>Twitter</a>
				<a href='https://www.facebook.com/Xandr1876' target='_blank' data-menu-id='458'  rel='nofollow noopener' class='social social-fb'>Facebook</a>
				<a href='https://www.linkedin.com/company/xandr' target='_blank' data-menu-id='459'  rel='nofollow noopener' class='social social-linkedin'>LinkedIn</a>
				<a href='https://instagram.com/xandr' target='_blank' data-menu-id='457'  rel='nofollow noopener' class='social social-instagram'>Instragram</a>
				<a href='https://www.youtube.com/c/Xandr-Official' target='_blank' data-menu-id='2316'  rel='nofollow noopener' class='social social-youtube'>YouTube</a>
;
                </nav>
                <ul class="language-switch">
                                            	<li class="lang-item lang-item-54 lang-item-en current-lang lang-item-first"><a lang="en-US" hreflang="en-US" href="https://www.xandr.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" title="English" alt="English" width="16" height="11" style="width: 16px; height: 11px;" /></a></li>
	<li class="lang-item lang-item-57 lang-item-ja"><a lang="ja" hreflang="ja" href="https://www.xandr.com/ja/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAE2SURBVHjaYvz69SsDEvj37x+ERGbAwZ9//wACiAUoysXFBST///8P0QOm//+HU0jgxYsXAAHEAlP0H8HYt+//4SP/f//6b2b238sLrpqRkRFoCUAAsaCrXrv2/8KF///8+f/r9//Dh/8/ffI/OQWiAeJCgABigrseJPT27f/Vq////v3/1y8oWrzk/+PHcEv+/PkDEEBMEM/B3fj/40eo0t9g8suX/w8f/odZAVQMEEAsQAzj/2cQFf3PxARWCrYEaBXQLCkpqB/+/wcqBgggJrjxQPX/hYX/+/v///kLqhpIBgf/l5ODhxiQBAggFriToDoTEv5zcf3ftQuk2s7uf0wM3MdAAPQDQAAxvn37lo+PDy4KZUDcycj4/z9CBojv3r0LEEAgG969eweLSBDEBSCWAAQYACaTbJ/kuok9AAAAAElFTkSuQmCC" title="日本語" alt="日本語" width="16" height="11" style="width: 16px; height: 11px;" /></a></li>

                                    </ul>
            </div>
            <div class="copyright">
                <!-- &copy2022 Xandr Inc. Xandr&#8480;, the Kite logo, AT&amp;T, the Globe logo and other marks are trademarks and service marks of AT&amp;T Intellectual Property and/or AT&amp;T affiliated companies. All other marks contained herein are the property of their respective owners. -->
                &copy2022 Microsoft Group of Companies. Xandr, the Kite logo, and other marks are trademarks and service marks of the Microsoft Group of Companies. All other marks contained herein are the property of their respective owners.
            </div>
        </footer>

        
        
        
        
            </body>
</html>
