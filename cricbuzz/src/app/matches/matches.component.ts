import { Component, OnInit } from '@angular/core';
import { MatchService } from './matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  response:any;
  constructor(private match:MatchService) { 
   
  }

  ngOnInit() {
  this.match.getAll().subscribe((response) =>{ 
    this.response=response;
    console.log(this.response)});
  }

}
