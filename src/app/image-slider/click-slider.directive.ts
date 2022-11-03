import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appClickSlider]'
})
export class ClickSliderDirective implements OnInit {

  constructor(private el: ElementRef ) { }

  @HostListener('click')
  onClick(){
      //alert("hello");
  	var option = document.getElementsByClassName("option");
  	for(let i=0; i<option.length; i++){
	  option[i].classList.remove("active");
	}
	this.el.nativeElement.classList.add("active");
  }

  ngOnInit(): void{
	var option = document.getElementsByClassName("option");
	option[0].classList.add("active");
  }

}
