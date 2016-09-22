//<![CDATA[
$(document).on("scroll", function(){
	'use strict';
	/*
	-------------------------
	FIXED HEADER SCROLL UP
	-------------------------
	*/
	var HeaderSelector 	 = 'header',
		HeaderShadow	 = 'add-shadow',
		WrapperSelector	 = '.wrapper',
		WrapperFixed	 = 'fixed-layout',
		headerLgSize	 = 'header-lg',
		AddShrink		 = 'header-shrink';
	if($(document).scrollTop() > 90){
		$(HeaderSelector).addClass(HeaderShadow);
	}
	else{
		$(HeaderSelector).removeClass(HeaderShadow);
	}

	if($(WrapperSelector).hasClass(WrapperFixed)){

		if($(WrapperSelector).hasClass(headerLgSize)){
			if($(document).scrollTop() > 90){
				$(HeaderSelector).addClass(AddShrink);
			}
			else{
				$(HeaderSelector).removeClass(AddShrink);
			}
		}
	}
});
/*
-------------------------
CSS LOAD ANIMATION
-------------------------
*/
if($('body').hasClass('has-load-animation')){
	var	CssLoadAnimation 	= '<div id="loading">' + 
							  '<div class="cssload-thecube">' + 			
								'<div class="loader loader-black loader-1"></div>' + 
							  '</div>' + 
							  '</div>',
		DocToLoad			= 'body';
	$(DocToLoad).prepend(CssLoadAnimation);
	$('html').css('overflow', 'hidden');
	$(window).load(function() {
		$("#loading").fadeOut("slow"); 
		$('html').css('overflow', 'auto');
	})
}
$(document).ready(function() {
	var SearchForm			= '.search-form',
		BtnSearch			= '.btn-form',
		HeaderSocialIcons	= '.social-icons',
		ToggleSocialIcons	= 'toggle-social-icons',
		ToggleSearchForm	= 'toggle-search-form',
		TooltipSelector		= '[data-toggle="tooltip"]',
		NavMenuParentChild	= '.nav-menu ul li:has(>ul)',
		HasChildren			= 'has-children',
		MainLogo			= '.main-logo',
		BringToBack 		= 'bring-to-back',
		CollapseMenuBtn		= '.collapse-nav-menu-btn',
		BodyOverlay 		= '<div class="body-overlay"></div>',
		NavCollapseBtn		= '<div class="collapse-nav-menu-btn"><i class="material-icons"><i class="fa fa-bars" aria-hidden="true"></i></i></div>',
		HeaderOverlay 		= '<div class="header-overlay"></div>',
		BackTopFixed 		= '<div class="back-top-fixed back-top"><i class="fa fa-chevron-up"></i></div>';
	/*
	-------------------------
	BOOTSTRAP TOOLTIP
	-------------------------
	*/
	$(TooltipSelector).tooltip();
	/*
	-------------------------
	MENU ITEM ARROWS
	-------------------------
	*/
	$(NavMenuParentChild).addClass(HasChildren);
	/*
	-------------------------
	SEARCH BUTTON TOGGLE
	-------------------------
	*/
	$(BtnSearch).click(function(){
		$(SearchForm).toggleClass(ToggleSearchForm);
		$(HeaderSocialIcons).toggleClass(ToggleSocialIcons);
		$(MainLogo).toggleClass(BringToBack);
		$(CollapseMenuBtn).toggleClass(BringToBack);
	});
	/*
	-------------------------
	REQUIRED RESPONSIVE TOOLS
	-------------------------
	*/
	$('body').prepend(BodyOverlay);
	$('header').prepend(NavCollapseBtn);
	$('header').prepend(HeaderOverlay);
	$('.collapse-nav-menu-btn').click(function(){
		$('.nav-wrapper').toggleClass('collapse-nav-wrapper');
		$('.body-overlay').toggleClass('show-body-overlay');
		$('.header-overlay').toggleClass('toggle-header-overlay');
		$('html').css('overflow', 'hidden');
	});
	$('.body-overlay').click(function(){
		$('.nav-wrapper').toggleClass('collapse-nav-wrapper');
		$('.body-overlay').toggleClass('show-body-overlay');
		$('.header-overlay').toggleClass('toggle-header-overlay');
		$('html').css('overflow', 'auto');
	});
	$('.header-overlay').click(function(){
		$('.nav-wrapper').toggleClass('collapse-nav-wrapper');
		$('.body-overlay').toggleClass('show-body-overlay');
		$('.header-overlay').toggleClass('toggle-header-overlay');
		$('html').css('overflow', 'auto');
	});
	/*
	-------------------------
	FIXED LAYOUT HEADER HIDE UP
	-------------------------
	*/
	if($('.wrapper').hasClass('fixed-layout')){
		var didScroll,
			lastScrollTop 	= 0,
			delta 			= 5,
			HeaderFixed 	= 'header',
			ScrollSelector 	= 'scroll-up',
			navbarHeight 	= $(HeaderFixed).outerHeight();
		$(window).scroll(function(event){
			didScroll = true;
		});
		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);
		function hasScrolled() {
			var st = $(this).scrollTop();
			if(Math.abs(lastScrollTop - st) <= delta)
				return;
			if (st > lastScrollTop && st > navbarHeight){
				$(HeaderFixed).addClass(ScrollSelector);
			} else {
				if(st + $(window).height() < $(document).height()) {
					$(HeaderFixed).removeClass(ScrollSelector);
				}
			}
			lastScrollTop = st;
		}
	}
	/*
	-------------------------
	MENU CLICK FUNCTIONS
	-------------------------
	*/
	function windowSize() {
		windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
		windowWidth  = window.innerWidth ? window.innerWidth : $(window).width();
	}
	windowSize();
	$( window ).resize(function() {
		windowSize();
	});
	if(windowWidth <= 1200){
		if(!$('.wrapper').hasClass('header-lg')){
			$('.nav-menu ul li a').click(function(){
				if($(this).siblings('ul').hasClass('opened')){
					$(this).siblings('ul').removeClass('opened').slideUp(200);
					$(this).closest('li').removeClass('active');
				}
				else{
					$(this).siblings('ul').addClass('opened').slideDown(200);
					$(this).closest('li').addClass('active');
				}
			});
		}
	}
	if(windowWidth <= 900){
		if($('.wrapper').hasClass('header-lg')){
			$('.nav-menu ul li a').click(function(){
				if($(this).siblings('ul').hasClass('opened')){
					$(this).siblings('ul').removeClass('opened').slideUp(200);
					$(this).closest('li').removeClass('active');
				}
				else{
					$(this).siblings('ul').addClass('opened').slideDown(200);
					$(this).closest('li').addClass('active');
				}
			});
		}
	}
	/*
	-------------------------
	OWL CAROUSELS
	-------------------------
	*/
	/* Basic Single item Owl carousel */
	if($('.owl-carousel-single-item').length){
		$('.owl-carousel-single-item').owlCarousel({
			autoPlay : 3000,
		    stopOnHover : true,
		    paginationSpeed : 1000,
		    goToFirstSpeed : 2000,
			navigation : true,
			slideSpeed : 300,
			singleItem: true,
			transitionStyle : "fade",
			navigationText: [
			  "<i class='fa fa-angle-left'></i>",
			  "<i class='fa fa-angle-right'></i>"
			 ]
		});
	}
		$('.related-slide').owlCarousel({
		  margin:25,
		  loop:true,
		  autoWidth:true,
		  items:3,
		  autoPlay : 3000,
		  stopOnHover : true,
		  paginationSpeed : 1000,
		  goToFirstSpeed : 2000,
		  navigation : true,
		  pagination:false,
		  slideSpeed : 300,
		  transitionStyle : "fade",
		  navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		  ]
		})
	/* Basic Owl carousel single item auto-height */
	if($('.owl-carousel-auto-height').length){
		$('.owl-carousel-auto-height').owlCarousel({
			autoPlay : 3000,
		    stopOnHover : true,
		    paginationSpeed : 1000,
		    goToFirstSpeed : 2000,
			navigation : true,
			slideSpeed : 300,
			singleItem: true,
			transitionStyle : "fade",
			autoHeight : true,
			navigationText: [
			  "<i class='fa fa-angle-left'></i>",
			  "<i class='fa fa-angle-right'></i>"
			 ]
		});
	}
	/* Featured Slideshow */
	if($('#featured-posts-slideshow').length ){
		var OwlSlideshowTime = 7;
		var $OwlProgressBar,
			$OwlBar, 
			$OwlElem, 
			OwlisPause, 
			Owltick,
			OwlPercentTime;
		function OwlProgressBar(OwlElem){
		  $OwlElem = OwlElem;
		  OwlBuildProgressBar();
		  OwlStart();
		}
		function OwlBuildProgressBar(){
		  $OwlProgressBar = $("<div>",{
			id:"owl-progress-bar"
		  });
		  $OwlBar = $("<div>",{
			id:"owl-bar"
		  });
		  $OwlProgressBar.append($OwlBar).prependTo($OwlElem);
		}
		function OwlStart() {
		  OwlPercentTime = 0;
		  OwlisPause = false;
		  Owltick = setInterval(interval, 10);
		};
		function interval() {
		  if(OwlisPause === false){
			OwlPercentTime += 1 / OwlSlideshowTime;
			$OwlBar.css({
			   width: OwlPercentTime+"%"
			 });
			if(OwlPercentTime >= 100){
			  $OwlElem.trigger('owl.next')
			}
		  }
		}
		function OwlPauseOnDragging(){
		  OwlisPause = true;
		}
		function OwlMoved(){
		  clearTimeout(Owltick);
		  OwlStart();
		}
		$('#featured-posts-slideshow').owlCarousel({
			singleItem : true,
			afterInit : OwlProgressBar,
			afterMove : OwlMoved,
			startDragging : OwlPauseOnDragging,
			navigation : true,
			pagination: true,
			slideSpeed : 700,
			paginationSpeed : 700,
			transitionStyle : "fade",
			navigationText: [
			  "<i class='fa fa-angle-left'></i>",
			  "<i class='fa fa-angle-right'></i>"
			 ]
		});
		$OwlElem.on('mouseover',function(){
		   OwlisPause = true;
		 })
		$OwlElem.on('mouseout',function(){
		   OwlisPause = false;
		 })
	}
	/* Spit featured */
	if( $('.featured-posts-split').length ){
		var OwlSync1 = $(".owl-main-slide");
		var OwlSync2 = $(".owl-post-nav-content");
		function OwlSyncPosition(el){
			var current = this.currentItem;
			$(OwlSync2)
			  .find(".owl-item")
			  .removeClass("synced")
			  .eq(current)
			  .addClass("synced")
			if($(OwlSync2).data("owlCarousel") !== undefined){
			  OwlCenter(current)
			}
		}
		function OwlCenter(number){
			var sync2visible = OwlSync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for(var i in sync2visible){
			  if(num === sync2visible[i]){
				var found = true;
			  }
			}
			if(found===false){
			  if(num>sync2visible[sync2visible.length-1]){
				OwlSync2.trigger("owl.goTo", num - sync2visible.length+2)
			  }else{
				if(num - 1 === -1){
				  num = 0;
				}
				OwlSync2.trigger("owl.goTo", num);
			  }
			} else if(num === sync2visible[sync2visible.length-1]){
			  OwlSync2.trigger("owl.goTo", sync2visible[1])
			} else if(num === sync2visible[0]){
			  OwlSync2.trigger("owl.goTo", num-1)
			}
		}
		OwlSync1.owlCarousel({
			singleItem : true,
			slideSpeed : 1000,
			pagination:false,
			afterAction : OwlSyncPosition,
			responsiveRefreshRate : 200,
		});
		OwlSync2.owlCarousel({
			items : 4,
			pagination:false,
			responsiveRefreshRate : 100,
			itemsCustom: 	[[0, 1], 
							[480, 1], 
							[600, 2], 
							[800, 3], 
							[1024, 3], 
							[1080, 3], 
							[1200, 4], 
							[1600, 4], 
							[1920, 4]],
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
		});
		$(OwlSync2).on("mouseover", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).data("owlItem");
			OwlSync1.trigger("owl.goTo",number);
		});
	}
	/*
	-------------------------
	RETINA IMAGE
	-------------------------
	*/
	$(function () {
		if (window.devicePixelRatio > 1) {
		var imgRetina = $("img.img-retina");
		for(var i = 0; i < imgRetina.length; i++) {
			var imageType = imgRetina[i].src.substr(-4);
			var imageName = imgRetina[i].src.substr(0, imgRetina[i].src.length - 4);
			imageName += "@2x" + imageType;
			imgRetina[i].src = imageName;
		}
		}
	});
	/*
	-------------------------
	BACK TOP BUTTON
	-------------------------
	*/
	$('.wrapper').append(BackTopFixed); /* Remove this if you wish to disable back top button (fixed position) */
	if ($('.back-top').length) {
		var scrollTrigger = 100,
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-top-fixed').addClass('show-button');
				} else {
					$('.back-top-fixed').removeClass('show-button');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 400);
		});
	}
	/*
	-------------------------
	MASONRY
	-------------------------
	*/
	if( $('.masonry-style').length ){
		$('.masonry-style').masonry({
			itemSelector: 'li',
		});
	}
});
/*
-------------------------
EQUAL HEIGHT
-------------------------
*/
equalheight = function(itemwrapper){
var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
 $(itemwrapper).each(function() {
	$el = $(this);
	$($el).height('auto')
	topPostion = $el.position().top;
		if (currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0;
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
$(window).load(function() {
	equalheight('.grid-style .post-item');
});
$(window).resize(function(){
	equalheight('.grid-style .post-item');
});
$(window).load(function() {
	equalheight('.related-grid li');
});
$(window).resize(function(){
	equalheight('.related-grid li');
});
//]]>