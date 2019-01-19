import { Component, OnInit } from '@angular/core';
import { IMatches } from '../imatches';
import { MatchesService } from './matches.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  private  matches:object[];

  constructor(private httpService: HttpClient) { }
  ngOnInit() {
    this.httpService.get('https://cricapi.com/api/matches?apikey=SBXNkRA46WMvllmPx3FAqKibKQu2').subscribe(
      data => {
        this.matches = data as IMatches[];  // FILL THE ARRAY WITH DATA.
        console.log(this.matches);
         
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  }

 
  

 
