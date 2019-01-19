import { Component, OnInit } from '@angular/core';
import { IMatches } from '../imatches';
import { MatchesService } from './matches.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { match } from './match';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  private  matches:Array<IMatches>;

  constructor(private  http:  HttpClient) { }
  ngOnInit() {
    this.http.get<IMatches[]>('https://cricapi.com/api/matches?apikey=SBXNkRA46WMvllmPx3FAqKibKQu2').subscribe(data => {
      console.log(data);
      console.log("Bio: " + data);
    });
}
}
