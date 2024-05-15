import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

@NgModule({
  declarations: [
    SeriesListComponent,
    SeriesDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SeriesListComponent,
   ]
})
export class SeriesModule { }
