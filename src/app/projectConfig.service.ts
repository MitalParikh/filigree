import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { ProjectConfig } from './projectConfig';

@Injectable({
  providedIn: 'root'
})
export class ProjectConfigService {
	
		
  	constructor(private http: HttpClient) { }
	
	configUrl = 'assets/projectConfig.json';

	getConfig(){
		return this.http.get<ProjectConfig>(this.configUrl);
	}

 	getContent(fileURL: string){
		return this.http.get(fileURL, { responseType: 'text' })
	.pipe(
        tap( // Log the result or error
        {
          	next: (data: string) => console.log(fileURL, data),
        	error: (error: HttpErrorResponse) => console.error(fileURL, error)
        }
        )
    );

	}	
	
}
