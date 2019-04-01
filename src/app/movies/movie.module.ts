import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { TableModule } from 'primeng/table';
import { MatCardModule, MatListModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';

const routes:Routes =[
  {
    path:'',component:MovieComponent
  },
  {
    path:'add',component:AddMovieComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TableModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule

  ],
  declarations: [
    MovieComponent,
    AddMovieComponent,
    EditMovieComponent,
    DeleteMovieComponent
  ],
  exports:[RouterModule],
  entryComponents:[
    AddMovieComponent,
    EditMovieComponent,
    DeleteMovieComponent
  ]
})
export class MovieModule { }
