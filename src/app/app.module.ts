import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';
import { SharedMaterialModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { MoreDetailsComponent } from './component/more-details/more-details.component';
import { TermsAndConditionComponent } from './component/terms-and-condition/terms-and-condition.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidenavComponent,
    AboutUsComponent,
    ContactUsComponent,
    MoreDetailsComponent,
    TermsAndConditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
