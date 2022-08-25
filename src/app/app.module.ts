import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SlideShowDirective } from './slide-show.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { FormsModule } from '@angular/forms';
import { InViewDirective } from './in-view.directive';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ClickSliderDirective } from './image-slider/click-slider.directive';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    GalleryComponent,
    SideBarComponent,
    SlideShowDirective,
    SlideShowComponent,
    InViewDirective,
    ImageSliderComponent,
    ClickSliderDirective,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
