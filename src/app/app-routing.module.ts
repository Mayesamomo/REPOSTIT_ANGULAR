import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PostListingComponent } from './posts/post-listing/post-listing.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { PageNotFoundComponent } from './errorpage/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { UserprofileComponent } from './users/userprofile/userprofile.component';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostListingComponent },
  { path: 'posts/create', component: PostAddComponent },
  { path: 'posts/:id', component: PostEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'errorpage', component: PageNotFoundComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user-profile/:id', component: UserprofileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
