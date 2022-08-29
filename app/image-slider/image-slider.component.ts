import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() slidesPath: string = '';
  @Input() slides: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
