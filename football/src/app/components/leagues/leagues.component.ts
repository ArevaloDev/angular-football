import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../services/football/football.service';
import { Observable } from 'rxjs';
import { Response } from '../../interfaces/leagues.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-leagues',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css'
})
export class LeaguesComponent implements OnInit {
  public league$!:Observable<Response[]>;
  constructor(private footballServices:FootballService){}

  ngOnInit(): void {
   this.league$ =  this.footballServices.getLeagues();
  }
}
