$(document).ready(function() {
    invokeTagSearch();
});

var responseData = "";

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function invokeTagSearch() {
    var searchtag = "";
    var pageno = "";

    if (!window.location.search.substring(1)) {
        searchtag = "";
        pageno = "1";
    }
    if (window.location.search.substring(1)) {
        if (GetURLParameter('searchtag')) {
            searchtag = GetURLParameter('searchtag');
            if (searchtag != "") {
				searchtag = unescape(searchtag);
            }
        }
        if (GetURLParameter('page')) {
            pageno = GetURLParameter('page');
        }
		else{
			pageno = 1;
		}
    }


    searchtag = escape(searchtag);
    $.ajax({
        url: "/ecms/attus/searchresult",
        type: "get",
        data: {
            searchtag: searchtag,
            page: pageno
        },
        success: function(response) {
            //alert("Searchresults AJAX success-" + response.success);
			if(response.SearchtagTitle)
			{
				var stag = response.SearchtagTitle;
				if(stag != "" || stag != undefined || stag != null || stag != "undefined" || stag != "null" )
				{
					$("#headline").text("Tag Results for " + "\"" + stag + "\"");
				}
			}
            var nextpage = parseInt(pageno) + 1;
            responseData = response.hits;
            var total = response.TotalResults;
            var totalpages = total / 20;
            var totalpagesmod = (total % 20);
            if (totalpagesmod > 0) {
                totalpages = totalpages + 1;
            }
            totalpages = Math.floor(totalpages);
            if (responseData.length == 0) {
                $("#allpostdiv").append('<p style="font-size: 12px;">Sorry, no results were found matching your search criteria. Please revise your search and try again.</p>');
            }
			else if (pageno == 1) {
               if(pageno == totalpages )
				{
				}
				else{
                    var nextp = parseInt(pageno) + 1;
                    var link = "/newsbytag.html?searchtag=" + searchtag + "&page=" + nextp;
                    var inHTML = '<a class="cta--button" data-role="none" href="' + link + '"  aria-label="Next">Next &#8250;</a>';
					$(".search-cta").append((inHTML));
                }
            }
           else if (pageno != 1) {
			   if(pageno > totalpages)
               {
               }
               else if(pageno == totalpages)
               {
                    var prevp = parseInt(pageno) - 1;
                    var link = "/newsbytag.html?searchtag=" + searchtag + "&page=" + prevp;
                    var inHTML = '<a class="cta--button" data-role="none" href="' + link + '"  aria-label="Previous">&#8249; Previous</a>';
					$(".search-cta").append((inHTML));
                } else {
                    var nextp = parseInt(pageno) + 1;
                    var prevp = parseInt(pageno) - 1;
                    var plink = "/newsbytag.html?searchtag=" + searchtag + "&page=" + prevp;
                    var nlink = "/newsbytag.html?searchtag=" + searchtag + "&page=" + nextp;
                    var inHTML = '<a class="cta--button" href="' + plink + '" data-role="none"  aria-label="Previous">&#8249; Previous</a><a class="cta--button" data-role="none" href="' + nlink + '"  aria-label="Next">Next &#8250;</a>';
					$(".search-cta").append((inHTML));
                }
            }
		else{
		}

            for (var i = 0; i < responseData.length; i++) {

                var div = $('<div class="page' + i + '">');
                if (i == 0) {
                    div.append($('<div class="clearfix">'));
                } else {
                    div.append($('<div class="story clearfix">'));
                }

                if (responseData[i].formatedDate) {
                    div.append($('<p class="timestamp">' + responseData[i].formatedDate + '</p>'));
                }
                if (responseData[i].vanityPath) {
                    div.append($("<h2 style='font-size: 2em;font-weight: bold;line-height: 1.35em;margin: 0 0 20px;'><a href=" + responseData[i].vanityPath +">" + responseData[i].title + "</a></h2>"));
                }
                else {
						responseData[i].path = responseData[i].path.replace("/content/snr/story/migrated/","/newsroom/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/pressrelease/migrated/","/story/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/story/2018/","/newsroom/2018/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/pressrelease/2018/","/story/2018/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/story/2019/","/newsroom/2019/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/pressrelease/2019/","/story/2019/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/story/2020/","/newsroom/2020/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/pressrelease/2020/","/story/2020/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/story/2021/","/newsroom/2021/");
                        responseData[i].path = responseData[i].path.replace("/content/snr/pressrelease/2021/","/story/2021/");
                        responseData[i].path = responseData[i].path.replace("/content/innovationblog/","/innovationblog/");
						responseData[i].path = responseData[i].path.replace("/content/inside_connections_blog/","/inside_connections_blog/");
						responseData[i].path = responseData[i].path.replace("/content/snr/", "/aboutus/");
						
                    div.append($("<h2 style='font-size: 2em;font-weight: bold;line-height: 1.35em;margin: 0 0 20px;'><a href=" + responseData[i].path + ".html>" + responseData[i].title + "</a></h2>"));
                }
                if (responseData[i].description) {
                    div.append($("<p>" + responseData[i].description + "<p>"));
                }
                div.append($('<div id="met" class="meta">'));
                if (responseData[i].category && !responseData[i].subcategories) {
                    div.append($(' <p class="categories"><strong>Category:</strong><span id="catlist"> <a href="/allnews.html?searchkey=Search News&category=' + responseData[i].category + '&months=all&page=1" aria-label="' + responseData[i].category + '">' + responseData[i].category + '</a></p>'));
                }
                if (responseData[i].category && responseData[i].subcategories) {
                    var subcatl = responseData[i].subcategories.length;
                    var html = [];

                    for (var j = 0; j < subcatl; j++) {
                        if (responseData[i].CategoryTitle[j] != responseData[i].category) {
                            var encat = escape(responseData[i].subcategories[j]);
                            html.push(' <a href="/allnews.html?searchkey=Search News&category=' + encat + '&months=all&page=1" aria-label="' + responseData[i].CategoryTitle[j] + '">' + responseData[i].CategoryTitle[j] + '</a>');
                        }
                    }
                    div.append($(' <p class="categories"><strong>Category:</strong> <a href="/allnews.html?searchkey=Search News&category=' + responseData[i].category + '&months=all&page=1" aria-label="' + responseData[i].category + '">' + responseData[i].category + '</a>', +html + '</p>'));

                }

                if (responseData[i].snrtags) {
                    var subtagl = responseData[i].snrtags.length;
                    var thtml = [];
                    for (var k = 0; k < subtagl; k++) {
                        var entag = escape(responseData[i].snrtags[k]);
						if(searchtag == responseData[i].snrtags[k] )
                        {
                            $("#tagheadline").text("Tag Results for " + "\"" + responseData[i].TagTitle[k] + "\"");
                        }
                        if (responseData[i].TagTitle[k] != undefined) {
                            thtml.push(' <a href="/newsbytag.html?searchtag=' + entag + '&page=1" aria-label="' + responseData[i].TagTitle[k] + '">' + responseData[i].TagTitle[k] + '</a>');
                        }
                    }
                    if(thtml.length>0)
                    {
                    //div.append($('<p class="tags"><strong>Tags:</strong> ' + thtml + '</p>'));
                    }
                }
                div.append($('<div class="clear"></div>'));
                $('#allpostdiv').append(div);
            }

        },
        error: function() {
            //alert("Searchresults AJAX failure");
        }
    });

}