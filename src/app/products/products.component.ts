import { Component, OnInit } from '@angular/core';
import { ProductConfigService } from '../productConfig.service';
import { ProductConfig } from '../productConfig';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productConfig : ProductConfig ;
  productsMainSlides: string[] = [];
  slidesToShow: string[] = [];
  flag: boolean = false;
 
  constructor(private productConfigService : ProductConfigService, private route: ActivatedRoute, ) { 
  	this.productConfig = {
		productsPath : '',
		productsList : [],
	}
  }

  showConfig() {
  this.productConfigService.getConfig().subscribe((data : ProductConfig)  => 
	{
	this.productConfig  = 
	{productsPath : data.productsPath,
	 productsList: data.productsList};
	 this.productsMainSlides = this.productConfig.productsList;
	},	
	);
	
  }

  ngOnInit(): void {
	this.showConfig();
  }


}
