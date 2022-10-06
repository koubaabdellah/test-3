var responseData = "";
var responseSearch = "";

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
    var fields = "";
    var rows = "";
	var filtersApplied = false;
	var category = "";	
    var pageno = "";
	var path = "";
	var month = "";
	var start = "0";
	var hiddenMonthvar ="";

	
    if (!window.location.search.substring(1)) {
		pageno = 1;
        month = "all";
        fields = "id,title,description,SBC_SEARCH_PUBLISHDATE,og_description,keywords,og_url";
        searchkey = "*:*";
		hiddenMonthvar="all";
		$("input[name='page']").val(pageno);
        $("input[name='months']").val(month);
        $("input[name='searchkey']").val("Search News");
    }
	
    if (window.location.search.substring(1)) {
        if(GetURLParameter('searchkey'))
        {	
		   searchkey = GetURLParameter('searchkey');
            if(searchkey.indexOf('+') != -1)
            {
                searchkey = searchkey.split('+').join(' ');

            }
			searchkey = searchkey.replaceAll("formaction", " ");
            searchkey = searchkey.replaceAll("%20", " ");
            searchkey = searchkey.replaceAll("%26", "&");
            searchkey = unescape(searchkey);
            if(searchkey == "")
            {
                if(GetURLParameter('category')){
					searchkey = "Search News";
				}
				else{
					searchkey = "*:*";
				}
				if(GetURLParameter('path')){
					searchkey = "Search News";
				}
				else{
					searchkey = "*:*";
				}
            }
        }
		else{
			if(GetURLParameter('category')){
				searchkey = "Search News";
			}
			else{
				searchkey = "*:*";
			}
			if(GetURLParameter('path')){
					searchkey = "Search News";
				}
				else{
					searchkey = "*:*";
				}
		}
        fields = "id,title,description,SBC_SEARCH_PUBLISHDATE,SBC_SEARCH_CATEGORY,og_description,keywords,og_url";
        if(GetURLParameter('months'))
        {
			if(GetURLParameter('category')){
				//month = getFormatttedMonths(GetURLParameter('month'));
				//month = GetURLParameter('months');
				if(GetURLParameter('months') != "all"){
					var monthVal = GetURLParameter('months');
					monthVal = getFormatttedMonths(unescape(monthVal));
					month = "published_date:[" + monthVal + "]";
				}
				else{
					month = "";
				}
			}
			else{
				if(GetURLParameter('months') != "all"){
					var monthVal = GetURLParameter('months');
					monthVal = getFormatttedMonths(unescape(monthVal));
					month = "published_date:[" + monthVal + "]";
				}
				else{
					month = "";
				}
			} 

			if(GetURLParameter('path')){
				//month = getFormatttedMonths(GetURLParameter('month'));
				//month = GetURLParameter('months');
				if(GetURLParameter('months') != "all"){
					var monthVal = GetURLParameter('months');
					monthVal = getFormatttedMonths(unescape(monthVal));
					month = "published_date:[" + monthVal + "]";
				}
				else{
					month = "";
				}
			}
			else{
				if(GetURLParameter('months') != "all"){
					var monthVal = GetURLParameter('months');
					monthVal = getFormatttedMonths(unescape(monthVal));
					month = "published_date:[" + monthVal + "]";
				}
				else{
					month = "";
				}
			} 			
        }
		else{
			month = "";
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
		if(GetURLParameter('start')){
			start = GetURLParameter('start');
		}
		else{
			start = "0";
		}
		if(GetURLParameter('category')){
			category = GetURLParameter('category').replace("+", " ");
            category = unescape(category);
		}
		else{
			category = "";
		}
		
		if(GetURLParameter('path')){
			path = GetURLParameter('path').replace("+", " ");
            path = unescape(path);
		}
		else{
			path = "";
		}
		
		$("input[name='page']").val(pageno);
		$("input[name='category']").val(category);
		$("input[name='path']").val(path);
		
		if(category == "")
        {
			$('#category').remove();
		}		
		
		var hiddenMonthvar = "all";
		if(GetURLParameter('months'))
        {
			if(GetURLParameter('category')){
				hiddenMonthvar = GetURLParameter('months');
			}
			else{
				if(GetURLParameter('months') != "all"){
					var monthVal = GetURLParameter('months');
					monthVal = unescape(monthVal);
					hiddenMonthvar = monthVal;
				}
				else{
					hiddenMonthvar = "";
				}
			}   
			if(GetURLParameter('path')){
				hiddenMonthvar = GetURLParameter('months');
			}
			else{
				if(GetURLParameter('months') != "all"){
					var monthVal = GetURLParameter('months');
					monthVal = unescape(monthVal);
					hiddenMonthvar = monthVal;
				}
				else{
					hiddenMonthvar = "";
				}
			}   			
        }
		else{
			hiddenMonthvar = "";
		}
	   $("input[name='months']").val(hiddenMonthvar);
        if(searchkey != "*:*" && searchkey != "")
        {
			$("input[name='searchkey']").val(searchkey);
        }
        else
        {
            $("input[name='searchkey']").val("Search News");
        }
		
        if((searchkey != "" && searchkey != "*:*" && searchkey != "Search News"))
        {
            $("#headline").text("Search Results for " + "\"" + searchkey + "\"");          
        }
		else if(category != "" && category != "Search News")
		{
			$("#headline").text(category + " Articles");	
		}	
        else
        {
			$("#headline").text("All News Features");
        }
		
    }
	
	searchkey = searchkey.replaceAll("<", "%3C");
	searchkey = searchkey.replaceAll(">", "%3E");
	if(!GetURLParameter('category') || category == "")
	{
		if(searchkey == "Search News")
		{
			searchkey = "*:*";
		}
	}
	else
	{
	}
	
	//taking path parameter
	var path="";
	if(GetURLParameter('path'))
	{
		path = unescape(GetURLParameter('path'));
		if(searchkey == "Search News")
		{
			searchkey = "*:*";
		}
	}
	else
	{
	}
	
	//setting ajaxData parameters	
	var ajaxData={
		 q:searchkey,
		 start: start,
	     indent:"true",
		 fl:fields,
		 rows:"20"
	}
	
	//setting ajaxData for month alone
	if(!(month == "" || month == "all"))
	{
	  ajaxData.fq=month;
	}
	
	//setting ajaxData for category alone
	var newcat = ""; 
	if(!category == "")
	{
	  newcat = "category:"+category;
	  ajaxData.fq=newcat;
	}
	else
	{
		newcat = "";
	}
	
	//setting ajaxData for path alone
	var newpath="";
	if(!(path == ""))
	{
		newpath = "path:"+path;
		ajaxData.fq=newpath;
	}
	else{
		path = "";
	}
	
	//setting default search API url
	var bwurl      = window.location.href;
	
	var url = "";
	
	
	url = "https://services.att.com/search/v1/newsroom?app-id=attnews&fq=-rejectDoc:true";
			
			//url formats for combination of fq variables
			if(!(month == "" || month == "all") && !(category == ""))
			{
				url = "https://services.att.com/search/v1/newsroom?app-id=attnews&fq=-rejectDoc:true&fq="+month+"&fq="+newcat;
			}
			else if(!(month == "" || month == "all") && !(path == ""))
			{
				url = "https://services.att.com/search/v1/newsroom?app-id=attnews&fq=-rejectDoc:truetrue&fq="+month+"&fq="+newpath;
			}
			else if(!(month == "" || month == "all") && !(path == "")&& !(category == ""))
			{
				url = "https://services.att.com/search/v1/newsroom?app-id=attnews&fq=-rejectDoc:true&fq="+month+"&fq="+newpath+"&fq="+newcat;
			}
			else if(!(path == "")&& !(category == ""))
			{
				url = "https://services.att.com/search/v1/newsroom?app-id=attnews&fq=-rejectDoc:true&fq="+newpath+"&fq="+newcat;
			}
			else if(!(category == "" || category == "All" ))
			{
                //hide the div of search and filter
                $(".search-wrap").hide();
			}
			else if (!(path == "" || path == "All"))
			{
			    $(".search-wrap").hide();
			}

		$.ajax({
			url: url,
			type: "get",
			data:ajaxData,
			dataType: "jsonp",
			jsonpCallback: "getResults",
			success: function(response) {
				//alert("Searchresults AJAX success-" + response.success);
				var nextpage = parseInt(pageno) + 1; 
				searchkey = searchkey.replaceAll(" ","%20");
                searchkey = searchkey.replaceAll("&","%26");
				var total = response.response.numFound;
				var totalpages = total / 20;
				var totalpagesmod = (total % 20);
				function calculateStartIdx(pageNum){
					var startVal = (pageNum * 20) - 20;
					return startVal;
				}
							
				if (totalpagesmod > 0) {
					totalpages = totalpages + 1;
				}
				totalpages = Math.floor(totalpages);
				responseData = response.response.docs;
				responseSearch = response;
				
				if (responseData.length == 0) {
					$("#lucidWorks_allpostdiv").append('<p style="font-size: 12px;">Sorry, no results were found matching your search criteria. Please revise your search and try again.</p>');
				}
				else if(pageno == 1)
				{
					if(pageno == totalpages )
					{
					}
					else{
						var nextp = parseInt(pageno) + 1;
						var startIndexNext = calculateStartIdx(nextp);
						var link = "/allnews.html?searchkey=" + searchkey + "&category=" + category + "&months=" + hiddenMonthvar + "&path=" + path + "&page=" + nextp + "&start=" + startIndexNext+ "&srld=1";
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
					var startIndexPrev = calculateStartIdx(prevp);
					var link = "/allnews.html?searchkey=" + searchkey + "&category=" + category + "&months=" + hiddenMonthvar + "&path=" + path + "&page=" + prevp + "&start=" + startIndexPrev;
					var inHTML = '<a class="cta--button" data-role="none" href="' + link + '"  aria-label="Previous">&#8249; Previous</a>';
					$(".search-cta").append((inHTML));
				   }
				   else
					{
					var nextp = parseInt(pageno) + 1;
					var prevp = parseInt(pageno) - 1;
					var startIndexPrev = calculateStartIdx(prevp);
					var startIndexNext = calculateStartIdx(nextp);
					var plink = "/allnews.html?searchkey=" + searchkey + "&category=" + category + "&months=" + hiddenMonthvar + "&path=" + path + "&page=" + prevp + "&start=" + startIndexPrev + "&srld=1";
					var nlink = "/allnews.html?searchkey=" + searchkey + "&category=" + category + "&months=" + hiddenMonthvar + "&path=" + path + "&page=" + nextp + "&start=" + startIndexNext + "&srld=1";
					var inHTML = '<a class="cta--button" href="' + plink + '" data-role="none"  aria-label="Previous">&#8249; Previous</a><a class="cta--button" data-role="none" href="' + nlink + '"  aria-label="Next">Next &#8250;</a>';
					$(".search-cta").append((inHTML));
					}
					
				}
				else{
				}
				
				function formatDate(date) {
					var monthNames = [
					"Jan", "Feb", "Mar",
					"Apr", "May", "Jun", "Jul",
					"Aug", "Sep", "Oct",
					"Nov", "Dec"
					];

					var day = date.getDate();
					var monthIndex = date.getMonth();
					var year = date.getFullYear();

					return monthNames[monthIndex] + ' ' + day + ', ' + year;
				}
			   
				for (var i = 0; i < responseData.length; i++) {

					var div = $('<div class="page' + i + '">');
					if (i == 0) {
						div.append($('<div class="clearfix">'));
					} else {
						div.append($('<div class="story clearfix">'));
					}

					if (responseData[i].SBC_SEARCH_PUBLISHDATE) {
						var date = responseData[i].SBC_SEARCH_PUBLISHDATE;
						var dt = new Date(date);
						dt = formatDate(dt);
						
						div.append($('<p class="timestamp">' + dt + '</p>'));
					}
					if (responseData[i].id) {
                        var idFromResponse = responseData[i].id;
                        if(idFromResponse.indexOf("https://")==-1 && idFromResponse.indexOf("http://")==-1){
                            responseData[i].id = responseData[i].id.replace(/:/g,"%3A");
                        }
                        
						if(responseData[i].title != undefined || responseData.title != ""){
							div.append($("<h2 style='font-size: 2em;font-weight: bold;line-height: 1.35em;margin: 0 0 20px;'><a href=" + responseData[i].id +">" + responseData[i].title + "</a></h2>"));
						}
						else{
							div.append($("<h2 style='font-size: 2em;font-weight: bold;line-height: 1.35em;margin: 0 0 20px;'><a href=" + responseData[i].id +">Title not available</a></h2>"));
						}
						
					}
					else if(responseData[i].og_url) {
						if(responseData[i].title != undefined || responseData.title != ""){
							div.append($("<h2 style='font-size: 2em;font-weight: bold;line-height: 1.35em;margin: 0 0 20px;'><a href=" + responseData[i].og_url + ".html>" + responseData[i].title + "</a></h2>"));	
						}
						else{
							div.append($("<h2 style='font-size: 2em;font-weight: bold;line-height: 1.35em;margin: 0 0 20px;'><a href=" + responseData[i].og_url + ".html>Title not available</a></h2>"));
						}
					}
					if (responseData[i].description) {
						div.append($("<p>" + responseData[i].description + "<p>"));
					}
					$('#lucidWorks_allpostdiv').append(div);
				}

			},
			error: function() {
				//alert("Searchresults AJAX failure");
			}
		});
}
function getFormatttedMonths(newDate) {
	mon = newDate.split("-")[1];
	Year = newDate.split("-")[0];
    var listOfMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    var displayOfMonths = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var today = new Date();
    var curMonth = mon;
    var curYear = Year;

    var startMonth = 7;
    var startYear = 2013;
    var temp = null;

    var temp3 = "";
    if((curMonth >= mon && curYear >= Year && curMonth > 0) || (curMonth < mon && curYear > Year && curMonth > 0)) {
        if (curMonth <= 9) {
			var int_d = new Date(curYear,curMonth);
            var month = new Date(int_d - 1);
            var lastDate = month.getDate();
            temp = curYear + "-" + curMonth + "-01T00:00:00Z%20TO%20" + curYear + "-" + curMonth + "-" + lastDate +"T00:00:00Z";
        } else {
			var int_d = new Date(curYear,curMonth);
            var month = new Date(int_d - 1);
            var lastDate = month.getDate();
            temp = curYear + "-" + curMonth + "-01T00:00:00Z%20TO%20" + curYear + "-" + curMonth + "-" + lastDate +"T00:00:00Z";
        }
        if (GetURLParameter("months") != null) {
            temp3 = GetURLParameter("months");
        } else {
            temp3 = "All";
        }
       
       
    }
	return temp;
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

function responseDetails(){
		return responseSearch;
}

$(document).ready(function() {
    getMonths();
    invokeSearch();
});

//write callback function here
function prepopulation() {
    if (window.location.search.substring(1)) {
            if(GetURLParameter('searchkey'))
            {
    		   searchkey = GetURLParameter('searchkey');
                if(searchkey.indexOf('+') != -1)
                {
                    searchkey = searchkey.split('+').join(' ');

                }
                searchkey = searchkey.replaceAll("%20", " ");
                searchkey = searchkey.replaceAll("%26", "&");
                searchkey = unescape(searchkey);
                if(searchkey != "" && searchkey != "*:*")
                {
                    document.getElementById('searchfield').setAttribute("value",searchkey);
                }
    			else
                {
                }
            }
    }
}
