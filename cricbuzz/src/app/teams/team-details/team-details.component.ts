import { Component, OnInit } from '@angular/core';
import { Iteam } from '../../iteam'
import { TeamService } from './team.service';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  public teams : Iteam[];

  constructor(private team:TeamService) { 
   
  }

  ngOnInit() {
  this.team.getTeam().subscribe(rankdata => this.teams=rankdata)
  }

}
