(function() {
	'use strict';
	$(document).ready(function() {

		/********************************************************
			GLOBAL PAGE LINKS
		*********************************************************
		$('#GlobalAppStore').click(function(){
			ddo.pushEvent('linkClick','Link_Click',{'linkPosition':'footer','linkName':'download on the app store', 'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149 '});
		});
		$('#GlobalGooglePlay').click(function(){
			ddo.pushEvent('linkClick','Link_Click',{'linkPosition':'footer','linkName':'get it on google play', 'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'});
		});
		$('#GlobalLogin').click(function(){
			ddo.pushEvent('linkClick','Link_Click',{'linkPosition':'header','linkName':'log in', 'linkDestinationUrl': 'https://www.att.com/olam/loginAction.olamexecute?pId=Passthru_ATT_Thank_You'});
		});*/

		/********************************************************
			HEADER LINKS
		*********************************************************/
		$('#header-home-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Header',
				'linkPosition': 'topNav',
				'linkName': 'AT&T home page link'
			});
		});

		$('#header-benefits-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Header',
				'linkPosition': 'topNav',
				'linkName': 'Benefits page link'
			});
		});

		$('#header-benefits-tiers-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Header',
				'linkPosition': 'topNav',
				'linkName': 'Benefit Tiers page link'
			});
		});

		$('#header-faqs-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Header',
				'linkPosition': 'topNav',
				'linkName': 'FAQs page link'
			});
		});

		$('#header-get-app-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Header',
				'linkPosition': 'topNav',
				'linkName': 'Get the app link'
			});
		});

		/********************************************************
			FOOTER LINKS
		*********************************************************/
		$('#footer-app-store-badge').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#footer-google-play-badge').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});

		/********************************************************
			HOME PAGE LINKS
		*********************************************************/
		$('#home-hero-video-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'topContainer',
				'linkName': 'Watch hero video'
			});
		});
		$('#home-top-app-store-badge').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'marquee',
				'linkName': 'download on the app store'
			});
		});
		$('#home-top-google-play-badge').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'marquee',
				'linkName': 'get it on google play'
			});
		});
		$('#home-ticket-twosday-full-tile').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'ticket twosdays benefit'
			});
		});
		$('#home-dining-half-tile').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'dining benefit'
			});
		});
		$('#music-half-tile').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'dining benefit'
			});
		});
		$('#home-vip-experiences-quarter-tile').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'vip experiences benefit'
			});
		});
		$('#home-dining-quarter-tile').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'vip experiences benefit'
			});
		});
		$('#home-same-day-delivery-quarter-tile').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'same day delivery benefit'
			});
		});
		$('#home-event-access-half-tile').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'event access benefit'
			});
		});
		$('#home-see-all-benefits-btn').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'see all benefits'
			});
		});
		$('#home-lets-go-btn').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'lets go'
			});
		});
		$('#home-sign-in-btn').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'sign in'
			});
		});
		$('#home-see-FAQs-btn').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Home Pg',
				'linkPosition': 'content',
				'linkName': 'see faqs'
			});
		});

		/********************************************************
			BENEFITS PAGE LINKS
		*********************************************************/
		$('#benefits-ticket-twosday-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'ticket twosdays modal'
			});
		});
		$('#benefits-ticket-twosdays-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Ticket Tuesdays Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'ticket twosdays download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-ticket-twosdays-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Ticket Tuesdays Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'ticket twosdays get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-ticket-twosdays-redeem').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Ticket Tuesdays Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'ticket twosdays redeem your tickets online now'
			});
		});
		$('#benefits-vip-experiences-video').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'fullContainer',
				'linkName': 'Watch vip experiences video'
			});
		});
		$('#benefits-topgolf-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'topgolf modal'
			});
		});
		$('#benefits-topgolf-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Topgolf Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'topgolf download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-topgolf-google-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Topgolf Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'topgolf get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-readly-select-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'readly modal'
			});
		});
		$('#benefits-readly-select-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Readly Select Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'readly download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-readly-select-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Readly Select Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'readly get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-event-access-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'event access modal'
			});
		});
		$('#benefits-event-access-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Event Access Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'event access download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-event-access-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Event Access Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'event access get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-sound-studio-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'sound studio modal'
			});
		});
		$('#benefits-sound-studio-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Sound Studio Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'sound studio download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-sound-studio-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Sound Studio Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'sound studio get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#legal-modal-priority-presale-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'priority presale modal'
			});
		});
		$('#priority-presale-appleStore').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'priority presale download on the app store'
			});
		});
		$('#priority-presale-playStore').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'priority presale get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-olive-garden-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'Olive garden modal'
			});
		});
		$('#benefits-tgif-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks TGI Fridays Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'TGI Fridays download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-tgif-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks TGI Fridays Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'TGI Fridays get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-corner-bakery-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'Corner Bakery modal'
			});
		});
		$('#benefits-corner-bakery-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Corner Bakery Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'Corner Bakery download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-corner-bakery-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Corner Bakery Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'Corner Bakery get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-blaze-pizza-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'Blaze Pizza modal'
			});
		});
		$('#benefits-blaze-pizza-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Blaze Pizza Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'Blaze Pizza download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-blaze-pizza-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Blaze Pizza Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'Blaze Pizza get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-texas-brazil-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'Texas Brazil modal'
			});
		});
		$('#benefits-texas-brazil-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Blaze Pizza Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'Texas Brazil download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-texas-brazil-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Blaze Pizza Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'Texas Brazil get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-priority-services-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'priority services modal'
			});
		});
		$('#benefits-priority-services-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Priority Services Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'priority services download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-priority-services-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Priority Services Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'priority services get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-same-day-delivery-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'same day delivery and setup modal'
			});
		});
		$('#benefits-sameday-delivery-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Same-Day Delivery Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'same day delivery download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-sameday-delivery-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Same-Day Delivery Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'same day delivery get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#benefits-wifi-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'at&t wi-fi'
			});
		});
		$('#benefits-premier-support-modal-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'premier support modal'
			});
		});
		$('#benefits-premier-support-app-store').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Premier Support Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'premier support download on the app store',
				'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'
			});
		});
		$('#benefits-premier-support-google-play').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Premier Support Offer Detail Pg',
				'linkPosition': 'content',
				'linkName': 'premier support get it on google play',
				'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'
			});
		});
		$('#legal-modal-bahama-breeze-link').click(function() {
			ddo.pushEvent('linkClick', 'Link_Click', {
				'page.pageInfo.friendlyPageName': 'myATT Thanks Benefits Pg',
				'linkPosition': 'content',
				'linkName': 'Bahama Breeze modal'
			});
		});


		// 	$('#benefits-event-access-video').click(function(){
		// 		ddo.pushEvent('linkClick', 'Link_Click', { 'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'fullContainer','linkName':'Watch event access video'});
		// 	});
		// 	$('#benefits-top-app-store-badge').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'marquee', 'linkName':'download on the app store', 'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'});
		// 	});
		// 	$('#benefits-top-google-play-badge').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'marquee', 'linkName':'get it on google play', 'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'});
		// 	 });
		// 	$('#header-get-app-link').click(function(){
		// 	  ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'get the app'});
		// 	 });
		// 	$('#header-Appstore-btn').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content', 'linkName':'download on the app store', 'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'});
		// 	 });
		// 	$('#header-GoogleStore-btn').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content', 'linkName':'get it on google play', 'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'});
		// 	 });
		// 	$('#BenefitAppStore').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'download on the app store', 'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149 '});
		// 	});
		// 	$('#BenefitGooglePlay').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'get it on google play', 'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'});
		// 	});
		// 	$('#BenefitEventAccessVideo').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'event access benefit video'});
		// 	});
		// 		$('#benefits-topgolf-modal-link').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'topgolf benefit'});
		// 	});
		// 	$('#linkMovBodyGetYourTkts').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'Get Your Tickets',  'linkDestinationUrl': 'http://www.att.com/tickettwosdays'});
		// 	 });
		// 	$('#linkMovLegalGetYourTkts').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'att.com/tickettwosdays',  'linkDestinationUrl': 'http://www.att.com/tickettwosdays'});
		// 	 });
		// 	 $('#linkMoreBodyExploreEventAccess').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'See available tickets'});
		// 	 });
		// 	$('#preSale').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'Get your tickets'});
		// 	 });
		// 	$('.preSalelink').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'Get your tickets'});
		// 	 });
		// 	$('#linkSameDay').click(function(){
		// 		 ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Benefits Pg', 'linkPosition':'content','linkName':'Find out more', 'linkDestinationUrl': 'https://atyourservice.att.com/en-us?howItWorks'});
		// 	 });


		// 	/********************************************************
		// 		FAQs PAGE LINKS
		// 	*********************************************************/
		// 	$('#FAQAppStore').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'download on the app store', 'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149'});
		// 	});
		// 	$('#FAQGooglePlay').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'get it on google play', 'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'});
		// 	});
		// 	$('#FAQHaveToJoin').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'do I have to join expand'});
		// 	});
		// 	$('#FAQTypesBenefits').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'what types of benefits expand'});
		// 	});
		// 	$('#FAQTierLevel').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'what determines the tier level expand'});
		// 	});
		// 	$('#FAQChangeTiers').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'can I change tiers expand'});
		// 	});
		// 	$('#FAQRedeem').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'how do I redeem my benefits expand'});
		// 	});
		// 	$('#FAQEligible').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'what makes me eligible expand'});
		// 	});
		// 	$('#FAQNotEligible').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'why am I not eligible expand'});
		// 	});
		// 	$('#header-benefits-link').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'subnav benefits'});
		// 	});
		// 	$('#header-benefits-tiers-link').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'subnav benefits tiers'});
		// 	});
		// 	$('#header-FAQs-link"').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks FAQ Pg', 'linkPosition':'content','linkName':'subnav faqs'});
		// 	});

		// 	/********************************************************
		// 		REDEMPTION LINKS
		// 	*********************************************************/

		// 	$('#RedemptionSignIn').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'sign in'});
		// 	});
		// 	$('#RedemptionUserID').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'user id'});
		// 	});
		// 	$('#RedemptionPassword').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'password'});
		// 	});
		// 	$('#RedemptionDTV').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'dtv uverse'});
		// 	});
		// 	$('#RedemptionATTWireless').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'att wireless'});
		// 	});
		// 	$('#RedemptionUserNameInput').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'N/A'});
		// 	});
		// 	$('#RedemptionAgree').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'i agree'});
		// 	});
		// 	$('#RedemptionNoThanks').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'no thanks'});
		// 	});
		// 	$('#RedemptionRemindMe').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'remind me later'});
		// 	});
		// 	$('#RedemptionMovieText').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'pick a movie and receive a text reminder'});
		// 	});
		// 	$('#RedemptionPickMovie').click(function(){
		// 		ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Login Pg', 'linkPosition':'content','linkName':'pick a movie now'});
		// 	});

		// 	/********************************************************
		// 		TIERS PAGE LINKS
		// 	*********************************************************/

		// 	$('#buttonWLS').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'wireless'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'wireless'});
		// 		}
		// 	});
		// 	$('#buttonWLS15').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'wireless 15gb data'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'wireless 15gb data'});
		// 		}
		// 	});
		// 	$('#buttonBB').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'high speed internet'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'high speed internet'});
		// 		}
		// 	});
		// 	$('#buttonTV240').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'directv u verse tv 240 channels'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'directv u verse tv 240 channels'});
		// 		}
		// 	});
		// 	$('#buttonTV').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'directv u verse tv'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'directv u verse tv'});
		// 		}
		// 	});
		// 	$('.linkFAQs').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'see our faqs'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'see our faqs'});
		// 		}
		// 	});


		// 	$('#ENTERTAINMENT-0').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'ticket twosdays flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'ticket twosdays flyout'});
		// 		}
		// 	});
		// 	$('#ENTERTAINMENT-1').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'event access flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'event access flyout'});
		// 		}
		// 	});
		// 	$('#ENTERTAINMENT-2').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'priority presale flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'priority presale flyout'});
		// 		}
		// 	});

		// 	$('#SERVICES-0').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'same day delivery and setup flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'same day delivery and setup flyout'});
		// 		}
		// 	});
		// 	$('#SERVICES-1').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'premier support flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'premier support flyout'});
		// 		}
		// 	});
		// 	$('#SERVICES-2').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'priority services flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'priority services flyout'});
		// 		}
		// 	});
		// 	$('#SERVICES-3').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'att wifi hot spot flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'att wifi hot spot flyout'});
		// 		}
		// 	});
		// 	$('#MORE_ATT_THANKS-0').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'readly flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'readly flyout'});
		// 		}
		// 	});
		// 	$('#MORE_ATT_THANKS-1').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'with you in mind flyout'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'with you in mind flyout'});
		// 		}
		// 	});

		// 	$('#linkTiersAppStore').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content','linkName':'download on the app store', 'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149 '});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'download on the app store', 'linkDestinationUrl': 'https://itunes.apple.com/app/id1251584149 '});
		// 		}
		// 	});
		// 	$('#linkTiersGooglePlay').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'content', 'linkName':'get it on google play', 'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'content','linkName':'get it on google play', 'linkDestinationUrl': 'https://play.google.com/store/apps/details?id=com.att.thanks'});
		// 		}

		// 	});

		// 	$('#linkTiersHeroLoginBenefits').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Marquee','linkName':'Log in to see your benefits'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Marquee','linkName':'Log in to see your benefits'});
		// 		}
		// 	});
		// 	$('#linkTiersGoldTierWireless').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Gold Tier','linkName':'wireless'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Gold Tier','linkName':'wireless'});
		// 		}
		// 	});
		// 	$('#linkTiersGoldTierWireless2').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Gold Tier','linkName':'wireless'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Gold Tier','linkName':'wireless'});
		// 		}
		// 	});

		// 	$('#linkTiersGoldTierTV2').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Gold Tier','linkName':'directv u verse tv 240 channels'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Gold Tier','linkName':'directv u verse tv 240 channels'});
		// 		}
		// 	});

		// 	$('#linkTiersGoldTierUvers2').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Gold Tier','linkName':'directv u verse tv'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Gold Tier','linkName':'directv u verse tv'});
		// 		}
		// 	});

		// 	$('#linkTiersPlatTierWireless').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Platinum Tier','linkName':'wireless'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Platinum Tier','linkName':'wireless'});
		// 		}
		// 	});
		// 	$('#linkTiersPlatTierTV').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Platinum Tier','linkName':'directv u verse tv 240 channels'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Platinum Tier','linkName':'directv u verse tv 240 channels'});
		// 		}
		// 	});
		// 	$('#linkTiersPlatTierTV2').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Platinum Tier','linkName':'directv u verse tv 240 channels'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Platinum Tier','linkName':'directv u verse tv 240 channels'});
		// 		}
		// 	});
		// 	$('#linkTiersPlatTierHighSpeed').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Platinum Tier','linkName':'high speed internet'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Platinum Tier','linkName':'high speed internet'});
		// 		}
		// 	});
		// 	$('#linkTiersPlatTierWireless2').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Platinum Tier','linkName':'wireless'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Platinum Tier','linkName':'wireless'});
		// 		}
		// 	});
		// 	$('#linkTiersPlatTierUvers').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Platinum Tier','linkName':'directv u verse tv'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Platinum Tier','linkName':'directv u verse tv'});
		// 		}
		// 	});
		// 	$('#linkTiersPlatTierUvers2').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Platinum Tier','linkName':'directv u verse tv'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Platinum Tier','linkName':'directv u verse tv'});
		// 		}
		// 	});
		// 	$('#blue').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Content','linkName':'Blue Tier'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Content','linkName':'Blue Tier'});
		// 		}
		// 	});
		// 	$('#gold').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Content','linkName':'Gold Tier'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Content','linkName':'Gold Tier'});
		// 		}
		// 	});
		// 	$('#platinum').click(function(){
		// 		if($('.thx-desktop').length){
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Desktop Pg', 'linkPosition':'Content','linkName':'Platinum Tier'});
		// 		} else{
		// 			ddo.pushEvent('linkClick','Link_Click',{'page.pageInfo.friendlyPageName':'myATT Thanks Tiers Mobile Pg', 'linkPosition':'Content','linkName':'Platinum Tier'});
		// 		}
		// 	});
	});


})();
