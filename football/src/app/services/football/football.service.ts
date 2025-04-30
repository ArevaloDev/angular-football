import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from '../../../enviroments/enviroments';
import { map, tap } from 'rxjs';
import { ResponseLeague } from '../../interfaces/leagues.interface';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private url:string = enviroments.urlAPI;
  private apiKey:string = enviroments.apiKey;
  constructor(private http:HttpClient) { }

  getLeagues(){
    return this.http.get<ResponseLeague>(`${this.url}/leagues`).pipe(
      map(response => response.response)
    )
  }
}
