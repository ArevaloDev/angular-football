import { Component } from '@angular/core';
import { TeamsComponent } from "../teams/teams.component";
import { LeaguesComponent } from '../leagues/leagues.component';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeaguesComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
