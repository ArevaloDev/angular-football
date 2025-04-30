import { Component } from '@angular/core';
import { TeamsComponent } from "../teams/teams.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TeamsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
