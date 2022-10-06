	// preload images
				nav1on= new Image(); 
				nav1on.src='/Common/iptv/images/nav_section_home_over.gif';
				nav1off= new Image(); 
				nav1off.src='/Common/iptv/images/nav_section_home.gif';
				nav2on= new Image(); 
				nav2on.src='/Common/iptv/images/nav_section_vod_over.gif';
				nav2off= new Image(); 
				nav2off.src='/Common/iptv/images/nav_section_vod.gif';
				nav3on= new Image(); 
				nav3on.src='/Common/iptv/images/nav_section_packages_over.gif';
				nav3off= new Image(); 
				nav3off.src='/Common/iptv/images/nav_section_packages.gif';
				nav4on= new Image(); 
				nav4on.src='/Common/iptv/images/nav_section_ppackages_over.gif';
				nav4off= new Image(); 
				nav4off.src='/Common/iptv/images/nav_section_ppackages.gif';				
				nav5on= new Image(); 
				nav5on.src='/Common/iptv/images/nav_section_ppv_over.gif';
				nav5off= new Image(); 
				nav5off.src='/Common/iptv/images/nav_section_ppv.gif';
				nav6on= new Image();
                nav6on.src='/Common/iptv/images/nav_section_HD_over.gif';
                nav6off= new Image();
                nav6off.src='/Common/iptv/images/nav_section_HD_off.gif';
				nav7Inton= new Image();
				nav7Inton.src='/Common/iptv/images/nav_internet_over.gif';
				nav7Intoff= new Image();
				nav7Intoff.src='/Common/iptv/images/nav_internet_off.gif';
				nav8on= new Image();
				nav8on.src='/Common/iptv/images/nav_extras_over.gif';
				nav8off= new Image();
				nav8off.src='/Common/iptv/images/nav_extras_off.gif';
				nav8mobon= new Image();
				nav8mobon.src='/Common/iptv/images/nav_mobile_over.gif';
				nav8moboff= new Image();
				nav8moboff.src='/Common/iptv/images/nav_mobile_off.gif';
								// Temp. add for Video Lounge
				nav111on= new Image(); 
				nav111on.src='/Common/iptv/images/VL/vl_nav_videoLounge_over.gif';
				nav111off= new Image(); 
				nav111off.src='/Common/iptv/images/VL/vl_nav_videoLounge_off.gif';
				nav112on= new Image(); 
				nav112on.src='/Common/iptv/images/VL/vl_nav_theatre_over.gif';
				nav112off= new Image(); 
				nav112off.src='/Common/iptv/images/VL/vl_nav_theatre_off.gif';
				nav113on= new Image(); 
				nav113on.src='/Common/iptv/images/VL/vl_nav_buzz_over.gif';
				nav113off= new Image(); 
				nav113off.src='/Common/iptv/images/VL/vl_nav_buzz_off.gif';
				nav114on= new Image(); 
				nav114on.src='/Common/iptv/images/VL/vl_nav_frontRow_over.gif';
				nav114off= new Image(); 
				nav114off.src='/Common/iptv/images/VL/vl_nav_frontRow_off.gif';				
				nav115on= new Image(); 
				nav115on.src='/Common/iptv/images/VL/vl_nav_hbo_over.gif';
				nav115off= new Image(); 
				nav115off.src='/Common/iptv/images/VL/vl_nav_hbo_off.gif'	
				nav116on= new Image(); 
				nav116on.src='/Common/iptv/images/spacer.gif';
				nav116off= new Image(); 
				nav116off.src='/Common/iptv/images/spacer.gif';
				nav117on= new Image(); 
				nav117on.src='/Common/iptv/images/VL/vl_nav_starz_over.gif';
				nav117off= new Image(); 
				nav117off.src='/Common/iptv/images/VL/vl_nav_starz_off.gif';
				nav118on= new Image(); 
				nav118on.src='/Common/iptv/images/VL/vl_nav_showtime_over.gif';
				nav118off= new Image(); 
				nav118off.src='/Common/iptv/images/VL/vl_nav_showtime_off.gif';
				nav119on= new Image(); 
				nav119on.src='/Common/iptv/images/spacer.gif';
				nav119off= new Image(); 
				nav119off.src='/Common/iptv/images/spacer.gif';
				nav1110on= new Image(); 
				nav1110on.src='/Common/iptv/images/spacer.gif';
				nav1110off= new Image(); 
				nav1110off.src='/Common/iptv/images/spacer.gif';
				nav1111on= new Image(); 
				nav1111on.src='/Common/iptv/images/VL/vl_nav_networks_over.gif';
				nav1111off= new Image(); 
				nav1111off.src='/Common/iptv/images/VL/vl_nav_networks_off.gif';
				nav1112on= new Image(); 
				nav1112on.src='/Common/iptv/images/spacer.gif';
				nav1112off= new Image(); 
				nav1112off.src='/Common/iptv/images/spacer.gif';
				nav1113on= new Image(); 
				nav1113on.src='/Common/iptv/images/VL/vl_nav_encore_over.gif';
				nav1113off= new Image(); 
				nav1113off.src='/Common/iptv/images/VL/vl_nav_encore_off.gif';
				nav1114on= new Image(); 
				nav1114on.src='/Common/iptv/images/VL/vl_nav_whatisUverse_over.gif';
				nav1114off= new Image(); 
				nav1114off.src='/Common/iptv/images/VL/vl_nav_whatisUverse_off.gif';
				nav1115on= new Image(); 
				nav1115on.src='/Common/iptv/images/editorial_nav_over.jpg';
				nav1115off= new Image(); 
				nav1115off.src='/Common/iptv/images/editorial_nav_off.jpg';
				nav1116on= new Image(); 
				nav1116on.src='/Common/iptv/images/nav_MobiTV_over.jpg';
				nav1116off= new Image(); 
				nav1116off.src='/Common/iptv/images/nav_MobiTV_off.jpg';
								// Temp. add for Video Lounge end
	// graphic button rollover
		function btn(inId,source) {
			inId.src=source;
		}
		
	// css rollover
		function cssbtn(inId,state) {
			if (state=='over'){
				document.getElementById(inId).style.font="12px Verdana";
				document.getElementById(inId).style.color="#0A94d6";
				document.getElementById(inId).style.textDecoration="underline";
			}else if (state=='out'){
				document.getElementById(inId).style.font="11px Verdana";
				document.getElementById(inId).style.color="#023F72";
				document.getElementById(inId).style.textDecoration="none";
			}
		}
		
	// new sub menu action not necesary but super cool
		
	//	function WM_collapse(inId){
	//		if (document.getElementById(inId).style.display == 'none'){
	//			document.getElementById(inId).style.display = '';
	//		} else {
	//			document.getElementById(inId).style.display = 'none';
	//		}
	//	}
	
	
function variety() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}
	
function athome() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}	

function news() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}	

function sports() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}	

function kids() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}	

function music() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}

function women() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}

function mall() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}

function science() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "";
	inspiration.style.display = "none";
	atTheMovies.style.display = "none";
}

function inspiration() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "";
	atTheMovies.style.display = "none";
}

function atTheMovies() {
	var categories = document.getElementById("categories")
	var variety = document.getElementById("variety")
	var athome = document.getElementById("athome")
	var news = document.getElementById("news")
	var sports = document.getElementById("sports")
	var kids = document.getElementById("kids")
	var music = document.getElementById("music")
	var women = document.getElementById("women")
	var mall = document.getElementById("mall")
	var science = document.getElementById("science")
	var inspiration = document.getElementById("inspiration")
	var atTheMovies = document.getElementById("atTheMovies")
	
	
	categories.style.display = "none";
	variety.style.display = "none";
	athome.style.display = "none";
	news.style.display = "none";	
	sports.style.display = "none";
	kids.style.display = "none";
	music.style.display = "none";
	women.style.display = "none";
	mall.style.display = "none";
	science.style.display = "none";
	inspiration.style.display = "none";
	atTheMovies.style.display = "";
}	
	
	