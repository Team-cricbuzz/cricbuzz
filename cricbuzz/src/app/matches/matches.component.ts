import { Component, OnInit } from '@angular/core';
import { IMatches } from '../imatches';
import { MatchesService } from './matches.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  private  matches:{};
  constructor(private  apiService:  MatchesService) { }
  ngOnInit() {
    this.loadMatches();
  }
  loadMatches(){
    this.apiService.getMatches().subscribe(data =>{
    console.log(data);
    this.matches = data;
 })
 }
  }

 
