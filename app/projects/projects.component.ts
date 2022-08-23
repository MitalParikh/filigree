import { Component, OnInit } from '@angular/core';
import { ProjectConfigService } from '../projectConfig.service';
import { ProjectConfig } from '../projectConfig';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectConfig : ProjectConfig ;
  projectsMainSlides: string[] = [];
  slidesToShow: string[] = [];
  flag: boolean = false;
 
  constructor(private projectConfigService : ProjectConfigService, private route: ActivatedRoute, ) { 
  	this.projectConfig = {
		projectsPath : '',
		projectsList : [],
	}
  }

  showConfig() {
  this.projectConfigService.getConfig().subscribe((data : ProjectConfig)  => 
	{
	this.projectConfig  = 
	{projectsPath : data.projectsPath,
	 projectsList: data.projectsList};
	 this.projectsMainSlides = this.projectConfig.projectsList;
	},	
	);
	
  }

  ngOnInit(): void {
	this.showConfig();
  }

}
