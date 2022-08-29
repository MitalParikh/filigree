import { Component, OnInit } from '@angular/core';
import { CategoryMenuService } from '../categorymenu.service';
import { CategoryMenu } from '../categoryMenu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

	categories : CategoryMenu[] = [];

	showCategoryMenu() {
	this.categoryList.getCategoryMenu().subscribe(
			data => {
			this.categories = data.body as CategoryMenu[];

			}
		)
	}

	 ngOnInit(): void {
		this.showCategoryMenu();
		
  	}

	constructor(private categoryList : CategoryMenuService) {}


}
