import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BlogComponent } from './blog/blog.component';
import { SpecialsComponent } from './specials/specials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'specials',
    component: SpecialsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'prescription',
    loadChildren: () => import('./prescription/prescription.module').then(m => m.PrescriptionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
