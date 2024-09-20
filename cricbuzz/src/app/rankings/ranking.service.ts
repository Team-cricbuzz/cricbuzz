import {Injectable} from '@angular/core'
import {IRankings} from '../irankings'
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class RankingService{
    private _url : string = "http://localhost:5000/rank";

    constructor(private http : HttpClient){

    }

    getRankings() : Observable<IRankings[]>{
        return this.http.get<IRankings[]>(this._url);
        }
      
      
}