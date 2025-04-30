import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'ligas', component:LeaguesComponent},
  {path: 'equipos', component:TeamsComponent},
  {path: 'jugadores', component:PlayersComponent},
  {path: '**', redirectTo: ''},
];
