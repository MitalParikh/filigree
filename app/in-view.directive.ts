import { Directive, Component, NgZone, ElementRef, OnInit, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {fromIntersectionObserver, IntersectionStatus} from './from-intersection-observer';

@Directive({
  selector: '[inView]'
})
export class InViewDirective  implements OnInit, OnDestroy {

  //@Input() intersectionDebounce = 0;
  //@Input() intersectionRootMargin = '0px';
  //@Input() intersectionThreshold: number | number[];

  observer!: IntersectionObserver;

  //@Output() visibilityChangeEvent = new EventEmitter<IntersectionStatus>();
  @Output() visible = new EventEmitter<boolean>();
  
  
  private destroy$ = new Subject();
  

  constructor(private el: ElementRef<HTMLElement>, private ngZone: NgZone) {}

  ngOnInit(): void {
    	//const elToObserve = this.myDiv.nativeElement.innerHTML; // template 
      //const el = document.getElementbyId('stripe2'); 
	//const elToObserve = this.el.parentElement;
	const threshold = 0.5; 
	//alert('element' + this.el);
	this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
           this.visible.emit(e.isIntersecting);
		//alert('element' + e);
        });
      }, { threshold });
      this.observer.observe(this.el.nativeElement);
    });
	    
 	/*const config = {
      root: null,
      rootMargin: this.intersectionRootMargin,
      threshold: [0.8]
    };

    fromIntersectionObserver(
      el,
      config,
      this.intersectionDebounce
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe((status: IntersectionStatus) => {
	
      	this.visibilityChangeEvent.emit(status);
		
    });
	alert('event emitted' + status);*/
  }

  
  ngOnDestroy() {
    this.destroy$;
  }

}
