import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMatches } from '../imatches';
import { MatchesService } from './matches.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  private  matches:  Array<object> = [];
  constructor(private  apiService:  MatchesService) { }
  ngOnInit() {
      this.getMatches();
  }
  public  getMatches(){
      this.apiService.getMatches().subscribe((data:  Array<object>) => {
          this.matches  =  data;
          console.log(data);
      });
  }
  }

 
