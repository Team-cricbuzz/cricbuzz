import { Component, OnInit } from '@angular/core';
import { MatchService } from './matches.service';
import { Imatches } from '../imatches';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  public rankings : Imatches[];

  constructor(private ranks:MatchService) { 
   
  }

  ngOnInit() {
  this.ranks.getMatches().subscribe(data => this.rankings=data)
  }

}
