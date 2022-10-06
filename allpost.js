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

function invokeSearch() {

    var searchkey = "";
    var category = "";
    var month = "";
    var pageno = "";
    if (!window.location.search.substring(1)) {

        pageno = 1;
        month = "all";
        category = "all";
        searchkey = "Search News";
        $("input[name='page']").val(pageno);
        $("input[name='category']").val(category);
        $("input[name='months']").val(month);
        $("input[name='searchkey']").val(searchkey);

    }
    if (window.location.search.substring(1)) {
        if(GetURLParameter('searchkey'))
        {
            searchkey = GetURLParameter('searchkey');
            if(searchkey.indexOf('+') != -1)
            {
                searchkey = searchkey.split('+').join(' ');

            }
            searchkey = searchkey.replace("%20", " ");
            searchkey = searchkey.replace("%26", "&");
            searchkey = unescape(searchkey);
            if(searchkey == "")
            {
                searchkey = "Search News";
            }
        }
        if(GetURLParameter('category'))
        {
            category = GetURLParameter('category').replace("+", " ");
            category = unescape(category);
        }
        if(GetURLParameter('months'))
        {
            month = GetURLParameter('months');
        }
		if(GetURLParameter('page'))
        {
            pageno = GetURLParameter('page');
        }
		else{
			pageno = 1;
		}

        if (GetURLParameter('refresh')) {
            pageno = 1;
        } 
        else 
        {
        }

		if (category != "all" && category != "") {
            $("#category").val(category);
        } else {
            $("#category").val("all");
        }



		$("input[name='page']").val(pageno);
        $("input[name='category']").val(category);
        $("input[name='months']").val(month);
        if(searchkey != "Search News" && searchkey != "")
        {
        $("input[name='searchkey']").val(searchkey);
        }
        else
        {
            $("input[name='searchkey']").val("Search News");
        }


        if((searchkey != "" && searchkey != "Search News"))
        {
            if(category != "all" && category != "") 
            {
            	$("#headline").text("Search Results for " + "\"" + searchkey + "\"" + " in " + category + " News");
            } 
            else
            {
            	$("#headline").text("Search Results for " + "\"" + searchkey + "\"");
            }
           
        }
        else
        {
				$("#headline").text("All News Features");
        }
    }

    searchkey = escape(searchkey);
	category = escape(category);

    $.ajax({
        url: "/ecms/attus/searchresult",
        type: "get",
        data: {
            searchkey: searchkey,
            category: category,
            month: month,
            page: pageno
        },
        success: function(response) {
            //alert("Searchresults AJAX success-" + response.success);
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
            else if(pageno == 1)
			{
				if(pageno == totalpages )
				{
				}
				else{
				var nextp = parseInt(pageno) + 1;
                var link = "/allnews.html?searchkey=" + searchkey + "&category=" + category + "&months=" + month + "&page=" + nextp;
                var inHTML = '<a class="cta--button" data-role="none" href="' + link + '"  aria-label="Next">Next &#8250;</a>';
                $(".search-cta").append((inHTML));
				}
			}
			else if(pageno != 1)
			{
			   if(pageno > totalpages)
               {
               }
               else if(pageno == totalpages)
               {
                var prevp = parseInt(pageno) - 1;
                var link = "/allnews.html?searchkey=" + searchkey + "&category=" + category + "&months=" + month + "&page=" + prevp;
                var inHTML = '<a class="cta--button" data-role="none" href="' + link + '"  aria-label="Previous">&#8249; Previous</a>';
                $(".search-cta").append((inHTML));
               }
               else
                {
                var nextp = parseInt(pageno) + 1;
                var prevp = parseInt(pageno) - 1;
                var plink = "/allnews.html?searchkey=" + searchkey + "&category=" + category + "&months=" + month + "&page=" + prevp;
                var nlink = "/allnews.html?searchkey=" + searchkey + "&category=" + category + "&months=" + month + "&page=" + nextp;
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
                $('#allpostdiv').append(div);
            }

        },
        error: function() {
            //alert("Searchresults AJAX failure");
        }
    });

}

function getMonths() {
    var listOfMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    var displayOfMonths = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var today = new Date();
    var curMonth = today.getMonth() + 1;
    var curYear = today.getFullYear();

    var startMonth = 7;
    var startYear = 2013;
    var temp = null;

    var temp3 = "";
    while ((curMonth >= startMonth && curYear >= startYear && curMonth > 0) || (curMonth < startMonth && curYear > startYear && curMonth > 0)) {
        if (curMonth <= 9) {
            temp = curYear + "-0" + curMonth;
        } else {
            temp = curYear + "-" + curMonth;
        }
        if (GetURLParameter("months") != null) {
            temp3 = GetURLParameter("months");
        } else {
            temp3 = "All";
        }
        if (temp == temp3) {
            var dropvalue = displayOfMonths[curMonth - 1] + " " + curYear;
            $('#Months').append('<option value=' + temp + ' selected="selected">' + dropvalue + '</option>');
        } else {
            var dropvalue = displayOfMonths[curMonth - 1] + " " + curYear;
            $('#Months').append('<option value=' + temp + '>' + dropvalue + '</option>');
        }
        curMonth--;

        if (curMonth == 0) {
            curYear--;
            curMonth = 12;
        }
    }
}

function formsubmit() {
    $('#submitButton').click();
}

$(document).ready(function() {
    getMonths();
    invokeSearch();
});