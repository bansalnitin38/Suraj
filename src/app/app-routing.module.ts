import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { MainComponent } from './component/main/main.component';
import { TermsAndConditionComponent } from './component/terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
    {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'termandcondition',
    component: TermsAndConditionComponent
  },
  {
    path: 'contactus',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
