$(document).foundation();

// Slider Javascript

// define globals
var onScreen = 2;
var currentIndex = 0;
var slides = [];

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
			
			if (slide == currentIndex || slide == currentIndex + (onScreen - 1)){
				slides[slide].fadeIn();
			}
		}
	}

	// next function
	self.next = function(){
		if (currentIndex < slides.length - 1){
			currentIndex++;
		} else {
			currentIndex = 0;
		}
		console.log(currentIndex);
	}

	// previous function
	self.prev = function(){
		if (currentIndex > 0){
			currentIndex--;
		} else {
			currentIndex = slides.length - 1;
		}
		console.log(currentIndex);
	}

	self.Slide = function(content){

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

slider.init();


