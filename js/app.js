$(document).foundation();

// Slider Javascript

// define globals

var onScreen;
var currentIndex = 0;
var slides = [];


// decide if 1 or 2 items should show based on viewport
var testBreakpoint = function(){
	if(Foundation.MediaQuery.atLeast('medium')){
		onScreen = 2;
	} else {
		onScreen = 1;
	}
}

testBreakpoint();

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
	testBreakpoint();
	slider.cycleSlides();

});


// define slider
var Slider = function(){

	var self = this;

	self.currentSlide = $(slides).eq(currentIndex);
	self.nextButton = $('.next');
	self.prevButton = $('.prev');

	self.addSlides = function(){
		$('.slide').each(function(){
			slides.push($(this));
		});
	}

	self.cycleSlides = function(){
		for (slide in slides){
			slides[slide].hide();
			console.log(slide, currentIndex, onScreen);

			// show slides if in range of index
			if (slide >= currentIndex && slide <= currentIndex + (onScreen - 1)){
				slides[slide].fadeIn();
			}
		}

		if ( $('.slide:visible').length < onScreen ){
			slides[slides.length - 2].fadeIn();
		}
	}

	// next function
	self.next = function(){
		if (currentIndex + onScreen <= slides.length - 1){
			currentIndex += onScreen;
		} else {
			currentIndex = 0;
		}
	}

	// previous function
	self.prev = function(){
		if (currentIndex > 0){
			currentIndex -= onScreen;
		} else {
			currentIndex = slides.length - 1;
		}
	}

	// initialize slider
	self.init = function(){
		self.addSlides();
		self.cycleSlides();

		// apply bindings to buttons
		self.prevButton.click(function(){
			self.prev();
			self.cycleSlides();
		});
		self.nextButton.click(function(){
			self.next();
			self.cycleSlides();
		});
	}

}

var slider = new Slider();
slider.init()
