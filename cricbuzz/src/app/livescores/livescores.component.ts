import { Component, OnInit } from '@angular/core';
import { LiveScores } from './livescores';
import  { LiveScoresService} from './livescores.service'

@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.css']
})
export class LivescoresComponent implements OnInit {

  public livescores : LiveScores[] ;
  response:any;

  constructor(private score:LiveScoresService) { }

  ngOnInit() {
    this.score.getAll().subscribe((response) =>{ 
      this.response=response;
      console.log(this.response)});
    console.log("livescore after")
  }

}
