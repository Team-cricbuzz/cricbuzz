import { Component, OnInit } from '@angular/core';
import { IRankings } from '../irankings';
import { RankingService } from './ranking.service';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  public rankings : IRankings[];

  constructor(private ranks:RankingService) { 
   
  }

  ngOnInit() {
  this.ranks.getRankings().subscribe(rankdata => this.rankings=rankdata)
  }

}
