import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlideShow]'
})
export class SlideShowDirective {

  constructor() { }

  @HostListener('click')
  onClick(){
      var i;
  	var slideIndex = 0;
	var slides = document.getElementsByClassName("mySlides");
	/*for (i = 0; i < slides.length; i++) {
    		slides[i].style.display = "none";  
  	}*/
	slideIndex++;
    	if (slideIndex > slides.length) {slideIndex = 1} 
  	//slides[slideIndex-1].nativeElement.style.display = "block";
  	//setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

}
