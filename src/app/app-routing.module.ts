import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { Alumni } from './shared/models/alumni';
import { AlumniComponent } from './components/alumni/alumni.component';
import { Contact } from './shared/models/contact';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
