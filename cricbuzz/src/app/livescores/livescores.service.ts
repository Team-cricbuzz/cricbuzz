import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { LiveScores } from './livescores';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
  })
export class LiveScoresService{
    private url : string = 'http://localhost:2000/getscore';

    constructor(private http : HttpClient){

    }

    getAll()  {
       console.log("livescore")
       const headers = new Headers();
        return this.http.get<LiveScores[]>(this.url );
    
        }
}