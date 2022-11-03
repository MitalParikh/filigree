import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from '../config';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IntersectionStatus } from '../from-intersection-observer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  config : Config ;
  aboutText: string = '';
  //ourWorkSlides: string[] = [];
  fabricultureSlides: string[] = [];
  slidesToShow: string[] = [];
  flag: boolean = false;
 
  constructor(private configService : ConfigService, private route: ActivatedRoute, private cd: ChangeDetectorRef, ) {
	this.config = {
		textAbout : '',
		filigreeUrl : '',
		aboutImgUrl : '',
 		ourWork : '',
		ourWorkSlides : [],
            fabriculture : '',
		fabricultureSlides : [],
	}
 }

  showConfig() {
  this.configService.getConfig().subscribe((data : Config)  => 
	{
	this.config  = 
	{textAbout : data.textAbout,
	 filigreeUrl : data.filigreeUrl,
	 aboutImgUrl : data.aboutImgUrl,
	 ourWork : data.ourWork,
	 ourWorkSlides : data.ourWorkSlides,
       fabriculture : data.fabriculture,
	 fabricultureSlides : data.fabricultureSlides};
	 this.fabricultureSlides = this.config.fabricultureSlides;
	},	
	);
	
  }

  showContent(filePath: string) {

  this.configService.getContent(filePath).subscribe(data  => this.aboutText = data as string);	
  }  

  ngOnInit(): void {
	this.showConfig();
	this.showContent('assets/latest.txt');	
  }


  onVisibilityChanged(status: boolean) {

    if(status) {
		this.slidesToShow = this.fabricultureSlides;
 		this.flag = true;
		this.cd.detectChanges();
	} 
    else {
		this.slidesToShow = [this.fabricultureSlides[0]];
		this.flag = false;
		this.cd.detectChanges();
	}
      
  }

}
