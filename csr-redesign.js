var CSRAccordionSlider= (function ($) {

    function isMobile(){
        var window_size=$(window).width();
        return window_size<900;
    }

    function isLarge(){
        var window_size=$(window).width();
        return window_size>=1200;
    }

    function _setHeight(component){
        if(!isMobile()){
            var sections=$("section",component);
            var maxHeight=0;
            var padding=40;
            
            sections.each(function(){
                var current_size=$('.section-content',this).height();
                maxHeight=current_size>maxHeight?current_size:maxHeight;
            });
            component.height(maxHeight+(3*padding));
        }else{
            component.height('auto');
        }
        
    }

    function _initAccordionSlider(component){
        var sections=$("section",component);
        if(isMobile()){
//            sections.css("width", "100%");
            component.addClass('vertical');
        }else{
            var count=sections.length;
            //var section_size=55/(count-1);
            //sections.css("width", section_size+"%");
            component.removeClass('vertical');
        }
        _setHeight(component);
       
    }

    function _setBackgrounds(component){
        var sections=$("section",component);
        sections.each(function(){
            var img=$(this).data('background');
            $(this).css("background-image","url("+img+")");
            
        });
    }

    function _setEvents(component){
        $("section",component).on('click',function(e){
            if(!$(e.target).is('button, button *')){
                e.preventDefault();
                $section_opening=$(this).closest("section");
                if(! $section_opening.hasClass("open")){
                    $(".section-content",component).hide();
                    $("section",component).removeClass('open');
                    $section_opening.addClass('open');
                    setTimeout(
                        function(){
                            $(".section-content",$section_opening).fadeIn(500,"swing")
                        },300
                    );
                }
            }
        });
    }

    function _fixSize(){
        $(".csr-accordion-slider").each(function(){
            var component=$(this);
            _initAccordionSlider(component);
        });
    }

    function _init() {
        $(".csr-accordion-slider").each(function(){
            var component=$(this);
            _initAccordionSlider(component);
            _setEvents(component);
            _setBackgrounds(component);
            var firstElement=$("section",component).get(0);
            $(firstElement).trigger('click');
        });
    }

    return {
        init: _init,
        fixSize: _fixSize
        
    }
})(jQuery);

jQuery(window).on('resize', function () {
    CSRAccordionSlider.fixSize();
});


;var CSRBanners = (function ($) {
    function _initBanners(){
        var bannersToFix=$(".col .max_no_padded_content");
        bannersToFix.each(function(){       
            $(this).closest(".col").addClass("max_no_padded_content_wrapper");
        });

    }


    function _init() {
        _initBanners();
    }

    return {
        init: _init,
    }
})(jQuery);;var CSRCardsClassic = (function ($) {
    const $cardsContent     = $('.csr-m-cards_classic');
    const $cardSlider       = $cardsContent.find('.cards-list');
    const $loadMoreButton   = $cardsContent.find('.load-more-slides');
    const showMedium        = $cardSlider.data('columns-md');
    const showDesktop       = $cardSlider.data('columns-dk');
    const loadMoreText      = $loadMoreButton.data('more-text');
    const loadLessText      = $loadMoreButton.data('less-text');
    const cardSettings      = {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        dots: true,
        infinite: true,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 899,
            settings: 'unslick'
        },
        ]
    };
    var $currentSlides = $('.csr-m-cards_classic .cards-list article');
    var isMobile  = true;
    var isTablet  = false;
    var isDesktop = false;
    const $window = $(window);

    function checkBreakpoint() {

        var windowWidth = $window.width();

        if (windowWidth < 900) {

            if (!isMobile) {
                $currentSlides.removeClass('hide');
                isMobile = true;
                isTablet = false;
                isDesktop = false;
                $cardSlider.slick(cardSettings);
            }
        } else if (windowWidth > 1219) {

            if (!isDesktop) {
                isMobile = false;
                isTablet = false;
                isDesktop = true;
                setLoadmoreItems(showDesktop);
            }
        } else {
            if (!isTablet) {
                isMobile = false;
                isTablet = true;
                isDesktop = false;
                setLoadmoreItems(showMedium);
            }
        }
    }

    function setLoadmoreItems(itemsToShow) {
        setTimeout(function () {

            $loadMoreButton.each(function (idx, el) {
                const $currentCardsList = $(el).closest('.csr-m-cards').find('.cards-list');
                const $slides = $currentCardsList.find('article');
                $(".button",this).text(loadMoreText);

                if ($slides.length > itemsToShow) {
                    $(el).removeClass('hide');
                }
            });

        }, 500);
    }

    function _initSlider() {

        $cardSlider.slick(cardSettings);

        checkBreakpoint();

        $window.on('resize', function () {
            checkBreakpoint();
        });
        
        $loadMoreButton.on('click', function() {
            $component=$(this).prev(".cards-list");
            if($component.hasClass("show-all")){
                $component.removeClass('show-all');
                $("button",this).text(loadMoreText);
            }else{
                $component.addClass('show-all');
                $("button",this).text(loadLessText);
            }
            $("button",this).trigger("blur");
        });
    }

    function _init() {
        _initSlider();
    }

    return {
        init: _init,
    }
})(jQuery);
;var CSRCards = (function ($) {
    const $window = $(window);


    function getCardsSettings(colsMb,colsSm,colsMd,colsDk){
        return  {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            dots: true,
            infinite: true,
            mobileFirst: true,
            slidesToShow: colsMb,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: true,
                    centerMode: false,
                    dots: false,
                    infinite: true,
                    slidesToShow: colsSm,
                    nextArrow:
                        '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                        '<i class="icon icon-chevron-right"></i></button>',
                    prevArrow:
                        '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                        '<i class="icon icon-chevron-left"></i></button>'
                }
            },{
                breakpoint: 899,
                settings: {
                    arrows: true,
                    centerMode: false,
                    dots: false,
                    infinite: true,
                    slidesToShow: colsMd,
                    nextArrow:
                        '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                        '<i class="icon icon-chevron-right"></i></button>',
                    prevArrow:
                        '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                        '<i class="icon icon-chevron-left"></i></button>'
                }
    
            }, {
    
                breakpoint: 1220,
                settings: {
                    arrows: true,
                    centerMode: false,
                    dots: false,
                    infinite: true,
                    slidesToShow: colsDk,
                    nextArrow:
                        '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                        '<i class="icon icon-chevron-right"></i></button>',
                    prevArrow:
                        '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                        '<i class="icon icon-chevron-left"></i></button>'
                }
            }]
        };
    }

    function _initSlider() {
        $('.csr-m-cards_slider .cards-list').each(function(){
            $cardSlider=$(this);
            var colsMb=$cardSlider.data('columns-mb');
            var colsSm=$cardSlider.data('columns-sm');
            var colsMd=$cardSlider.data('columns-md');
            var colsDk=$cardSlider.data('columns-dk');
            $(this).slick(getCardsSettings(colsMb,colsSm,colsMd,colsDk));

          

            
        });

        $('.csr-m-cards').each(function(){
            $cardsContent=$(this);
            const card = $cardsContent.find('article');
            const closeArrow = card.find('.close-back-box');
            card.find('.read-more').on('click',
                function (e) {
                    e.preventDefault();
                    const $innerContent = $(this).closest('.inner-content');

                    $innerContent.addClass('active');
                });

            closeArrow.on('click', function (e) {
                e.stopPropagation();
                const $innerContent = $(this).closest('.inner-content');

                $innerContent.removeClass('active');
            });
        });

        $window.on('resize', function () {
           $('.csr-m-cards').find('article').find('.inner-content').removeClass('active');
        });
        
    }

    function _init() {
        _initSlider();
    }

    return {
        init: _init,
    }
})(jQuery);
;var CSRCarouselLogos = (function ($) {
    var $window = $(window);
    var windowWidth = $window.width();

  

    function getSliderSettings(columns){
        return {
            arrows: false,
            infinite: true,
            dots: true,
            mobileFirst: true,
            slidesToShow: 2,
            lazyLoad: 'progressive',
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1220,
                    settings: {
                        arrows: true,
                        dots: false,
                        centerMode: false,
                        infinite: true,
                        slidesToShow: columns,
                        slidesToScroll: columns,
                        nextArrow:
                            '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                            '<i class="icon icon-chevron-right"></i></button>',
                        prevArrow:
                            '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                            '<i class="icon icon-chevron-left"></i></button>'
                    }
                }
            ]
        };
    }

    function setDevice(windowWidth,slider) {
        if (windowWidth < 900) {
            setCenterMode({ padding: '0 60px', slidesToShow: 2 },slider);
            
        } else if (windowWidth < 1220) {
            setCenterMode({ padding: '0 100px', slidesToShow: 3 },slider);
        }
    }

    function setCenterMode(props,slider) {
        slider.slick('slickSetOption', 'slidesToShow', props.slidesToShow, true);
        slider.find('.slick-list').css('padding', props.padding);
    }

    function _initSlider() {
        $('.csr-m-carousel_logos .carousel-list').each(function(){
            var $slider = $(this);
            var columns = $slider.data('columns');

            $slider.on('init', function () {
                $slider.closest('.csr-m-carousel').removeClass('loading');
            });
            
            $slider.not('.slick-initialized').slick(getSliderSettings(columns));

            setDevice(windowWidth,$slider);

            $slider.find('.slick-slide').on('click', function (e) {
                if (windowWidth < 1220) {
                    if (!$(this).hasClass('slick-active')) {
                        const slideIndex = $(this).data('slick-index');
                        const currentSlideIndex = $('.csr-m-carousel_logos').find('.slick-current').data('slick-index');
    
                        if(slideIndex > currentSlideIndex) {
                            $slider.slick('slickNext');
                        }else {
                            $slider.slick('slickPrev');
                        }
                    }
                }
                if ($(this).hasClass('slick-active')) {
                    var href=$(e.target).data("href");
                    if(e.target.tagName=="IMG" && href!==undefined && href!==""){
                        window.open(href,'_blank');
                    }
                }
            });
        });

       

       

        $(window).on('resize',function () {
            $('.csr-m-carousel_logos .carousel-list').each(function(){
                setDevice($window.width(),$(this));
            });
           
        });

      
    }

    function _init() {
        _initSlider();
    }

    return {
        init: _init,
    }
})(jQuery);
;var CSRCarouselStandard = (function ($) {
    var isMobile = false;
    var isDesktop = false;
    var isTablet = false;
    var $window = $(window);
    var windowWidth = $window.width();

    function setDevice(windowWidth) {

        if (windowWidth < 900) {

            if (!isMobile) {
                isMobile = true;
                isTablet = false;
                isDesktop = false;
            }
        } else if (windowWidth > 1219) {

            if (!isDesktop) {
                isMobile = false;
                isTablet = false;
                isDesktop = true;
            }
        } else {

            if (!isTablet) {
                isMobile = false;
                isTablet = true;
                isDesktop = false;
            }
        }
    }

    function _initSlider() {
        var $carouselSliders = $('.csr-m-carousel-standard ul');
        const $videoModal = $('.csr-modal__video');
        var videoType = '';
        var modalLink = {};
        var isSwipe = false;

        $carouselSliders.each(function(){
          var $carouselSlider=$(this);
          var columns  = $carouselSlider.data('columns');
          

          var sliderSettings = {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '40px',
              infinite: true,
              mobileFirst: true,
              slidesToShow: 1,
              lazyLoad: 'progressive',
              responsive: [
                  {
                      breakpoint: 900,
                      settings: {
                          arrows: true,
                          centerMode: false,
                          dots: false,
                          infinite: true,
                          slidesToShow: 2,
                          nextArrow:
                              '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                              '<i class="icon icon-chevron-right"></i></button>',
                          prevArrow:
                              '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                              '<i class="icon icon-chevron-left"></i></button>'
                      }
                  },
                  {
                      breakpoint: 1220,
                      settings: {
                          arrows: true,
                          dots: false,
                          centerMode: false,
                          infinite: true,
                          slidesToShow: columns,
                          nextArrow:
                              '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                              '<i class="icon icon-chevron-right"></i></button>',
                          prevArrow:
                              '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                              '<i class="icon icon-chevron-left"></i></button>'
                      }
                  }
              ]
          };

          
          $carouselSlider.on('init', function (event, slick) {
              $carouselSlider.closest('.csr-m-carousel').removeClass('loading');
          });
          
          $carouselSlider.slick(sliderSettings);

          $carouselSlider.on('swipe', function(){
              isSwipe = true;
          });

          $carouselSlider.on('afterChange', function(){
              isSwipe = false;
          });
        });
        

        

        setDevice(windowWidth);

        $(window).on('resize',function () {
            setDevice($window.width());
        });

        

        $('.csr-m-carousel-standard_images .slick-slide').on('click', function(e){
            e.preventDefault();
            const $this = $(this);

            if (!isSwipe) {

                if (!$this.hasClass('slick-active')) {
                    
                    if (isMobile) {
                        const slideIndex = $this.data('slick-index');
                        const carousel = $this.closest('.csr-m-carousel-standard');
                        const slider = carousel.find('.slick-initialized');

                        setTimeout(function () {
                            slider.slick('slickGoTo', slideIndex);
                        }, 100);
                    }
                }
            }
        });

        $('.csr-m-carousel-standard_video .modal-link').on('click', function(e){
            e.preventDefault();
            const $slide = $(this).closest('.slick-slide');

            if (!isSwipe) {

                if ($slide.hasClass('slick-active')) {
                    modalLink = $(this);
                    $('#csr-video-modal').foundation('open');
                }else {

                    if (isMobile) {
                        const slideIndex = $slide.data('slick-index');
                        const carousel = $slide.closest('.csr-m-carousel-standard');
                        const slider = carousel.find('.slick-initialized');

                        setTimeout(function () {
                            slider.slick('slickGoTo', slideIndex);
                        }, 100);
                    }
                }
            }
        });

        $('.csr-modal__video').on('closeme.zf.reveal', function () {
            
            videoType = modalLink.data('video-type');
            const path = modalLink.data('video-path');

            if (videoType == "local") {
                const localVideo = $videoModal.find('.csr-video');
                const currentSource = localVideo.find('source');

                currentSource.each(function () {
                    const $this = $(this).get(0);
                    const type = $this.type.replace('video/', '');
                    const pathWithoutFormat = path.replace('.mp4', '');

                    $(this)[0].src = pathWithoutFormat + '.' + type;
                });

                localVideo.get(0).load();
                localVideo.removeClass('hide');
            } else {
                const iframeVideo = $videoModal.find('.csr-iframe_video');
                iframeVideo.attr('src', path).removeClass('hide');
            }  
        });

        $('.csr-modal__video').on('closed.zf.reveal', function () {
            var modal = $(this);
            
            if(videoType == 'local') {
                const video = $('.csr-video', modal);
                const currentSource = video.find('source');

                video.get(0).pause();
                video.addClass('hide');
                currentSource.each(function(){
                    $(this)[0].src = '';
                });
            }else {
                $('iframe', modal).addClass('hide');
                $('iframe', modal).attr('src', '');
            }
        });
    }

    function _init() {
        _initSlider();
    }

    return {
        init: _init,
    }
})(jQuery);
;var CSRFootnotes = (function ($) {
    function _initFootnotes(){
        var bottom_references=$("<div class='footnote-bottom-reference'></div>");
        $(".footnote.top-reference").each(function(){
            var note=$(this);
            var dialog=$(".footnote-dialog",this);
            var index=$(".footnote-index",this);
            var index_number=$(index).text().trim();
            var reference_id="reference-note-"+index_number;
            var top_content=$(".top-content",this).html().trim();
            var reference_content=$(".content",dialog).clone().html().trim();//children().remove().end().text().trim();

            $(index).attr("data-reference",reference_id);
            var reference=$("<div class='footnote bottom-reference redesign-csr-component' data-reference='"+reference_id+"'></div>");
            var footnote_content=$("<div class='footnote-content'></div>");
            var footnote_reference=$("<div class='footnote-reference' ></div>");
            $(footnote_reference).append("<div class='footnote-index' ><p class='small'>"+reference_content+"</p></div>");
            var footnote_dialog=$("<div class='footnote-dialog' ></div>");
            $(footnote_dialog).append("<a href='#' class='go-to-top-arrow'><i class='icon icon-arrow-link'></i></a>");
            $(footnote_dialog).append("<p class='content small'>"+top_content+" <sup>"+index_number+"</sup></p>");
            $(footnote_dialog).append("<a href='#' class='go-to-bottom'><i class='icon icon-chevron-up'></i></a>");
            $(footnote_dialog).append("<a href='#' class='close'><i class='icon icon-x'></i></a>");

            $(footnote_reference).append(footnote_dialog);
            $(footnote_content).append(footnote_reference);
            $(reference).append(footnote_content);
            $(bottom_references).append(reference);
            $(bottom_references).addClass('has-content');
            

            $(index).on('click',function(e){
                e.preventDefault();
                e.stopPropagation();
                if(! $(note).hasClass('open')){
                    $('.footnote').removeClass("open");
                    $(note).addClass('open');
                }else{
                    $(note).removeClass('open');
                }
            });

            $(".close",dialog).on('click',function(e){
                e.preventDefault();
                $(note).removeClass('open');
            });

            $(".go-to-bottom, .go-to-bottom-arrow",dialog).on('click', function(e){
                e.preventDefault();
                $(".close",dialog).trigger('click');
                $('html, body').animate({
                    scrollTop: $(".bottom-reference[data-reference='"+reference_id+"']",bottom_references).offset().top-200
                }, 1000);
            }); 

            $(".footnote-index",reference).on('click',function(e){
               if(! $(e.target).is('a, a *')){
                    e.preventDefault();
                    e.stopPropagation();
                    if(! $(reference).hasClass('open')){
                        $('.footnote').removeClass("open");
                        $(reference).addClass('open');
                    }else{
                        $(reference).removeClass('open');
                    }
               }
            });

            $(".close",reference).on('click',function(e){
                e.preventDefault();
                $(reference).removeClass('open');
            });

            $(".go-to-bottom, .go-to-top-arrow",reference).on('click', function(e){
                e.preventDefault();
                $(reference).removeClass('open');
                $('html, body').animate({
                    scrollTop: $(".footnote-index[data-reference='"+reference_id+"']",note).offset().top-400
                }, 1000);
            });

        });
        
        var elementToAppend=".navFooter";
        if($(elementToAppend).length==0){
            elementToAppend=".csr-footer_breadcrumb";
        }
        $(bottom_references).insertBefore( elementToAppend );
    }

    function _autoCloseFootnotesDialogs(event){
        var note;
        var notePosc=0;
        $(window).on('scroll', function(e) {
            note=$('.footnote.open');
            if($(note).height()>0){
                notePosc=$(note).offset().top;
                windowPosc=$(window).scrollTop();
                if(windowPosc > notePosc || windowPosc <= notePosc-$(window).height() ){
                    $(note).removeClass("open");

                }
            }
        });

        $(document).on('click', function(e) {
            $('.footnote.open').removeClass('open');
        });
    }
    function _init() {
        _initFootnotes();
        _autoCloseFootnotesDialogs();
        
    }

    return {
        init: _init,
        
    }
})(jQuery);;var CSRHero = (function ($) {
    function _initVideo(){
        var video=$(".csr-video-hero-banner video");
        if(video.length>0){
            var media = $(video).get(0)
            var playPromise = media.play();
            if (playPromise !== null && playPromise !== undefined){
                playPromise.catch(function(){ media.play(); })
            }
        }
    }

    function _extraConfigs(){
        $(".csr-solid-hero-banner .csr-dropdown-component").each(function(){
            $(this).closest(".csr-solid-hero-banner").addClass("csr-solid-hero-banner--dropdown")
        });
    }


    function _init() {
        _initVideo();
        _extraConfigs();
    }

    return {
        init: _init,
    }
})(jQuery);;var CSRModals = (function ($) {
    function _openCallback(){

        $(document).on('open.zf.reveal', '[data-reveal]', function () {
            $(".csr-content").addClass("frosted-glass-content");
        });
    }

    function _setBackgrounds(){
        var sections=$(".photo-modal .photo");
        sections.each(function(){
            var img=$("img",this).attr('src');
            $(this).css("background-image","url("+img+")");
            $("img",this).css("visibility","hidden");
        });
    }

    function _closeCallback(){
        $(document).on('closed.zf.reveal', '[data-reveal]', function () {
            $(".csr-content").removeClass("frosted-glass-content");
        });
    }
    

    function _initCSRModals(){
        _setBackgrounds();
        _openCallback();
        _closeCallback();
    }

    function _init() {
        _initCSRModals();
    }

    return {
        init: _init,
        
    }
})(jQuery);


;var CSRNavigation = (function ($) {
    const $body             = $('.csr-page');
    const $navContainer     = $('.csr-m-nav');
    const $window           = $(window);
    const windowWidth       = $window.width();
    
    function _navEvents(off) {
        const $menu             = $navContainer.find('.nav-list');
        const $navTitle         = $navContainer.find('h2');
        const $listItems        = $menu.find('li');
        const $menuItems        = $menu.find('.menu__item');
        const $submenuArrows    = $menuItems.find('.dynamic-arrows');
        const $firstmenuItem    = $menu.find('.menu__item').first();
        const $submenus         = $menuItems.find('ul');
        const $submenuTrigger    = $menuItems.find('.icons-contianer');
        var currentItemIndex    = -1;
        if(!off) {
            $navTitle.on('click', function (e) {
                e.stopPropagation();
                const $this = $(this);
                const $navIcon = $this.find('.icon');
                
                $navIcon.toggleClass('hide');
                $listItems.removeClass('active');

                //REQUEST: keep first menu_item active
                if(!$menu.hasClass('active')) {
                    setTimeout(function(){
                        $firstmenuItem.find('.menu__link').trigger('click');
                    }, 100);
                }

                $submenus.hide();
                $menu.slideToggle().toggleClass('active');
                $body.toggleClass('sticky-nav-disabled');
                $body.removeClass('sub-menu-open');
                $navContainer.toggleClass('active');
                currentItemIndex = -1;
            });
    
            $menuItems.on('click', '> .menu__link', function (e) {
                
                e.stopPropagation();
                const $this         = $(this);
                const $thisParent   = $(this).closest('li');
                const $thisParentIndex = $thisParent.index();
                const siblings = $thisParent.siblings();
                const siblingsList  = siblings.find('ul');
                const currentList = $thisParent.find('> ul');

                if(!$thisParent.hasClass("active")){
                    e.preventDefault();
                     //close sub-menu__item--level-2
                    if ($thisParent.hasClass('menu__item') && $thisParent.hasClass('active')) {
                        $thisParent.find('li.active').removeClass('active').find('ul').hide();
                    }
                    
                    $thisParent.toggleClass('active');
                    siblings.removeClass('active');
                    currentList.slideToggle();
                    siblingsList.slideUp();

                    $body.addClass('sub-menu-open');
                    
                    if ($thisParentIndex === currentItemIndex) {
                        $body.removeClass('sub-menu-open');
                        currentItemIndex = -1;
                    }else {
                        currentItemIndex = $thisParentIndex;
                    }
                }
               
    
            });

            $submenuArrows.on('click', function(e) {
                e.stopPropagation();
                const $this         = $(this);
                const $thisParent   = $this.closest('li');
                const siblings      = $thisParent.siblings();
                const siblingsList  = siblings.find('ul');
                const currentList   = $thisParent.find('> ul');

                $thisParent.toggleClass('active');
                siblings.removeClass('active');
                currentList.slideToggle();
                siblingsList.slideUp();

            })
        }else {
            $navTitle.add($menuItems).add($submenuArrows).off('click');
            $submenuTrigger.off('click');
            $submenuTrigger.on('click', function (e) {
                e.stopPropagation();
                var $toOpen= $(this).parent().find(".sub-menu__item--level-2");
                if(!$toOpen.hasClass("open")){
                    reset3rdLevelMenus();
                }
                $(".large-visible",this).toggleClass("icon-plus");
                $(".large-visible",this).toggleClass("icon-minus");
                $toOpen.toggleClass("open");
                $toOpen.parent().toggleClass("open");
            });
            
            $menuItems.on("mouseenter",function(){
                reset3rdLevelMenus();
            });
        }
        
    }

    function reset3rdLevelMenus(){
        $(".sub-menu__item.open").each(function(){
            var $toOpen= $(this).parent().find(".sub-menu__item--level-2");
            $(".large-visible",this).addClass("icon-plus");
            $(".large-visible",this).removeClass("icon-minus");
            $toOpen.removeClass("open");
        });
        $(".sub-menu__item").removeClass("open");
    }

    function _menuPosc(){
        var screenSize=$window.width();
        if (screenSize >= 1220) {
            var $level2Menu =$navContainer.find('.sub-menu');
            $level2Menu.each(function(){
                var $this=$(this);
                $this.width('auto');
                var width=$this.width()+35;
                $this.width(width);
                var parent=$this.closest(".menu__item");
                var left=parent.offset().left;
                var menuPosc=left+width;
                if(screenSize < menuPosc){
                    $this.addClass("open-left");
                }else{
                    $this.removeClass("open-left");
                }
            });

            $(".sub-menu__item.has-menu").each(function(){
                $(".icons-contianer",this).height($(".menu__link",this).height());
            });

        }else{
            $navContainer.find('.sub-menu').removeClass("open-left");
            $navContainer.find('.sub-menu').width("100%");
            $(".sub-menu__item.has-menu").each(function(){
                $(".icons-contianer",this).height('auto');
            });
           
        }
    }

    function _goToInternal(location){
        var element=$(location);
        var isMobile=true;
        if (windowWidth >= 1220) {
            isMobile = false;
        }
        if(element.length>0){
            var navH=$("#att-about-header .att-about-header__wrap").height()+$(".csr-m-nav").height();
            var offset=isMobile?0:navH;
            $('html, body').animate({
                scrollTop: element.offset().top-offset
            }, 1000);
        }
    }

    function _initNavigation() {
        const $nav      = $('.nav-list');
        const $navList  = $nav.find('ul');
        var isMobile    = true;

        var hash = window.location.hash;
        if (hash && !hash.match(/\d+/g)) {//no-tabs hash
            _goToInternal(hash);
        }

        $navContainer.show();

        if (windowWidth >= 1220) {
            isMobile = false;
        }

        if (isMobile) {
            _navEvents();
        }else{
             _navEvents(true);
        }

        _menuPosc();

        $('#att-about-header .att-about-header__wrap').append($navContainer);

        $window.on('resize', function () {
            var windowWidth = $window.width();
      
            if (windowWidth >= 1220) {
                if (isMobile) {
                    isMobile    = false;
                    $nav.find('li').removeClass('active');
                    $nav.removeClass('active');
                    $navList.show();
                    $body.removeClass('sticky-nav-disabled sub-menu-open');
                    $navContainer.removeClass('is-fixed');
                    _navEvents(true);
                }
            } else {
                if (!isMobile) {
                    $nav.hide();
                    $navList.not('.csr-m-nav_menu').hide();
                    isMobile = true;
                    _navEvents();
                }

                if (windowWidth > 768) {
                    $navContainer.removeClass('is-fixed');
                }
            }
             _menuPosc();
        });

        $window.on('scroll', function () {
            if($window.width() < 768) {
                // setScrollMobile();
            }            
        });
        

        function setScrollMobile(firstLoad) {
            const attHeader = $('#att-about-header .att-about-header__wrap');
            const windowTop = $window.scrollTop();
            var attHeaderHeight = attHeader.outerHeight();

            if(windowTop >= attHeaderHeight) {
                $navContainer.addClass('is-fixed');
            }else {
                $navContainer.removeClass('is-fixed');
            }
        }
    }

    function _init() {
        _initNavigation();
        $(window).trigger('resize');
    }

    return {
        init: _init,
    }
})(jQuery);
;var CSRNewsRoom = (function ($) {

  function _appendNews(posts,element){
    var rowCount=0;
    var itemsPerRow=3;
    var totalItems=posts.length;
    var iterator=0;
    var row;
    var rowWrapper;
    var items= "";

    posts.forEach(function(entry){
      if(typeof row === 'undefined'){
        row=$("<div class='row row--equal-heights'></div>");
        rowWrapper=$("<div class='row__wrap'></div>");
      }
      items += '<div class="col col-4">'+
	    '<div class="component">'+
	    '	<div class="csr-featured-item">'+
	    '		<div class="item__media">'+
	    '			<div class="item__img" data-placeholder="false">'+
	    '				<a href="'+entry.url+'" aria-label="'+entry.title+'">'+
	    '					<img src="'+entry.image+'" alt="'+entry.alttext+'">'+
	    '				</a>'+
	    '			</div>'+
	    '		</div>'+
	    '		<div class="item__content">'+
	    '			<div class="content__wrap">'+
	    '				<h3 class="item__title">'+entry.title+'</h3>'+
	    '				<div class="item__description">'+
	    '					<p>'+entry.excerpt+'</p>'+
	    '				</div>'+
	    '				<div class="item__cta">'+
	    '					<a class="cta--link" aria-label="Read More" href="'+entry.url+'">Read More</a>'+
	    '				</div>'+
	    '			</div>'+
	    '		</div>'+
	    '	</div>'+
	    '</div>'+
	    '</div>';
      rowCount++;
      iterator++

      if(rowCount==itemsPerRow || totalItems==iterator ){
        rowWrapper.html(items);
        row.append(rowWrapper);
        $(".csr-stories__entries",element).append(row);
        row = rowWrapper = undefined;
        items="";
        rowCount=0;
      }
    })
  }

	function _getNews(tag,page,endpoint,element){
		$.ajax({
	      type: 'GET',    
        url:endpoint+"?page="+page+"&tag="+tag,
	      async: true,
        success: function(data){
          var postObj= JSON.parse(data);
          var postArr = postObj.posts;
          var info= postObj.info;
          
          _appendNews(postArr,element);
         
	        if(info['view-more']){
            $(".csr-stories__cta",element).show();
            $(element).attr('data-page', Number(page)+1);
          }else{
            $(".csr-stories__cta",element).hide();
          }
        }
    });
  }
  
  function _loadMore(element){
      var tag = $(element).attr("data-tag");
	  var page= $(element).attr("data-page");
	  var endpoint= $(element).attr("data-endpoint");
      _getNews(tag,page,endpoint,element);
  }

	function _initCSRNewsRoom(){
		$('.csr-featured-stories').each(function(){
      var component=this;
      _loadMore(component);

      $(".cta--button", this).on("click",function(e){
        e.preventDefault();
        _loadMore(component);
      });
		})
	}

	function _init() {
        _initCSRNewsRoom();
    }

    return {
        init: _init,
        
    }
})(jQuery);

/*<script>
$(document).ready(function(){
	var tag = "SNRtags:CSR\u002DVolunteering_Philanthropy";

	var id ="news\u002D1052663544";
	
	var viewMoreId ="#view-more_news\u002D1052663544";
    
     httpGet(tag, id);
	$(document).on('click', viewMoreId,function(){

        httpGet(tag,id);
    });

});

     var myCol = '';
 var rowHightDiv='';
 var mainPage='';
 var page = 1;

function httpGet(tag, id)
{
	$.ajax({
	     type: 'GET',    
	     url:"/ecms/attus/csr/newsroom?page="+page+"&tag="+tag,
	     async: true,
	         success: function(msg){
	
	var postObj= JSON.parse(msg);
	var postArr = postObj.posts;
	
	var info= postObj.info;
	var isLoadMore = info['view-more'];
	
	   if(!isLoadMore)
	 	$(".cta--button").hide();
	
	for(var i=0;i<postArr.length;i++){
	     myCol = myCol + '<div class="col col-4">'+
	    '<div class="component">'+
	    '	<div class="csr-featured-item">'+
	    '		<div class="item__media">'+
	    '			<div class="item__img" data-placeholder="false">'+
	    '				<a href="'+postArr[i].url+'" aria-label="'+postArr[i].title+'">'+
	    '					<img src="'+postArr[i].image+'" alt="'+postArr[i].alttext+'">'+
	    '				</a>'+
	    '			</div>'+
	    '		</div>'+
	    '		<div class="item__content">'+
	    '			<div class="content__wrap">'+
	    '				<h3 class="item__title">'+postArr[i].title+'</h3>'+
	    '				<div class="item__description">'+
	    '					<p>'+postArr[i].excerpt+'</p>'+
	    '				</div>'+
	    '				<div class="item__cta">'+
	    '					<a class="cta--link" aria-label="Read More" href="'+postArr[i].url+'">Read More</a>'+
	    '				</div>'+
	    '			</div>'+
	    '		</div>'+
	    '	</div>'+
	    '</div>'+
	    '</div>';
	
	    if((i+1)%3==0 || i==postArr.length-1)
	    {
	        rowHightDiv = rowHightDiv +
	        '<div class="row row--equal-heights">'+
	        '<div class="row__wrap">'+
				myCol+
	         '</div>'+
	         '</div>';

	        myCol = '';
	    }
	 }
	    mainPage= '<div class="page-'+page+'">'+
	        rowHightDiv+


	            '</div>';
	
	    $("#"+id).find('#csr-featured-stories-news').append(mainPage);
	    rowHightDiv = '';
	    mainPage = '';
	    page = page+1;
	}
	
	});
}

</script>*/;var CSRPagination = (function ($) {
    function _isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function _moveControl(touch_start,xPos,left_limit,right_limit,control,pages,control_size,isMobile){
        var move=false;
     
        if(xPos>touch_start){//to right 
            control.addClass("right-control");
            
            if(xPos<=right_limit){
                move=true;
                if(isMobile){
                    control.css('left', xPos-(control_size/2 ));
                    pages.width(xPos-control_size/2)
                }else{
                    control.animate({
                        'left': xPos
                    },
                    200, 'linear');
                    pages.animate({
                        'width': xPos-control_size/2
                    },
                    200, 'linear');
                    
                }
            }
            
        }else{//to left
            control.removeClass("ending");
            control.removeClass("right-control");
            if(xPos>=left_limit){
                move=true;
                if(isMobile){
                    control.css( 'left', xPos-(control_size/2));
                    pages.width(xPos-(control_size/2));
                }else{
                    control.animate({
                        'left': xPos-control_size,
                    },
                    500, 'linear');
                    pages.animate({
                        'width': xPos-control_size-10.
                    },
                    500, 'linear');
                }
            }
        
        }

        if(xPos >= right_limit-(control_size/2)){
            control.addClass("ending");
        }else{
            control.removeClass("ending");
        }
        if(xPos >= right_limit-control_size){
            pages.closest(".pagination").addClass("opening");
        }else{
            pages.closest(".pagination").removeClass("opening");
        }
        
        if(move){
            touch_start=xPos;
        }
        return touch_start;
    }

    function _initPagination(isFirstLoad){
        
        if($(window).width()<900){
            $('.pagination').each(function(){
                var $component= $(this);
                var $control=$(".control",$component);
                var $pages=$(".pages",$component);
                var control_size=$control.width();

                var limit_gap=5;
                var touch_start=$control.css("left");
                var initPosc=0;
                $pages.width("auto");
                $component.css('max-width',$pages.width()+(2*control_size));
                var parent_size=$component.width();

                if(isFirstLoad){
                    $control.css('left',parent_size-control_size-limit_gap);
                    $control.addClass('right-control');
                    _preview($component);
                    
                }else{ //resize
                    $control.off('touchmove');
                    $control.off('click');
                    $control.off('touchstart');
                    $control.off('touchend');
                    $control.clearQueue();
                    $pages.clearQueue();
                    _closeAnimation($component);
                }

                $control.on('touchmove', function(e) {
                    e.preventDefault();
                    var  xPos = e.originalEvent.touches[0].pageX;
                    var left_limit=(control_size/2)+limit_gap;
                    var right_limit=parent_size-(control_size/2)-limit_gap;
                    if(xPos > left_limit+10 && xPos < right_limit-10 ){
                        $control.addClass("ball-control");
                    }else{
                        $control.removeClass("ball-control");
                    }
                    touch_start=_moveControl(touch_start,xPos,left_limit,right_limit,$control,$pages,control_size,true);
                });

                $control.on('click touchstart', function(e) {
                    if(e.type=="click") {
                        var left_limit=control_size+limit_gap;
                        var right_limit=parent_size-control_size-limit_gap;

                        var start_point=left_limit;
                        var end_point=right_limit;
                        
                        if($control.hasClass("right-control")){
                            start_point=right_limit;
                            end_point=left_limit;
                        }
                       
                        _moveControl(start_point,end_point,left_limit,right_limit,$control,$pages,control_size,false);           
                    }else{
                        initPosc=e.originalEvent.touches[0].pageX;
                    }
                });

                $control.on('touchend', function(e) {
                    e.preventDefault();
                    $control.removeClass("ball-control");
                    var endPosc=e.originalEvent.changedTouches[0].pageX;
                    var left_limit=control_size+limit_gap;
                    var right_limit=parent_size-control_size-limit_gap;
                    if(initPosc>endPosc){ //to left
                        if(endPosc <= parent_size-(parent_size/3.5)){
                            _moveControl(initPosc,left_limit,left_limit,right_limit,$control,$pages,control_size,false);
                        }
                    }else{ // to right
                        if(endPosc > parent_size/3.5){
                            _moveControl(initPosc,right_limit,left_limit,right_limit,$control,$pages,control_size,false);
                        }
                    }
                    
                });
                
            
            });
            
        }else{
            $('.quick-links').off("click");
            $('.hidden-pages .hidden-controller').off("click");

            $('.quick-links').on('click', function () {
                $(this).toggleClass('open');
            });
    
            $('.hidden-pages .hidden-controller').on('click', function () {
                $(this).closest('.hidden-pages').toggleClass('open');
            });  
        }
    }

    function _closeAnimation(component){
        var $control=$(".control",component);
        var $pages=$(".pages",component);
        var parent_size=component.width();
        
        var control_size=$control.width();
        var left_limit=5+control_size;
        var right_limit=parent_size-control_size-5;
        var start_point=right_limit;
        var end_point=left_limit;
        _moveControl(start_point,end_point,left_limit,right_limit,$control,$pages,control_size,false);  
    }

    function _preview(component){
        if (!component.hasClass("previewed") && _isScrolledIntoView(component)) {
            setTimeout(function(){
                _closeAnimation(component);
            },500);
            component.addClass("previewed");
        }
    }

    function _init() {
        var viewport=$(window).width();
        $( window ).on('resize', function() {
            var current_size=$(window).width();
            if(current_size!=viewport){
                viewport=current_size;
                _initPagination(false);
            }
        });

        $(window).on('scroll', function() {
            var viewport=$(window).width();
            $(".pagination").each(function() {
                $component=$(this);
                if(viewport<900){
                    _preview($component);
                }
            });
        });

        _initPagination(true);
    }

    return {
        init: _init,
    }
})(jQuery);


;var CSRPrint = (function ($) {
    function _addEvents(){
       $(".button.print").on('click',function(){
            window.print();
       });
    }


    function _init() {
        _addEvents();
    }

    return {
        init: _init,
    }
})(jQuery);;var CSRSelects = (function ($) {
    function _fixOptionsPosc(container) {
        var topH = $('.csr-custom-select-controller', container).outerHeight();
        $('.csr-custom-select-options', container).css('top', topH - 1);
    }

    function _fixElementPosc(element){

        if ($(element).hasClass("keep-center")){
            if($(element).hasClass("open")){
                var elementH=$(".csr-custom-select-controller",element).outerHeight();
                var containerH=$(element).parent().height();
                var top= (containerH/2)-(elementH/2);
                $(element).css('top',top);
            }else{
                $(element).css('top','');
            }
        }
    }

    function _initCSRSelect() {
        $('select.csr-select').each(function () {
            var isMultiple = $(this).attr('multiple') !== undefined;
            var isDark = $(this).hasClass('input-dark');
            var placeholder = $(this).data('placeholder');
            //add component container
            $(this).wrap('<div class="csr-custom-select"></div>');
            var container = $(this).closest('.csr-custom-select');
            //define controller
            var controller = $('<div class="csr-custom-select-controller"><span class="current-value">' + placeholder + '</span><i class="icon"></i></div>');
            //define options container
            var options = $('<ul class="csr-custom-select-options"></ul>');
            //append elements to container
            $(container).append(controller).append(options);
            //add class to container if dark theme needed
            if (isDark) {
                $(container).addClass('input-dark');
            }
            //add class to container if is a multiple select
            if (isMultiple) {
                $(container).addClass('input-multiple');
            }
            //set the options
            $('option', this).each(function (i) {
                $(this).attr('data-index', 'opt-' + i);
                var href=$(this).data("href");
                var data_href="";
                if(href){
                    data_href="data-href='"+href+"'";
                }
                $('.csr-custom-select-options', container).append('<li '+data_href+' data-index="opt-' + i + '"><span>' + $(this).text() + '</span></li>');
            });

            //open-close options event
            $('.csr-custom-select-controller', container).on('click', function () {
                if ($(container).hasClass('open')) {
                    $(container).removeClass('open');
                    _fixElementPosc(container);
                } else {
                    var currentOpen=$('.csr-custom-select.open');
                    currentOpen.removeClass('open');
                    _fixElementPosc(currentOpen);
                    $(container).addClass('open');
                    _fixElementPosc(container);
                    _fixOptionsPosc(container);
                }
            });

            //select option event
            $('.csr-custom-select-options li', container).on('click', function () {
                var index = $(this).data('index');
                var option = $('option[data-index="' + index + '"]', container);
                var href= $(this).data('href');
                if(!href){
                    if ($(this).hasClass('selected')) { //remove option from selection
                        $(option).removeAttr( "selected" );
                        $(this).removeClass('selected');
                    } else { //add option to selection
                        if (!isMultiple) {
                            $('option[selected="selected"]', container).removeAttr( "selected" );
                            $('.csr-custom-select-options li', container).removeClass('selected');
                            $(container).removeClass('open');
                            _fixElementPosc(container);
                        }
                        $(option).attr('selected', 'selected');
                        $(this).addClass('selected');
                    }
                    //set text as selection
                    var val = [];
                    $('option[selected="selected"]', container).each(function () {
                        val.push($(this).text());
                    });
                    if (val.length > 0) {
                        $('.current-value', container).text(val.join(', '));
                        $('.current-value').addClass('has-options');
                    } else {
                        $('.current-value', container).text(placeholder);
                        $('.current-value').removeClass('has-options');
                    }
                }else{
                    window.open($(this).data("href"), '_blank'); 
                    $(container).removeClass('open');
                    _fixElementPosc(container);
                }


                _fixOptionsPosc(container);
            })
        });
    }

    function _initCSRSelectComponent(){
        $(".csr-dropdown-component .csr-custom-select").each(function(){
            $(this).addClass("keep-center");
        })
        $(window).on("resize",function(){
            $(".csr-dropdown-component .csr-custom-select").removeClass("open");
            $(".csr-dropdown-component .csr-custom-select").css("top","");
        });

        $(document).on("click",function(e){
            if($(e.target).closest(".csr-custom-select").length==0){
                $(".csr-custom-select").removeClass("open");
                $(".csr-dropdown-component .csr-custom-select").css("top","");
            }
        });

        
    }

    function _init() {
        _initCSRSelect();
        _initCSRSelectComponent();
    }

    return {
        init: _init,
        fixOptionsPosc: _fixOptionsPosc
    }
})(jQuery);

$(window).on('resize', function () {
    $('.csr-custom-select.open').each(function () {
        CSRSelects.fixOptionsPosc(this);
    })
});
;var CSRTables = (function ($) {

    function _initTables(){
        $(".csr-m-tables_data").each(function(){
            var table=$(this);
            var firstRow=table.find(".csr-table_row").get(0);
            var totalCols=$(firstRow).find(".csr-table_cell").length;
            var initialColsToShow=4; //counting first col
           
            //var headerCells= table.find(".csr-table_header-cell");
            var nav= table.find(".csr-table-title");
            var tablesCount=table.find(".csr-table").length;

            if(totalCols  > initialColsToShow){
                table.find(".csr-table").addClass("csr-table-scrollable right");
                //var totalCols=headerCells.length/tablesCount-1;
                nav.find(".total-cols").text(totalCols);
                nav.find(".current-col").text(initialColsToShow);
                var colSize=table.find(".csr-cell-value").outerWidth();

                table.find(".next-col-arrow").on("click",function(e){
                    e.preventDefault();
                    var currentCol=parseInt(nav.find(".current-col").text());
                    var totalCols=$(firstRow).find(".csr-table_cell").length;
                    var leftPosc=-colSize*(currentCol-initialColsToShow+1);
                    table.find(".csr-cell-value").css("left", leftPosc);
                   
                    table.find(".csr-table_row").each(function(){
                        $(this).find(".csr-table_header-cell").not(":first").css("left", leftPosc);
                    }) 
                    nav.find(".current-col").text(currentCol+1);
                    table.find(".prev-col-arrow").removeClass("disable");
                    if(currentCol+1==totalCols){
                        $(this).addClass("disable");
                        table.find(".csr-table").removeClass("right");
                        table.find(".csr-table").addClass("left");
                    }else{
                        table.find(".csr-table").addClass("right");
                        table.find(".csr-table").addClass("left");
                    }
                });

                table.find(".prev-col-arrow").on("click",function(e){
                    e.preventDefault();
                    var currentCol=parseInt(nav.find(".current-col").text());
                    var totalCols=$(firstRow).find(".csr-table_cell").length;
                    var leftPosc=-colSize*(currentCol-initialColsToShow-1);
                    table.find(".csr-cell-value").css("left",leftPosc );
                    table.find(".csr-table_row").each(function(){
                        $(this).find(".csr-table_header-cell").not(":first").css("left", leftPosc);
                    }) 
                    
                    nav.find(".current-col").text(currentCol-1);
                    table.find(".next-col-arrow").removeClass("disable");
                    if(currentCol-1==initialColsToShow){
                        $(this).addClass("disable");
                        table.find(".csr-table").addClass("right");
                        table.find(".csr-table").removeClass("left");
                    }else{
                        table.find(".csr-table").addClass("right");
                        table.find(".csr-table").addClass("left");
                    }
                });
            }else{
                table.find(".csr-table-title-nav").hide();
            }
        });
    }
    function _init() {
        _initTables();
    }

    return {
        init: _init,
        
    }
})(jQuery);;var CSRIframe = (function ($) {

    function _loadFrame(){
        var size= $(window).width();
        $(".csr-iframe.ceros-iframe").each(function(){
            var src="";
            var container=null;
            if(size>=1040){
                container=$(".csr-iframe-container",this);
                src=container.data("frame");
            }else{
                container=$(".csr-iframe-container-mobile",this);
                src=container.data("frame");
            }
            
            var frame=$("iframe",container);
            var current_src=$(frame).attr("src");
            if(current_src == undefined || current_src.length==0){
                $(frame).attr("src",src);
            }
        });
        
        
        
    }

    function _initCSRIframe(first_load){
        _loadFrame();
        if(first_load){
            $.getScript('https://view.ceros.com/scroll-proxy.min.js');
        }
    }

    function _init(first_load) {
        _initCSRIframe(first_load);
    }

    return {
        init: _init,
        
    }
})(jQuery);


jQuery(window).on('resize', function () {
    CSRIframe.init(false);
});


;var CSRLayout = (function ($) {

    function _initCSRLayout(){
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            $('.row--equal-heights img').each(function(){
                var img = $(this),
                    source = 'url(' + img.attr('src') + ')',
                    parent = img.parent(),
                    element = jQuery('<div></div>');
        
                parent.append(element);
                element.css({
                    'height'                : img.parent().css('height'),
                    'background-size'       : 'cover',
                    'background-repeat'     : 'no-repeat',
                    'background-position'   : '50% 20%',
                    'background-image'      : source
                });
                img.hide();
            });
        }

        $(".row--gutter-borders .col").each(function(){
            if($(this).children().hasClass("region")){
                $(this).addClass("gutter-padded-content");
            }
        });

        $(".imageWithText").closest(".region").addClass("fill-region-image")
    }

    function _init() {
        _initCSRLayout();
    }

    return {
        init: _init,
        
    }
})(jQuery);


;var CSRLoadPanel = (function ($) {
    var $tabs = $('.csr-m-tabs');
    var $tabsSlider   = $tabs.find('.csr-tabs-slider');
    //var $tabslide     = $tabsSlider.find('.csr-tabs_slide');
    
    function loadPanel(panel) {
        var tabContainer = panel.closest('.csr-m-tabs');

        setTimeout(function () {

            panel.trigger('click');

            $('html, body').stop().animate({
                scrollTop: tabContainer.offset().top
            }, 1000);

        }, 2500);
    }

    function goToHashPanel(){
        var hash = window.location.hash;
        if (hash && hash.match(/\d+/g)) {
            var tabsValues = hash.match(/\d+/g).map(Number);
            var tab = tabsValues[0]-1;
            var slide = tabsValues[1]-1;
            slide=isNaN(slide)?1:slide;
            
            var callSlider = $tabsSlider[tab];
            var activePanel = $(callSlider).find('*[data-slick-index="'+ slide + '"]');
            loadPanel(activePanel);
        }
    }

    function _initSlider() {
        var slidersCounter = 1;

        $tabsSlider.on('init', function (event, slick) {
            if(slidersCounter == $tabsSlider.length) {
                goToHashPanel();
            }
            slidersCounter++;
        });

        window.addEventListener("hashchange", function(){
            goToHashPanel();
        });
    }

    function _init() {
        _initSlider();
    }

    return {
        init: _init,
    }
})(jQuery);
;var CSRTabsSlidersStandard = (function ($) {
    function getSliderSettings(slideColumnsTablet,slideColumnsDesktop){
        return  {
            arrows: false,
            mobileFirst: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
            {
                breakpoint: 899,
                settings: {
                    arrows: false,
                    centerMode: false,
                    dots: false,
                    slidesToShow: slideColumnsTablet,
                    slidesToScroll: 1,
                    infinite: true,
                    nextArrow:
                        '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                        '<i class="icon icon-chevron-right"></i></button>',
                    prevArrow:
                        '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                        '<i class="icon icon-chevron-left"></i></button>'
                }
            },
            {
                breakpoint: 1220,
                settings: {
                    arrows: false,
                    centerMode: false,
                    infinite: true,
                    slidesToShow: slideColumnsDesktop,
                    slidesToScroll: 1,
                    nextArrow:
                        '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                        '<i class="icon icon-chevron-right"></i></button>',
                    prevArrow:
                        '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                        '<i class="icon icon-chevron-left"></i></button>'
                }
            }]
        };
        
    }

    function setCurrentSlide(index,$tabsSlider,$prevArrow,$nextArrow,slideLength,$tabsItems,$tabslide,$tabsStandard) {
        if (index >= slideLength) {
            currentSlide = slideLength - index;
        } else if (index < 0) {
            currentSlide = index + slideLength;
        } else {
            currentSlide = index;
        }

        setArrows($tabsSlider,$prevArrow,$nextArrow,$tabslide,$tabsStandard);
        setCurrentTab(currentSlide,$tabsItems);
    }

    function setCurrentTab(index,$tabsItems) {
        const currentTab = $tabsItems.get(index);

        $tabsItems.removeClass('is-active');
        $(currentTab).addClass('is-active');
    }

    function arrowsTrigger(arrow,$tabsStandard) {
        const current = $tabsStandard.find('.csr-tabs_slide.slick-current');
        if (arrow === 'next') {
            current.next().trigger('click');
        } else {
            current.prev().trigger('click');
        }
    }

    function setArrows($tabsSlider,$prevArrow,$nextArrow,$tabslide,$tabsStandard) {
        const isInfinite = $tabsSlider.slick('slickGetOption', 'infinite');
        if (!isInfinite) {
            const slides = $tabslide
            const lastSlide = slides.last();
            const lastActive = lastSlide.hasClass('slick-active');
            var currentSlide = $tabsStandard.find('.csr-tabs_slide.slick-current'); 
            currentSlide = currentSlide.data('slick-index');

            if (currentSlide > 0) {
                $prevArrow.removeClass('hide');
            } else {
                $prevArrow.addClass('hide');
            }

            if (lastActive) {
                $nextArrow.addClass('hide');
            } else {
                $nextArrow.removeClass('hide');
            }
        } else {
            $prevArrow.add($nextArrow).removeClass('hide');
        }
    }

    function _initSlider() {

        $('.csr-m-tabs-standard_themify').each(function(){
            var $tabsStandard         = $(this);
            var $tabsSlider           = $tabsStandard.find('.csr-tabs-slider');
            var $tabslide             = $tabsSlider.find('.csr-tabs_slide');
            var slideColumnsTablet    = $tabsSlider.data('columns-tb');
            var slideColumnsDesktop   = $tabsSlider.data('columns-dk');
            var $tabsContent          = $tabsStandard.find('.csr-tabs-content');
            var $tabsItems            = $tabsContent.find('.tabs-panel');
            var $nextArrow            = $tabsStandard.find('.csr-m-tabs-next');
            var $prevArrow            = $tabsStandard.find('.csr-m-tabs-prev');
            var slideLength             = $tabslide.not('.slick-cloned').length;
            var sliderSettings=getSliderSettings(slideColumnsTablet,slideColumnsDesktop);

            $tabsSlider.on('init', function (event, slick) {
                $(slick.$slider).closest('.csr-m-tabs').removeClass('loading');
                $tabslide = $tabsSlider.find('.csr-tabs_slide');
                $tabslide.on('click', function () {
                    const $this = $(this);
                    $this.siblings().removeClass('slick-current is-active');
                    $this.addClass('slick-current');
                    const currentIndex = $this.data('slick-index');
        
                    setCurrentSlide(currentIndex,$tabsSlider,$prevArrow,$nextArrow,slideLength,$tabsItems,$tabslide,$tabsStandard);
        
                    $tabsSlider.slick('slickGoTo', currentIndex);
                });
               
            });
        
            $tabsSlider.slick(sliderSettings);

            $tabsSlider.on('swipe', function () {
                const currentSlide = $tabsStandard.find('.csr-tabs_slide.slick-current');
                const currentIndex = currentSlide.data('slick-index');
                setCurrentTab(currentIndex,$tabsItems);
            });

            $tabsSlider.on('afterChange', function(event, slick, current){
                const lastSlide = $('.csr-tabs_slide',$tabsStandard).last();
                const lastActive = lastSlide.hasClass('slick-active');
                if (lastActive) {
                    $nextArrow.addClass('hide');
                } else {
                    $nextArrow.removeClass('hide');
                }
            });


            $nextArrow.on('click', function () {
                prevTrigger = false;
                arrowsTrigger('next',$tabsStandard);
            });

            $prevArrow.on('click', function () {
                prevTrigger = true;
                arrowsTrigger('prev',$tabsStandard);
            });

            setArrows($tabsSlider,$prevArrow,$nextArrow,$tabslide,$tabsStandard);

        });
    }

    function _init() {
        _initSlider();
    }

    return {
        init: _init,
    }
})(jQuery);
;var CSRTabsSlidersThumbnails = (function ($) {
    
 
    function getSliderSettings(slideColumns){
        return {
            arrows: false,
            infinite: true,
            centerMode: true,
            centerPadding: '65px',
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'progressive',
            responsive: [{
                breakpoint: 899,
                settings: {
                    arrows: false,
                    centerMode: false,
                    dots: false,
                    infinite: false,
                    slidesToShow: slideColumns,
                    slidesToScroll: 1,
                    variableWidth: true,
                    swipe: false,
                }
            },
            {
                breakpoint: 1220,
                settings: {
                    variableWidth: false,
                    arrows: false,
                    centerMode: false,
                    dots: false,
                    infinite: true,
                    slidesToShow: slideColumns,
                    slidesToScroll: 1,
                    swipe: true
                }

            }]
        };
    }

    function getTabsSettings(){
        return {
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 899,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1220,
                settings: 'unslick'

            }]
        }
    }

    function goToSlide(slide, event,slideLength,$tabsSlider,$prevArrow,$nextArrow,$tabsItems,$tabsContent,slideColumns) {
        const $this = slide;
        const currentIndex = $this.data('slick-index');
        
        //set timeout for medium only(900 - 1219) to animate width before slide
        var $window             = $(window);
        var windowWidth         = $window.width();
        var timeOut = windowWidth<900 ? 0 : 200;
        if(windowWidth >= 900 && windowWidth <= 1219) {
            if (event && event.isTrigger) {
                if (event.type === 'swipe') {
                    timeOut = 0;
                } else {
                    timeOut =  200;
                }
            }
        }

        $this.siblings().removeClass('slick-current is-active');
        $this.addClass('slick-current');
        
 
        setTimeout(function () {
            $tabsSlider.slick('slickGoTo', currentIndex);
            setCurrentSlide(currentIndex,$tabsSlider,$prevArrow,$nextArrow,$tabsItems,$tabsContent,slideColumns,slideLength);
        }, timeOut);
    }

    function setCurrentSlide(index,$tabsSlider,$prevArrow,$nextArrow,$tabsItems,$tabsContent,slideColumns,slideLength) {
        var currentSlide = index;
        if (index >= slideLength) {
            currentSlide = slideLength - index;
        } else if (index < 0) {
            currentSlide = index + slideLength;
        } 
        currentSlide=Math.abs(currentSlide);

        setArrows($tabsSlider,$prevArrow,$nextArrow,slideColumns,slideLength);
        setCurrentTab(currentSlide,$tabsItems,$tabsContent);
    }

    function setCurrentTab(index,$tabsItems,$tabsContent) {
        var $window             = $(window);
        var windowWidth         = $window.width();
        if(windowWidth > 1219) {
            const currentTab = $tabsItems.get(index);
            $tabsItems.removeClass('tab-active');
            $(currentTab).fadeIn().addClass('tab-active');
        } else {
            if (index == 0) {
                setTimeout(function () {
                    $tabsContent.slick('slickGoTo', index);
                }, 500);
            } else {
                $tabsContent.slick('slickGoTo', index);
            }
        }
    }

    function arrowsTrigger(arrow,$tabsThumbnail) {
        const current = $tabsThumbnail.find('.csr-tabs_slide.slick-current');
        if (arrow === 'next') {
            current.next().trigger('click');
        } else {
            current.prev().trigger('click');
        }
    }

    function setArrows($tabsSlider,$prevArrow,$nextArrow,slideColumns,slideLength) {
        const isInfinite = $tabsSlider.slick('slickGetOption', 'infinite');
        var currentSlide = $tabsSlider.find('.csr-tabs_slide.slick-current'); 
        currentSlide = currentSlide.data('slick-index');

        if (!isInfinite) {

            if (currentSlide > 0) {
                $prevArrow.removeClass('hide');
            } else {
                $prevArrow.addClass('hide');
            }

            if (currentSlide + slideColumns >= slideLength) {
                $nextArrow.addClass('hide');
            } else {
                $nextArrow.removeClass('hide');
            }
        } else {
            $prevArrow.add($nextArrow).removeClass('hide');
        }
    }

   

    function _initSlider(isresize) {
        $('.csr-m-tabs-thumbnails').each(function(){
            const $tabsThumbnail    = $(this);
            const $tabsSlider       = $tabsThumbnail.find('.csr-tabs-slider');
            var $tabslide         = $tabsSlider.find('.csr-tabs_slide');
            const $tabsContent      = $tabsThumbnail.find('.csr-tabs-content');
            const $tabsItems        = $tabsContent.find('.tabs-panel');
            const slideColumns      = $tabsSlider.data('columns');
            const $nextArrow        = $tabsThumbnail.find('.csr-m-tabs-next');
            const $prevArrow        = $tabsThumbnail.find('.csr-m-tabs-prev');

            var slideLength         = $tabslide.not('.slick-cloned').length;
            var slideSwipe          = false;

            var sliderSettings = getSliderSettings(slideColumns);
            var tabsSettings = getTabsSettings();

            $tabsSlider.off('init').on('init', function (event, slick) {
                $tabsSlider.closest('.csr-m-tabs').removeClass('loading');
                $tabslide  = $tabsSlider.find('.csr-tabs_slide');
                $tabslide.on('click touchstart', function (e) {
                    //prevent click on swipe event
                    if(slideSwipe === false && e.type == 'click') {
                        goToSlide($(this), e,slideLength,$tabsSlider,$prevArrow,$nextArrow,$tabsItems,$tabsContent,slideColumns);
                    }
                    slideSwipe = false;
                });
            });

            $tabsSlider.not('.slick-initialized').slick(sliderSettings).off('setPosition')
            .on('setPosition', function (event, slick) {
                $(".slick-slide",slick.$slider).css('height', slick.$slideTrack.height() + 'px');
            });
        
            $tabsContent.not('.slick-initialized').slick(tabsSettings);
            
            setArrows($tabsSlider,$prevArrow,$nextArrow,slideColumns,slideLength);
            

            $tabsSlider.off('beforeChange').on('beforeChange', function(event, slick, current, next){
                $tabsItems.addClass('animate');
            });

            $tabsSlider.off('swipe').on('swipe', function () {
                slideSwipe = true;
                const tabSlider = $tabsThumbnail.find('.csr-tabs-slider');
                const currentSlide = tabSlider.find('.slick-current');
                const currentSlideIndex = currentSlide.data('slick-index');
                setCurrentSlide(currentSlideIndex,$tabsSlider,$prevArrow,$nextArrow,$tabsItems,$tabsContent,slideLength);
            });

            $tabsContent.off('afterChange').on('afterChange', function(event, slick, current){
                setTimeout(function() {
                    $tabsContent.find('*[data-slick-index="' + current + '"]').removeClass('animate');
                });
            });

            $tabsContent.off('swipe').on('swipe', function (event) {
                const currentSlide = $tabsContent.find('.slick-current');
                goToSlide($(currentSlide), event,slideLength,$tabsSlider,$prevArrow,$nextArrow,$tabsItems,$tabsContent,slideColumns);
            });
            
            $nextArrow.off('click').on('click', function (e) {
                arrowsTrigger('next',$tabsThumbnail);
            });
    
            $prevArrow.off('click').on('click', function (e) {
                arrowsTrigger('prev',$tabsThumbnail);
            });

            if(isresize){
                var currentSlide = $tabsSlider.find('.csr-tabs_slide.slick-current'); 
                currentSlide.trigger("click");
            }
        });

       
       
   
    }

    function _init() {
        _initSlider(false);
        var $window=$(window);
        $window.on('resize', function () {
            _initSlider(true);
        });
    }

    return {
        init: _init,
    }
})(jQuery);
;var CSRTabsSlidersTimeline = (function ($) {
    function getSliderSettings(slideColumnsTablet,slideColumnsDesktop){
        return {
            arrows: false,
            mobileFirst: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            waitForAnimate: false,

            nextArrow:
                '<button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">' +
                '<i class="icon icon-chevron-right"></i></button>',
            prevArrow:
                '<button type="button" class="slick-prev prev-arrow" aria-label="Prev" role="button">' +
                '<i class="icon icon-chevron-left"></i></button>',

            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: slideColumnsTablet
                       
                    }
                },
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: slideColumnsDesktop
                    }
                }]
        };
    }

    function setCurrentSlide(index,slideLength,$tabsSlider,$prevArrow,$nextArrow, $tabsTimeline,$tabsItems) {
        var currentSlide = index;
        if (index >= slideLength) {
            currentSlide = slideLength - index;
        } else if (index < 0) {
            currentSlide = index + slideLength;
        }

        currentSlide=Math.abs(currentSlide);
        $tabsSlider.slick('getSlick').currentSlide=currentSlide;

        setArrows($tabsSlider,$prevArrow,$nextArrow, $tabsTimeline);
        setCurrentTab(currentSlide,$tabsItems);
    }

    function setCurrentTab(index,$tabsItems) {
        var currentTab = $tabsItems.get(index);

        $tabsItems.removeClass('is-active');
        $(currentTab).addClass('is-active');
    }

    function arrowsTrigger(arrow,$tabsTimeline) {
        var current = $tabsTimeline.find('.csr-tabs_slide.slick-current');
        if (arrow === 'next') {
            current.next().trigger('click');
        } else {
            current.prev().trigger('click');
        }
    }

    function setArrows($tabsSlider,$prevArrow,$nextArrow, $tabsTimeline) {
        var isInfinite = $tabsSlider.slick('slickGetOption', 'infinite');
       
        if (!isInfinite) {
            var slides = $tabsTimeline.find('.csr-tabs_slide');
            var currentSlide = $tabsTimeline.find('.csr-tabs_slide.slick-current');
            var currentSlideIndex = currentSlide.data('slick-index');

            if (currentSlideIndex > 0) {
                $prevArrow.removeClass('hide');
            } else {
                $prevArrow.addClass('hide');
            }

            if (currentSlideIndex==slides.length-1) {
                $nextArrow.addClass('hide');
            } else {
                $nextArrow.removeClass('hide');
            }
        } else {
            $prevArrow.add($nextArrow).removeClass('hide');
        }
    }

    function _initSlider() {
        $('.csr-m-tabs-timeline').each(function(){
            var $tabsTimeline = $(this);
            var $tabsSlider = $tabsTimeline.find('.csr-tabs-slider');
            var $tabslide = $tabsSlider.find('.csr-tabs_slide');
            var slideColumnsTablet = $tabsSlider.data('columns-tb');
            var slideColumnsDesktop = $tabsSlider.data('columns-dk');
            var $tabsContent = $tabsTimeline.find('.csr-tabs-content');
            var $tabsItems = $tabsContent.find('.tabs-panel');
            var $nextArrow = $tabsTimeline.find('.csr-m-tabs-next');
            var $prevArrow = $tabsTimeline.find('.csr-m-tabs-prev');
            var sliderSettings= getSliderSettings(slideColumnsTablet,slideColumnsDesktop);
            var slideLength = $tabslide.not('.slick-cloned').length;


            $tabsSlider.on('init', function (event, slick) {
                $(slick.$slider).closest('.csr-m-tabs').removeClass('loading');
                $tabslide = $tabsSlider.find('.csr-tabs_slide');
                $tabslide.on('click', function (e) {
                    e.preventDefault();
                    var $this = $(this);
                    var currentIndex = $this.data('slick-index');

                    $this.siblings().removeClass('slick-current is-active');
                    $this.addClass('slick-current');
                    
                    setCurrentSlide(currentIndex,slideLength,$tabsSlider,$prevArrow,$nextArrow, $tabsTimeline,$tabsItems);
                    $tabsSlider.slick('slickGoTo', currentIndex);
                });
            });

            $tabsSlider.slick(sliderSettings);
            setArrows($tabsSlider,$prevArrow,$nextArrow, $tabsTimeline);

            $tabsSlider.on('swipe', function () {
                var currentSlide = $tabsTimeline.find('.csr-tabs_slide.slick-current');
                var currentIndex = currentSlide.data('slick-index');
                setCurrentTab(currentIndex,$tabsItems);
            });
    
            $nextArrow.on('click', function () {
                arrowsTrigger('next',$tabsTimeline);
            });
    
            $prevArrow.on('click', function () {
                arrowsTrigger('prev',$tabsTimeline);
            });
        });
    }

    function _init() {
        _initSlider();
    }

    return {
        init: _init,
    }
})(jQuery);
;
var CSRApp = (function ($) {

    function _init() {
        CSRPagination.init();
        CSRCards.init();
        CSRCardsClassic.init();
        CSRCarouselStandard.init();
        CSRCarouselLogos.init();
        CSRHero.init();
        CSRLoadPanel.init();
        CSRTabsSlidersThumbnails.init();
        CSRTabsSlidersStandard.init();
        CSRTabsSlidersTimeline.init();
        CSRFootnotes.init();
        CSRLayout.init();
        CSRIframe.init(true);
        CSRModals.init();
        CSRAccordionSlider.init();
        CSRTables.init();
        CSRBanners.init();
        CSRPrint.init();
        CSRSelects.init();
        CSRNewsRoom.init();
    }

    return {
        init: _init,
    }

})(jQuery);

$(document).foundation();

$(document).ready( function () {
    CSRApp.init();
    //wait for ATT main nav ***
    if(! $("body").hasClass("privacy")){
        var attNavExist = setInterval(function() {
        if ($('#att-about-header .att-about-header__wrap').length>0) {
            CSRNavigation.init();
            clearInterval(attNavExist);
        }
        }, 100);
    }
       
});





