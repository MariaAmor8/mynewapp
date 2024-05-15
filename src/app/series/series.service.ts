import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

private apiUrl = 'https://gist.githubusercontent.com/fai-aher/434fb96e22762f4d7ebf2d5179eb8622/raw/6692b671d7e76cb40df7a56f88afda080a0f3392/countries.json';

constructor(private http: HttpClient) { }

getSeries():Observable<Serie[]>{
  return this.http.get<Serie[]>(this.apiUrl)
}


}
