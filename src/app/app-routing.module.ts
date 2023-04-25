import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  { path: '', redirectTo: 'userinformation', pathMatch: 'full'},
  { path: 'userinformation', component: UserInformationComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
