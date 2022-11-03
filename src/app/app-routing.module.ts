import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
		{ path: 'about', component: AboutComponent },
		{ path: 'projects', component: ProjectsComponent , pathMatch: 'full'},
		{ path: 'products', component: ProductsComponent , pathMatch: 'full'},
		{ path: 'gallery', component: GalleryComponent , pathMatch: 'full'},
		{ path: '',   redirectTo: 'about', pathMatch: 'full' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
