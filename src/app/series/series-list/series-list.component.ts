import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnInit{

  series: Array<Serie> = [];
  selected: boolean = false;
  selectedSerie!: Serie;
  averageSeasons: number = 0;

  constructor(private serieService: SeriesService){}

  getSeries(): void{
    this.serieService.getSeries().subscribe(apiData =>{
      this.series = apiData;   
    })
  }

  onSelected(selectedSerie: Serie){
    this.selected = true;
    this.selectedSerie = selectedSerie;
    //console.log('Seleccionado');
  }


  ngOnInit(): void {
    this.getSeries();    
  }

}
