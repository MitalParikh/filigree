import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntersectionStatus } from '../from-intersection-observer';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
  animations: [
  trigger('slideShow', [
    transition('* => *',  [
      
      query(':enter', [
        style({ opacity: 0 }),
        stagger(4000, [
          animate('1s',
          style({ opacity: 1 }))
        ])
      ], {optional: true})
    ])
  ]),
  trigger('hover', [
	state('invisible', style({
		opacity: 0
	})),
	state('visible', style({
		opacity: 1
	})),
    transition('invisible => visible', [
	animate('0.10s')
    ]),
    transition('visible => invisible', [
	animate('0.25s 1s ease-out')
    ]),
  ]),
  ]
})
export class SlideShowComponent implements OnChanges {

  @Input() slidesPath: string = '';
  @Input() slides: string[] = [];
  @Input() flag: boolean;

  constructor() { }

  

 ngOnChanges(changes: SimpleChanges): void {
	const log: string[] = [];
	for (const propName in changes) {
		if(propName == "flag") {
			const changedProp = changes[propName];
			log.push("flag: previous: " + changedProp.previousValue + " current: " + changedProp.currentValue); }	
	}
	console.log(log.join(', '));
  }

}
