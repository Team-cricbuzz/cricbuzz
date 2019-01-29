import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Imatches } from '../imatches';

@Injectable()
export class MatchService{
    private _url : string = "../assets/data/matches.json";

    constructor(private http : HttpClient){

    }

    getMatches() : Observable<Imatches[]>{
        return this.http.get<Imatches[]>(this._url);
        }
      
      
}