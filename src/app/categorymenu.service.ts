import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CategoryMenu } from './categoryMenu';

@Injectable({
  providedIn: 'root'
})
export class CategoryMenuService {

	
  	constructor(private http: HttpClient) { }
	
	categoryMenuUrl = 'assets/category.json';

	getCategoryMenu(): Observable<HttpResponse<CategoryMenu[]>>{
		return this.http.get<CategoryMenu[]>(this.categoryMenuUrl, { observe: 'response' });
	}	
	
}
