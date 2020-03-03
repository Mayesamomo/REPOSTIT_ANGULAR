import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListingComponent } from './post-listing/post-listing.component';



@NgModule({
  declarations: [
    PostAddComponent,
    PostEditComponent,
    PostListingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PostModule { }
